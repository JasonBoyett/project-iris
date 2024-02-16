import type { User } from '@acme/types'
import { useState } from 'react'
import { View } from 'react-native'
import Instructions from '../../instructions/GreenDot'
import { PieTimer } from './Dot'
import { BackgroundText } from './Text'

type GreenDotProps = {
  user: User,
  signal: VoidFunction,
}
export const Exercise = (props: GreenDotProps) => {
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
 
export const GreenDot = (props: GreenDotProps) => {
  const [instructions, setInstructions] = useState(true)

  return (
        instructions
          ? <Instructions user={props.user} callback={() => setInstructions(false)} />
          : <Exercise {...props} />
  )
}
