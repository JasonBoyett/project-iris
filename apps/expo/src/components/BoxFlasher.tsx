import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { useInterval } from '../hooks/useInterval'
import { trpc } from '../utils/trpc'
import type { User } from '@acme/types'
import useBoxStore from '../stores/useBoxStore'
import { useEffect, useMemo, useRef, useState } from 'react'
import React from 'react'
import useUserStore from '../stores/userStore'
import { formatDate } from '@acme/helpers'
const Loading = () => {
  const [frame, setFrame] = useState(0)
  
  const getText = () => {
    switch (frame % 4) {
      case 0:
        return 'Loading'
      case 1:
        return 'Loading.'
      case 2:
        return 'Loading..'
      case 3:
        return 'Loading...'
    }
  }

  useInterval(() => {
    setFrame(frame + 1)
  }, 250)

  return (
    <View 
      className='flex flex-col items-center justify-center'
    >
      <Text
        className='text-6xl text-white'
      >
        {getText()}
      </Text>
    </View>
  )
}

type BoxProps = {
  words: string[] | undefined
  id: number
}
const Box = (props: BoxProps) => {
  const { words, id } = props
  const store = useBoxStore()
  const [visible, setVisible] = useState(store.current === id)

  const reRender = () => setVisible(id === store.current)

  const style = StyleSheet.create({
    text: {
      fontSize: 40,
      color: visible ? 'black' : 'white',
    },
    baseContainer: {
      padding: 2,
      height: 200,
      width: 400,
      maxWidth: 400,
      maxHeight: 200,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: visible ? 'black' : 'white',
      backgroundColor: 'white',
      felxDirectoin: 'column',
    },
    row: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
    },
    innerContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
    },
    innerContainer2: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    innerContainer3: {
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    innerContainer4: {
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
  })

  useEffect(() => reRender(), [store.current])

  if (!words) return <></>
  return (
    <View
      style={style.baseContainer}>
      <View style={style.row}>
        <View style={style.innerContainer}>
          <Text style={style.text}>{words[0]}</Text>
        </View>
        <View style={style.innerContainer2}>
          <Text style={style.text}>{words[1]}</Text>
        </View>
      </View>
      <View style={style.row}>
        <View style={style.innerContainer3}>
          <Text style={style.text}>{words[2]}</Text>
        </View>
        <View style={style.innerContainer4}>
          <Text style={style.text}>{words[3]}</Text>
        </View>
      </View>
    </View>
  )
}

type BoxFlasherProps = {
  user: User
  type: 2 | 3
  signal: VoidFunction
}

type BoxContainerProps = BoxFlasherProps
  & {
    words: string[] | undefined
  }
const BoxContainer = (props: BoxContainerProps) => {
  const { type, words, user, signal } = props
  const store = useBoxStore()
  const userStore = useUserStore()

  const { mutate } = trpc.user.set.useMutation()
  const { mutate: collectData } = trpc.collect.boxFlasherSession.useMutation()

  const count = useRef(0)
  const [group, setGroup] = useState(0)
  const [loading, setLoading] = useState(true)
  const boxData = useMemo(() => {
    if (!words) return null
    const displayedWords = Array<string[]>()
    for (let i = 0; i < type; i++) {
      const start = (count.current) + i
      displayedWords.push(words.slice(start, start + 4))
    }
    return displayedWords
  }, [group])

  const boxes = useMemo(() => {
    if (!boxData) return null
    const grid = Array<JSX.Element>()
    for (let i = 1; i <= type; i++) {
      grid.push(
        <View
          style={{ margin: 5 }}
          key={i}
        >
          <Box
            id={i}
            words={boxData[i - 1]}
          />
        </View>
      )
    }
    return grid
  }, [store])

  const teardown = () => {
    if (!userStore.user) return
    if (userStore.user.isStudySubject) {
      collectData({
        type: (() => {
          switch (type) {
            case 2:
              return 'two'
            case 3:
              return 'three'
            default:
              return 'two'
          }
        })(),
        userId: userStore.user.id,
        speed: userStore.user.currentWpm,
      })
    }
    switch (type) {
      case 2:
        mutate({ lastCubeByTwo: formatDate(new Date()) })
        if (!userStore.user) return
        userStore.setUser({
          ...userStore.user,
          lastCubeByTwo: formatDate(new Date()),
        })
        signal()
        break
      case 3:
        mutate({ lastCubeByThree: formatDate(new Date()) })
        if (!userStore.user) return
        userStore.setUser({
          ...userStore.user,
          lastCubeByThree: formatDate(new Date()),
        })
        signal()
        break
    }
    signal()
  }

  useInterval(() => {
    if ((user.currentWpm / 4) <= count.current) teardown()
    if (!words) return
    else setLoading(false)
    if (store.current < type) {
      store.increment()
    }
    else {
      store.reset()
      setGroup(group + 1)
      count.current += 4
    }
  }, 60_000 / (user.currentWpm / 4))

  useEffect(() => {
    if (!words) return
    userStore.setUser(user)
  }, [words])

  return (
    loading
      ? (<Loading />)
      : (<View
        style={{
          height: 210 * type,
          backgroundColor: 'white',
          borderRadius: 10,
        }}
      >
        {boxes}
      </View>)
  )

}

export const BoxFlasher = (props: BoxFlasherProps) => {
  const { data: words } = trpc.excercise.getRandomWords.useQuery({
    language: props.user.language,
    number: Math.floor(props.user.currentWpm / 4) * 4,
    max: 7
  })
  return (
    <View
      className='rounded-xl min-h-screen items-center justify-center'
    >
      <BoxContainer
        user={props.user}
        signal={props.signal}
        type={props.type}
        words={words}
      />
    </View>
  )
}
