import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '~/componants/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { SelectFont } from '~/utils/types'
import { useRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import SettingsButton from "~/componants/settingsbutton";
import HomeButton from "~/componants/homebutton";

const INSTRUCTION_DELAY = 5_000

const Paragraph1 = () => {
  return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        You will be asked a series of questions to test your reading comprehension at different speeds.
        <span className='font-bold'>
        Remember to read the passage and answer the question based souly on the information provided.
        </span>
        Some questions may be contain information that is different from reality.
        You will be asked a total of 10 questions and if you can answer 8 of them correctly your maximum reading speed will be increased.
        Your maximum speed will not be decreased if you fail to answer 8 questions correctly.
        This test is designed for you to take twice a week to evaluate and set your progress.
        Remember to try to remain relaxed and focused while taking this test.
      </p>
    </div>
  )
}

const StartButton: React.FC = () => {
  const [time, setTime] = useState(false)
  const router = useRouter()

  const navigate = () => {
    router.replace('/exercises/speedtest').catch((err) => console.error(err))
  }

  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={() => navigate()}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}

const Page: NextPage = () => {
  const userStore = useUserStore()
  const [font, setFont] = useState<SelectFont>('sans')
  useEffect(() => {
    if(!userStore.user) return
    setFont(userStore.user.font)
  })

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <SettingsButton />
      <HomeButton />
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
