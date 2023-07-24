import { createContext, useState } from 'react'
import { type AppType } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import { User } from '@prisma/client'


export const state: User = {
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
  state: User
  set: (user: User) => void
}>({
  state: state,
  set: () => console.log('test'),
})

const MyApp: AppType = ({ Component, pageProps }) => {
  const [currentUser, setUser] = useState(state)

  return (
    <userContext.Provider
      value={{ state: currentUser, set: (user: User) => setUser(user) }}
    >
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
    </userContext.Provider>
  )
}

export default api.withTRPC(MyApp)
