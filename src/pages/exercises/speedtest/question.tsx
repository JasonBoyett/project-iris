import { useState, useEffect } from 'react'
import { FontProvider } from '~/cva/fontProvider'
import { useUserStore } from '~/stores/userStore'
import { useSpeedTestStore } from '~/stores/useSpeedTestStore'
import SettingsButton from '~/componants/settingsbutton'
import HomeButton from '~/componants/homebutton'
import type { NextPage } from 'next'
import type { SpeedTest, SelectFont } from '~/utils/types'
import { TESTS_PER_DAY } from './index'
import { useRouter } from 'next/router'
import Head from 'next/head'

const Page: NextPage = () => {
  const exerciseStore = useSpeedTestStore((state) => state)
  const userStore = useUserStore((state) => state)
  const [answerA, setAnswerA] = useState('Loading..')
  const [answerB, setAnswerB] = useState('Loading..')
  const [answerC, setAnswerC] = useState('Loading..')
  const [answerD, setAnswerD] = useState('Loading..')
  const [question, setQuestion] = useState('Loading..')
  const [font, setFont] = useState<SelectFont>('sans')
  const router = useRouter()

  const handleClick = (answer: string) => {
    console.log('registered click')
    console.log('ran')
    exerciseStore.setResponse(answer)
    exerciseStore.incrementResponseCount()
    if (exerciseStore.current.correctAnswer === answer) {
      exerciseStore.incrementCorrect()
    }
    if (exerciseStore.totalResponses < TESTS_PER_DAY - 1) {
      router.replace('/exercises/speedtest').catch((err) => console.log(err))
    } else {
      router
        .replace('/exercises/speedtest/result')
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    if (!userStore.user) return
    if (!exerciseStore) return
    setQuestion(exerciseStore.current.question)
    setAnswerA(exerciseStore.current.answerA)
    setAnswerB(exerciseStore.current.answerB)
    setAnswerC(exerciseStore.current.answerC)
    setAnswerD(exerciseStore.current.answerD)
    setFont(userStore.user.font)
  }, [exerciseStore, userStore.user])

  return (
    <>
      <Head>Speed Test</Head>
      <HomeButton />
      <SettingsButton />
      <main className='flex items-center justify-center h-screen text-white'>
        <FontProvider
          className='flex flex-col gap-4 items-center justify-center'
          font={font}
        >
          <h1 className='text-4xl font-bold'>{question}</h1>
          <div className='grid gap-4'>
            <div className='flex items-center gap-2 text-yellow-400'>
              <button
                onClick={() => handleClick('A')}
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                A
              </button>
              <p className='text-white text-3xl'>{answerA}</p>
            </div>
            <div className='flex items-center gap-2 text-yellow-400'>
              <button
                onClick={() => handleClick('B')}
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                B
              </button>
              <p className='text-white text-3xl'>{answerB}</p>
            </div>
            <div className='flex items-center gap-2 text-yellow-400'>
              <button
                onClick={() => handleClick('C')}
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                C
              </button>
              <p className='text-white text-3xl'>{answerC}</p>
            </div>
            <div className='flex items-center gap-2 text-yellow-400'>
              <button
                onClick={() => handleClick('D')}
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                D
              </button>
              <p className='text-white text-3xl'>{answerD}</p>
            </div>
          </div>
        </FontProvider>
      </main>
    </>
  )
}
export default Page
