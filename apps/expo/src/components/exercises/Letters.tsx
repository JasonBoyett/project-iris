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
import { FontButton, FontProvider } from '../../cva/FontProvider'
import * as taskManager from 'expo-task-manager'
import * as backgroundFetch from 'expo-background-fetch'

type CellProps = {
  content: string
  highlight: boolean
  user: User
  isCenter?: boolean
}
const Cell = (props: CellProps) => {
  const { content, 
    highlight, 
    user, 
    isCenter
  } = props

  return (
    <FontButton
      font={user.font ?? 'sans'}
      className="h-14 w-14"
    >
      <Text
        className={
          !!isCenter 
          ? 'text-6xl text-center text-green-500'
          :(highlight
            ? 'text-6xl text-center text-yellow-400'
            : 'text-6xl text-center text-white')
        }
      >{content}</Text>
    </FontButton>
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
export const LetterMatcher = (props: LetterMatcherProps) => {
  const {
    user,
    size,
    signal,
  } = props

  const [showMessage, setShowMessage] = useState<boolean>(false)
  const correctCount = useRef<number>(0)
  const incorrectCount = useRef<number>(0)
  const [started, setStarted] = useState<boolean>(false)
  const [top, setTop] = useState<string>('●')
  const letters = useMemo( () => Array.from({ length: size * size }, () => getLetter()), [size])
  const [bottom, setBottom] = useState<string>('●')
  const [left, setLeft] = useState<string>('●')
  const [right, setRight] = useState<string>('●')
  const [isShowing, setShowing] = useState<boolean>(false)
  const matching = useRef<boolean>(Math.random() < 0.5)
  type Data = {
    content: string
    highlight: boolean
    user: User
    position: number
    isCenter?: boolean
  }
  const gridData = useMemo(() => {
    const grid = Array<Data>()
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
          grid.push({
            content: '⊚',
            isCenter: true,
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === 0 && j === Math.floor(size / 2)) {
          grid.push({
            content: (() => {
              if (isShowing) {
                return top
              }
              return '●'
            })(),
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === size - 1 && j === Math.floor(size / 2)) {
          grid.push({
            content: (() => {
              if (isShowing) {
                return bottom
              }
              return '●'
            })(),
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === Math.floor(size / 2) && j === 0) {
          grid.push({
            content: (() => {
              if (isShowing) {
                return left
              }
              return '●'
            })(),
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else if (i === Math.floor(size / 2) && j === size - 1) {
          grid.push({
            content: (() => {
              if (isShowing) {
                return right
              }
              return '●'
            })(),
            highlight: true,
            user: user,
            position: i * size + j,
          })
        } else {
          grid.push({
            content: (() => {
              if (isShowing) {
                return letters[i * size + j] ?? '●'
              }
              return '●'
            })(),
            highlight: false,
            user: user,
            position: i * size + j,
          })
        }

      }
    }
    console.log(grid)
    return grid
  }, [isShowing])

  const reset = () => {
    setShowing(() => false)
    setTop(() => '●')
    setBottom(() => '●')
    setLeft(() => '●')
    setRight(() => '●')
  }

  const gameLoop = () => {
    matching.current = Math.random() < 0.5
    if (matching.current) {
      const letter = getLetter()
      setTop(() => letter)
      setBottom(() => letter)
      setLeft(() => letter)
      setRight(() => letter)
    } else {
      setTop(() => getLetter())
      setBottom(() => getLetter())
      setLeft(() => getLetter())
      setRight(() => getLetter())
    }
    console.log(top, bottom, left, right)
    setShowing(() => true)
    setTimeout(() => reset(), 500)
  }

  const match = () => {
    setShowMessage(() => false)
    return top === bottom && bottom === left && left === right
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
              content={item.content}
              highlight={item.highlight}
              user={item.user}
              isCenter={item.isCenter ?? false}
            />
          )}
        />
      </View>
    )
  }

  useEffect(() => {
    if (started) {
      setTimeout(() => {
        signal()
      }, 60_000)
    }
  }, [started])

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
          onPress={() => {
            if (match()) {
              correctCount.current++
            }
            else {
              incorrectCount.current++
            }
            setStarted(() => true)
            gameLoop()
          }}
        >
          <Text className="text-4xl text-center text-white">
            ✓
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (!match()) {
              correctCount.current++
            }
            else {
              incorrectCount.current++
            }
            setStarted(() => true)
            gameLoop()
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
