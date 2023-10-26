import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import { useRouter } from 'next/router'
import Sidebar from '~/componants/sidebar'

export default function Page(){
  const router = useRouter()
  const [approved, setApproved] = useState(false)
  const user = api.user.getUnique.useQuery().data
  
  const navToCreatQuestion = () => {
    router.push('/admin/createquestion').catch(err => console.log(err))
  }

  const navToAdmin = () => {
    router.push('/admin').catch(err => console.log(err))
  }

  function Display(){
    return(
      <>
        <Sidebar />  
        <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
          <p className='text-white text-4xl font-normal'>Question created!</p>
          <button
            onClick={navToCreatQuestion}
            className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-4xl font-normal'
          >
            Create another question
          </button>
          <button
            onClick={navToAdmin}
            className='flex bg-white/20 rounded-full items-center p-4 h-12 py-2 text-white text-4xl font-normal'
          >
            Return to admin page
          </button>
        </div>
      </>
    )
  }

  function Loading(){
    return(
      <>
        <Sidebar />  
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <p className='text-white text-4xl font-normal'>Loading...</p>
        </div>
      </>
    )
  }

  useEffect(() => {
    if(!user) return
    if(!user.isAdmin){
      router.push('/').catch(err => console.log(err))
    }
    else{
      setApproved(true)
    }
  }, [user])

  return approved ? <Display /> : <Loading /> 

}
