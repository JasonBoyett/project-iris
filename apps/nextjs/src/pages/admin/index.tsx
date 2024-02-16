import { useEffect, useState } from 'react'
import { trpc } from '../../utils/trpc'
import { SingletonRouter, useRouter } from 'next/router'
import Sidebar from '../../components/sidebar'
import { useClerk } from '@clerk/nextjs'
import { navigate } from '@acme/helpers'

export default function Page() {
  const router = useRouter()
  const [approved, setApproved] = useState(false)
  const user = trpc.user.get.useQuery().data
  const auth = useClerk()

  function navToCreatQuestion() {
    router.push('/admin/createquestion').catch(err => console.log(err))
  }

  function navToTestExercise() {
    router.push('/admin/testexercise').catch(err => console.log(err))
  }

  function Display() {
    return (
      <>
        <Sidebar />
        <div className='flex min-h-screen flex-col items-center justify-center gap-2 py-2'>
          <button
            onClick={navToTestExercise}
            className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-2xl font-normal text-white md:text-4xl'
          >
            Test Exercise
          </button>
          <button
            onClick={navToCreatQuestion}
            className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-2xl font-normal text-white md:text-4xl'
          >
            Create Speed Test Question
          </button>
        </div>
      </>
    )
  }

  function Loading() {
    return (
      <>
        <Sidebar />
        <div className='flex min-h-screen flex-col items-center justify-center py-2'>
          <p className='text-4xl font-normal text-white'>Loading...</p>
        </div>
      </>
    )
  }

  useEffect(() => {
    if (!user) return
    if (!user.isAdmin) {
      router.push('/').catch(err => console.log(err))
    } else {
      setApproved(true)
    }
  }, [user])

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

  return approved ? <Display /> : <Loading />
}
