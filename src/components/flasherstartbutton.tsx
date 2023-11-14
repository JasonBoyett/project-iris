import { useRouter, type SingletonRouter } from 'next/router'
import type { HighlightType } from '~/utils/types'
import { navigate } from '~/utils/helpers'
import LoadingSpinner from '~/components/loadingspinner'
import { useEffect, useState } from 'react'

export default function FlasherStartButton({ option, delay }: { option: HighlightType, delay: number }){
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
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={() => handleNavigation()}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}
