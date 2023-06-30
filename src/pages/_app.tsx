import { createContext, Context } from 'react'
import { type AppType } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'
import '~/styles/globals.css'

interface User {
  Id: string
  FirstName: string
  LastName: string
  Email: string
  MaxWpm: number
  CurrentWpm: number
  CreatedAt: Date
  UpdatedAt: Date
  update: () => void
}

const user = {
  Id: 'test',
  FirstName: 'test',
  LastName: 'User',
  Email: 'test@test.test',
  MaxWpm: 250,
  CurrentWpm: 200,
  CreatedAt: new Date(),
  UpdatedAt: new Date(),
  update: () => {
    console.log(this)
  }
}
export const userContext = createContext(user)

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <userContext.Provider value={user}>
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
    </userContext.Provider>
  )
}

export default api.withTRPC(MyApp)
