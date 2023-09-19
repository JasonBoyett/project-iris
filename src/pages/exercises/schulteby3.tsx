import HomeButton from '~/componants/homebutton'
import Head from 'next/head'
import SettingsButton from '~/componants/settingsbutton'
import dynamic from 'next/dynamic'

const SchulteTable = dynamic(() => import('~/componants/schultetable'), { ssr: false })

export default function Page(){
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div className='grid min-h-screen'>
        <HomeButton />
        <SettingsButton />
        <div className='flex flex-col items-center justify-center'>
          <SchulteTable sideLength={3} />
        </div>
      </div>
    </>
  )
}

