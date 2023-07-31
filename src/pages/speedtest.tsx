import SpeedTest from '~/componants/speedtest'
import { api } from '~/utils/api'
import type { User } from '~/utils/types'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useUserStore } from '~/stores/userStore'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'
import LoadingSpinner from '~/componants/loadingspinner'

const Display = () => {
  const question = api.getExcerciseProps.getSingleSpeedTestProps.useQuery().data
  const user: User | undefined = useUserStore((state) => state.user)
  if (question === undefined || user === undefined) {
    <LoadingSpinner />
  } else {
    return (
      <SpeedTest
        user={user}
        speedQuestion={question}
      />
    )
  }
}

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test your speed</title>
      </Head>
      <HomeButton />
      <SettingsButton />
      <main className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
        <Display />
      </main>
    </>
  )
}

export default Page
