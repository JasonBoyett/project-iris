import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import type { SpeedTest, User } from '@acme/types'
import { useInterval } from '../../hooks/useInterval'
import { trpc } from '../../utils/trpc'
import { useEffect, useRef, useState } from 'react';
import useSpeedTestStore from '../../stores/useSpeedTestStore';
import useUserStore from '../../stores/userStore';
import { formatDate } from '@acme/helpers';
import Instructions from '../instructions/SpeedTest';

const Loading = () => {
  const [frame, setFrame] = useState(0)

  const getText = () => {
    switch (frame % 4) {
      case 0:
        return 'Loading'
      case 1:
        return 'Loading.'
      case 2:
        return 'Loading..'
      case 3:
        return 'Loading...'
    }
  }

  useInterval(() => {
    setFrame(frame + 1)
  }, 250)

  return (
    <View
      className='flex flex-col items-center justify-center'
    >
      <Text
        className='text-6xl text-white'
      >
        {getText()}
      </Text>
    </View>
  )
}

const GOOD_GRADE = 80
const FAILING_GRADE = 50
const TOTAL_QUESTIONS = 2

const gradeTest = (correct: number) => (correct / TOTAL_QUESTIONS) * 100

type Section = 'passage' | 'questions' | 'result'

const getAvg = (nums: number[]) => {
  let sum = 0
  nums.forEach((num) => {
    sum += num
  })
  return sum / nums.length
}

const Passage = (props: {
  question: SpeedTest,
  wpm: number,
  done: VoidFunction
  user: User,
}) => {
  const words = props.question.passage.split(' ')
  const [itter, setItter] = useState(0)
  const START_BUFFER = 5
  const [start, setStart] = useState(0)

  const colors = {
    BLUE: 'bg-[#96adfc]',
    BLUE_GREY: 'bg-[#dbe1f1]',
    GREEN: 'bg-[#a8f29a]',
    GREY: 'bg-[#d8d3d6]',
    ORANGE: 'bg-[#eddd6e]',
    PEACH: 'bg-[#edd1b0]',
    PURPLE: 'bg-[#b987dc]',
    RED: 'bg-[#e0a6aa]',
    TURQUOISE: 'bg-[#a5f7e1]',
    YELLOW: 'bg-[#F8fd89]',
  }

  const getHighlightColor = () => {
    if (start >= START_BUFFER) return colors[props.user.highlightColor ?? 'GREY']
  }


  useInterval(() => {
    if (start < START_BUFFER + 1) {
      setStart((start) => start + 1)
      return
    }
    if (itter < words.length - 1) {
      setItter(itter + 1)
    }
    else {
      props.done()
    }
  }, 60_000 / props.wpm)

  return (
    <View className='min-h-full items-center justify-center'>
      <View className='justify-center items-center bg-white rounded-lg w-96 h-80'>
        <Text className='text-5xl'>
          {
            start >= START_BUFFER
              ? words[itter - 1] ?? ''
              : ''
          }
        </Text>
        <View
          className={[
            'p-2 m-2 rounded-lg max-h-16',
            getHighlightColor(),
          ].join(' ')}
        >
          <Text className='text-5xl'>
            {
              start >= START_BUFFER
                ? words[itter]
                : 'Get Ready!'
            }
          </Text>
        </View>
        <Text className='text-5xl'>
          {
            start >= START_BUFFER
              ? words[itter + 1] ?? ''
              : ''
          }
        </Text>
      </View>
    </View>
  )
}

