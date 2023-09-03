import { motion } from 'framer-motion'
import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState, useContext } from 'react'
import { EvensAndOdds } from 'src/componants/evensandodds'
import { useSwitcher } from '@/hooks/useSwitcher'
import SettingsButton from '~/componants/settingsbutton'
import HomeButton from '~/componants/homebutton'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import { formatDate } from '~/utils/helpers'
import { useUserStore } from '~/stores/userStore'
const MINUTE_TO_MILLIS = 60_000

export type framesContextType = {
  framesCleared: number
  setFramesCleared: React.Dispatch<React.SetStateAction<number>>
}
export const framesContext = React.createContext<framesContextType>({
  framesCleared: 0,
  setFramesCleared: () => {
    /*empty on purpose*/
  },
})

const Page: NextPage = () => {
  const [framesCleared, setFramesCleared] = useState<number>(0)
  const { mutate } = api.user.setUser.useMutation()
  const router = useRouter()
  const store = useUserStore()
  const user = store.user
  const tearDown = () => {
    mutate({ lastEvenNumbers: formatDate(new Date()) })
    if (!user) return
    else store.setUser({ ...user, lastEvenNumbers: formatDate(new Date()) })
    router.replace('/next').catch((err) => console.log(err))
  }
  const display = useSwitcher(
    <EvensAndOdds
      evens={6}
      rows={8}
      cols={5}
      segFigs={4}
      framesCleared={framesCleared}
      frameSetter={setFramesCleared}
    />,
    <>
      <div className='flex-grid grid-cols-1 items-center justify-center'>
        <div className='text-3xl text-white'>
          {framesCleared === 1
            ? 'You cleared 1 frame'
            : `You cleared ${framesCleared} frames`}
        </div>
        <button
          onClick={() => tearDown()}
          className='text-white md:text-4xl text-3xl bg-white/10 flex items-center justify-center rounded-full p-4 hover:bg-white/20'
        >
          Next Exercise
        </button>
      </div>
    </>,
    MINUTE_TO_MILLIS,
  )
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <SettingsButton />
      <HomeButton />
      <div className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
        {display}
      </div>
    </>
  )
}
export default Page
