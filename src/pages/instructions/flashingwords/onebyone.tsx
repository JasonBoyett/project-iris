import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useUserStore } from '~/stores/userStore'
import { FontProvider } from '~/cva/fontProvider'
import Sidebar from '~/componants/sidebar'
import FlasherStartButton from '~/componants/flasherstartbutton'
import type { Font } from '~/utils/types'

const INSTRUCTION_DELAY = 5_000

const Paragraph1 = () => {
  return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Follow the highlighted word with your eyes. This exercise is meant to
        help improve your ability to scan and focus as you read. Do not actively
        attempt to read the words, just follow the highligter. In order to get
        the most out of this exercise, try to stay relaxed and focused. The
        exercise will only be counted as completed if you do not navigate away
        from the page. The page will automatically navigate away and be counted
        as complete after one minute.
      </p>
    </div>
  )
}

const Page: NextPage = () => {
  const userStore = useUserStore()
  const [font, setFont] = useState<Font>('sans')
  const option = 'oneByOne'

  useEffect(() => {
    if (!userStore.user) return
    setFont(userStore.user.font)
  }, [userStore.user])

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 />
          <FlasherStartButton option={option} delay={INSTRUCTION_DELAY}/>
        </div>
      </FontProvider>
    </>
  )
}

export default Page
