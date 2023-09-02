import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '~/componants/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { SelectFont } from '~/utils/types'
<<<<<<< HEAD
import { fontSelector } from '~/utils/helpers'
import { useRouter } from 'next/router'
import { FontProvider } from '~/cva/fontProvider'
import SettingsButton from '~/componants/settingsbutton'
import HomeButton from '~/componants/homebutton'
=======
import { useRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import SettingsButton from "~/componants/settingsbutton";
import HomeButton from "~/componants/homebutton";
>>>>>>> 8556d45 ("beginning large refactor")

const MINUTE_IN_MILLISECONDS = 60_000

const Paragraph1 = () => {
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

const StartButton: React.FC = () => {
  const [time, setTime] = useState(false)
  const router = useRouter()

  const navigate = () => {
    router.replace('/exercises/evennumbers').catch((err) => console.error(err))
  }

  useEffect(() => {
    setTimeout(() => setTime(true), MINUTE_IN_MILLISECONDS / 2)
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
<<<<<<< HEAD
    if (!userStore.user) return
    setFont(fontSelector(userStore.user))
=======
    if(!userStore.user) return
    setFont(userStore.user.font)
>>>>>>> 8556d45 ("beginning large refactor")
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
