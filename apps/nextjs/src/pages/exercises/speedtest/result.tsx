import { type SingletonRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUserStore } from '../../../stores/userStore'
import { useSpeedTestStore } from '../../../stores/useSpeedTestStore'
import { FontProvider } from '../../../cva/fontProvider'
import type { Font } from '@acme/types'
import { TESTS_PER_DAY } from './index'
import Head from 'next/head'
import { trpc } from '../../../utils/trpc'
import { formatDate, navigateToNextExercise } from '@acme/helpers'
import Sidebar from '../../../components/sidebar'

const GOOD_GRADE = 8 //since the user will be seeing 10 questions this means they got a B
const FAILING_GRADE = 5 //since the user will be seeing 10 questions this means they got a D

export default function Result() {
  const [correct, setCorrect] = useState(0)
  const [font, setFont] = useState<Font>('sans')
  const router = useRouter()
  const userStore = useUserStore()
  const speedTestStore = useSpeedTestStore()
  const collect = trpc.collect.SpeedTestSession.useMutation().mutate
  const { mutate } = trpc.user.set.useMutation()

  function getAvg(nums: number[]) {
    return nums.reduce((previous, current) => (current += previous) / 2)
  }

  function getNewSpeed() {
    if (!userStore.user) return
    if (!speedTestStore) return
    if (speedTestStore.correctResponses === 0) return null
    if (speedTestStore.correctResponses >= GOOD_GRADE) {
      const avg = Math.floor(getAvg(speedTestStore.correctSpeeds) / 10) * 10
      return {
        max: avg,
        current: Math.floor(avg / 0.9 / 10) * 10,
      }
    } else if (speedTestStore.correctResponses < FAILING_GRADE) {
      const maxSpeed = speedTestStore.correctSpeeds.sort().pop() as number
      return {
        max: maxSpeed,
        //setting the current speed to 90% of the highest speed
        // the user got correct
        current: Math.floor(maxSpeed / 0.9 / 10) * 10,
      }
    }
    else {
      return {
        max: userStore.user.maxWpm,
        current: userStore.user.currentWpm,
      }
    }
  }

  function saveCompletionAndRaiseWpm() {
    //I know this function does two things.
    //I just don't want to make two api calls when I can make just one.
    if (!userStore.user) return
    const newSpeed = getNewSpeed()
    const startSpeed = userStore.user.testSpeed
    userStore.setUser({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      maxWpm: newSpeed?.max || userStore.user.maxWpm + 20,
      currentWpm: newSpeed?.current 
        ?? Math.floor((userStore.user.maxWpm + 20) / 0.9 / 10) * 10,
      testSpeed: newSpeed?.max || userStore.user.testSpeed + 20,
      tested: true,
    })
    mutate({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      maxWpm: newSpeed?.max || userStore.user.maxWpm + 20,
      currentWpm: newSpeed?.current 
        || Math.floor((userStore.user.maxWpm + 20) / 0.9 / 10) * 10,
      testSpeed: newSpeed?.max || userStore.user.testSpeed + 20,
      tested: true,
    })
    collect({
      endSpeed: newSpeed?.max || userStore.user.maxWpm, 
      startSpeed: startSpeed,
      numberWrong: speedTestStore.totalResponses - speedTestStore.correctResponses,
      platform: 'web',
    })
  }

  function saveCompletion() {
    if (!userStore.user) return
    const newSpeed = getNewSpeed()
    const startSpeed = userStore.user.testSpeed
    if (!newSpeed) return
    // this will force the user to retest if they get 0 correct
    // by not updating the boolean that says they have tested
    mutate({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      tested: true,
      maxWpm: newSpeed.max,
      currentWpm: newSpeed.current,
    })
    userStore.setUser({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      tested: true,
      maxWpm: newSpeed.max,
      currentWpm: newSpeed.current,
    })
    collect({
      endSpeed: userStore.user.testSpeed, 
      startSpeed: startSpeed,
      numberWrong: speedTestStore.totalResponses - speedTestStore.correctResponses,
      platform: 'web',
    })
  }

  function saveUser() {
    if (!speedTestStore) return
    if (!userStore.user) return
    if (speedTestStore.correctResponses > GOOD_GRADE) {
      saveCompletionAndRaiseWpm()
    } else {
      saveCompletion()
    }
  }

  function handleClick() {
    if (!userStore.user) return
    saveUser()
    speedTestStore.clear()
    navigateToNextExercise(router as SingletonRouter, userStore.user)
  }

  useEffect(() => {
    if (!userStore.user) return
    if (!speedTestStore.current) return

    setCorrect(() => {
      if (!speedTestStore.current) return 0
      return speedTestStore.correctResponses
    })
    setFont(userStore.user.font)
  }, [userStore, speedTestStore])

  return (
    <>
      <Sidebar />
      <Head>Test Results</Head>
      <FontProvider
        className='flex min-h-screen flex-col items-center justify-center gap-4'
        font={font}
      >
        <p className='text-4xl text-white'>
          You got {correct}/{TESTS_PER_DAY}.
        </p>
        <p className='text-4xl text-white'>
          Click <span className='text-[#39b54a]'>start</span> to move on to
          today&apos;s exercises.
        </p>
        <button
          onClick={() => handleClick()}
          className='h-12 rounded-full bg-white/20 p-4 py-2 text-3xl font-normal text-white'
        >
          Start
        </button>
      </FontProvider>
    </>
  )
}
