import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useUserStore from '~/stores/userStore'
import { getNextExercise } from '~/utils/helpers'
import LoadingSpinner from 'src/componants/loadingspinner'
import type { Exercise } from '~/utils/types'
import { api } from '~/utils/api'

const LoadNext: NextPage = () => {
  const router = useRouter()
  const dbUser = api.user.getUnique.useQuery().data
  const store = useUserStore()
  const user = store.user
  const selectedExercise = (nextExercise: Exercise | undefined | null) => {
    if (!nextExercise) {
      router.replace('/done').catch((err) => console.log(err))
      return
    }
    switch (nextExercise) {
      case null || undefined:
        router.replace('/nav').catch((err) => console.log(err))
        break
      case 'numberGuesser':
        router
          .replace('/exercises/numbermatcher')
          .catch((err) => console.log(err))
        break
      case 'fourByOne':
        router
          .replace('/instructions/flashingwords/fourbyone')
          .catch((err) => console.log(err))
        break
      case 'oneByTwo':
        router
          .replace('/instructions/flashingwords/onebytwo')
          .catch((err) => console.log(err))
        break
      case 'twoByTwo':
        router
          .replace('/instructions/flashingwords/twobytwo')
          .catch((err) => console.log(err))
        break
      case 'oneByOne':
        router
          .replace('/instructions/flashingwords/onebyone')
          .catch((err) => console.log(err))
        break
      case 'twoByOne':
        router
          .replace('/instructions/flashingwords/twobyone')
          .catch((err) => console.log(err))
        break
      case 'schulteByThree':
        router.replace('exercises/schulteby3').catch((err) => console.log(err))
        break
      case 'schulteByFive':
        router.replace('/exercises/schulteby5').catch((err) => console.log(err))
        break
      case 'schulteBySeven':
        router.replace('exercises/schulteby7').catch((err) => console.log(err))
        break
      case 'evenNumbers':
        router
          .replace('/exercises/evennumbers')
          .catch((err) => console.log(err))
        break
      case 'cubeByTwo':
        router.replace('/exercises/cubebytwo').catch((err) => console.log(err))
        break
      case 'cubeByThree':
        router
          .replace('/exercises/cubebythree')
          .catch((err) => console.log(err))
        break
      default:
        router.replace('/done').catch((err) => console.log(err))
        break
    }
  }

  useEffect(() => {
    if (!user) {
      router.replace('/nav').catch((err) => console.log(err))
      return
    }
    const nextExercise: Exercise | null | undefined = getNextExercise(user)
    if(dbUser){
      if (dbUser.firstName !== '' || dbUser.lastName !== ''){
        selectedExercise(nextExercise)
        return
      }
    }
    else if(store.user?.firstName !== '' || store.user?.lastName !== ''){
      selectedExercise(nextExercise)
      return
    } else {
      router.replace('/setup').catch((err) => console.log(err))
      return
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
