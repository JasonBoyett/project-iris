import useInterval from '~/hooks/useInterval'
import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import type { SelectFont, SpeedTest } from '~/utils/types'
import useUserStore from '~/stores/userStore'
import useSpeedTestStore from '~/stores/useSpeedTestStore'
import { useRouter } from 'next/router'
import { api } from '~/utils/api'
import Head from 'next/head'
import { FontProvider } from '~/cva/fontProvider'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'

export const TESTS_PER_DAY = 10

const Page: NextPage = () => {
  const [counter, setCounter] = useState(0)
  const [words, setWords] = useState<string[]>([''])
  const [font, setFont] = useState<SelectFont>('sans')
  const userStore = useUserStore((state) => state)
  const exerciseStore = useSpeedTestStore((state) => state)
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState(100)
  const [display, setDisplay] = useState('Loading...')
  const { data } = api.getExcerciseProps.getSingleSpeedTestProps.useQuery()
  const router = useRouter()

  const navigateToQuestion = () => {
    router
      .replace('/exercises/speedtest/question')
      .catch((err) => console.log(err))
  }

  const wpmToMiliseconds = (time: number) => {
    return 60_000 / time
  }

  useEffect(() => {
<<<<<<< HEAD
    if (!data) return
    if (!data.Id) return
    if (!userStore.user) return
    if (!data.passage) return
    setWords(() => {
      if (!data.passage) return ['']
      return data.passage.split(' ')
    })
    setFont(fontSelector(userStore.user))
    exerciseStore.setUp(data as SpeedTest)
    setLoading(() => false)
    setTime(wpmToMiliseconds(userStore.user.CurrentWpm))
  }, [data, userStore.user])

=======
    if(!data) return
    if(!data.id) return
    if(!userStore.user) return
    if(!data.passage) return
    setWords(() => {
      if(!data.passage) return ['']
      return data.passage.split(' ')
    })
    setFont(userStore.user.font)
    exerciseStore.setUp(data)
    setLoading(() => false)
    setTime(wpmToMiliseconds(userStore.user.currentWpm))
  },[data, userStore.user])
  
>>>>>>> 8556d45 ("beginning large refactor")
  useInterval(() => {
    if (!!loading) return
    if (counter === words.length) return navigateToQuestion()
    setDisplay((): string => {
      if (!words.at(counter)) return ''
      return words.at(counter) as string
    })
    setCounter((prev) => prev + 1)
    console.log(words.length)
  }, time)

  return (
    <>
      <Head>Speed Test</Head>
      <HomeButton />
      <SettingsButton />

      <main>
        <FontProvider
          className='h-screen flex items-center justify-center'
          font={font}
        >
          <h1 className='text-4xl text-center text-white'>{display}</h1>
        </FontProvider>
      </main>
    </>
  )
}
export default Page
