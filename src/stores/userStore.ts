import type { User } from '~/utils/types'
import { create } from 'zustand'

/**
 * use this hook to manage the state of the user object in the user
 * @property user - the user object
 * @property setUser - a function to set the user object
 * there also exists a helper function called useMutateUser that will mutate the user object in the database and in the client at the same time
 */
export const useUserStore = create<{
  /**
   * The single source of truth for the user object
   */
  user: User | null | undefined
  /**
   * use this function to set the user object in the store
   * @param userFromClient - the new version of the user object
   */
  setUser: (user: User | undefined) => void
}>((set) => ({
  user: null,
  setUser: (userFromClient: User | undefined) => {
    return set((state) => ({ ...state, user: userFromClient }))
  },
}))

export default useUserStore
