import Head from 'next/head'
import React, { useState } from 'react'
import EvensAndOdds from 'src/componants/evensandodds'
import SettingsButton from '~/componants/settingsbutton'
import HomeButton from '~/componants/homebutton'

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

export default function Page(){
  const [framesCleared, setFramesCleared] = useState<number>(0)
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <SettingsButton />
      <HomeButton />
      <div className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
    <EvensAndOdds
      evens={6}
      rows={8}
      cols={5}
      segFigs={4}
      framesCleared={framesCleared}
      frameSetter={setFramesCleared}
    />
      </div>
    </>
  )
}
