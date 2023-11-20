import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '~/components/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { Font } from '~/utils/types'
import { type SingletonRouter, useRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import Sidebar from '~/components/sidebar'
import { navigate } from '~/utils/helpers'

const INSTRUCTION_DELAY = 5_000

function Paragraph1(){
  return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        As each box appears on the screen move your eyes to the center of the
        box. Do not actively attempt to read the words at the corners of the
        box. This exercise is meant to help improve your parifieral vision. In
        order to get the most out of this exercise, try to stay relaxed and
        focused. The exercise will only be counted as completed if you do not
        navigate away from the page. The page will automatically navigate away
        and be counted as complete after one minute.
      </p>
    </div>
  )
}

type BlockType = 'two' | 'three'

function typeToUrl(type: BlockType){
  switch(type){
    case 'two': return '/exercises/boxes?type=2'
    case 'three': return '/exercises/boxes?type=3'
    default: return '/exercises/boxes?type=2'
  }

}

function StartButton(){
  const [time, setTime] = useState(false)
  const router = useRouter()
  const params = router.query
  const type = params.type

  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={() => navigate(router as SingletonRouter, typeToUrl(type as BlockType))}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}

const Page: NextPage = () => {
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
