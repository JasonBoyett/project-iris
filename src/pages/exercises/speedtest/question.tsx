import { useState, useEffect } from 'react'
import { FontProvider } from '~/cva/fontProvider'
import { useUserStore } from '~/stores/userStore'
import { useSpeedTestStore } from '~/stores/useSpeedTestStore'
import type { Font } from '~/utils/types'
import { TESTS_PER_DAY } from './index'
import { type SingletonRouter, useRouter } from 'next/router'
import Head from 'next/head'
import Sidebar from '~/components/sidebar'
import { navigate } from '~/utils/helpers'

export default function Page() {
  const exerciseStore = useSpeedTestStore((state) => state)
  const userStore = useUserStore((state) => state)
  const [answerA, setAnswerA] = useState('Loading..')
  const [answerB, setAnswerB] = useState('Loading..')
  const [answerC, setAnswerC] = useState('Loading..')
  const [answerD, setAnswerD] = useState('Loading..')
  const [question, setQuestion] = useState('Loading..')
  const [font, setFont] = useState<Font>('sans')
  const [rate, setRate] = useState(0)
  const router = useRouter()

  function handleClick(answer: string) {
    if (!userStore.user) return
    console.log('registered click')
    console.log('ran')
    exerciseStore.setResponse(answer)
    exerciseStore.incrementResponseCount()
    if (exerciseStore.current.correctAnswer === answer) {
      exerciseStore.incrementCorrect(rate)
      userStore.setUser({
        ...userStore.user,
        testSpeed: rate + 10,
      })
    }
    else {
      userStore.setUser({
        ...userStore.user,
        testSpeed: rate - 10,
      })
    }
    if (exerciseStore.totalResponses < TESTS_PER_DAY - 1) {
      navigate(router as SingletonRouter, '/exercises/speedtest')
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
    setRate(userStore.user.testSpeed)
    setFont(userStore.user.font)
  }, [exerciseStore, userStore.user])

  return (
    <>
      <Head>Speed Test</Head>
      <Sidebar />
      <main className='flex items-center justify-center h-screen text-white'>
        <FontProvider
          className='flex flex-col gap-4 items-center w-2/3 justify-center'
          font={font}
        >
          <div className='text-4xl font-bold'>{question}</div>
          <div className='grid gap-4'>
            <div
              onClick={() => handleClick('A')}
              className='flex items-center gap-2 text-yellow-400 cursor-pointer'>
              <button
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                A
              </button>
              <p className='text-white text-3xl'>{answerA}</p>
            </div>
            <div
              onClick={() => handleClick('B')}
              className='flex items-center gap-2 text-yellow-400 cursor-pointer'>
              <button
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                B
              </button>
              <p className='text-white text-3xl'>{answerB}</p>
            </div>
            <div
              onClick={() => handleClick('C')}
              className='flex items-center gap-2 text-yellow-400 cursor-pointer'>
              <button
                className='text-4xl font-bold bg-white/20 px-4 py-2 rounded-md text-yellow-400'
              >
                C
              </button>
              <p className='text-white text-3xl'>{answerC}</p>
            </div>
            <div
              onClick={() => handleClick('D')}
              className='flex items-center gap-2 text-yellow-400 cursor-pointer'>
              <button
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
