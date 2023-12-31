import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { SpeedTest } from '~/utils/types'

const emptySpeedTest: SpeedTest = {
  id: 0,
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
  correctSpeeds: number[]
  setUp: (speedTest: SpeedTest) => void
  setResponse: (anser: string) => void
  incrementResponseCount: () => void
  incrementCorrect: (speed: number) => void
  clear: () => void
}>()(
  persist(
    (set) => ({
      current: emptySpeedTest,
      correctResponses: 0,
      correctSpeeds: [],
      totalResponses: 0,
      setUp: (speedTest) =>
        set((state) => ({
          ...state,
          current: {
            ...speedTest,
          },
          correctResponses: state.correctResponses,
          totalResponses: state.totalResponses,
        })),
      setResponse: (answer) =>
        set((state) => ({ ...state, userAnswer: answer })),
      incrementResponseCount: () =>
        set((state) => {
          console.log('I was called')
          console.log(state.totalResponses)
          const res = {
            current: state.current,
            correctResponses: state.correctResponses,
            totalResponses: state.totalResponses + 1,
          }
          return res
        }),
      incrementCorrect: (speed: number) =>
        set((state) => {
          state.correctSpeeds.push(speed)
          const res = {
            current: state.current,
            correctResponses: state.correctResponses + 1,
            totalResponses: state.totalResponses,
          }
          return res
        }),
      clear: () =>
        set(() => ({
          correctSpeeds: [],
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
