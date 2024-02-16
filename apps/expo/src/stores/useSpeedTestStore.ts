import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { SpeedTest } from '@acme/types'

const emptySpeedTest: SpeedTest = {
  id: 0,
  question: 'empty',
  passage: 'empty',
  answerA: '',
  answerB: '',
  answerC: '',
  answerD: '',
  correctAnswer: '',
}

const useSpeedTestStore = create<{
  tests: SpeedTest[]
  correctSpeeds: number[]
  totalResponses: number
  correctResponses: number
  currentTest: SpeedTest
  setup: (tests: SpeedTest[]) => void
  submit: (speed: number, correct: boolean) => void
}>()(
  persist(
    set => ({
      correctResponses: 0,
      totalResponses: 0,
      tests: [],
      correctSpeeds: [],
      currentTest: emptySpeedTest,
      setup: (tests: SpeedTest[]) => set( () => ({ 
        correctResponses: 0,
        totalResponses: 0,
        correctSpeeds: [],
        tests, 
        currentTest: tests[0] ?? emptySpeedTest 
      })),
      submit: (speed: number, correct: boolean) => {
        if (correct) {
          set(state => {
            state.correctSpeeds.push(speed)
            return {
              ...state,
              correctResponses: state.correctResponses + 1,
              totalResponses: state.totalResponses + 1,
              currentTest: state.tests[state.totalResponses + 1] ?? emptySpeedTest
            }
          })
        }
        else {
          set(state => {
            return {
              ...state,
              totalResponses: state.totalResponses + 1,
              currentTest: state.tests[state.totalResponses + 1] ?? emptySpeedTest
            }
          })
        }
      },
    }),
    {
      name: 'speed-test-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
export default useSpeedTestStore
