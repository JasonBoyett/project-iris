import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useUserStore from '~/stores/userStore'
import { getNextExercise } from '~/utils/helpers'
import LoadingSpinner from 'src/componants/loadingspinner'
import { Exercise } from '~/utils/types'
import { api } from '~/utils/api'

const LoadNext: NextPage = () => {
  const router = useRouter()
  const user = api.user.getUnique.useQuery().data
  const store = useUserStore()
  const setUserStore = useUserStore((state) => state.setUser)
  const selectedExercise = (nextExercise: Exercise | undefined | null) => {
  if (!nextExercise) {
      router.replace('/done').catch((err) => console.log(err))
      return
    }
    switch (nextExercise) {
      case null || undefined:
        router.replace('/nav').catch((err) => console.log(err))
        break
      case 'FOUR_BY_ONE':
        router.replace('/exercises/flashfourbyone').catch((err) => console.log(err))
        break
      case 'ONE_BY_TWO':
        router.replace('/exercises/flashonebytwo').catch((err) => console.log(err))
        break
      case 'TWO_BY_TWO':
        router.replace('/exercises/flashtwobytwo').catch((err) => console.log(err))
        break
      case 'ONE_BY_ONE':
        router.replace('/exercises/flashonebyone').catch((err) => console.log(err))
        break
      case 'SCHULTE_BY_THREE':
        router.replace('exercises/schulteby3').catch((err) => console.log(err))
        break
      case 'SCHULTE_BY_FIVE':
        router.replace('/exercises/schulteby5').catch((err) => console.log(err))
        break
      case 'SCHULTE_BY_SEVEN':
        router.replace('exercises/schulteby7').catch((err) => console.log(err))
        break
      case 'TWO_BY_ONE':
        router.replace('/exercises/flashtwobyone').catch((err) => console.log(err))
        break
      case 'SPEED_TEST':
        router.replace('/exercises/speedtest').catch((err) => console.log(err))
        break
      case 'EVEN_NUMBERS':
        router.replace('/exercises/evennumbers').catch((err) => console.log(err))
        break
    }
  }


  useEffect(() => {
    if (!user) {
      router.replace('/nav').catch((err) => console.log(err))
      return
    }
    const nextExercise: Exercise | null | undefined = getNextExercise(user)
    if (user.FirstName !== '' || user.LastName !== ''){
      setUserStore(user)
      selectedExercise(nextExercise)
      return
    }
    else if(store.user?.FirstName !== '' || store.user?.LastName !== ''){
      selectedExercise(nextExercise)
      return
    }
    else {
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
