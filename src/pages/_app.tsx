import { type AppType } from 'next/app'
import { ClerkProvider } from '@clerk/nextjs'
import { api } from '~/utils/api'
import '~/styles/globals.css'
import useUserStore from '~/stores/userStore'


const MyApp: AppType = ({ Component, pageProps }) => {
  const store = useUserStore((state) => state)
  store.setUser({
    Id: 'fake',
    FirstName: 'fake',
    LastName: 'fake',
    CurrentWpm: 0,
    MaxWpm: 0,
    UpdatedAt: new Date(),
    CreatedAt: new Date(),
    DarkMode: false,
    HighlightColor: 'GREY',
    LastOneByOne: new Date(),
    LastTwoByTwo: new Date(),
    LastSpeedTest: new Date(),
    LastFourByOne: new Date(),
    LastSchulteSession: new Date(),
    LastOneByTwo: new Date(),
    LastEvenNumbers: new Date(),
  })

  return (
      <ClerkProvider>
        <Component {...pageProps} />
      </ClerkProvider>
  )
}

export default api.withTRPC(MyApp)
