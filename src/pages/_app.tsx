import { createContext, useState } from 'react'
import { type AppType } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import { User } from '@prisma/client'
import { SignedIn } from '@clerk/nextjs/dist/types/components.server'
import Sidebar from '~/components/sidebar'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
