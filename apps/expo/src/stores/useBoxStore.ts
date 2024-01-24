import { create } from 'zustand'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBoxStore = create<{
  current: number
  increment: () => void
  reset: () => void
}>()(
    set => ({
      current: 1,
      increment: () => set(state => ({ current: state.current + 1 })),
      reset: () => set({ current: 1 }),
    }),
)

export default useBoxStore
