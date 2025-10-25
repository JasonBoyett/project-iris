import { router } from '../trpc'
import { authRouter } from './auth'
import { userRouter } from './user'
import { collectionRouter } from './collection'
import { excercisePropsRouter } from './exercises'
import { buildSpeedTestRouter } from './builders'
import { adminRouter } from './admin'

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  excercise: excercisePropsRouter,
  buildSpeedTest: buildSpeedTestRouter,
  collect: collectionRouter,
  admin: adminRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
