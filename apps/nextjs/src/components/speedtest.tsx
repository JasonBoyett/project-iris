import { useState } from 'react'
import useInterval from '../hooks/useInterval'
import type { SpeedTest } from '@acme/types'
import type { User } from '@acme/types'
import { trpc } from '../utils/trpc'
import useUserStore from '../stores/userStore'
import { type SingletonRouter, useRouter } from 'next/router'
import { formatDate, navigate } from '@acme/helpers'

type QuestionViewProps = {
  speedQuestion: SpeedTest
  user: User | undefined
  doneSignal: () => void
}
function QuestionView({ speedQuestion, user, doneSignal }: QuestionViewProps) {
  const formattedQuestion = speedQuestion.passage.split(' ')
  const [currentWord, setCurrentWord] = useState(formattedQuestion[0])
  const isVisivle = true
  const [itteration, setItteration] = useState(0)

  const setSpeed = () => {
    if (!user) return 60_000 / 200
    return 60_000 / user.currentWpm
  }

  useInterval(() => {
    if (!user) console.log('User not found')
    if (isVisivle) setItteration(prev => prev + 1)
    if (itteration >= formattedQuestion.length) {
      doneSignal()
    }
    setCurrentWord(formattedQuestion[itteration])
  }, setSpeed())
  return (
    <>
      <div>
        <p className=' font-medum sm:text-3xl'>{currentWord}</p>
      </div>
    </>
  )
}

function AnswerView({
  speedQuestion,
  user,
}: {
  speedQuestion: SpeedTest
  user: User | undefined
}) {
  const { mutate } = trpc.user.set.useMutation()
  const store = useUserStore()
  const router = useRouter()
  const [correctOrNot, setCorrectOrNot] = useState(
    <>
      <div>
        <p />
      </div>
    </>,
  )
  enum Answers {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
  }

  function selectAnswer(answer: Answers) {
    if (answer === speedQuestion.correctAnswer.toUpperCase()) {
      setCorrectOrNot(
        <>
          <div className='flex items-center justify-center'>
            <p className='font-medum text-3xl text-[#39b54a]'>Correct! 🤩</p>
          </div>
        </>,
      )
      if (!user) return
      mutate({
        maxWpm: user.maxWpm + 10,
        currentWpm: (() => {
          const roundedCurrentWpm =
            Math.round(((user.maxWpm + 10) * 0.9) / 10) * 10
          return roundedCurrentWpm
        })(),
        lastSpeedTest: formatDate(new Date()),
      })
      store.setUser({
        ...user,
        maxWpm: user.maxWpm + 10,
        currentWpm: (() => {
          const roundedCurrentWpm =
            Math.round(((user.maxWpm + 10) * 0.9) / 10) * 10
          return roundedCurrentWpm
        })(),
        lastSpeedTest: formatDate(new Date()),
      })
    } else {
      setCorrectOrNot(
        <>
          <div className='flex items-center justify-center'>
            <p className='font-medum text-3xl text-red-600'>Incorrect 😭</p>
          </div>
        </>,
      )
      if (!user) return
      mutate({
        currentWpm: user.currentWpm - 10,
        lastSpeedTest: formatDate(new Date()),
      })
    }
    setTimeout(() => {
      navigate(router as SingletonRouter, '/next')
    }, 1500)
  }

  return (
    <>
      <div>
        {correctOrNot}
        <div className='flex items-center justify-center p-5'>
          <p className=' font-medum justify-center text-xl text-white md:text-2xl'>
            {speedQuestion.question}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum flex h-12 w-14 items-center justify-center rounded-md bg-white/20 p-5 text-xl text-yellow-300 md:text-2xl'
            onClick={() => selectAnswer(Answers.A)}
          >
            A)
          </button>
          <p className=' font-medum px-5 text-xl text-white md:text-2xl'>
            {speedQuestion.answerA}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum flex h-12 w-14 items-center justify-center rounded-md bg-white/20 p-5 text-xl text-yellow-300 md:text-2xl'
            onClick={() => selectAnswer(Answers.B)}
          >
            B)
          </button>
          <p className=' font-medum px-5 text-xl text-white md:text-2xl'>
            {speedQuestion.answerB}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum flex h-12 w-14 items-center justify-center rounded-md bg-white/20 p-5 text-xl text-yellow-300 md:text-2xl'
            onClick={() => selectAnswer(Answers.C)}
          >
            C)
          </button>
          <p className=' font-medum px-5 text-xl text-white md:text-2xl'>
            {speedQuestion.answerC}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum flex h-12 w-14 items-center justify-center rounded-md bg-white/20 p-5 text-xl text-yellow-300 md:text-2xl'
            onClick={() => selectAnswer(Answers.D)}
          >
            D)
          </button>
          <p className=' font-medum px-5 text-xl text-white md:text-2xl'>
            {speedQuestion.answerD}
          </p>
        </div>
      </div>
    </>
  )
}

export default function SpeedTest({
  user,
  speedQuestion,
}: {
  user: User | undefined
  speedQuestion: SpeedTest
}) {
  const [isAnswerTime, setIsAnswerTime] = useState(false)
  return (
    <>
      {isAnswerTime ? (
        <AnswerView
          speedQuestion={speedQuestion}
          user={user}
        />
      ) : (
        <QuestionView
          user={user}
          speedQuestion={speedQuestion}
          doneSignal={() => setIsAnswerTime(true)}
        />
      )}
    </>
  )
}
