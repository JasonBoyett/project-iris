import { create } from 'zustand'

export const usePairsStore = create<{
  correct: number
  errors: number
  incrementCorrect: () => void
  incrementErrors: () => void
}>()(set => ({
  correct: 0,
  errors: 0,
  incrementCorrect: () => set(state => ({ correct: state.correct + 1 })),
  incrementErrors: () => set(state => ({ errors: state.errors + 1 })),
}))

export default usePairsStore

export type PairsStore = typeof usePairsStore
