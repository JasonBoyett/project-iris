import { useRef, useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import { useRouter } from 'next/router'
import useUserStore from '../stores/userStore'
import { formatDate } from '@acme/helpers'
import useTimer from '../hooks/useTimer'

const CORRECT_INCREASE_SEGFIGS = 5
const INCORRECT_DECREASE_SEGFIGS = 3

function numberGen(segfigs: number) {
  return Math.floor(Math.random() * 10 ** segfigs).toString()
}

type NumberButtonProps = {
  number: number
  disabled?: boolean
  className?: string
  callBack: (arg: string) => void
}

function NumberButton({
  number,
  callBack,
  className,
  disabled = false,
}: NumberButtonProps) {
  function handleClick() {
    callBack(number.toString())
  }
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={className}
    >
      {number}
    </button>
  )
}

export default function NumberMatcher() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [guess, setGuess] = useState('')
  const numberCorrect = useRef(0)
  const numberIncorrect = useRef(0)
  const segFigs = useRef(0)
  const segFigsAtStart = useRef(0)
  const incrementCounter = useRef(0)
  const correctStreak = useRef(0)
  const longestStreak = useRef(0)
  const incorrectStreak = useRef(0)
  const { mutate } = trpc.user.set.useMutation()
  const userStore = useUserStore()
  const [target, setTarget] = useState<string>()
  const [showingTarget, setShowing] = useState(true)
  const user = trpc.user.get.useQuery()
  const eventName = 'teardown number matcher'
  const router = useRouter()
  const collectData = trpc.collect.numberGuesserSession.useMutation()
  const componantTimer = useTimer('minutes', 1, eventName)

  function handleCorrect() {
    incrementCounter.current += 1
    incorrectStreak.current = 0
    numberCorrect.current += 1
    correctStreak.current += 1
    if (correctStreak.current > longestStreak.current) {
      longestStreak.current = correctStreak.current
    }
    if (incrementCounter.current >= CORRECT_INCREASE_SEGFIGS) {
      segFigs.current += 1
      incrementCounter.current = 0
    }
    setGuess('')
    setTarget(numberGen(segFigs.current).toString())
    setShowing(true)
    setTimeout(() => setShowing(false), 1000)
  }

  function handleIncorrect() {
    incorrectStreak.current += 1
    incrementCounter.current = 0
    correctStreak.current = 0
    numberIncorrect.current += 1
    if (incorrectStreak.current >= INCORRECT_DECREASE_SEGFIGS) {
      segFigs.current -= 1
      incorrectStreak.current = 0
    }
    setGuess('')
    setTarget(numberGen(segFigs.current).toString())
    setShowing(true)
    setTimeout(() => setShowing(false), 1000)
  }

  function submit() {
    if (guess === target) {
      handleCorrect()
    } else {
      handleIncorrect()
    }
  }

  function teardown() {
    if (user.data) {
      if (user.data.isStudySubject) {
        collectData.mutate({
          userId: user.data.id,
          figuresAtStart: segFigsAtStart.current,
          figuresAtEnd: segFigs.current,
          numberCorrect: numberCorrect.current,
          numberWrong: numberIncorrect.current,
          longestStreak: longestStreak.current,
        })
      }
      mutate({
        ...user.data,
        lastNumberGuesser: formatDate(new Date()),
        numberGuesserFigures: segFigs.current,
      })
      userStore.setUser({
        ...user.data,
        lastNumberGuesser: formatDate(new Date()),
        numberGuesserFigures: segFigs.current,
      })
    }
    router.push('/next').catch(err => console.log(err))
  }

  useEffect(() => {
    if (!user.data) return
    setTarget((3).toString())
    setTimeout(() => setTarget((2).toString()), 1000)
    setTimeout(() => setTarget((1).toString()), 2000)
    setTimeout(() => setTarget('GO!'), 3000)
    setTimeout(() => {
      segFigs.current = user.data.numberGuesserFigures
      segFigsAtStart.current = user.data.numberGuesserFigures
      setTarget(numberGen(segFigs.current))
      componantTimer.start()
    }, 4000)
    setTimeout(() => {
      setShowing(false)
    }, 5000)
  }, [user.data])

  useEffect(() => {
    document.addEventListener(eventName, teardown)
    return () => {
      document.removeEventListener(eventName, teardown)
    }
  }, [])

  return (
    <div className='grid grid-cols-1 gap-1'>
      <div className='flex min-h-screen flex-col items-center justify-center gap-1'>
        <div className='flex h-24 w-full items-center justify-center rounded-lg bg-white/20  text-4xl text-white'>
          {showingTarget ? target : guess}
        </div>
        <div className='grid grid-cols-1 gap-1'>
          <div className='grid grid-cols-3 gap-1'>
            {numbers.map(number => (
              <NumberButton
                className='flex items-center justify-center rounded-lg bg-white/20 p-4 text-4xl text-white md:h-24 md:w-24'
                key={number}
                disabled={showingTarget}
                number={number}
                callBack={(arg: string) => setGuess(prev => prev + arg)}
              />
            ))}
            <button
              className='flex items-center justify-center rounded-lg bg-white/20 p-4 text-4xl text-white md:h-24'
              onClick={submit}
            >
              ✓
            </button>
            <NumberButton
              className='flex items-center justify-center rounded-lg bg-white/20 p-4 text-4xl text-white md:h-24'
              number={0}
              callBack={(arg: string) => setGuess(prev => prev + arg)}
            />
            <button
              className='flex items-center justify-center rounded-lg bg-white/20 p-4 text-4xl text-white md:h-24'
              onClick={() => setGuess(prev => prev.slice(0, -1))}
            >
              ⌫
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
