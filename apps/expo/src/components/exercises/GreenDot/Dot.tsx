import { formatDate } from '@acme/helpers'
import { User } from '@acme/types'
import { 
  useState,
  type CSSProperties,
} from 'react'
import { 
  View, 
  Animated,
  StyleSheet,
  type StyleSheetProperties,
  type StyleProp,
  type ViewStyle
} from 'react-native'
import { useInterval } from '../../../hooks/useInterval'
import useUserStore from '../../../stores/userStore'
import { trpc } from '../../../utils/trpc'

type PieTimerProps = { 
  seconds: number,
  pixels: number,
  user: User,
  signal: VoidFunction,
}
export const PieTimer = ({ seconds, pixels, signal, user }: PieTimerProps) => {
  const MILLISECONDS_IN_A_SECOND = 1_000
  const { mutate } = trpc.user.set.useMutation()
  const collectData = trpc.collect.greenDotSession.useMutation()
  const [count, setCount] = useState(0)
  const store = useUserStore()

  //styles
  //I'm not using Tailwind here or in this component because these styles are
  //going to be more complex and require more control.
  //I'll still use tailwind colors to help keep colors consistent
  //I'll note the tailwind color in the comments
  const BG_COLOR = '#16a34a' //tailwind green-600
  const FG_COLOR = '#166534' //tailwind green-800

  const styleSheet = StyleSheet.create({
  clock: {
    position: 'relative',
    height: pixels,
    width: pixels,
    backgroundColor: BG_COLOR,
    borderRadius: pixels /2 ,
  },
  rotator: {
    position: 'absolute',
    height: pixels,
    width: pixels / 2,
    backgroundColor: FG_COLOR,
    borderTopLeftRadius: pixels / 2,
    borderBottomLeftRadius: pixels / 2,
    overflow: 'hidden',
    transform: 'rotate(0deg)',
    transition: 'transform 1s linear',
    transformOrigin:'left',
  },
  mask: {
    position: 'absolute',
    height: pixels,
    width: pixels / 2,
    backgroundColor: BG_COLOR,
    borderTopLeftRadius: pixels / 2,
    borderBottomLeftRadius: pixels / 2,
    overflow: 'hidden',
    transformOrigin: 'right',
  },
  })
  type Style = StyleSheetProperties | CSSProperties


  const [rotatorStyle, setRotatorStyle] = useState<Style>(styleSheet.rotator)
  const [maskStyle, setMaskStyle] = useState<Style>(styleSheet.mask)

   const teardown = () => {
    if (!store.user) return
    mutate({
      lastGreenDot: formatDate(),
    })
    store.setUser({
      ...store.user,
      lastGreenDot: formatDate(),
    })
    collectData.mutate({
      platform: 'mobile'
    })
    signal()
  } 

  return (
    <View style={styleSheet.clock}>
      <Animated.View style={rotatorStyle as StyleProp<ViewStyle>} />
      <Animated.View style={maskStyle as StyleProp<ViewStyle>} />
    </View>
  )
}
