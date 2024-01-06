import type { User } from '@acme/types'
import {
  useEffect,
  useMemo,
  useState,
} from 'react'
import { View, Text } from 'react-native'
import { trpc } from '../../utils/trpc'
import { FontButton } from '../../cva/FontProvider'
import React from 'react'
import { formatDate } from '@acme/helpers'
import useUserStore from '../../stores/userStore'


type CellProps = {
  content: number,
  user: User,
  press: VoidFunction
}
const Cell = ({ content, user, press }: CellProps) => {
  return (
    <FontButton
      font={user.font ?? 'sans'}
      onPress={press}
      className='flex h-12 w-12 items-center justify-center rounded-md bg-white/20 text-lg text-white md:h-20 md:w-20 md:text-2xl'
    >
      <Text className='text-white text-2xl'>
        {content}
      </Text>
    </FontButton>
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
  const store = useUserStore()
  const length = getSideLength(sideLength)
  const [counter, setCount] = useState(0)
  const [errors, setErrors] = useState(0)

  const teardown = () => {
    mutate({
      lastSchulte: formatDate()
    })
    store.setUser({
      ...user,
      lastSchulte: formatDate()
    })
    signal()
  }
  const grid = (() => {
    const result = numbers.map((number, _) =>
    (
      <View>

      <Cell
        key={number}
        content={number}
        user={user}
        press={
          () => {
            if (number === counter + 1) {
              setCount(counter + 1)
              countSetter(counter + 1)
            } else {
              setErrors(errors + 1)
            }
          }
        }
      />
        </View>
      )
    )
    return result 
  })()

  useEffect(() => {
    if (counter === (length ** 2)) {
      teardown()
      signal()
    }
  }, [counter])

  return <View className='grid grid-cols-3'>{grid}</View>

}


type SchulteTableProps = Pick<TableProps, 'user' | 'signal'>
export const SchulteTable = (props: SchulteTableProps) => {
  const { user, signal } = props
  // const [level, setLevel] = useState<Level>(user.schulteLevel ?? 'three')
  const [level, setLevel] = useState<Level>('three')
  const [counter, setCount] = useState(0)
  const numbers = useMemo(() => Array
    .from({ length: getSideLength(level) ** 2 }, (_, i) => i + 1)
    .sort(() => Math.random() - 0.5),
    [level])

  return (
    <View className='min-w-full min-h-screen items-center justify-center'>
      <View className='min-w-full items-center justify-center gap-5'>
        <Table
          numbers={numbers}
          sideLength={'three'}
          user={user}
          signal={signal}
          countSetter={setCount}
        />
        <Text className='text-white text-5xl'>
          Find: <Text className='text-yellow-200'>{counter + 1}</Text>
        </Text>
      </View>
    </View>
  )
}
