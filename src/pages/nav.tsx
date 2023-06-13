import { type NextPage } from 'next'
import { h, Fragment } from 'preact'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'

const Page: NextPage = () => {
    const buttonStyle =
        'border text-white bg-black border-2 rounded-lg p-2 hover:border-3 hover:bg-gray-500'
    const schulteOpen = () => {
        window.open('/schulte', '_self')
    }

    const openFlashFourByOne = () => {
        window.open('/flashfourbyone', '_self')
    }

    const openOneByTwo = () => {
        window.open('/flashonebytwo', '_self')
    }

    const openTwoByTwo = () => {
        window.open('/flashtwobytwo', '_self')
    }

    const openOneByOne = () => {
        window.open('/flashonebyone', '_self')
    }
    const openEvensAndOdds = () => {
        window.open('/evennumbers', '_self')
    }

    return (
        <>
            <Head>
                <title>Select a game</title>
            </Head>
            <main className='grid-col-2 flex grid min-h-screen flex-col items-center justify-center'>
                <div className='container flex flex-col items-center justify-center gap-2 px-4 py-16'>
                    <button
                        className={buttonStyle}
                        onClick={schulteOpen}
                    >
                        Schulte Table
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={openFlashFourByOne}
                    >
                        Flashing Grid Four by One
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={openOneByTwo}
                    >
                        Flashing Grid One by Two
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={openTwoByTwo}
                    >
                        Flashing Grid Two by Two
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={openOneByOne}
                    >
                        Flashing Grid One by One
                    </button>
                    <button
                        className={buttonStyle}
                        onClick={openEvensAndOdds}
                    >
                        Even Numbers
                    </button>
                </div>
            </main>
        </>
    )
}
export default Page
