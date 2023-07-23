import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  apiKey: process.env.NEXT_PUBLIC_CLERK_API_KEY,
  publicRoutes: ['/','/nav']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