const Question = (props: { 
  question: SpeedTest, 
  wpm: number, 
  done: (correct: boolean) => void
}) => {
  const store = useSpeedTestStore()
  const response = useRef<typeof props.question.correctAnswer>('A')
  const handleTap = (answer: typeof props.question.correctAnswer) => {
    response.current = answer
    if (answer === props.question.correctAnswer) {
      store.submit(props.wpm, true)
    }
    else {
      store.submit(props.wpm, false)
    }
    props.done(response.current === props.question.correctAnswer)
  }

  //had to mix these style and tailwind because I 
  //couldn't get tailwind to do what I wanted
  const style = StyleSheet.create({
    block: {
      float: 'left',
      width: '95%',
      maxWidth: '95%',
      margin: 2,
      overflowWrap: 'break-word',
      flexDirection: 'row',
    },
    questionText: {
      color: 'white',
      fontSize: 25,
      flexWrap: 'wrap',
    },
    questionContainer: {
      maxWidth: '80%',
      overflowWrap: 'break-word',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  return (
    <View className='min-h-full items-center justify-center min-w-max'>
      <Text className='text-4xl text-white'>
        {props.question.question}
      </Text>
      <View style={style.block}>
        <TouchableOpacity
          className='bg-white/20 rounded-lg p-2 m-2'
          onPress={() => handleTap('A')}
        >
          <Text className='text-yellow-200 text-6xl p-1'>A.</Text>
        </TouchableOpacity>
        <View style={style.questionContainer}>
          <Text style={style.questionText}>{props.question.answerA}</Text>
        </View>
      </View>
      <View style={style.block}>
        <TouchableOpacity
          className='bg-white/20 rounded-lg p-2 m-2'
          onPress={() => handleTap('B')}
        >
          <Text className='text-yellow-200 text-6xl p-1'>B.</Text>
        </TouchableOpacity>
        <View style={style.questionContainer}>
          <Text style={style.questionText}>{props.question.answerB}</Text>
        </View>
      </View>
      <View style={style.block}>
        <TouchableOpacity
          className='bg-white/20 rounded-lg p-2 m-2'
          onPress={() => handleTap('C')}
        >
          <Text className='text-yellow-200 text-6xl p-1'>C.</Text>
        </TouchableOpacity>
        <View style={style.questionContainer}>
          <Text style={style.questionText}>{props.question.answerC}</Text>
        </View>
      </View>
      <View style={style.block}>
        <TouchableOpacity
          className='bg-white/20 rounded-lg p-2 m-2'
          onPress={() => handleTap('D')}
        >
          <Text className='text-yellow-200 text-6xl p-1'>D.</Text>
        </TouchableOpacity>
        <View style={style.questionContainer}>
          <Text style={style.questionText}>{props.question.answerD}</Text>
        </View>
      </View>
    </View>
  )
}

const Result = (props: { 
  log: VoidFunction,
  done: VoidFunction 
}) => {
  const store = useSpeedTestStore()

  useEffect(props.log, [])

  return (
    <View className='min-h-full items-center justify-center'>
      <View className='justify-center items-centerw-96 h-60 gap-10'>
        <Text className='text-4xl text-white'>
          {`You scored ${gradeTest(store.correctResponses)}%`}
        </Text>
        <TouchableOpacity
          className='bg-white/20 rounded-3xl p-2 m-2 items-center justify-center'
          onPress={() => props.done()}
        >
          <Text className='text-yellow-200 text-6xl p-1'>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export const Exercise = (props: { user: User, signal: VoidFunction }) => {
  const questions = trpc.excercise.getMultipleSpeedTestProps.useQuery(TOTAL_QUESTIONS)
  const { mutate } = trpc.user.set.useMutation()
  const collectData = trpc.collect.SpeedTestSession.useMutation().mutate
  const [loading, setLoading] = useState(true)
  const [section, setSection] = useState<Section>('passage')
  const [wpm, setWpm] = useState(props.user.testSpeed)
  const store = useSpeedTestStore()
  const userStore = useUserStore()

  const getNewSpeed = () => {
    if (gradeTest(store.correctResponses) >= GOOD_GRADE) {
      const roundedAverage = Math.floor(getAvg(store.correctSpeeds) / 10) * 10
      return {
        max: roundedAverage,
        current: Math.floor(roundedAverage / 0.9 / 10) * 10,
      }
    } else if (store.correctResponses < FAILING_GRADE) {
      //if this is undefined then the user got all the questions wrong
      //so we just set the max speed to their current speed
      let maxSpeed = store.correctSpeeds.sort().pop() ?? props.user.testSpeed
      maxSpeed = Math.floor(maxSpeed / 10) * 10
      return {
        max: maxSpeed,
        //setting the current speed to 90% of the highest speed
        // the user got correct
        current: maxSpeed,
      }
    }
    else {
      return {
        max: props.user.maxWpm,
        current: props.user.currentWpm,
      }
    }
  }

  const questionCallback = (correct: boolean) => {
    if (correct) {
      setWpm((wpm) => wpm + 10)
    }
    else {
      setWpm((wpm) => wpm - 10)
    }
    if (store.totalResponses < (TOTAL_QUESTIONS - 1)) {
      setSection('passage')
    }
    else {
      setSection('result')
    }
    console.log(store.totalResponses)
  }

  const resultCallback = () => {
    // if the user got none of the questions correct
    // we want them to retake the test
    // so we don't update the database to indicate that they
    // have taken the test.
    // this way when they go back to the training screen
    // they will be directed to the speed test once again.
    if (store.correctResponses === 0) return
    const speed = getNewSpeed()
    const newWpm = (() => {
      if (gradeTest(store.correctResponses) >= GOOD_GRADE) {
        return wpm
      }
      else {
        return props.user.testSpeed
      }
    })()
    collectData({
      platform: 'mobile',
      numberWrong: TOTAL_QUESTIONS - store.correctResponses,
      startSpeed: props.user.testSpeed, 
      endSpeed: wpm,
    })
    userStore.setUser({
      ...props.user,
      testSpeed: newWpm,
      lastSpeedTest: formatDate(),
      currentWpm: speed.current,
      maxWpm: speed.max,
      tested: true,
    })
    mutate({
      testSpeed: newWpm,
      lastSpeedTest: formatDate(),
      currentWpm: speed.current,
      maxWpm: speed.max,
      tested: true,
    })
  }

  const selectSection = (section: Section) => {
    switch (section) {
      case 'passage':
        return <Passage
          question={store.currentTest}
          wpm={wpm}
          done={() => setSection('questions')}
          user={props.user}
        />
      case 'questions':
        return <Question
          question={store.currentTest}
          wpm={wpm}
          done={questionCallback}
        />
      case 'result':
        return <Result 
          log={resultCallback} 
          done={props.signal}
        />
    }
  }

  useEffect(() => {
    if (!questions.data) return
    store.setup(questions.data)
    setLoading(false)
  }, [questions.data])

  return (
    <SafeAreaView className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen items-center'>
      <View className='min-h-screen flex-row justify-between items-center p-2'>
        {
          loading
            ? <Loading />
            : selectSection(section)
        }
      </View>
    </SafeAreaView>
  );
}

export const TestScreen = (props: { user: User, signal: VoidFunction }) => {

  const [instructions, setInstructions] = useState(true)

  return (
        instructions
          ? <Instructions user={props.user} callback={() => setInstructions(false)} />
          : <Exercise {...props} />
  )
}
