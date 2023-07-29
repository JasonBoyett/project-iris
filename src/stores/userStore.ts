import type { User } from '~/utils/types'
import { useEffect, useState } from 'react'
import { create } from 'zustand'
import { api } from '~/utils/api'

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
  user: User | null
  /**
   * use this function to set the user object in the store
   * @param userFromClient - the new version of the user object
   */
  setUser: (user: User) => void
}>((set) => ({
  user: {
    Id: 'test',
    FirstName: 'test',
    LastName: 'User',
    MaxWpm: 250,
    CurrentWpm: 100,
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
    DarkMode: false,
    HighlightColor: 'GREY',
  },
  setUser: (userFromClient: User) => {
    return set((state) => ({ ...state, user: userFromClient }))
  },
}))

export default useUserStore
