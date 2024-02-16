import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import type { User } from '@acme/types'
import { trpc } from '../../utils/trpc'
import useUserStore from '../../stores/userStore'
import { formatDate } from '@acme/helpers'
import Instructions from '../instructions/NumberMatch'

const CORRECT_STREAK_NEEDED = 5
const INCORRECT_STREAK_CUT_OFF = 3

const numberGen = (segfigs: number) => {
  const numberArray = Array.from({ length: 10 }, (_, index) => index);
  const result = []
  for (let i = 0; i < segfigs; i++) {
    result.push(numberArray[Math.floor(Math.random() * 10)])
  }
  return result.join('')
}

type NumberButtonProps = {
  content: string
  disabled?: boolean
  callBack: (arg: string) => void
}
const NumberButton = (props: NumberButtonProps) => {
  const { content, callBack, disabled = false } = props

  const handlePress = () => {
    callBack(content)
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      className={disabled ? 'bg-white/10' : 'bg-white/20'}
      style={{
        width: 100,
        height: 100,
        borderRadius: 25,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 40,
          color: disabled ? 'black' : 'white',
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  )
}
type PadProps = {
  NumberCallBack: (arg: string) => void
  enterCallBack: () => void
  deleteCallBack: () => void
  disabled: boolean
  display: string
}
const NumberPad = (props: PadProps) => {
  const {
    NumberCallBack,
    enterCallBack,
    deleteCallBack,
    disabled,
    display,
  } = props

  const gridData = Array<NumberButtonProps>()

  for (let i = 1; i < 10; i++) {
    gridData.push({
      content: i.toString(),
      callBack: NumberCallBack,
      disabled,
    })
  }
  gridData.push({
    content: '✓',
    callBack: enterCallBack,
    disabled
  })
  gridData.push({
    content: '0',
    callBack: NumberCallBack,
    disabled
  })
  gridData.push({
    content: '⌫',
    callBack: deleteCallBack,
    disabled
  })

  const MyList = FlatList<NumberButtonProps>
  return (
    <View className='items-center justify-center max-w-fit'>
      <View
        className='bg-white/20 justify-center items-center'
        style={{
          width: '95%',
          height: 100,
          borderRadius: 25,
          padding: 5,
          margin: 5,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: 'white',
            textAlign: 'center',
          }}
        >
          {display}
        </Text>
      </View>
      <MyList
        key={gridData.length}
        numColumns={3}
        data={gridData}
        renderItem={({ item }) => (
          <NumberButton
            content={item.content}
            callBack={item.callBack}
            disabled={item.disabled}
          />
        )}
      />
    </View>
  )
}

type ExerciseProps = {
  user: User
  signal: VoidFunction
}
const Exercise = React.memo((props: ExerciseProps) => {
  const target = useRef<string>(numberGen(props.user.numberGuesserFigures))
  const significantFigures = useRef<number>(props.user.numberGuesserFigures)
  const correctStreak = useRef<number>(0)
  const correctStreakActual = useRef<number>(0)
  // the difference between correctStreak and correctStreakActual is
  // that correctStreak is reset when significantFigures is increased
  // while correctStreakActual is not.
  // This way the actual streak can be tracked while 
  // the streak needed to increase the number of significant figures
  // is kept separate
  const incorrectStreak = useRef<number>(0)
  const longestStreak = useRef<number>(0)
  const correctCount = useRef<number>(0)
  const incorrectCount = useRef<number>(0)
  const startTime = useRef<number>(0)
  const [showing, setShowing] = useState<boolean>(false)
  const [display, setDisplay] = useState<string>('Ready')

  const { mutate } = trpc.user.set.useMutation()
  const { mutate: session } = trpc.collect.numberGuesserSession.useMutation()
  const store = useUserStore()

  const teardown = () => {
    session({
      userId: props.user.id, 
      longestStreak: longestStreak.current,
      figuresAtStart: props.user.numberGuesserFigures,
      figuresAtEnd: significantFigures.current,
      numberWrong: incorrectCount.current,
      numberCorrect: correctCount.current,
      platform: 'mobile'
    })
    mutate({ 
      lastNumberGuesser: formatDate(),
      numberGuesserFigures: significantFigures.current,
    })
    store.setUser({ 
      ...props.user,
      lastNumberGuesser: formatDate(),
      numberGuesserFigures: significantFigures.current,
    })
    props.signal()
  }

  const checkLongest = () => {
    correctStreakActual.current++
    if (correctStreakActual.current > longestStreak.current) {
      longestStreak.current = correctStreakActual.current
    }
  }

  const handleCorrect = () => {
    checkLongest()
    correctCount.current++
    if (incorrectStreak.current > 0) {
      incorrectStreak.current = 0
      return
    }
    if (correctStreak.current > CORRECT_STREAK_NEEDED) {
      significantFigures.current++
      correctStreak.current = 0
    }
    else {
      correctStreak.current++
      incorrectStreak.current = 0
    }
  }

  const handleIncorrect = () => {
    incorrectCount.current++
    if (correctStreak.current > 0) {
      correctStreak.current = 0
      return
    }
    if (incorrectStreak.current > INCORRECT_STREAK_CUT_OFF) {
      significantFigures.current--
    }
    else {
      incorrectStreak.current++
      correctStreak.current = 0
    }
  }

  const enterCallBack = () => {
    if (display === target.current) handleCorrect()
    else handleIncorrect()
    gameLoop()
  }

  const deleteCallBack = () => {
    setDisplay(display?.slice(0, -1) ?? '')
  }

  const NumberCallBack = (arg: string) => {
    setDisplay(display + arg)
  }

  const gameLoop = () => {
    target.current = numberGen(significantFigures.current)
    setShowing(false)
    setDisplay(() => target.current)
    setTimeout(() => {
      setDisplay('')
      setShowing(true)
    }, 500)
  }

  useEffect(() => {
    setTimeout(() => {
      setDisplay('3')
    }, 1_000)
    setTimeout(() => {
      setDisplay('2')
    }, 2_000)
    setTimeout(() => {
      setDisplay('1')
    }, 3_000)
    setTimeout(() => {
      setDisplay('GO!')
    }, 4_000)
    setTimeout(() => {
      gameLoop()
    }, 5_000)
    setTimeout(() => {
      teardown()
    }, 65_000)
    
  }, [])

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      }}
    >
      <View className='items-center justify-center'>
        <View>
          <NumberPad
            NumberCallBack={NumberCallBack}
            enterCallBack={enterCallBack}
            deleteCallBack={deleteCallBack}
            disabled={!showing}
            display={display}
          />
        </View>
      </View>
    </View>
  )
})

export const NumberMatcher = (props: ExerciseProps) => {
  const [instructions, setInstructions] = useState(true)

  return (
        instructions
          ? <Instructions user={props.user} callback={() => setInstructions(false)} />
          : <Exercise {...props} />
  )
}
