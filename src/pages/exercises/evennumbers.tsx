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
  const tearDown = () => {
    mutate({ LastEvenNumbers: formatDate(new Date()) })
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
      <div className='flex-grid grid-cols-1'>
        <div className='text-3xl text-white'>Done!</div>
        <div className='text-3xl text-white'>
          {framesCleared === 1
            ? 'You cleared 1 frame'
            : `You cleared ${framesCleared} frames`}
        </div>
        <button onClick={() => tearDown()}>Done</button>
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
