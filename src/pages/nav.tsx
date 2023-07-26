import { type NextPage } from 'next'
import { useEffect, useContext, useState } from 'react'
import Head from 'next/head'
import { api } from '~/utils/api'
import { userContext } from '~/pages/_app'
import { useRouter } from 'next/router'
import { SignOutButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { SignIn } from '@clerk/clerk-react'
import { useUserStore } from '~/stores/userStore'
import { Overlay } from '@prisma/client'

const Page: NextPage = () => {
  const buttonStyle =
    'text-white md:text-3xl bg-white/10 rounded-full p-4 h-16 hover:bg-white/20'

  const user = api.user.getUnique.useQuery().data
  const setUserStore = useUserStore((state) => state.setUser)
  const { data, error, isLoading } = api.user.getUnique.useQuery()

  const router = useRouter()

  const opentTest = () => {
    router.replace('/speedtest').catch((err) => console.log(err))
  }

  const schulteOpen = () => {
    router.replace('/schulte').catch((err) => console.log(err))
  }

  const openFlashFourByOne = () => {
    router.replace('/flashfourbyone').catch((err) => console.log(err))
  }

  const openOneByTwo = () => {
    router.replace('/flashonebytwo').catch((err) => console.log(err))
  }

  const openTwoByTwo = () => {
    router.replace('/flashtwobytwo').catch((err) => console.log(err))
  }

  const openOneByOne = () => {
    router.replace('/flashonebyone').catch((err) => console.log(err))
  }
  const openEvensAndOdds = () => {
    router.replace('/evennumbers').catch((err) => console.log(err))
  }

  useEffect(() => {
    setUserStore({
      Id: user?.Id as string,
      FirstName: user?.FirstName as string,
      LastName: user?.LastName as string,
      MaxWpm: user?.MaxWpm as number,
      CurrentWpm: user?.CurrentWpm as number,
      CreatedAt: user?.CreatedAt as Date,
      UpdatedAt: user?.UpdatedAt as Date,
      DarkMode: user?.DarkMode as boolean,
      HighlightColor: user?.HighlightColor as Overlay,
    })
  }, [user, isLoading, data])

  return (
    <>
      <Head>
        <title>Select a game</title>
      </Head>
      <SignedIn>
        <SignOutButton>
          <button className='border text-white bg-black border-2 rounded-full p-2 hover:border-3 hover:bg-gray-500'>
            Sign Out
          </button>
        </SignOutButton>
        <main className='grid-col-2 flex grid min-h-screen flex-col items-center justify-center py-16'>
          <div className='container flex flex-col items-center justify-center gap-5 px-4'>
            <button
              className={buttonStyle}
              onClick={schulteOpen}
            >
              Schulte Table
            </button>
            <button
              className={buttonStyle}
              onClick={opentTest}
            >
              Speed Test
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
      </SignedIn>
      <SignedOut>
        <main className='flex min-h-screen items-center justify-center'>
          <SignIn />
        </main>
      </SignedOut>
    </>
  )
}
export default Page
