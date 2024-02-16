import { formatDate } from '@acme/helpers'
import type { User } from '@acme/types'
import {
  useEffect,
  useRef,
} from 'react'
import {
  View,
  Easing,
  Animated,
  StyleSheet,
  type StyleProp,
  type ViewStyle
} from 'react-native'
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
  const store = useUserStore()

  const fill = useRef(new Animated.Value(1)).current

  const fillAnimation = Animated.timing(fill, {
    toValue: 0,
    duration: seconds * MILLISECONDS_IN_A_SECOND,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start((result) => {
    if (result.finished) {
      teardown()
    }
  })

  //styles
  //I'm not using Tailwind here or in this component because these styles are
  //going to be more complex and require more control.
  //I'll still use tailwind colors to help keep colors consistent
  //I'll note the tailwind color in the comments
  const BG_COLOR = '#16a34a' //tailwind green-600
  const FG_COLOR = '#166534' //tailwind green-800

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: pixels,
      height: pixels,
      borderRadius: pixels / 2,
      backgroundColor: BG_COLOR,
      overflow: 'hidden',
    },
    bubble: {
      width: pixels,
      height: pixels,
      scale: 1,
      backgroundColor: FG_COLOR,
      position: 'relative',
      borderRadius: pixels,
      overflow: 'hidden',
      transformOrigin: 'right',
    },
  })

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

  useEffect(() => {
    fillAnimation
  }, [])
  
  return (
    <View
      style={styles.container}
    >
    <Animated.View
      style={[
          styles.bubble,
          {transform: [{scale: fill}]}
        ]}
    />
    </View>
  )
}
