import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '~/componants/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { SelectFont } from '~/utils/types'
import { fontSelector } from '~/utils/helpers'
import { useRouter } from 'next/router'
import { FontProvider } from '~/cva/fontProvider'
import SettingsButton from '~/componants/settingsbutton'
import HomeButton from '~/componants/homebutton'

const MINUTE_IN_MILLISECONDS = 60_000

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

const StartButton = ({ option }: { option: string }) => {
  const [time, setTime] = useState(false)
  const router = useRouter()

  const navigate = () => {
    switch (option) {
      case '4by1':
        router
          .replace('/exercises/flashfourbyone')
          .catch((err) => console.log(err))
        break
      case '1by2':
        router
          .replace('/exercises/flashonebytwo')
          .catch((err) => console.log(err))
        break
      case '2by2':
        router
          .replace('/exercises/flashtwobytwo')
          .catch((err) => console.log(err))
        break
      case '1by1':
        router
          .replace('/exercises/flashonebyone')
          .catch((err) => console.log(err))
        break
      case '2by1':
        router
          .replace('/exercises/flashtwobyone')
          .catch((err) => console.log(err))
        break
      default:
        router.replace('/nav').catch((err) => console.log(err))
    }
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
  const router = useRouter()
  const option = '1by1'

  useEffect(() => {
    if (!userStore.user) return
    setFont(fontSelector(userStore.user))
  }, [userStore.user])

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <SettingsButton />
      <HomeButton />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 />
          <StartButton option={option} />
        </div>
      </FontProvider>
    </>
  )
}

export default Page
