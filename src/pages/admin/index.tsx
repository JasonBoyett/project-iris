import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'

export default function Page() {
  const router = useRouter()
  const [approved, setApproved] = useState(false)
  const user = api.user.getUnique.useQuery().data

  function navToCreatQuestion() {
    router.push('/admin/createquestion').catch(err => console.log(err))
  }

  function navToTestExercise() {
    router.push('/admin/testexercise').catch(err => console.log(err))
  }


  function Display() {
    return (
      <>
        <HomeButton />
        <SettingsButton />
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-2">
          <button
            onClick={navToTestExercise}
            className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-2xl md:text-4xl font-normal'
          >
            Test Exercise
          </button>
          <button
            onClick={navToCreatQuestion}
            className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-2xl md:text-4xl font-normal'
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
        <HomeButton />
        <SettingsButton />
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <p className='text-white text-4xl font-normal'>Loading...</p>
        </div>
      </>
    )
  }

  useEffect(() => {
    if (!user) return
    if (!user.isAdmin) {
      router.push('/').catch(err => console.log(err))
    }
    else {
      setApproved(true)
    }
  }, [user])

  return approved ? <Display /> : <Loading />

}
