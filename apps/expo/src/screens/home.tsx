import React, { useEffect, useLayoutEffect, useState } from 'react'
import type { StackNavigation } from '../_app'
import { FontAwesome5 } from '@expo/vector-icons'
import type { Exercise, User } from '@acme/types'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useAuth } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context'
import { trpc } from '../utils/trpc'
import { getAvailableExercises, isAlreadyDone } from '@acme/helpers'
import { useNavigation, type ParamListBase } from '@react-navigation/native'
import useUserStore from '../stores/userStore'
import { type DrawerNavigationProp } from '@react-navigation/drawer'

const buttonStyle = [
  'text-white md:text-3xl',
  'items-center justify-center',
  'bg-white/10 rounded-full md:p-4',
  'p-2 h-16',
  'w-1/2',
  'text-white',
  'hover:bg-white/20',
].join(' ')

type ExerciseViewProps = {
  text: string
  exercise: Exercise
  user: User | undefined
}


const ExerciseView = ({ user, text, exercise }: ExerciseViewProps) => {

  if (!user) return <></>
  const done = isAlreadyDone(user as User, exercise) ?? false
  return (
    <View className='p-2'>
      <Text className='text-white text-2xl text-center'>
        {
          `${text} ${done ? ' ✓' : ''}`
        }
      </Text>
    </View>
  )
}

const ExerciseList = ({ user }: { user: User }) => {
  return (
    <View className='grid grid-cols-1 gap-2' >
      <Text className='text-white text-5xl text-center'>
        Daily Exercises:
      </Text>
      <ExerciseView
        text='2 Moving Cubes'
        exercise='cubeByTwo'
        user={user}
      />
      <ExerciseView
        text='3 Moving Cubes'
        exercise='cubeByThree'
        user={user}
      />
      <ExerciseView
        text='4 by 1 Highlighter'
        exercise='fourByOne'
        user={user}
      />
      <ExerciseView
        text='1 by 1 Highlighter'
        exercise='oneByOne'
        user={user}
      />
      <ExerciseView
        text='1 by 2 Highlighter'
        exercise='oneByTwo'
        user={user}
      />
      <ExerciseView
        text='2 by 1 Highlighter'
        exercise='twoByOne'
        user={user}
      />
      <ExerciseView
        text='2 by 2 Highlighter'
        exercise='twoByTwo'
        user={user}
      />
      <ExerciseView
        text='Schulte Table'
        exercise='schulteTable'
        user={user}
      />
      <ExerciseView
        text='Even Number Game'
        exercise='evenNumbers'
        user={user}
      />
      <ExerciseView
        text='Number Memory Game'
        exercise='numberGuesser'
        user={user}
      />
      <ExerciseView
        text='Matching Letter Game'
        exercise='letterMatcher'
        user={user}
      />
      <ExerciseView
        text='Green Dot'
        exercise='greenDot'
        user={user}
      />
      <ExerciseView
        text='Word Pairs'
        exercise='wordPairs'
        user={user}
      />
    </View>
  )
}

const ExerciseCounter = ({ user }: { user: User }) => {
  const count = getAvailableExercises(user)?.length ?? 0
  return (
    <View className='gap-2 items-center justify-center'>
      <Text className='text-white text-3xl text-center'>
        Remaining Daily Exercises:
      </Text>
      <Text className='text-9xl text-yellow-400'>
        {count}
      </Text>
    </View>
  )
}

export const HomeScreen = () => {
  const user = trpc.user.get.useQuery()
  const store = useUserStore()
  const [isChekList, setIsCheckList] = useState(false)
  const { mutate: mutateUser } = trpc.user.set.useMutation()
  const drawerNav = useNavigation<DrawerNavigationProp<ParamListBase>>()
  const nav = useNavigation<StackNavigation>()
  const auth = useAuth()

  const StartButton = () => {
    return (
      <TouchableOpacity
        className={buttonStyle}
        onPress={() => {
          nav.navigate('Train')
        }}
      >
        <Text
          className='text-white text-3xl text-center'
        >
          Start
        </Text>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    if (!user.data) return
    setIsCheckList(user.data.isUsingChecklist)
  }, [])

  useEffect(() => {
    if (!user.data) return
    if (!store.user) {
      store.setUser(user.data)
      return
    }
    if (user.data.updatedAt > store.user.updatedAt) {
      store.setUser(user.data)
    }
    else if (user.data.updatedAt < store.user.updatedAt) {
      mutateUser(store.user)
    }

  }, [user.data])

  useLayoutEffect(() => {
    nav.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => drawerNav.toggleDrawer()}>
          <FontAwesome5 name="grip-lines" size={30} color="black" />
        </Pressable>
      )
    })
  }, [])

  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen'>
      <View className='flex items-center justify-center'>
        <TouchableOpacity
          onPress={
            () => {
              setIsCheckList(!isChekList)
              mutateUser({ isUsingChecklist: !isChekList })
            }
          }
        >
          {
            !isChekList
              ? <View className='min-h-screen justify-center items-center'>
                <ExerciseCounter user={store.user as User} />
                <StartButton />
              </View>
              : <View className='justify-center items-center'>
                <ExerciseList user={store.user as User} />
                <StartButton />
              </View>
          }
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
