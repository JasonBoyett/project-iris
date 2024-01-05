import { Button, SafeAreaView, Text, View } from 'react-native';
import { trpc } from '../utils/trpc';
import type { 
  Exercise, 
  User, 
  HighlightType,
} from '@acme/types'
import { useEffect, useState } from 'react';

const TempCompnenet = (
  { text, signal }: { text: string, signal: VoidFunction }
) => {
  return (
    <View className='grid grid-cols-1 items-center justify-center min-h-screen gap-5'>
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

  useEffect(() =>{
    console.log(exercise)
  }, [])

  switch (exercise) {
    case undefined: 
      return (
        <TempCompnenet
          text='Exercise not found'
          signal={signal}
        />
      )
    case 'oneByTwo':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'oneByOne':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'twoByOne':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'twoByTwo':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'fourByOne':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'evenNumbers':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'cubeByTwo':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'cubeByThree':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'greenDot':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'evenNumbers':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'numberGuesser':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'wordPairs':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'letterMatcher':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'schulteTable':
      return (
        <TempCompnenet
          text={exercise}
          signal={signal}
        />
      )
    case 'speedTest':
      return (
        <TempCompnenet
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

const Next = ({ cycle }:{ cycle: VoidFunction}) => {
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
  const { data: user } = trpc.user.get.useQuery()
  const [training, setTraining] = useState(false)

  const cycle = () => {
    refetch()
    setTraining(!training)
  }

  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen items-center'>
      <View>
        {training ? (
          <Session 
            exercise={next} 
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
