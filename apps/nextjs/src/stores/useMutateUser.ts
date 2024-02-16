import useUserStore from './userStore'
import { useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import type { User } from '@acme/types'

const useMutateUser = () => {
  const store = useUserStore()
  const [user, setUser] = useState<User | null>()
  const { mutate } = trpc.user.set.useMutation()
  useEffect(() => {
    if (!user) return
    mutate(user)
    store.setUser(user)
  }, [user])
  const mutateUser = (newUser: User) => setUser(newUser)
  return { mutateUser }
}

export default useMutateUser
