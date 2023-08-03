import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useUserStore from '~/stores/userStore'
import { getNextExercise } from '~/utils/helpers'
import LoadingSpinner from 'src/componants/loadingspinner'
import type { User } from '~/utils/types'
import { Exercise } from '~/utils/types'
import { api } from '~/utils/api'

const LoadNext: NextPage = () => {
  const router = useRouter()
  const user = api.user.getUnique.useQuery<User>().data
  const setUserStore = useUserStore((state) => state.setUser)

  useEffect(() => {
    if (!user) {
      router.push('/nav').catch((err) => console.log(err))
      return
    }
    setUserStore(user)
    const nextExercise: Exercise | null | undefined = getNextExercise(user)
    console.log('user: ', user)
    console.log(nextExercise)
    console.log('even numbers: ', user.LastEvenNumbers)
    if (!nextExercise) {
      console.log('came back null')
      router.push('/done').catch((err) => console.log(err))
      return
    }
    switch (nextExercise) {
      case null || undefined:
        console.log('came back null')
        router.push('/nav').catch((err) => console.log(err))
        break
      case 'FOUR_BY_ONE':
        console.log('came back 4x1')
        router.push('/flashfourbyone').catch((err) => console.log(err))
        break
      case 'ONE_BY_TWO':
        console.log('came back 1x2')
        router.push('/flashonebytwo').catch((err) => console.log(err))
        break
      case 'TWO_BY_TWO':
        console.log('came back 2x2')
        router.push('/flashtwobytwo').catch((err) => console.log(err))
        break
      case 'ONE_BY_ONE':
        console.log('came back 1x1')
        router.push('/flashonebyone').catch((err) => console.log(err))
        break
      case 'SCHULTE':
        console.log('came back schulte')
        router.push('/schulte').catch((err) => console.log(err))
        break
      case 'TWO_BY_ONE':
        console.log('came back 2x1')
        router.push('/flashtwobyone').catch((err) => console.log(err))
        break
      case 'SPEED_TEST':
        console.log('came back speedtest')
        router.push('/speedtest').catch((err) => console.log(err))
        break
      case 'EVEN_NUMBERS':
        console.log('came back evennumbers')
        router.push('/evennumbers').catch((err) => console.log(err))
        break
    }
  }, [])

  return (
    <>
      <div className='flex min-h-screen items-center justify-center'>
        <LoadingSpinner />
      </div>
    </>
  )
}
export default LoadNext
