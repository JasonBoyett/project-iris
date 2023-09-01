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
  correctResponses: 0,
  incorrectResponses: 0,
  responseCount: 0,
}

export const useSpeedTestStore = create<{
  current: SpeedTest
  setUp: (speedTest: SpeedTest) => void
  setResponse: (anser: string) => void
  incrementResponseCount: () => void
  incrementCorrect: () => void
  incrementIncorrect: () => void
}>()(
  persist((set) => ({
    current: emptySpeedTest,
    setUp: (speedTest) => set((state) => ({...state,
      current: {
        ...speedTest,
        correctResponses: state.current.correctResponses,
        incorrectResponses: state.current.incorrectResponses,
        responseCount: state.current.responseCount,
      }
    })),
    setResponse: (answer) => set((state) => ({...state,
      userAnswer: answer
    })),
    incrementResponseCount: () => set((state) => {
      if (!state.current.responseCount) 
        return {...state, current: {...state.current, 
          responseCount: 1
        }
      }
      return {...state,
        responseCount: state.current.responseCount + 1
      }
    }),
    incrementCorrect: () => set((state) => {
      if (!state.current.correctResponses) 
        return {...state, 
        correctResponses: 1
      }
      return {...state,
        responseCount: state.current.correctResponses+ 1
      }
    }),
    incrementIncorrect: () => set((state) => {
      if (!state.current.incorrectResponses) 
        return {...state,
        incorrectResponses: 1
      }
      return {...state,
        responseCount: state.current.incorrectResponses + 1
      }
    }),

  }), {
    name: 'speed-test-store',
    storage: createJSONStorage(() => sessionStorage),
  }
  )
)



export default useSpeedTestStore
