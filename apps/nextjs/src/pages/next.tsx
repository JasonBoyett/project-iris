import Head from 'next/head'
import { type SingletonRouter, useRouter } from 'next/router'
import Image from 'next/image'
import Butterfly from 'public/flying-butterfly.gif'
import Sidebar from '../components/sidebar'
import { navigateToNextExercise } from '@acme/helpers'
import { trpc } from '../utils/trpc'

export default function Page() {
  const { data } = trpc.user.get.useQuery()
  const router = useRouter()

  return (
    <>
      <Head>Next Excercise</Head>
      <Sidebar />
      <main className='mt-8 flex min-h-screen grid-cols-1 items-center justify-center'>
        <div className='grid items-center justify-center'>
          <div className='flex items-center justify-center'>
            <Image
              src={Butterfly}
              alt='Butterfly'
              style={{ width: '24rem', height: '16rem' }}
            />
          </div>
          <p className='text-center text-2xl font-bold text-white md:text-5xl'>
            Click for your next exercise!
          </p>
          <div className='flex items-center justify-center p-12'>
            <button
              name='start'
              className='flex h-16 w-60 items-center justify-center rounded-full bg-white/10 p-4 text-3xl text-white hover:bg-white/20 md:w-40 md:text-5xl'
              onClick={() => {
                if (!data) return
                navigateToNextExercise(router as SingletonRouter, data)
              }}
            >
              Start
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
