import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useUserStore } from '~/stores/userStore'
import { useSpeedTestStore } from '~/stores/useSpeedTestStore'
import { FontProvider } from '~/cva/fontProvider'
import type { SelectFont } from '~/utils/types'
import { TESTS_PER_DAY } from './index'
import Head from 'next/head'
import SettingsButton from '~/componants/settingsbutton'
import HomeButton from '~/componants/homebutton'
import { api } from '~/utils/api'
import { formatDate } from '~/utils/helpers'

const Result: NextPage = () => {
  const [correct, setCorrect] = useState(0)
  const [font, setFont] = useState<SelectFont>('sans')
  const router = useRouter()
  const userStore = useUserStore()
  const speedTestStore = useSpeedTestStore()
  const { mutate } = api.user.setUser.useMutation()

  const saveData = () => {
    //TODO create a data saving function in TRPC
    console.log('saving data')
  }

  const saveCompletionAndRaiseWpm = () => {
    //I know this function does two things.
    //I just don't want to make two api calls when I can make just one.
    if (!userStore.user) return
    mutate({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      currentWpm: userStore.user.maxWpm + 20,
      maxWpm: Math.floor(userStore.user.maxWpm / 0.9 / 10) * 10,
    })
    userStore.setUser({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
      currentWpm: userStore.user.maxWpm + 20,
      maxWpm: Math.floor(userStore.user.maxWpm / 0.9 / 10) * 10,
    })
  }
  const saveCompletion = () => {
    if (!userStore.user) return
    mutate({ ...userStore.user, lastSpeedTest: formatDate(new Date()) })
    userStore.setUser({
      ...userStore.user,
      lastSpeedTest: formatDate(new Date()),
    })
  }

  const saveUser = () => {
    if (!speedTestStore) return
    if (!userStore.user) return
    if (speedTestStore.correctResponses / TESTS_PER_DAY >= 0.9) {
      saveCompletionAndRaiseWpm()
    } else {
      saveCompletion()
    }
  }

  const handleClick = () => {
    saveData()
    saveUser()
    speedTestStore.clear()
    router.replace('/loadnext').catch(console.error)
  }

  useEffect(() => {
    if (!userStore.user) return
    if (!speedTestStore.current) return

    setCorrect(() => {
      if (!speedTestStore.current) return 0
      return speedTestStore.correctResponses
    })
  }, [userStore, speedTestStore])

  return (
    <>
      <SettingsButton />
      <HomeButton />
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
export default Result
