import { motion } from 'framer-motion'
import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState, useContext } from 'react'
import { EvensAndOdds } from 'src/componants/evensandodds'
import InstructionsPage from 'src/componants/instructionPages/pages/evennumbers'
import type { instructionsPageProps } from 'src/componants/instructionPages/pages/evennumbers'
import { useSwitcher } from '../hooks/useSwitcher'
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
    const [instructionsOpen, setInstructionsOpen] = useState<boolean>(false)
    const [framesCleared, setFramesCleared] = useState<number>(0)
    const display = useSwitcher(
        <framesContext.Provider value={{ framesCleared, setFramesCleared }}>
            <EvensAndOdds
                evens={6}
                rows={8}
                cols={5}
                segFigs={4}
            />
        </framesContext.Provider>,
        <>
            <div className='flex-grid grid-cols-1'>
                <div className='text-3xl text-white'>Done!</div>
                <div className='text-3xl text-white'>
                    You cleared {framesCleared} frames
                </div>
            </div>
        </>,
        MINUTE_TO_MILLIS,
    )
    return (
        <>
            <Head>
                <title>Speed Read</title>
            </Head>
            <button 
            onClick={() => setInstructionsOpen(!instructionsOpen)}
            className='absolute top-0 right-0 m-4 text-3xl text-white border-white border-2 rounded-lg'
            >
              Instructions
            </button>

            <div className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
        {<InstructionsPage isOpen={instructionsOpen} handleClose={() => setInstructionsOpen(false)}/>}
            </div>
        </>
    )
}
export default Page
