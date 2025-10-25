import Head from 'next/head'
import { useRouter } from 'next/router'
import Sidebar from '../components/sidebar'
import { trpc } from '../utils/trpc'
import { type SingletonRouter } from 'next/router'
import type { Exercise, User } from '@acme/types'
import {
  navigateToNextExercise,
  navigate,
  getAvailableExercises,
  isAlreadyDone,
  checkName,
} from '@acme/helpers'
import { useEffect, useState } from 'react'
import { useUserStore } from '../stores/userStore'
import { useClerk } from '@clerk/nextjs'

export default function Page() {
  const buttonStyle = [
    'text-white md:text-3xl text-2xl',
    'bg-white/10 rounded-full md:p-4',
    'p-2 md:h-16 h-12',
    'hover:bg-white/20',
  ].join(' ')
  const [isUsingChecklist, setIsUsingChecklist] = useState<boolean>(false)
  const setUserStore = useUserStore().setUser
  const { data, isLoading } = trpc.user.get.useQuery()
  const mutateUser = trpc.user.set.useMutation()
  const user = trpc.user.get.useQuery().data
  const router = useRouter()
  const auth = useClerk()

  const start = () => {
    if (!user) return
    navigateToNextExercise(router as SingletonRouter, user)
  }

  const startTest = () => {
    navigate(router as SingletonRouter, '/exercises/speedtest')
  }

  const adminPage = () => {
    navigate(router as SingletonRouter, '/admin')
  }

  function StartButton() {
    return user?.tested ? (
      <button
        className={buttonStyle}
        onClick={() => start()}
      >
        Get Started
      </button>
    ) : (
      <button
        className={buttonStyle}
        onClick={() => startTest()}
      >
        Test your progress
      </button>
    )
  }

  function AdminButton() {
    if (user?.isAdmin) {
      return (
        <button
          className={buttonStyle}
          onClick={() => adminPage()}
        >
          Admin Page
        </button>
      )
    } else return <></>
  }

  function ExerciseCounter() {
    if (!user) return <></>
    const availableExercises = getAvailableExercises(user)
    return (
      <div className='text-center text-2xl text-white md:text-4xl'>
        Remaining Daily Exercises:
        <div className='text-8xl text-yellow-400'>
          {(availableExercises?.length ?? 1) === 0
            ? 'Done!'
            : availableExercises?.length ?? 1}
        </div>
      </div>
    )
  }

  function CheckList() {
    type ExerciseViewProps = {
      text: string
      exercise: Exercise
      user: User | undefined
    }

    function ExerciseView({ text, exercise, user }: ExerciseViewProps) {
      if (!user) return <></>
      return (
        <p className='p-1 text-center text-xl text-white md:text-2xl'>
          {text + (isAlreadyDone(user, exercise) ? ' ✓' : '')}
        </p>
      )
    }

    return (
      <div className='flex flex-col items-center justify-center'>
        <p className='text-center text-2xl text-white md:text-4xl'>
          Daily Exercises:
        </p>
        <ExerciseView
          text='2 Moving Cubes'
          exercise='cubeByTwo'
          user={user as User}
        />
        <ExerciseView
          text='3 Moving Cubes'
          exercise='cubeByThree'
          user={user as User}
        />
        <ExerciseView
          text='4 by 1 Highlighter'
          exercise='fourByOne'
          user={user as User}
        />
        <ExerciseView
          text='1 by 1 Highlighter'
          exercise='oneByOne'
          user={user as User}
        />
        <ExerciseView
          text='1 by 2 Highlighter'
          exercise='oneByTwo'
          user={user as User}
        />
        <ExerciseView
          text='2 by 1 Highlighter'
          exercise='twoByOne'
          user={user as User}
        />
        <ExerciseView
          text='2 by 2 Highlighter'
          exercise='twoByTwo'
          user={user as User}
        />
        <ExerciseView
          text='Schulte Table'
          exercise='schulteTable'
          user={user as User}
        />
        <ExerciseView
          text='Even Number Game'
          exercise='evenNumbers'
          user={user as User}
        />
        <ExerciseView
          text='Number Memory Game'
          exercise='numberGuesser'
          user={user as User}
        />
        <ExerciseView
          text='Matching Letter Game'
          exercise='letterMatcher'
          user={user as User}
        />
        <ExerciseView
          text='Green Dot'
          exercise='greenDot'
          user={user as User}
        />
        <ExerciseView
          text='Word Pairs'
          exercise='wordPairs'
          user={user as User}
        />
      </div>
    )
  }

  function RemainingExercises() {
    if (isUsingChecklist) {
      return <CheckList />
    } else {
      return <ExerciseCounter />
    }
  }

  function ExerciseViewSwitcher() {
    return (
      <button
        className={[buttonStyle, 'absolute bottom-5 right-5'].join(' ')}
        onClick={() => {
          setIsUsingChecklist(!isUsingChecklist)
          mutateUser.mutate({ isUsingChecklist: !isUsingChecklist })
        }}
      >
        {isUsingChecklist ? 'Counter' : 'Check List'}
      </button>
    )
  }

  useEffect(() => {
    if (!user) return
    if (!checkName(user.firstName) || !checkName(user.lastName)) {
      navigate(router as SingletonRouter, '/setup')
    }
    setUserStore(user)
    setIsUsingChecklist(user.isUsingChecklist)
  }, [user, isLoading, data, setUserStore])

  useEffect(() => {
    if (auth.loaded) {
      if (!auth.session) return
      if (auth.session.status === 'active') {
        return
      } else {
        navigate(router as SingletonRouter, '/')
      }
    }
  }, [auth])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <>
        <ExerciseViewSwitcher />
        <main className='flex min-h-screen items-center justify-center py-16'>
          <Sidebar />
          <div className='flex flex-col items-center justify-center gap-5 px-4'>
            <RemainingExercises />
            <StartButton />
            <AdminButton />
          </div>
        </main>
      </>
    </>
  )
}
