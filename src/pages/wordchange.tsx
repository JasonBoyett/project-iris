import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'
import { useEffect, useState } from 'react'
import WordChanger from 'src/componants/wordchanger'
import { ChangerProps } from 'src/componants/wordchanger'

const words = ['this', 'is', 'a', 'test', 'of', 'the', 'word', 'changer']

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Speed Read</title>
            </Head>

            <div className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
                <WordChanger
                    wpm={200}
                    wordsPerCell={1}
                />
            </div>
        </>
    )
}
export default Page
