import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCubeStore = create<{
  current: number
  increment: () => void
  reset: () => void
}>()(
  persist((set) => ({
    current: 1,
    increment: () => set((state) => ({ current: state.current + 1 })),
    reset: () => set({ current: 0 }),
  }), {
    name: 'cube-state',
    storage: createJSONStorage(() => sessionStorage),
  }
  )
)



export default useCubeStore
