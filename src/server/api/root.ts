import { createTRPCRouter } from '~/server/api/trpc'
import {
  highlightSessionRouter,
  numberGuesserRouter,
  evenNumbersRouter,
  boxFlasherRouter,
  schulteSessionRouter,
  letterMatcherRouter,
  greenDotRouter,
  wordPairsRouter,
} from '~/server/api/routers/collector'
import {
  createSpeedTestRouter,
  excercisesPropsRouter as excercisePropsRouter,
  userRouter,
  createNextExcerciseRouter,
} from '~/server/api/routers/app'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  getExcerciseProps: excercisePropsRouter,
  createSpeedTest: createSpeedTestRouter,
  nextExercise: createNextExcerciseRouter,
  highlightSession: highlightSessionRouter,
  schulteSession: schulteSessionRouter,
  numberGuesserSession: numberGuesserRouter,
  evenNumbersSession: evenNumbersRouter,
  boxFlasherSession: boxFlasherRouter,
  letterMatcherSession: letterMatcherRouter,
  greenDotSession: greenDotRouter,
  wordPairSession: wordPairsRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
