import type { User } from '@acme/types'
import { View } from 'react-native'
import { PieTimer } from './Dot'

type GreenDotProps = {
  user: User,
  signal: VoidFunction,
}
export const GreenDot = (props: GreenDotProps) => {
  const { user, signal } = props
  return (
    <View
      className='w-96 h-96 bg-white rounded-lg'
    >
      <PieTimer 
        seconds={60}
        pixels={100}
        user={user}
        signal={signal}
      />
    </View>
  )
}
