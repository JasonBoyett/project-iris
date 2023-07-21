import { createContext, useState } from 'react'
import { type AppType } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'
import '~/styles/globals.css'

export type userType = {
  Id: string
  FirstName: string
  LastName: string
  MaxWpm: number
  CurrentWpm: number
  CreatedAt: Date
  UpdatedAt: Date
  HighlightColor: string
  DarkMode: boolean
}

export const state: userType = {
  Id: 'test',
  FirstName: 'test',
  LastName: 'User',
  MaxWpm: 250,
  CurrentWpm: 10,
  CreatedAt: new Date(),
  UpdatedAt: new Date(),
  HighlightColor: 'GREY',
  DarkMode: true,
}

export const userContext = createContext<{
  state: userType
  set: (user: userType) => void
}>({
  state: state,
  set: () => console.log('test'),
})

const MyApp: AppType = ({ Component, pageProps }) => {
  const [currentUser, setUser] = useState(state)

  return (
    <userContext.Provider
      value={{ state: currentUser, set: (user: userType) => setUser(user) }}
    >
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
    </userContext.Provider>
  )
}

export default api.withTRPC(MyApp)
