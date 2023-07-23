import { type NextPage } from 'next'
import { h, Fragment } from 'preact'
import { useState, useEffect, useContext, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'
import { userContext } from '~/pages/_app'
import userType from '~/pages/_app'
import { useRouter } from 'next/router'
import { SignOutButton } from '@clerk/nextjs'

const Page: NextPage = () => {
  const buttonStyle =
    'border text-white bg-black border-2 rounded-lg p-2 hover:border-3 hover:bg-gray-500'

  const context = useContext(userContext)
  const user = api.user.getDebug.useQuery().data

  const router = useRouter()

  const schulteOpen = () => {
    window.open('/schulte', '_self')
  }

  const openFlashFourByOne = () => {
    router.push('/flashfourbyone').catch((err) => console.log(err))
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

  useEffect(() => {
    console.log('context', context.state, 'user', user)
    context.set({ ...context.state, ...user })
  }, [user])

  return (
    <>
      <Head>
        <title>Select a game</title>
      </Head>
      <SignOutButton>
        <button className='border text-white bg-black border-2 rounded-lg p-2 hover:border-3 hover:bg-gray-500'>
          Sign Out
        </button>
      </SignOutButton>
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
