import HomeButton from '~/componants/homebutton'
import SchulteTable from '~/componants/schultetable'
import type { NextPage } from 'next'
import Head from 'next/head'
import SettingsButton from '~/componants/settingsbutton'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <body className='grid min-h-screen'>
      <HomeButton />
      <SettingsButton />
      <div className='flex flex-col items-center justify-center'>
        <SchulteTable
          sideLength={3}
        />
      </div>
      </body>
    </>
  )
}

export default Page
