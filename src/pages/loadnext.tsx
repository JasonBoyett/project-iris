import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useUserStore from '~/stores/userStore'
import LoadingSpinner from 'src/componants/loadingspinner'
import type { User } from '~/utils/types'
import { api } from '~/utils/api'

const LoadNext: NextPage = () => {
  const router = useRouter()
  const store = useUserStore()
  const nextURL = api.nextExercise.get.useQuery(
    store.user as User, 
    {enabled: !!store.user}
  )

  useEffect(() => {
    if(nextURL.data){  
      router.replace(nextURL.data)
        .catch((err) => console.log(err))
    }  
    else if(nextURL.error){
      router.replace('/nav')
        .catch((err) => console.log(err))
    }
    else return
  }, [nextURL])

  return (
    <>
      <div className='flex min-h-screen items-center justify-center'>
        <LoadingSpinner />
      </div>
    </>
  )
}
export default LoadNext
