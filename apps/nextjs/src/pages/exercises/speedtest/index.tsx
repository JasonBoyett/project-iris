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

export default function Page() {
  const [counter, setCounter] = useState(0)
  const [hex, setHex] = useState<string>('#000000')
  const [words, setWords] = useState<string[]>([''])
  const [font, setFont] = useState<Font>('sans')
  const userStore = useUserStore((state) => state)
  const exerciseStore = useSpeedTestStore((state) => state)
  const [loading, setLoading] = useState(true)
  const [time, setTime] = useState(100)
  const [previous, setPrevious] = useState<string>('')
  const [next, setNext] = useState<string>('')
  const [current, setCurrent] = useState('Loading...')
  const { data } = trpc.excercise.getSingleSpeedTestProps.useQuery() 
  const router = useRouter()

  function navigateToQuestion() {
    router
      .replace('/exercises/speedtest/question')
      .catch((err) => console.log(err))
  }

  function wpmToMiliseconds(time: number) {
    return 60_000 / time
  }

  useEffect(() => {
    if (!data) return
    if (!data.id) return
    if (!userStore.user) return
    if (!data.passage) return
    setWords(() => {
      if (!data.passage) return ['']
      return data.passage.split(' ')
    })
    setFont(userStore.user.font)
    setHex(userHilightToHex(userStore.user))
    exerciseStore.setUp(data)
    setLoading(() => false)
    setTime(wpmToMiliseconds(userStore.user.testSpeed))
  }, [data, userStore.user])

  useInterval(() => {
    if (!!loading) return
    if (counter === words.length) return navigateToQuestion()
    setPrevious((): string => {
      if (!words.at(counter - 1)) return ''
      return words.at(counter - 1) as string
    })
    setCurrent((): string => {
      if (!words.at(counter)) return ''
      return words.at(counter) as string
    })
    setNext((): string => {
      if (!words.at(counter + 1)) return ''
      return words.at(counter + 1) as string
    })
    setCounter((prev) => prev + 1)
  }, time)

  return (
    <>
      <Head>Speed Test</Head>
      <Sidebar />

      <main>
        <center>
          <FontProvider
            className='h-screen flex items-center justify-center'
            font={font}
          >
            <div
              className='flex flex-col gap-4 items-center md:w-2/3 w-5/6 bg-white rounded-xl justify-center p-4'
            >
              <h1 className='text-4xl text-center'>{previous}</h1>
              <h1 className={ `text-4xl text-center bg-[${ hex }] md:w-1/3 w-5/6 rounded-xl` }>{current}</h1>
              <h1 className='text-4xl text-center'>{next}</h1>
            </div>
          </FontProvider>
        </center>
      </main>
    </>
  )
}
