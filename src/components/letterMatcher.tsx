import { useRef, useEffect, useState } from "react"
import { api } from "~/utils/api"
import { SingletonRouter, useRouter } from "next/router"
import useUserStore from "~/stores/userStore"
import { formatDate, navigate } from "~/utils/helpers"
import useTimer from '~/hooks/useTimer'
import type { Font } from "~/utils/types"
import { FontProvider } from "~/cva/fontProvider"
import { motion } from "framer-motion"

function getLetter() {
  const letters = "abcdefghijklmnopqrstuvwxyz"
  return letters[Math.floor(Math.random() * letters.length)] as string
}

type LetterGridProps = {
  size: number
}


export default function LetterGrid({ size }: LetterGridProps) {
  const classNameCenter = "text-green-500"
  const classNameHighlight = "text-yellow-400"
  const signal = "teardown letter matcher"
  const correctCount = useRef(0)
  const incorrectCount = useRef(0)
  const user = api.user.getUnique.useQuery()
  const mutateUser = api.user.setUser.useMutation()
  const userStore = useUserStore()
  const collectData = api.letterMatcherSession.setUnique.useMutation()
  const [started, setStarted] = useState<boolean>(false)
  const [top, setTop] = useState<string>('●')
  const router = useRouter()
  const [bottom, setBottom] = useState<string>('●')
  const [left, setLeft] = useState<string>('●')
  const [right, setRight] = useState<string>('●')
  const timer = useTimer(
    "minutes",
    1,
    signal,
  )
  const matching = useRef<boolean>(Math.random() < 0.5)
  const [showingTarget, setShowing] = useState<boolean>(false)
  const [font, setFont] = useState<Font>('sans' as Font)
  const grid = (() => {
    const grid = []
    for (let i = 0; i < size; i++) {
      const row = []
      for (let j = 0; j < size; j++) {
        if (i === Math.floor(size / 2) && j === Math.floor(size / 2)) {
          row.push(
            <div
              className={classNameCenter}>
              ⊚
            </div>
          )
        }
        else if (i === 0 && j === Math.floor(size / 2)) {
          row.push(
            <div
              className={classNameHighlight}
            >
              {
                !showingTarget
                  ? '●'
                  : top
              }
            </div>)
        }
        else if (i === (size - 1) && j === Math.floor(size / 2)) {
          row.push(
            <div
              className={classNameHighlight}
            >
              {
                !showingTarget
                  ? '●'
                  : bottom
              }
            </div>)
        }
        else if (i === Math.floor(size / 2) && j === 0) {
          row.push(
            <div
              className={classNameHighlight}
            >
              {
                !showingTarget
                  ? '●'
                  : left
              }
            </div>)
        }
        else if (i === Math.floor(size / 2) && j === (size - 1)) {
          row.push(
            <div
              className={classNameHighlight}
            >
              {
                !showingTarget
                  ? '●'
                  : right
              }
            </div>)
        }
        else {
          row.push(
            <div>
              {
                !showingTarget
                  ? '●'
                  : getLetter()
              }
            </div>)
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
    }
    else {
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
    }
    else {
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
      className='grid grid-cols-1 gap-3'>
      <h1 className='md:text-4xl text-3xl text-white text-center'>
        {
          !started
            ? 'Press a button to start'
            : ' '
        }
      </h1>
      <FontProvider
        font={font}
        className={'grid md:gap-5 gap-3 border-2 p-3 text-white md:text-6xl text-5xl rounded-lg grid-cols-' + size.toString()}>
        {grid}
      </FontProvider>
      <div className='grid grid-cols-2 justify-center items-center gap-2'>
        <button
          className='flex bg-white/20 items-center justify-center rounded-lg p-4 md:h-24 w-auto text-white text-4xl'
          onClick={() => handleClick(true)}>
          ✓
        </button>
        <button
          className='flex bg-white/20 items-center justify-center rounded-lg p-4 md:h-24 w-auto text-white text-4xl'
          onClick={() => handleClick(false)}>
          ⛔
        </button>
      </div>
    </motion.div>
  )
}
