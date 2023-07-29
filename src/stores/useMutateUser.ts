import useUserStore from './userStore'
import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import type { User } from '~/utils/types'

const useMutateUser = () => {
  const store = useUserStore()
  const [user, setUser] = useState<User | null>()
  const { mutate } = api.user.setUser.useMutation()
  useEffect(() => {
    if(!user) return
    mutate(user)
    store.setUser(user)
  }, [user])
  const mutateUser = (newUser: User) => setUser(newUser)
  return { mutateUser }
}

export default useMutateUser
