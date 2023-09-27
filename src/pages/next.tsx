import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Butterfly from 'public/flying-butterfly.gif'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'

export default function Page() {
  const router = useRouter()

  return (
    <>
      <Head>Next Excercise</Head>
      <HomeButton />
      <SettingsButton />
      <main className='flex grid-cols-1 justify-center items-center min-h-screen mt-8'>
        <div className='grid justify-center items-center'>
          <div className='flex justify-center items-center'>
            <Image
              src={Butterfly}
              alt='Butterfly'
              style={{ width: '24rem', height: '16rem' }}
            />
          </div>
          <p className='md:text-5xl text-4xl text-center text-white font-bold'>
            Click for your next exercise!
          </p>
          <div className='flex items-center justify-center p-12'>
            <button
              name='start'
              className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
              onClick={() => {
                router.replace('/loadnext').catch((err) => console.error(err))
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
