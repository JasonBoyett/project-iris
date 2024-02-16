import {
  View,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native'
import { FontButton } from '../../cva/FontProvider'
import { trpc } from '../../utils/trpc'
import { useStopWatch } from '../../hooks/useStopWatch'
import { useEffect, useMemo, useState } from 'react'
import type { User } from '@acme/types'
import useUserStore from '../../stores/userStore'
import { formatDate } from '@acme/helpers'
import Instructions from '../instructions/EvenNumbers'

const generateNumber = (maxFigures: number, isEven: boolean) => {
  let result = ''
  for (let i = 0; i < maxFigures - 1; i++) {
    result += Math.floor(Math.random() * 10).toString()
  }
  if (isEven) {
    result += (Math.floor(Math.random() * 5) * 2).toString()
  }
  else {
    result += (Math.floor(Math.random() * 5) * 2 + 1).toString()
  }
  return result
}

type CellProps = {
  user: User,
  figures: number,
  count: number,
  isEven: boolean,
  setter: React.Dispatch<React.SetStateAction<number>>,
  errorSetter: React.Dispatch<React.SetStateAction<number>>,
}
const Cell = (props: CellProps) => {
  const {
    user,
    figures,
    count,
    isEven,
    setter,
    errorSetter,
  } = props

  const [clicked, setClicked] = useState(false)
  const content = useMemo(() => generateNumber(figures, isEven), [])

  const styles = StyleSheet.create({
    container: {
      margin: 2,
    },
    text: {
      color: isEven 
        ? clicked ? 'green' : 'white' 
        : clicked ? 'red' : 'white',
      fontSize: 20,
    }
  })

  return (
    <>
      <FontButton
        font={user.font ?? 'sans'}
        style={styles.container}
        className={[
          'flex h-14 w-20 items-center justify-center',
          'rounded-md text-lg text-white',
          'md:h-20 md:w-20 md:text-2xl p-2',
          `${clicked ? 'bg-white/10' : 'bg-white/20'}`
        ].join(' ')}
        onPress={() => {
          if (isEven && !clicked) {
            setter(count + 1)
            setClicked(true)
          }
          else if (!isEven && !clicked) {
            errorSetter(count + 1)
            setClicked(true)
          }
        }}
      >
        <Text
          style={styles.text}
        >
          {content}
        </Text>
      </FontButton>
    </>
  )
}

type TableProps = {
  user: User,
  signal: VoidFunction,
}
const Table = (props: TableProps) => {
  const {
    user,
    signal,
  } = props

  const [count, setCount] = useState(0)
  const [errors, setErrors] = useState(0)
  const { mutate } = trpc.user.set.useMutation()
  const track = trpc.collect.evenNumberSession.useMutation().mutate
  const store = useUserStore()
  const timer = useStopWatch()
  const EVENS = 6
  const TOTAL_CELLS = 40

  const tableData = useMemo(() => {
    const data = []
    for (let i = 0; i <= EVENS; i++) {
      data.push({ key: i, figures: 5, isEven: true })
    }
    for (let i = EVENS; i < TOTAL_CELLS - 1; i++) {
      data.push({ key: i, figures: 5, isEven: false })
    }
    return data.sort(() => Math.random() - 0.5)
  }, [])

  const teardown = () => {
    timer.end()
    mutate({ lastEvenNumbers: formatDate(new Date()) })
    store.setUser({ ...user, lastEvenNumbers: formatDate(new Date()) })
    track({
      userId: user.id,
      time: timer.getDuration(),
      errorCount: errors,
      platform: 'mobile',
    })
    signal()
  }
  
  useEffect(() => {
    timer.start()
  }, [])

  useEffect(() => {
    if (count === EVENS) teardown()
  }, [count])
  
  return (
    <View>
      <FlatList
        data={tableData}
        style={{ 
          marginTop: 180 
        }}
        numColumns={5}
        renderItem={({ item }) => (
          <Cell
            user={user}
            figures={item.figures}
            count={count}
            isEven={item.isEven}
            setter={setCount}
            errorSetter={setErrors}
          />
        )}
      />
    </View>
  )
}

type ExcerciseProps = TableProps
const Exercise = (props: ExcerciseProps) => {
  const {
    user,
    signal,
  } = props

  return (
    <View className='items-center justify-center'>
      <Table user={user} signal={signal} />
    </View>
  )
}

export const EvenNumbers = (props: ExcerciseProps) => {
  const [instructions, setInstructions] = useState(true)

  return (
        instructions
          ? <Instructions user={props.user} callback={() => setInstructions(false)} />
          : <Exercise {...props} />
  )
}
