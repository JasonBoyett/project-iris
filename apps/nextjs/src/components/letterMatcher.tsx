import { useRef, useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import { type SingletonRouter, useRouter } from 'next/router'
import useUserStore from '../stores/userStore'
import { formatDate, navigate } from '@acme/helpers'
import useTimer from '../hooks/useTimer'
import type { Font } from '@acme/types'
import { FontProvider } from '../cva/fontProvider'
import { motion } from 'framer-motion'

function getLetter() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  return letters[Math.floor(Math.random() * letters.length)] as string
}

type LetterGridProps = {
  size: number
}

export default function LetterGrid({ size }: LetterGridProps) {
  const classNameCenter = 'text-green-500'
  const classNameHighlight = 'text-yellow-400'
  const signal = 'teardown letter matcher'
  const correctCount = useRef(0)
  const incorrectCount = useRef(0)
  const user = trpc.user.get.useQuery()
  const mutateUser = trpc.user.set.useMutation()
  const userStore = useUserStore()
  const collectData = trpc.collect.letterMatcherSession.useMutation()
  const [started, setStarted] = useState<boolean>(false)
  const [top, setTop] = useState<string>('●')
  const router = useRouter()
  const [bottom, setBottom] = useState<string>('●')
  const [left, setLeft] = useState<string>('●')
  const [right, setRight] = useState<string>('●')
  const timer = useTimer('minutes', 1, signal)
  const matching = useRef<boolean>(Math.random() < 0.5)
  const [showingTarget, setShowing] = useState<boolean>(false)
  const [font, setFont] = useState<Font>('sans' as Font)
  const grid = (() => {
    const grid = []
    for (let i = 0; i < size; i++) {
      const row = []
      for (let j = 0; j < size; j++) {
        if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
          row.push(<div className={classNameCenter}>⊚</div>)
        } else if (i === 0 && j === Math.floor(size / 2)) {
          row.push(
            <div className={classNameHighlight}>
              {!showingTarget ? '●' : top}
            </div>,
          )
        } else if (i === size - 1 && j === Math.floor(size / 2)) {
          row.push(
            <div className={classNameHighlight}>
              {!showingTarget ? '●' : bottom}
            </div>,
          )
        } else if (i === Math.floor(size / 2) && j === 0) {
          row.push(
            <div className={classNameHighlight}>
              {!showingTarget ? '●' : left}
            </div>,
          )
        } else if (i === Math.floor(size / 2) && j === size - 1) {
          row.push(
            <div className={classNameHighlight}>
              {!showingTarget ? '●' : right}
            </div>,
          )
        } else {
          row.push(<div>{!showingTarget ? '●' : getLetter()}</div>)
        }
      }
      grid.push(row)
    }
    return grid
  })()

  function handleClick(answer: boolean) {
    if (!started) {
      setStarted(() => true)
      timer.start()
      gameLoop()
      return
    }
    if (answer === matching.current) {
      correctCount.current += 1
    } else {
      incorrectCount.current += 1
    }
    gameLoop()
  }

  function teardown() {
    if (user.data) {
      collectData.mutate({
        userId: user.data.id,
        numberCorrect: correctCount.current,
        numberWrong: incorrectCount.current,
      })
      userStore.setUser({
        ...user.data,
        lastLetterMatcher: formatDate(new Date()),
      })
      mutateUser.mutate({
        ...user.data,
        lastLetterMatcher: formatDate(new Date()),
      })
    }
    navigate(router as SingletonRouter, '/next')
  }

  function gameLoop() {
    matching.current = Math.random() < 0.5
    console.log('triggerd')
    if (matching.current) {
      console.log('matching')
      const letter = getLetter()
      setTop(() => letter)
      setBottom(() => letter)
      setLeft(() => letter)
      setRight(() => letter)
    } else {
      console.log('not matching')
      setTop(() => getLetter())
      setBottom(() => getLetter())
      setLeft(() => getLetter())
      setRight(() => getLetter())
    }
    console.log(top, bottom, left, right)
    setShowing(() => true)
    setTimeout(() => setShowing(() => false), 500)
  }

  useEffect(() => {
    if (!user.data) return
    setFont(user.data.font)
    document.addEventListener(signal, teardown)
    return () => {
      document.removeEventListener(signal, teardown)
    }
  }, [user])

  useEffect(() => {
    setShowing(() => false)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='grid w-80 grid-cols-1 gap-3 md:w-auto'
    >
      <h1 className='text-center text-3xl text-white md:text-4xl'>
        {!started ? 'Press a button to start' : ' '}
      </h1>
      <FontProvider
        font={font}
        className={[
          'grid gap-3 md:gap-5',
          'border-2 p-3 text-white',
          'text-5xl md:text-6xlrounded-lg',
          'grid-cols-'  + size.toString(),
        ].join(' ')}
      >
        {grid}
      </FontProvider>
      <div className='grid grid-cols-2 items-center justify-center gap-2'>
        <button
          className='flex w-auto items-center justify-center rounded-lg bg-white/20 p-4 text-4xl text-white md:h-24'
          onClick={() => handleClick(true)}
        >
          ✓
        </button>
        <button
          className='flex w-auto items-center justify-center rounded-lg bg-white/20 p-4 text-4xl text-white md:h-24'
          onClick={() => handleClick(false)}
        >
          ⛔
        </button>
      </div>
    </motion.div>
  )
}
