import { Timer } from "~/utils/timer"
import { useRef, useEffect, useState } from "react"
import { api } from "~/utils/api"
import { useRouter } from "next/router"
import useUserStore from "~/stores/userStore"
import { formatDate } from "~/utils/helpers"

const CORRECT_INCREASE_SEGFIGS = 5
const INCORRECT_DECREASE_SEGFIGS = 3

function numberGen(segfigs: number){
  return Math.floor(Math.random() * (10 ** segfigs))
}

function wpmToSingleTick(wpm: number) {
  return 60000 / wpm
}

type NumberButtonProps = {
  number: number
  disabled?: boolean
  className: string
  callBack: (arg: string) => void
}

function NumberButton({ number, callBack, className, disabled=false }: NumberButtonProps) {
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
  const [guess, setGuess] = useState('')
  const segFigs = useRef(0)
  const correctStreak = useRef(0)
  const incorrectStreak = useRef(0)
  const { mutate } = api.user.setUser.useMutation()
  const userStore = useUserStore()
  const [target, setTarget] = useState(numberGen(segFigs.current).toString())
  const [showingTarget, setShowing] = useState(true)
  const user = api.user.getUnique.useQuery()
  const router = useRouter()
  let timer: Timer
  let componantTimer: Timer
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  function handleFlash(){
    setShowing(false)
  }

  function handleCorrect(){
    console.log('correct') 
    console.log("guess: " + guess, "target: " + target)
    console.log("streak: ", correctStreak)
    correctStreak.current += 1
    incorrectStreak.current = 0
    if(correctStreak.current >= CORRECT_INCREASE_SEGFIGS){
      segFigs.current += 1
      correctStreak.current = 0
    }
    setGuess('')
    setTarget(numberGen(segFigs.current).toString())
    setShowing(true)
    timer.restart()
  }

  function handleIncorrect(){
    console.log('incorrect')
    console.log("guess: " + guess, "target: " + target)
    console.log("streak: ", correctStreak)
    incorrectStreak.current += 1
    correctStreak.current = 0
    if(incorrectStreak.current >= INCORRECT_DECREASE_SEGFIGS){
      segFigs.current -= 1
      incorrectStreak.current = 0
    }
    setGuess('')
    setTarget(numberGen(segFigs.current).toString())
    setShowing(true)
    timer.restart()
  }

  function submit(){
    if(guess === target){
      handleCorrect()
    } else {
      handleIncorrect()
    }
  }

  function teardown(){
    if(!user.data) return
    //TODO add session data tracking here
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
    router.push('/loadnext').catch((err) => console.log(err))
  }

  useEffect(() => {
    if(!user.data) return 
    segFigs.current = user.data.numberGuesserFigures
    timer = new Timer(
     "milliseconds",
      wpmToSingleTick(user.data.currentWpm / 4),
      handleFlash
    )
    componantTimer = new Timer(
     "minutes",
      1,
      teardown
    )
    componantTimer.start()
    timer.start()
  }, [user])

  return (
    <div className='grid grid-cols-1 gap-1'>
    <div className='flex flex-col items-center justify-center min-h-screen gap-1'>
    <div className='flex items-center justify-center rounded-lg bg-white/20 w-full md:h-24  text-4xl text-white'>
          {
            showingTarget 
              ? target
              : guess
          }
    </div>
      <div className='grid grid-cols-1 gap-1'>
        <div className="grid grid-cols-3 gap-1">
          {numbers.map((number) => (
            <NumberButton
              className='flex bg-white/20 items-center justify-center rounded-lg p-4 md:h-24 md:w-24 text-white text-4xl'
              key={number}
              disabled={showingTarget}
              number={number}
              callBack={ (arg: string) => setGuess((prev) => prev + arg) }
            />
          ))}
          <button
            className='flex bg-white/20 items-center justify-center rounded-lg p-4 md:h-24 text-white text-4xl'
            onClick={submit}
          >
            ✓
          </button>
          <NumberButton
            className='flex bg-white/20 items-center justify-center rounded-lg p-4 md:h-24 text-white text-4xl'
            number={0}
            callBack={ (arg: string) => setGuess((prev) => prev + arg) }
          />
          <button
            className='flex bg-white/20 items-center justify-center rounded-lg p-4 md:h-24 text-white text-4xl'
            onClick={() => setGuess((prev) => prev.slice(0, -1))}
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
