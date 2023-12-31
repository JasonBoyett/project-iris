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
  const { mutate } = trpc.user.set.useMutation() 

  function saveData() {
    //TODO create a data saving function in TRPC
    console.log('saving data')
  }

  function getAvg(nums: number[]) {
    return nums.reduce(
      (previous, current) => (current += previous) / 2
    )
  }

  function getNewSpeed() {
    if (!userStore.user) return
    if (!speedTestStore) return
    if (speedTestStore.correctResponses === 0) return null
    if (speedTestStore.correctResponses >= GOOD_GRADE) {
      const avg = Math.floor(getAvg(speedTestStore.correctSpeeds) / 10) * 10
      return {
        max: avg,
        current: Math.floor(avg / 0.9 / 10) * 10
      }
    }
    else if (speedTestStore.correctResponses < FAILING_GRADE) {
      const maxSpeed = speedTestStore.correctSpeeds.sort().pop() as number
      return {
        max: maxSpeed,
        //this will get the highest speed the user got correct
        current: Math.floor(maxSpeed / 0.9 / 10) * 10
      }
    }
  }

  function saveCompletionAndRaiseWpm() {
    //I know this function does two things.
    //I just don't want to make two api calls when I can make just one.
    if (!userStore.user) return
    mutate({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      currentWpm: userStore.user.maxWpm + 20,
      maxWpm: Math.floor(userStore.user.maxWpm / 0.9 / 10) * 10,
      tested: true,
    })
    userStore.setUser({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      currentWpm: userStore.user.maxWpm + 20,
      maxWpm: Math.floor(userStore.user.maxWpm / 0.9 / 10) * 10,
      tested: true,
    })
  }

  function saveCompletion() {
    if (!userStore.user) return
    const newSpeed = getNewSpeed()
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
  }

  function saveUser() {
    if (!speedTestStore) return
    if (!userStore.user) return
    if (speedTestStore.correctResponses / TESTS_PER_DAY >= 0.9) {
      saveCompletionAndRaiseWpm()
    } else {
      saveCompletion()
    }
  }

  function handleClick() {
    if (!userStore.user) return
    saveData()
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
        className='flex flex-col gap-4 items-center justify-center min-h-screen'
        font={font}
      >
        <p className='text-white text-4xl'>
          You got {correct}/{TESTS_PER_DAY}.
        </p>
        <p className='text-white text-4xl'>
          Click <span className='text-[#39b54a]'>start</span> to move on to
          todays exercises.
        </p>
        <button
          onClick={() => handleClick()}
          className='bg-white/20 rounded-full p-4 h-12 py-2 font-normal text-white text-3xl'
        >
          Start
        </button>
      </FontProvider>
    </>
  )
}
