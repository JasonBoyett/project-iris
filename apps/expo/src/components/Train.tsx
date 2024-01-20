import { Button, SafeAreaView, Text, View } from 'react-native';
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
  exercise: Exercise | undefined
  signal: VoidFunction
  user: User
}
const Session = ({ exercise, signal, user }: ExerciseProps) => {

  switch (exercise) {
    case undefined:
      return (
        <TempCompnenet
          user={user}
          text='Exercise not found'
          signal={signal}
        />
      )
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
        <TempCompnenet
          user={user}
          text={exercise}
          signal={signal}
        />
      )
    case 'cubeByThree':
      return (
        <TempCompnenet
          user={user}
          text={exercise}
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
        <TempCompnenet
          user={user}
          text={exercise}
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
        <TempCompnenet
          user={user}
          text={exercise}
          signal={signal}
        />
      )
    default:
      return (
        <View className='grid grid-cols-1 items-center justify-center min-h-screen gap-5'>
          <Text className='text-6xl text-white p-4'>
            You're done for the Day!
          </Text>
          <Button
            title='Signal'
            onPress={() => signal()}
          />
        </View>
      )
  }
}

const Next = ({ cycle }: { cycle: VoidFunction }) => {
  return (
    <View className='grid grid-cols-1 items-center justify-center min-h-screen gap-5'>
      <Text className='text-6xl text-white p-4'>
        Click to start next exercise
      </Text>
      <Button
        title='Next Exercise'
        onPress={() => cycle()}
      />
    </View>
  )
}

export const TrainingScreen = () => {
  const { data: next, refetch } = trpc.excercise.getNext.useQuery()
  const { data: user, refetch : fetchUser } = trpc.user.get.useQuery()
  const [training, setTraining] = useState(false)

  const cycle = () => {
    fetchUser()
    refetch()
    setTraining(!training)
  }

  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen items-center'>
      <View>
        {training ? (
          <Session
            exercise={'greenDot'}
            signal={cycle}
            user={user as User}
          />
        ) : (
          <Next cycle={cycle} />
        )}
      </View>
    </SafeAreaView>
  );
}
