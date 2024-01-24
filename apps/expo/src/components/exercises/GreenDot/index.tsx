import type { User } from '@acme/types'
import { View } from 'react-native'
import { PieTimer } from './Dot'
import { BackgroundText } from './Text'

type GreenDotProps = {
  user: User,
  signal: VoidFunction,
}
export const GreenDot = (props: GreenDotProps) => {
  const { user, signal } = props
  return (
    <View 
      className='flex flex-col items-center justify-center min-h-screen'
    >
    <View
      className='w-96 h-96 bg-white rounded-lg'
    >
      <View
        className='items-center justify-center'
      >
      <BackgroundText
        textClass='text-xl text-center text-black'
      />
      <PieTimer 
        seconds={60}
        pixels={20}
        user={user}
        signal={signal}
      />
      </View>
    </View>
    </View>
  )
}
