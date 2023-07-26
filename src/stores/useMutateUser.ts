import useUserStore from './userStore'
import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import type { User } from '@prisma/client'

const useMutateUser = () => {
  const [user, setUser] = useState<User | null>()
  const { mutate } = api.user.setUser.useMutation()
  useEffect(() => {
    const newUser = {
      //destructuring user object so TypeScript doesn't complain
      Id: user?.Id,
      FirstName: user?.FirstName,
      LastName: user?.LastName,
      CreatedAt: user?.CreatedAt,
      UpdatedAt: user?.UpdatedAt,
      MaxWpm: user?.MaxWpm,
      CurrentWpm: user?.CurrentWpm,
      HighlightColor: user?.HighlightColor,
      DarkMode: user?.DarkMode,
    }
    mutate(newUser)
  }, [user])
  const mutateUser = (newUser: User) => setUser(newUser)
  return { mutateUser }
}

export default useMutateUser
