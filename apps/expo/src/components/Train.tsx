import { Button, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { trpc } from '../utils/trpc';
import type {
  Exercise,
  User,
} from '@acme/types'
import { useState } from 'react';
import { SchulteTable } from './exercises/SchulteTable';
import { EvenNumbers } from './exercises/EvenNumber';
import { WordPairs } from './exercises/WordPairs';
import { LetterMatcher } from './exercises/Letters';
import { WordFlasher } from './exercises/WordFlasher';
import { GreenDot } from './exercises/GreenDot';
import { BoxFlasher } from './BoxFlasher';
import { NumberMatcher } from './exercises/NumberMatcher';
import { useNavigation } from '@react-navigation/native'
import { TestScreen } from './speedtest'
import { StackNavigation } from '../_app';

const TempCompnenet = (
  { text, signal, user }: { text: string, signal: VoidFunction, user: User | undefined }
) => {
  return (
    <View className='grid grid-cols-1 items-center justify-center min-h-screen gap-5'>
      <Text className='text-6xl text-white p-4'>
        {
          !!user
            ? `Welcome ${user.firstName ?? 'User'}`
            : 'Loading...'
        }
      </Text>
      <Text className='text-6xl text-white p-4'>
        {text}
      </Text>
      <Button
        title='Signal'
        onPress={() => signal()}
      />
    </View>
  )
}

type ExerciseProps = {
  exercise: Exercise | 'done'
  signal: VoidFunction
  user: User
}
const Session = ({ exercise, signal, user }: ExerciseProps) => {
  const nav = useNavigation<StackNavigation>()

  switch (exercise) {
    case 'oneByTwo':
      return (
        <WordFlasher
          type='oneByTwo'
          user={user}
          signal={signal}
          rows={5}
        />
      )
    case 'oneByOne':
      return (
        <WordFlasher
          type='oneByOne'
          user={user}
          signal={signal}
          rows={5}
        />
      )
    case 'twoByOne':
      return (
        <WordFlasher
          type='twoByOne'
          user={user}
          signal={signal}
          rows={5}
        />
      )
    case 'twoByTwo':
      return (
        <WordFlasher
          type='twoByTwo'
          user={user}
          signal={signal}
          rows={5}
        />
      )
    case 'fourByOne':
      return (
        <WordFlasher
          type='fourByOne'
          user={user}
          signal={signal}
          rows={5}
        />
      )
    case 'evenNumbers':
      return (
        <EvenNumbers
          user={user}
          signal={signal}
        />
      )
    case 'cubeByTwo':
      return (
        <BoxFlasher
          user={user}
          type={2}
          signal={signal}
        />
      )
    case 'cubeByThree':
      return (
        <BoxFlasher
          user={user}
          type={3}
          signal={signal}
        />
      )
    case 'greenDot':
      return (
        <GreenDot
          user={user}
          signal={signal}
        />
      )
    case 'evenNumbers':
      return (
        <TempCompnenet
          user={user}
          text={exercise}
          signal={signal}
        />
      )
    case 'numberGuesser':
      return (
        <NumberMatcher
          user={user}
          signal={signal}
        />
      )
    case 'wordPairs':
      return (
        <WordPairs
          user={user}
          signal={signal}
        />
      )
    case 'letterMatcher':
      return (
        <LetterMatcher
          size={7}
          user={user}
          signal={signal}
        />
      )
    case 'schulteTable':
      return (
        <SchulteTable
          user={user}
          signal={signal}
        />
      )
    case 'speedTest':
      return (
        <TestScreen
          user={user}
          signal={signal}
        />
      )
    case 'done':
      return (
        <View className='grid grid-cols-1 items-center justify-center min-h-screen gap-5'>
          <Text className='text-6xl text-white p-4'>
            You're all done!
          </Text>
          <TouchableOpacity
            onPress={() => 
              nav.goBack()
            }
            className='bg-white/10 justify-center items-center p-4 rounded-full'
          >
            <Text
              className='text-4xl text-white p-4'
            >
              Tap to go back
            </Text>
          </TouchableOpacity>
        </View>
      )
  }
}

const Next = ({ cycle }: { cycle: VoidFunction }) => {
  return (
    <View className='grid grid-cols-1 items-center justify-center min-h-screen gap-5'>
      <Text className='text-6xl text-white p-4'>
        Tap <Text className='text-yellow-200'>start</Text> to continue
      </Text>
      <TouchableOpacity
        className='bg-white/10 justify-center items-center p-4 w-44 rounded-full'
        onPress={() => cycle()}
      >
        <Text className='text-white text-6xl'>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export const TrainingScreen = () => {
  const { refetch } = trpc.excercise.getNext.useQuery()
  const { data: user, refetch: fetchUser } = trpc.user.get.useQuery()
  const [training, setTraining] = useState(false)
  const [exercise, setExercise] = useState<Exercise>('done')

  const cycle = async () => {
    fetchUser()
    await refetch()
      .then((res) => {
        setExercise(() => res.data ?? 'done')
      })
      .catch(() => {
        setExercise(() => 'done')
      })
    setTraining(!training)
  }

  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen items-center'>
      <View>
        {training ? (
          <Session
            exercise={exercise}
            signal={cycle}
            user={user as User}
          />
        ) : (
          <Next cycle={cycle} />
        )}
      </View>
    </SafeAreaView>
  )
}
