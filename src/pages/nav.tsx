import { type NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import { SignOutButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { SignIn } from '@clerk/clerk-react'
import { useUserStore } from '~/stores/userStore'
import SettingsButton from '~/componants/settingsbutton'
import type { Exercise, User } from '~/utils/types'
import { isAlreadyDone } from '~/utils/helpers'

function ExerciseView({ text, exercise, user }: { text: string, exercise: Exercise, user: User | undefined }) {

  if (!user) return (<></>)
  return (
    <p className='text-white md:text-2xl text-xl text-center'>
      {text + (isAlreadyDone(user, exercise) ? ' ✓' : '')}
    </p>
  )
}

export default function Page() {
  const buttonStyle =
    'text-white md:text-3xl bg-white/10 rounded-full p-4 h-16 hover:bg-white/20'

  const user = api.user.getUnique.useQuery().data
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const setUserStore = useUserStore((state) => state.setUser)
  const { data, isLoading } = api.user.getUnique.useQuery()

  const router = useRouter()

  const start = () => {
    router.replace('/loadnext').catch((err) => console.log(err))
  }

  const startTest = () => {
    router.replace('/instructions/speedtest').catch((err) => console.log(err))
  }

  const adminPage = () => {
    router.replace('/admin').catch((err) => console.log(err))
  }

  const AdminButton = () => {
    return (
      <button
        className={buttonStyle}
        onClick={() => adminPage()}
      >
        Admin Page
      </button>)
  }

  useEffect(() => {
    console.log(user)
    if (!user) return
    setIsAdmin(user.isAdmin)
    setUserStore(user)
  }, [user, isLoading, data, setUserStore])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SettingsButton />
      <SignedIn>
        <SignOutButton>
          <button className='text-white bg-black border-2 rounded-full p-2 hover:border-3 hover:bg-gray-500'>
            Sign Out
          </button>
        </SignOutButton>
        <main className='grid-col-2 flex min-h-screen flex-col items-center justify-center py-16'>
          <div className='container flex flex-col items-center justify-center gap-5 px-4'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-white md:text-4xl text-2xl text-center'>Daily Exercises:</p>
              <ExerciseView text='2 Moving Cubes' exercise='cubeByTwo' user={user as User} />
              <ExerciseView text='3 Moving Cubes' exercise='cubeByThree' user={user as User} />
              <ExerciseView text='4 by 1 Highlighter' exercise='fourByOne' user={user as User} />
              <ExerciseView text='1 by 1 Highlighter' exercise='oneByOne' user={user as User} />
              <ExerciseView text='1 by 2 Highlighter' exercise='oneByTwo' user={user as User} />
              <ExerciseView text='2 by 1 Highlighter' exercise='twoByOne' user={user as User} />
              <ExerciseView text='2 by 2 Highlighter' exercise='twoByTwo' user={user as User} />
              <ExerciseView text='Easy Schulte Table' exercise='schulteByThree' user={user as User} />
              <ExerciseView text='Intermediate Schulte Table' exercise='schulteByFive' user={user as User} />
              <ExerciseView text='Hard Schulte Table' exercise='schulteBySeven' user={user as User} />
              <ExerciseView text='Even Number Game' exercise='evenNumbers' user={user as User} />
              <ExerciseView text='Number Memory Game' exercise='numberGuesser' user={user as User} />
            </div>
            {
              user?.tested
                ? (
                  <button
                    className={buttonStyle}
                    onClick={() => start()}
                  >
                    Get Started
                  </button>
                )
                : (
                  <button
                    className={buttonStyle}
                    onClick={() => startTest()}
                  >
                    Test your progress
                  </button>
                )
            }
            {
              isAdmin ? (<AdminButton />) : (<></>)
            }
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
