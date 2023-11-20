import { useState, useEffect } from 'react'
import Head from 'next/head'
import LoadingSpinner from '~/components/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { Font } from '~/utils/types'
import { type SingletonRouter, useRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import Sidebar from '~/components/sidebar'
import { navigate } from '~/utils/helpers'

const INSTRUCTION_DELAY = 5_000

function Paragraph1() {
  return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Focust on the green dot at the center of the screen. 
        <span className='font-bold'>
          Do not attempt to read the words on the page.
        </span>
        Simply focus on the green dot and attempt to keep as much of the text in your
        peripheral vision as possible.
      </p>
    </div>
  )
}

function StartButton() {
  const [time, setTime] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={() => navigate(router as SingletonRouter, '/exercises/greendot')}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}

function Page() {
  const userStore = useUserStore()
  const [font, setFont] = useState<Font>('sans')
  useEffect(() => {
    if(!userStore.user) return
    setFont(userStore.user.font)
  })

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 />
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}

export default Page
