import { type NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import { SignOutButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { SignIn } from '@clerk/clerk-react'
import { useUserStore } from '~/stores/userStore'
import type { User } from '~/utils/types'

const Page: NextPage = () => {
  const buttonStyle =
    'text-white md:text-3xl bg-white/10 rounded-full p-4 h-16 hover:bg-white/20'

  const user = api.user.getUnique.useQuery().data
  const setUserStore = useUserStore((state) => state.setUser)
  const { data, isLoading } = api.user.getUnique.useQuery()

  const router = useRouter()

  const start = () => {
    router.replace('/loadnext').catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log(user)
    if(!user) return 
    setUserStore(user)
  }, [user, isLoading, data, setUserStore])

  return (
    <>
      <Head>
        <title>Select a game</title>
      </Head>
      <SignedIn>
        <SignOutButton>
          <button className='text-white bg-black border-2 rounded-full p-2 hover:border-3 hover:bg-gray-500'>
            Sign Out
          </button>
        </SignOutButton>
        <main className='grid-col-2 flex grid min-h-screen flex-col items-center justify-center py-16'>
          <div className='container flex flex-col items-center justify-center gap-5 px-4'>
            <button
              className={buttonStyle}
              onClick={() => start()}
            >
              Get Started
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
