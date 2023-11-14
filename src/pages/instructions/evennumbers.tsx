import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '~/components/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { Font } from '~/utils/types'
import { useRouter, type SingletonRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import Sidebar from '~/components/sidebar'
import { navigate } from '~/utils/helpers'

const INSTRUCTION_DELAY = 5_000

const Paragraph1 = () => {
  return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        <span className='font-bold'>
          The goal of this exercise is for you to find the six even numbers in
          the table.
        </span>
        <br />
        There is no time limit, though your time will be recorded to track your
        progression. so try to go as quickly as you can while remaining
        accurate. This exercise is designed to help you improve your ability to
        focus and your perception. Try to stay relaxed and focused while you are
        doing this exercise. It is up to you how you want to approach this
        exercise. But we reccomend for you to either search the table row by row
        or column by column.
      </p>
    </div>
  )
}

const StartButton: React.FC = () => {
  const [time, setTime] = useState(false)
  const router = useRouter()


  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={ () => navigate(router as SingletonRouter, '/exercises/evennumbers') }
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
