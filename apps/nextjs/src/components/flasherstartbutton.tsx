import { useRouter, type SingletonRouter } from 'next/router'
import type { HighlightType } from '@acme/types'
import { navigate } from '@acme/helpers'
import LoadingSpinner from '../components/loadingspinner'
import { useEffect, useState } from 'react'

export default function FlasherStartButton({
  option,
  delay,
}: {
  option: HighlightType
  delay: number
}) {
  const [time, setTime] = useState(false)
  const router = useRouter()

  const handleNavigation = () => {
    switch (option) {
      case 'fourByOne':
        navigate(router as SingletonRouter, '/exercises/flashfourbyone')
        break
      case 'oneByTwo':
        navigate(router as SingletonRouter, '/exercises/flashonebytwo')
        break
      case 'twoByTwo':
        navigate(router as SingletonRouter, '/exercises/flashtwobytwo')
        break
      case 'oneByOne':
        navigate(router as SingletonRouter, '/exercises/flashonebyone')
        break
      case 'twoByOne':
        navigate(router as SingletonRouter, '/exercises/flashtwobyone')
        break
      default:
        navigate(router as SingletonRouter, '/nav')
    }
  }

  useEffect(() => {
    setTimeout(() => setTime(true), delay)
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
