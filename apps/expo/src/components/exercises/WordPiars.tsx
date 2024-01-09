import {
  Text,
  View,
  FlatList,
  StyleSheet,
} from 'react-native'
import { FontButton } from '../../cva/FontProvider'
import { trpc } from '../../utils/trpc'
import { useStopWatch } from '../../hooks/useStopWatch'
import { useEffect, useMemo, useState } from 'react'
import { formatDate } from '@acme/helpers'
import type { User, WordPair } from '@acme/types'
import useUserStore from '../../stores/userStore'

type CellProps = {
  content: string | WordPair,
  setter: React.Dispatch<React.SetStateAction<number>>,
  errorSetter: React.Dispatch<React.SetStateAction<number>>,
  user: User,
}
const Cell = (props: CellProps) => {
  const {
    setter,
    errorSetter,
    content,
    user,
  } = props
  const [clicked, setClicked] = useState(false)
  const { wordOne, wordTwo } = (() => {
    if (typeof content === 'string') {
      return {
        wordOne: content,
        wordTwo: content,
      }
    }
    else {
      return {
        wordOne: content?.primaryWord ?? '',
        wordTwo: content?.secondaryWord ?? '',
      }
    }
  })()
  const isDifferent = wordOne !== wordTwo

  const press = () => {
    if (isDifferent && !clicked) {
      setClicked(true)
      setter(prev => prev + 1)
    }
    else if (!isDifferent && !clicked) {
      setClicked(true)
      errorSetter(prev => prev + 1)
    }
  }

  const InnerText = () => {
    const style = StyleSheet.create({
      container: {
        margin: 2,
      },
      text: {
        color: clicked
          ? isDifferent ? 'green' : 'red'
          : 'white',
      }
    })
    return (
      <View
        className='flex w-32 h-20 rounded-md items-center justify-center bg-white/20'
        style={style.container}
      >
        <Text
          className='text-white text-3xl'
          style={style.text}
        >
          {wordOne}
        </Text>
        <Text
          className='text-white text-3xl'
          style={style.text}
        >
          {wordTwo}
        </Text>
      </View>
    )
  }

  return (
    <FontButton
      font={user.font ?? 'sans'}
      onPress={press}
    >
      <InnerText />
    </FontButton>
  )
}

type TableProps = {
  user: User,
  signal: VoidFunction,
}
const Table = (props: TableProps) => {
  const { user, signal } = props
  const CELL_COUNT = 18
  const PAIR_COUNT = 5
  const COLS = 3
  const store = useUserStore()
  const [count, setCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const timer = useStopWatch()
  const { mutate: collect } = trpc.collect.wordPairSession.useMutation()
  const { mutate } = trpc.user.set.useMutation()
  const pairs = trpc.excercise.getWordPairs.useQuery({
    language: 'english',
    count: 5,
  })
  const words = trpc.excercise.getRandomWords.useQuery({
    language: 'english',
    max: 7,
    number: CELL_COUNT - PAIR_COUNT,
  })

  const tableContent = useMemo(() => {
    if (!pairs.data) return []
    if (!words.data) return []
    timer.start() //start timer once the data is loaded
    const content = Array<{ content: string | WordPair }>()
    pairs.data.forEach((pair) => {
      content.push({ content: pair })
    })
    words.data.forEach((word) => {
      content.push({ content: word })
    })

    return content.sort(() => Math.random() - 0.5)
  }, [pairs.data, words.data])

  const teardown = () => {
    timer.end()
    mutate({ lastWordPairs: formatDate(new Date()) })
    store.setUser({ ...user, lastWordPairs: formatDate(new Date()) })
    collect({
      userId: user.id,
      time: timer.getDuration(),
      errorCount,
    })
    signal()
  }

  useEffect(() => {
    if (count >= PAIR_COUNT) {
      teardown()
    }
  }, [count])

  const MyList = FlatList<{ content: string | WordPair }>
  return (
    <View
      style={{
        marginTop: 150,
      }}
    >

      {(!!pairs.data && !!words.data)
        ? <MyList
          data={tableContent}
          key={tableContent.length}
          numColumns={COLS}
          renderItem={({ item }) => (
            <Cell
              content={item.content}
              setter={setCount}
              errorSetter={setErrorCount}
              user={user}
            />
          )}
        />
        : <Text
          style={{ marginTop: 250 }}
          className='text-white text-6xl'
        >
          Loading...
        </Text>
      }
    </View>
  )
}

type Props = {
  user: User,
  signal: VoidFunction,
}
export const WordPairs = (props: Props) => {
  const { user, signal } = props
  return (
    <View>
      <Table
        user={user}
        signal={signal}
      />
    </View>
  )
}
