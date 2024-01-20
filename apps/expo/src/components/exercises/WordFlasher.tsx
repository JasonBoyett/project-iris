import {
  Text,
  View,
  FlatList,
} from 'react-native'
import { FontProvider } from '../../cva/FontProvider'
import { trpc } from '../../utils/trpc'
import { useMemo, useState } from 'react'
import { useInterval } from '../../hooks/useInterval'
import { formatDate } from '@acme/helpers'
import type { FlasherType, User } from '@acme/types'
import useUserStore from '../../stores/userStore'

type CellProps = {
  content: string,
  current: number
  id: number,
  user: User,
}
const Cell = (props: CellProps) => {
  const {
    content,
    current,
    id,
    user,
  } = props

  const colors = {
    BLUE: 'bg-[#96adfc]',
    BLUE_GREY: 'bg-[#dbe1f1]',
    GREEN: 'bg-[#a8f29a]',
    GREY: 'bg-[#d8d3d6]',
    ORANGE: 'bg-[#eddd6e]',
    PEACH: 'bg-[#edd1b0]',
    PURPLE: 'bg-[#b987dc]',
    RED: 'bg-[#e0a6aa]',
    TURQUOISE: 'bg-[#a5f7e1]',
    YELLOW: 'bg-[#F8fd89]',
  }
  const flash = useMemo(() => current === id, [current])

  const classString = [
    'flex flex-col',
    'items-center',
    'justify-center',
    'mt-2 mb-2 ml-1 mr-1',
    'rounded-xl',
    `${
      flash 
        ? colors[user.highlightColor ?? 'GREY']
        : 'bg-white'
    }`
  ].join(' ')
  

  return (
    <FontProvider
      className={classString}
    >
      <Text
        className='text-3xl items-center justify-center m-1'
      >
        {content}
      </Text>
    </FontProvider>
  )
}

const formatType = (type: FlasherType) => {
  switch (type) {
    case 'oneByOne':
      return {
        perCell: 1,
        cols: 1,
      }
    case 'oneByTwo':
      return {
        perCell: 1,
        cols: 2,
      }
    case 'twoByTwo':
      return {
        perCell: 2,
        cols: 2,
      }
    case 'twoByOne':
      return {
        perCell: 2,
        cols: 1,
      }
    case 'fourByOne':
      return {
        perCell: 4,
        cols: 1,
      }
    default: {
      return {
        perCell: 1,
        cols: 1,
      }
    }
  }
}
const formatWords = (
  words: string[] | undefined,
  type: FlasherType,
  user: User
) => {
  if (!words) {
    return
  }
  const { perCell } = formatType(type)
  const result: string[] = []
  for (let i = 0; i < user.currentWpm; i += perCell) {
    result.push(words.slice(i, i + perCell).join(' '))
  }
  return result
}

type WordFlasherProps = {
  type: FlasherType
  user: User,
  signal: VoidFunction,
  rows: number,
}
export const WordFlasher = (props: WordFlasherProps) => {
  const {
    type,
    user,
    signal,
    rows,
  } = props
  const [section, setSection] = useState(0)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const { perCell, cols, } = formatType(type)
  const { data: words, isLoading } = trpc.excercise.getRandomWords.useQuery({
    max: 6,
    language: user.language,
    number: user.currentWpm,
  })
  const { mutate: setUserData } = trpc.user.set.useMutation()
  const { mutate: setExerciseData } = trpc.collect.highlightSession.useMutation()
  const store = useUserStore()
  const cellData = useMemo(() => {
    const result: Omit<CellProps, 'current'>[] = []
    const perChunk = rows * cols
    const chunk = formatWords(
      words,
      type,
      user
    )?.slice(section * perChunk, (section + 1) * perChunk)
    if (!chunk) {
      return
    }
    for (let i = 0; i < chunk.length; i++) {
      result.push({
        content: chunk[i] ?? '',
        id: i,
        user,
      })
    }
    return result
  }, [section, words])

  const teardown = () => {
    switch (type) {
      case 'oneByOne': {
        setUserData({
          lastOneByOne: formatDate()
        })
        store.setUser({
          ...user,
          lastOneByOne: formatDate()
        })
        break
      }
      case 'oneByTwo': {
        setUserData({
          lastOneByTwo: formatDate()
        })
        store.setUser({
          ...user,
          lastOneByTwo: formatDate()
        })
        break
      }
      case 'twoByOne': {
        setUserData({
          lastTwoByOne: formatDate()
        })
        store.setUser({
          ...user,
          lastTwoByOne: formatDate()
        })
        break
      }
      case 'twoByTwo': {
        setUserData({
          lastTwoByTwo: formatDate()
        })
        store.setUser({
          ...user,
          lastTwoByTwo: formatDate()
        })
      }
      case 'fourByOne': {
        setUserData({
          lastFourByOne: formatDate()
        })
        store.setUser({
          ...user,
          lastFourByOne: formatDate()
        })
      }
    }
    setExerciseData({
      userId: user.id,
      platform: 'mobile',
      type: type,
      speed: user.currentWpm,
    })
    signal()
  }

  const MyList = FlatList<Omit<CellProps, 'current'>>
  const Grid = () => (
    <View
      className='flex bg-white h-96 pb-4 pt-4 rounded-xl items-center justify-center'
      style={{
        minWidth: '95%',
      }}
    >
      <MyList
        key={count}
        numColumns={cols}
        data={cellData}
        renderItem={({ item }) => (
          <Cell
            content={item.content}
            current={count}
            id={item.id}
            user={item.user}
          />
        )}
      />
    </View>
  )

  useInterval(() => {
    if (isLoading) return
    if (total > (user.currentWpm/perCell)) {
      teardown()
      return
    }
    if (count === cols * rows) {
      setSection(prev => prev + 1)
      setCount(() => 0)
      setTotal(prev => prev + 1)
      return
    }
    setCount(prev => prev + 1)
    setTotal(prev => prev + 1)
  }, 60_000 / (user.currentWpm / perCell))

  return (
    <View
      className='flex min-h-screen items-center justify-center'
    >
      <View
        className='flex flex-col items-center justify-center min-w-full'
      >
        {
          !!isLoading
            ? <Text
              className='text-6xl text-white p-4'
            >Loading...</Text>
            : <Grid />
        }
      </View>
    </View>
  )

}

