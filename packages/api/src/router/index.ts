import { router } from '../trpc'
import { postRouter } from './post'
import { authRouter } from './auth'
import { userRouter } from './user'
import { collectionRouter } from './collection'
import { excercisePropsRouter } from './exercises'
import { buildSpeedTestRouter } from './builders'

export const appRouter = router({
  post: postRouter,
  auth: authRouter,
  user: userRouter,
  excercise: excercisePropsRouter,
  buildSpeedTest: buildSpeedTestRouter,
  collect: collectionRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
