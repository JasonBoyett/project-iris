import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import type { User } from '@acme/types'
import { FontButton } from '../../cva/FontProvider'
import { trpc } from '../../utils/trpc'
import useUserStore from '../../stores/userStore'
import { formatDate } from '@acme/helpers'
import Instructions from '../instructions/LetterMatch'

type CellProps = {
  letter?: string
  highlight: boolean
  user: User
  showing: boolean
  isCenter?: boolean
}
const Cell = (props: CellProps) => {
  const { letter,
    highlight,
    user,
    showing,
    isCenter
  } = props

  const getContent = () => {
    if (!letter) return getLetter()
    if (isCenter) return '⊚'
    if (highlight) return letter
  }

  return (
    <TouchableOpacity
      className="h-14 w-14"
    >
      <Text
        className={
          !!isCenter
            ? 'text-6xl text-center text-green-500'
            : (highlight
              ? 'text-6xl text-center text-yellow-400'
              : 'text-6xl text-center text-white')
        }
      >{
          showing
            ? getContent()
            : '●'
        }</Text>
    </TouchableOpacity>
  )
}

const getLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  return letters[Math.floor(Math.random() * letters.length)] as string
}

type LetterMatcherProps = {
  user: User
  size: number
  signal: VoidFunction
}
export const Exercise = (props: LetterMatcherProps) => {
  const {
    user,
    size,
    signal,
  } = props

  const { mutate } = trpc.user.set.useMutation()
  const store = useUserStore()
  const { mutate: collectData } = trpc.collect.letterMatcherSession.useMutation()

  const correctCount = useRef<number>(0)
  const matching = useRef<boolean>(Math.random() < 0.5)
  const incorrectCount = useRef<number>(0)
  const [started, setStarted] = useState<boolean>(false)
  const [letter, setLetter] = useState(matching.current ? '●' : undefined)
  const [isShowing, setShowing] = useState<boolean>(false)
  type Data = {
    letter?: string
    highlight: boolean
    user: User
    position: number
    showing: boolean
    isCenter?: boolean
  }
  const gridData = (() => {
    const grid = Array<Data>()
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
          grid.push({
            letter: '⊚',
            showing: true,
            isCenter: true,
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === 0 && j === Math.floor(size / 2)) {
          grid.push({
            letter: letter,
            showing: isShowing,
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === size - 1 && j === Math.floor(size / 2)) {
          grid.push({
            letter: letter,
            showing: isShowing,
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === Math.floor(size / 2) && j === 0) {
          grid.push({
            letter: letter,
            showing: isShowing,
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === Math.floor(size / 2) && j === size - 1) {
          grid.push({
            letter: letter,
            showing: isShowing,
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else {
          grid.push({
            letter: undefined,
            showing: isShowing,
            highlight: false,
            user: user,
            position: i * size + j,
          })
        }

      }
    }
    return grid
  })()

  const gameLoop = () => {
    if (matching.current) {
      const newLetter = getLetter()
      setLetter(() => newLetter)
    } else {
      setLetter(() => undefined)
    }
    setShowing(() => true)
    setTimeout(() => {
      setShowing(() => false)
      setLetter(() => '●')
    }, 500)
    matching.current = Math.random() < 0.5
  }

  const match = () => {
    setStarted(() => true)
    return !!letter
  }


  const Grid = () => {
    const MyList = FlatList<Data>
    return (
      <View
        className="border-white border-2 rounded-lg items-center justify-center"
      >
        <MyList
          data={gridData}
          key={gridData.length}
          numColumns={size}
          renderItem={({ item }) => (
            <Cell
              letter={item.letter}
              highlight={item.highlight}
              user={item.user}
              isCenter={item.isCenter ?? false}
              showing={item.showing}
            />
          )}
        />
      </View>
    )
  }

  const teardown = () => {
    mutate({ lastLetterMatcher: formatDate() })
    store.setUser({
      ...user,
      lastLetterMatcher: formatDate(),
    })
    collectData({
      userId: user.id,
      numberCorrect: correctCount.current,
      numberWrong: incorrectCount.current,
      platform: 'mobile'
    })
    user.lastLetterMatcher = formatDate()
  }

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        teardown()
        signal()
      }, 60_000)
    }
  }, [started])

  useEffect(() => {
    console.log('isShowing: ', isShowing)
  }, [isShowing])

  return (
    <View className="mt-28">
      <View>
        <Text className="text-4xl text-center text-white ">
          {
            !started
              ? 'Press a button to start'
              : 'Game started'
          }
        </Text>
      </View>
      <Grid />
      <View className='flex-row items-center justify-center'>
        <TouchableOpacity
          className='m-4 w-44 h-16 bg-white/20 rounded-lg items-center justify-center'
          onPress={() => {
            setStarted(() => true)
            if (match() && !isShowing) {
              correctCount.current++
            }
            else if (!match() && !isShowing) {
              incorrectCount.current++
            }
            if (!isShowing) gameLoop()
          }}
        >
          <Text className="text-4xl text-center text-white">
            ✓
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='m-4 w-44 h-16 bg-white/20 rounded-lg items-center justify-center'
          onPress={() => {
            setStarted(() => true)
            if (!match() && !isShowing) {
              correctCount.current++
            }
            else if (match() && !isShowing) {
              incorrectCount.current++
            }
            if (!isShowing) gameLoop()
          }}
        >
          <Text className="text-4xl text-center">
            ⛔
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export const LetterMatcher = (props: LetterMatcherProps) => {
  const [instructions, setInstructions] = useState(true)

  return (
        instructions
          ? <Instructions user={props.user} callback={() => setInstructions(false)} />
          : <Exercise {...props} />
  )
}
