import { useState } from 'react'
import useInterval from '@/hooks/useInterval'
import type { SpeedQuestion } from '@prisma/client'
import type { User } from '~/utils/types'
import { api } from '~/utils/api'
import useUserStore from '~/stores/userStore'
import { SingletonRouter, useRouter } from 'next/router'
import { formatDate, navigate, navigateToNextExercise } from '~/utils/helpers'

type QuestionViewProps = {
  speedQuestion: SpeedQuestion
  user: User | undefined
  doneSignal: () => void
}
function QuestionView({
  speedQuestion,
  user,
  doneSignal,
}: QuestionViewProps){
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
    if (isVisivle) setItteration((prev) => prev + 1)
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
  speedQuestion: SpeedQuestion
  user: User | undefined
}){
  const { mutate } = api.user.setUser.useMutation()
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

  function selectAnswer(answer: Answers){
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
          <p className=' font-medum text-xl md:text-2xl text-white justify-center'>
            {speedQuestion.question}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum text-xl md:text-2xl flex items-center justify-center text-yellow-300 bg-white/20 rounded-md w-14 h-12 p-5'
            onClick={() => selectAnswer(Answers.A)}
          >
            A)
          </button>
          <p className=' font-medum text-xl md:text-2xl text-white px-5'>
            {speedQuestion.answerA}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum text-xl md:text-2xl flex items-center justify-center text-yellow-300 bg-white/20 rounded-md w-14 h-12 p-5'
            onClick={() => selectAnswer(Answers.B)}
          >
            B)
          </button>
          <p className=' font-medum text-xl md:text-2xl text-white px-5'>
            {speedQuestion.answerB}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum text-xl md:text-2xl flex items-center justify-center text-yellow-300 bg-white/20 rounded-md w-14 h-12 p-5'
            onClick={() => selectAnswer(Answers.C)}
          >
            C)
          </button>
          <p className=' font-medum text-xl md:text-2xl text-white px-5'>
            {speedQuestion.answerC}
          </p>
        </div>
        <div className='flex items-center p-5'>
          <button
            className=' font-medum text-xl md:text-2xl flex items-center justify-center text-yellow-300 bg-white/20 rounded-md w-14 h-12 p-5'
            onClick={() => selectAnswer(Answers.D)}
          >
            D)
          </button>
          <p className=' font-medum text-xl md:text-2xl text-white px-5'>
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
  speedQuestion: SpeedQuestion
}){
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
