import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { SpeedTest } from '~/utils/types'

const emptySpeedTest: SpeedTest = {
  Id: 0,
  question: '',
  passage: '',
  answerA: '',
  answerB: '',
  answerC: '',
  answerD: '',
  correctAnswer: '',
}

export const useSpeedTestStore = create<{
  current: SpeedTest
  correctResponses: number
  totalResponses: number
  setUp: (speedTest: SpeedTest) => void
  setResponse: (anser: string) => void
  incrementResponseCount: () => void
  incrementCorrect: () => void
  clear: () => void
}>()(
  persist(
    (set) => ({
      current: emptySpeedTest,
      correctResponses: 0,
      totalResponses: 0,
      setUp: (speedTest) =>
        set((state) => ({
          ...state,
          current: {
            ...speedTest,
          },
            correctResponses: state.correctResponses,
            totalResponses: state.totalResponses
        })),
      setResponse: (answer) =>
        set((state) => ({ ...state, userAnswer: answer })),
      incrementResponseCount: () =>
        set((state) => {
          console.log("I was called")
          console.log(state.totalResponses)
          const res = {
            current: state.current,
            correctResponses: state.correctResponses,
            totalResponses: state.totalResponses + 1,
          }
          console.log("new", res)
          return res
        }),
      incrementCorrect: () =>
        set((state) => {
          const res = {
            current: state.current,
            correctResponses: state.correctResponses + 1,
            totalResponses: state.totalResponses,
          }
          console.log("new", res)
          return res
        }),
      clear: () => set(() => ({ 
        current: emptySpeedTest,
        totalResponses: 0,
        correctResponses: 0,
      })),
    }),
    {
      name: 'speed-test-store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export default useSpeedTestStore
