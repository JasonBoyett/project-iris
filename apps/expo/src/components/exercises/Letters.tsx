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
import { useInterval } from '../../hooks/useInterval'
import { User } from '@acme/types'
import { FontProvider } from '../../cva/FontProvider'

type CellProps = {
  content: string
  highlight: boolean
  user: User
}
const Cell = (props: CellProps) => {
  const { content, highlight, user } = props
  return (
    <FontProvider
      font={user.font ?? 'sans'}
    >
      <Text
        className={
          highlight
            ? 'text-4xl text-center text-white bg-yellow-400'
            : 'text-4xl text-center text-black bg-white'
        }
      >{content}</Text>
    </FontProvider>
  )
}

const getLetter = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  return letters[Math.floor(Math.random() * letters.length)] as string
}

const LetterMatcher = (props: { user: User, size: number }) => {
  const { user, size } = props

  const [showMessage, setShowMessage] = useState<boolean>(false)
  const correctCount = useRef<number>(0)
  const incorrectCount = useRef<number>(0)
  const [top, setTop] = useState<string>('●')
  const [bottom, setBottom] = useState<string>('●')
  const [left, setLeft] = useState<string>('●')
  const [right, setRight] = useState<string>('●')
  const [isShowing, setShowing] = useState<boolean>(false)
  const matching = useRef<boolean>(Math.random() < 0.5)
  type Data = {
    content: string
    highlight: boolean
    user: User
  }
  const gridData = useMemo(() => {
    const grid = Array<Data>()
    for (let i = 0; i < size; i++) {
      const row = []
      for (let j = 0; j < size; j++) {
        if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
          row.push({
            content: '⊚',
            highlight: true,
            user: user,
          })
        } else if (i === 0 && j === Math.floor(size / 2)) {
          row.push({
            content: top,
            highlight: true,
            user: user,
          })
        } else if (i === size - 1 && j === Math.floor(size / 2)) {
          row.push({
            content: bottom,
            highlight: true,
            user: user,
          })
        } else if (i === Math.floor(size / 2) && j === 0) {
          row.push({
            content: left,
            highlight: true,
            user: user,
          })
        } else if (i === Math.floor(size / 2) && j === size - 1) {
          row.push({
            content: right,
            highlight: true,
            user: user,
          })
        } else {
          row.push({
            content: '●',
            highlight: false,
            user: user,
          })
        }

      }
    }
    return grid
  }, [isShowing])

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
    setTimeout(() => setShowing(() => false), 500)
  }

  const match = () => {
    setShowMessage(() => false)
    return top === bottom && bottom === left && left === right
  }

  const Grid = () => {
    const MyList = FlatList<Data>
    return (
      <View>
        <MyList
          data={gridData}
          key={gridData.length}
          renderItem={({ item }) => (
            <Cell
              content={item.content}
              highlight={item.highlight}
              user={item.user}
            />
          )}
        />
      </View>
    )
  }
 
  return (
    <View>
      <View>
        <Text className="text-4xl text-center text-black bg-white">
          Press a button to start
        </Text>
      </View>
      <Grid />
      <View>
        <TouchableOpacity
          onPress={() => {
            if (match()) {
              correctCount.current++
            } 
            else {
              incorrectCount.current++
            }

            gameLoop()
          }}
        >
          ✓
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (!match()) {
              correctCount.current++
            }
            else {
              incorrectCount.current++
            }
            gameLoop()
          }}
        >
          ⛔
        </TouchableOpacity>
      </View>
    </View>
  )
}
