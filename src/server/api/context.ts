// import * as trpc from '@trpc/server'
// import * as trpcNext from '@trpc/server/adapters/next'
// import { getAuth } from '@clerk/nextjs/server'
// import type { SignedInAuthObject,SignedOutAuthObject } from "@clerk/nextjs/server";
//
// interface AuthContext {
//   auth: SignedInAuthObject | SignedOutAuthObject;
// }
//
// export const createContextInner = ({ auth }: AuthContext  ) => {
//   return {
//     auth,
//   }
// }
//
// export const createContext = (
//   opts: trpcNext.CreateNextContextOptions
// ) => {
//   return createContextInner({ auth: getAuth(opts.req) })
// }
//
// export type Context = trpc.inferAsyncReturnType<typeof createContext>
