import type { User } from '@acme/types'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

/**
 * use this hook to manage the state of the user object in the user
 * @property user - the user object
 * @property setUser - a function to set the user object
 * there also exists a helper function called useMutateUser that will mutate the user object in the database and in the client at the same time
 */
export const useUserStore = create<{
  user: User | undefined
  setUser: (user: User) => void
}>()(
  persist(
    (set) => ({
      user: undefined,
      setUser: (userFromClient: User) => {
        return set((state) => ({ ...state, user: userFromClient }))
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useUserStore
