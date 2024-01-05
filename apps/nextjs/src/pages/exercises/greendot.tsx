import Head from 'next/head'
import PieTimer from '../../components/pietimer'
import Sidebar from '../../components/sidebar'
import { trpc } from '../../utils/trpc'
import { FontProvider } from '../../cva/fontProvider'
import type { Font } from '@acme/types'
import { useEffect, useState } from 'react'
import BackgroundText from '../../components/greendottext'

export default function Page() {
  const user = trpc.user.get.useQuery()
  const [font, setFont] = useState<Font>('sans')

  useEffect(() => {
    if (!user) return
    if (user.data) {
      setFont(user.data.font)
    }
  }, [user])

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'>
        <FontProvider
          className='absolute h-1/2 w-3/4 overflow-hidden rounded-md bg-white p-2 md:h-1/3 md:w-1/3'
          font={font}
        >
          <BackgroundText />
        </FontProvider>
        <div>
          <PieTimer
            seconds={60}
            pixels={15}
          />
        </div>
        <Sidebar />
      </div>
    </>
  )
}
