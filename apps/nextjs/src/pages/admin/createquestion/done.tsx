import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import Sidebar from '~/components/sidebar'

export default function Page() {
  const router = useRouter()
  const [approved, setApproved] = useState(false)
  const user = api.user.getUnique.useQuery().data

  const navToCreatQuestion = () => {
    router.push('/admin/createquestion').catch(err => console.log(err))
  }

  const navToAdmin = () => {
    router.push('/admin').catch(err => console.log(err))
  }

  function Display() {
    return (
      <>
        <Sidebar />
        <div className='flex min-h-screen flex-col items-center justify-center gap-4 py-2'>
          <p className='text-4xl font-normal text-white'>Question created!</p>
          <button
            onClick={navToCreatQuestion}
            className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-4xl font-normal text-white'
          >
            Create another question
          </button>
          <button
            onClick={navToAdmin}
            className='flex h-12 items-center rounded-full bg-white/20 p-4 py-2 text-4xl font-normal text-white'
          >
            Return to admin page
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

  return approved ? <Display /> : <Loading />
}
