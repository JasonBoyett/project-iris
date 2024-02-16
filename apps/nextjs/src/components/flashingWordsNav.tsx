import { type SingletonRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import LoadingSpinner from './loadingspinner'
import { navigate } from '@acme/helpers'

const MINUTE_IN_MILLISECONDS = 60_000

export default function StartButton({ option }: { option: string }) {
  const [time, setTime] = useState(false)
  const router = useRouter()

  const handleNavigation = () => {
    switch (option) {
      case '4by1':
        navigate(router as SingletonRouter, '/exercises/flashfourbyone')
        break
      case '1by2':
        navigate(router as SingletonRouter, '/exercises/flashonebytwo')
        break
      case '2by2':
        navigate(router as SingletonRouter, '/exercises/flashtwobytwo')
        break
      case '1by1':
        navigate(router as SingletonRouter, '/exercises/flashonebyone')
        break
      case '2by1':
        navigate(router as SingletonRouter, '/exercises/flashtwobyone')
        break
      default:
        navigate(router as SingletonRouter, '/nav')
    }
  }

  useEffect(() => {
    setTimeout(() => setTime(true), MINUTE_IN_MILLISECONDS / 2)
  }, [])

  return time ? (
    <button
      className='flex h-16 w-60 items-center justify-center rounded-full bg-white/10 p-4 text-4xl text-white hover:bg-white/20 md:w-40 md:text-5xl'
      onClick={() => handleNavigation()}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}
