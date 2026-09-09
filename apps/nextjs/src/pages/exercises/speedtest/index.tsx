import useInterval from '../../../hooks/useInterval'
import { useState, useEffect } from 'react'
import type { Font } from '@acme/types'
import useUserStore from '../../../stores/userStore'
import useSpeedTestStore from '../../../stores/useSpeedTestStore'
import { useRouter } from 'next/router'
import { trpc } from '../../../utils/trpc'
import Head from 'next/head'
import { FontProvider } from '../../../cva/fontProvider'
import Sidebar from '../../../components/sidebar'
import { userHilightToHex } from '@acme/helpers'

export const TESTS_PER_DAY = 10
const CPOUNTDOWN = 5

export default function Page() {
  const [hex, setHex] = useState<string>('#000000')
  const [words, setWords] = useState<string[]>([''])
  const [font, setFont] = useState<Font>('sans')
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState(100)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [countDownPosition, setCountDownPosition] = useState(CPOUNTDOWN)

  const setUser = useUserStore(state => state.setUser)
  const setUpSpeedTest = useSpeedTestStore(state => state.setUp)

  const { data } = trpc.excercise.getSingleSpeedTestProps.useQuery()
  const { data: user } = trpc.user.get.useQuery()

  const router = useRouter()

  function navigateToQuestion() {
    router
      .replace('/exercises/speedtest/question')
      .catch(err => console.log(err))
  }

  function wpmToMiliseconds(time: number) {
    return 60_000 / time
  }

  useEffect(() => {
    if (!data?.id || !user || !data.passage) return

    setWords(data.passage.split(' '))
    setCurrentIndex(0)
    setFont(user.font)
    setHex(userHilightToHex(user))
    setUser(user)
    setUpSpeedTest(data)
    setLoading(false)
    setTime(wpmToMiliseconds(user.testSpeed))
  }, [data, setUpSpeedTest, setUser, user])

  const current = countDownPosition > 0 
    ? countDownPosition 
    : words[currentIndex] ?? ''
  const previous = countDownPosition > 0 
    ? ''
    : words[currentIndex - 1] ?? ''
  const next = countDownPosition > 0 
    ? '' 
    : words[currentIndex + 1] ?? ''  

  useInterval(() => {
    if (loading) return
    if (countDownPosition) {
      setCountDownPosition(prev => prev - 1)
      return
    }


    if (currentIndex >= words.length - 1) {
      navigateToQuestion()
      return
    }

    setCurrentIndex(prev => prev + 1)
  }, time)

  return (
    <>
      <Head>
        <title>Speed Test</title>
      </Head>

      <Sidebar />

      <main>
        <center>
          <FontProvider
            className="flex h-screen items-center justify-center"
            font={font}
          >
            <div className="flex w-5/6 flex-col items-center justify-center gap-4 rounded-xl bg-white p-4 md:w-2/3">
              <h1 className="text-center text-4xl">
                {previous}
              </h1>

              <h1
                className={`text-center text-4xl bg-[${hex}] w-5/6 rounded-xl md:w-1/3`}
              >
                {current}
              </h1>

              <h1 className="text-center text-4xl">
                {next}
              </h1>
            </div>
          </FontProvider>
        </center>
      </main>
    </>
  )
}
