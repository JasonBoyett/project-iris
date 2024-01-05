import { SingletonRouter, useRouter } from 'next/router'
import Sidebar from '../../components/sidebar'
import { useClerk } from '@clerk/nextjs'
import { trpc } from '../../utils/trpc'
import { navigate } from '@acme/helpers'
import { useEffect } from 'react'

export default function Page() {
  const router = useRouter()
  const auth = useClerk()

  function NavButton({ path, text }: { path: string; text: string }) {
    return (
      <button
        onClick={() => navigate(router as SingletonRouter, path)}
        className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-2xl font-normal text-white md:text-4xl'
      >
        {text}
      </button>
    )
  }

  useEffect(() => {
    if (auth.loaded) {
      if (!auth.session) return
      if (auth.session.status === 'active') {
        return
      } else {
        navigate(router as SingletonRouter, '/')
      }
    }
  }, [auth])

  return (
    <>
      <div className='min-h-screen items-center justify-center'>
        <Sidebar />
        <div className='flex min-h-screen flex-col items-center justify-center gap-2 py-2'>
          <NavButton
            path='/exercises/speedtest'
            text='Speed Test'
          />
          <NavButton
            path='/exercises/boxes?type=3'
            text='Boxes by 3'
          />
          <NavButton
            path='/exercises/boxes?type=2'
            text='Boxes by 2'
          />
          <NavButton
            path='/exercises/evennumbers'
            text='Even Numbers'
          />
          <NavButton
            path='/exercises/flashfourbyone'
            text='Flash 4 by 1'
          />
          <NavButton
            path='/exercises/flashonebyone'
            text='Flash 1 by 1'
          />
          <NavButton
            path='/exercises/flashonebytwo'
            text='Flash 1 by 2'
          />
          <NavButton
            path='/exercises/flashtwobytwo'
            text='Flash 2 by 2'
          />
          <NavButton
            path='/exercises/flashtwobyone'
            text='Flash 2 by 1'
          />
          <NavButton
            path='/exercises/numbermatcher'
            text='Number Match'
          />
          <NavButton
            path='/exercises/schultetable?type=3'
            text='Schulte Table by 3'
          />
          <NavButton
            path='/exercises/schultetable?type=5'
            text='Schulte Table by 5'
          />
          <NavButton
            path='/exercises/schultetable?type=7'
            text='Schulte Table by 7'
          />
          <NavButton
            path='/exercises/lettermatcher'
            text='Matching Letters Game'
          />
          <NavButton
            path='/exercises/greendot'
            text='Green Dot'
          />
          <NavButton
            path='/exercises/wordpairs'
            text='Word Pairs'
          />
        </div>
      </div>
    </>
  )
}
