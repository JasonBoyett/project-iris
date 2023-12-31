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
      <main className='flex grid-cols-1 justify-center items-center min-h-screen mt-8'>
        <div className='grid justify-center items-center'>
          <div className='flex justify-center items-center'>
            <Image
              src={Butterfly}
              alt='Butterfly'
              style={{ width: '24rem', height: '16rem' }}
            />
          </div>
          <p className='md:text-5xl text-2xl text-center text-white font-bold'>
            Click for your next exercise!
          </p>
          <div className='flex items-center justify-center p-12'>
            <button
              name='start'
              className='text-white md:text-5xl text-3xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
              onClick={() => {
                if(!data) return
                navigateToNextExercise(router as SingletonRouter,data)
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
