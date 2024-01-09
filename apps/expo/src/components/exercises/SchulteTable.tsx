import type { User } from '@acme/types'
import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { trpc } from '../../utils/trpc'
import { FontButton } from '../../cva/FontProvider'
import React from 'react'
import { formatDate } from '@acme/helpers'
import useUserStore from '../../stores/userStore'
import { useStopWatch } from '../../hooks/useStopWatch'


type CellProps = {
  content: number,
  user: User,
  press: VoidFunction
}
const Cell = ({ content, user, press }: CellProps) => {
  return (
    <View
      className='flex items-center justify-center'
      style={{
        width: 60,
        height: 60,
      }}
    >

      <FontButton
        font={user.font ?? 'sans'}
        onPress={press}
        className='flex h-14 w-14 items-center justify-center rounded-md bg-white/20 text-lg text-white md:h-20 md:w-20 md:text-2xl p-2'
      >
        <Text className='text-white text-3xl'>
          {content}
        </Text>
      </FontButton>
    </View>
  )
}

type Level = 'three' | 'five' | 'seven'

const getSideLength = (sideLength: Level) => {
  switch (sideLength) {
    case 'three':
      return 3
    case 'five':
      return 5
    case 'seven':
      return 7
  }
}

type TableProps = {
  numbers: number[],
  sideLength: Level,
  user: User,
  signal: VoidFunction
  countSetter: React.Dispatch<React.SetStateAction<number>>
}
const Table = (props: TableProps) => {
  const {
    numbers,
    sideLength,
    user,
    signal,
    countSetter,
  } = props

  const { mutate } = trpc.user.set.useMutation()
  const track = trpc.collect.schulteSession.useMutation().mutate
  const store = useUserStore()
  const length = getSideLength(sideLength)
  const [counter, setCount] = useState(0)
  const [errors, setErrors] = useState(0)
  const timer = useStopWatch()

  const advance = (user: User) => {
    if (!user) return
    if (user.schulteLevel === 'three') {
      mutate({ ...user, schulteLevel: 'five', schulteAdvanceCount: 0 })
    } else if (user.schulteLevel === 'five') {
      mutate({ ...user, schulteLevel: 'seven', schulteAdvanceCount: 0 })
    } else if (user.schulteLevel === 'seven') {
      mutate({ ...user, schulteAdvanceCount: 0 })
    }
  }

  const determineAdvancement = (user: User) => {
    if (!user) return
    const cellCount = length ** 2
    const goodSessions = user.schulteAdvanceCount

    if (user.schulteLevel !== sideLength) return
    if (cellCount / (cellCount - errors) >= 0.9) {
      if (goodSessions >= 26) {
        advance(user)
      } else {
        mutate({ ...user, schulteAdvanceCount: goodSessions + 1 })
      }
    }
  }

  const teardown = () => {
    timer.end()
    mutate({
      lastSchulte: formatDate()
    })
    store.setUser({
      ...user,
      lastSchulte: formatDate()
    })
    track({
      userId: user.id,
      errorCount: errors,
      time: timer.getDuration(),
      type: sideLength,
    })
    determineAdvancement(user)
    signal()
  }

  const getPadding = (level: Level) => {
    switch (level) {
      case 'three':
        return 140
      case 'five':
        return 90
      case 'seven':
        return 25
    }
  }

  const grid = numbers.map((number, i) => {
    return {
      key: i.toString(),
      user: user,
      content: number,
      press: () => {
        if (number === counter + 1) {
          setCount(counter + 1)
          countSetter(counter + 1)
        } else {
          setErrors(errors + 1)
        }
      }
    }
  })

  useEffect(() => {
    if (counter === (length ** 2)) {
      teardown()
      signal()
    }
  }, [counter])

  useEffect(() => {
    timer.start()
  }, [])

  useEffect(() => {
    setCount(0)
    setErrors(0)
    countSetter(0)
    timer.reset()
  }, [length])

  return (
    <SafeAreaView className='flex-row flex-wrap min-w-full items-center justify-center'>
      <FlatList
        style={{
          paddingLeft: getPadding(sideLength),
        }}
        key={length}
        numColumns={length}
        data={grid}
        renderItem={({ item }) => (
          <View
          >
            <Cell
              content={item.content}
              press={item.press}
              user={item.user}
            />
          </View>
        )}
      />
    </SafeAreaView>
  )
}

type TableSwitcherProps = {
  user: User,
  setter: React.Dispatch<React.SetStateAction<Level>>
}
const TableSwitcher = (props: TableSwitcherProps) => {
  const { user, setter } = props

  return (
    <View className='absolute flex-row top-3 right-2 gap-1'>
      {user.schulteLevel === 'five' || user.schulteLevel === 'seven'
        ?
        <>
          <FontButton
            font={user.font ?? 'sans'}
            style={{
              marginHorizontal: 5,
            }}
            onPress={() => setter('three')}
            className='flex items-center justify-center rounded-md bg-white/20 text-lg text-white md:h-20 md:w-20 md:text-2xl p-2'
          >
            <Text className='text-white text-3xl'>
              Easy
            </Text>
          </FontButton>
          <FontButton
            font={user.font ?? 'sans'}
            style={{
              marginHorizontal: 5,
            }}
            onPress={() => setter('five')}
            className='flex items-center justify-center rounded-md bg-white/20 text-lg text-white md:h-20 md:w-20 md:text-2xl p-2'
          >
            <Text className='text-white text-3xl'>
              Medium
            </Text>
          </FontButton>
        </>
        : <></>
      }
      {user.schulteLevel === 'seven'
        ?
        <>
          <FontButton
            font={user.font ?? 'sans'}
            style={{
              marginHorizontal: 5,
            }}
            onPress={() => setter('seven')}
            className='flex items-center justify-center rounded-md bg-white/20 text-lg text-white md:h-20 md:w-20 md:text-2xl p-2'
          >
            <Text className='text-white text-3xl'>
              Hard
            </Text>
          </FontButton>
        </>
        : <></>
      }

    </View>
  )
}


type SchulteTableProps = Pick<TableProps, 'user' | 'signal'>
export const SchulteTable = (props: SchulteTableProps) => {
  const { user, signal } = props
  const [level, setLevel] = useState<Level>(user.schulteLevel ?? 'three')
  const [counter, setCount] = useState(0)
  const numbers = useMemo(() => Array
    .from({ length: getSideLength(level) ** 2 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5),
    [level])

  return (
    <SafeAreaView className='min-w-full min-h-screen items-center justify-center'>
      <TableSwitcher user={user} setter={setLevel} />
      <View className='min-w-full items-center justify-center gap-5'>
        <Table
          numbers={numbers}
          sideLength={level}
          user={user}
          signal={signal}
          countSetter={setCount}
        />
        <Text className='text-white text-5xl'>
          Find: <Text className='text-yellow-200'>{counter + 1}</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
