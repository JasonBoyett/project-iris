import Head from 'next/head'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'
import dynamic from 'next/dynamic'

const NumberMatcher = dynamic(() => import('~/componants/numbermatcher'), { ssr: false })

export default function Page(){
  return (
    <>
    <Head>
      <title>Number Matcher</title>
    </Head>
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <HomeButton />
      <SettingsButton />
      <NumberMatcher />
    </div>
    </>
  )
}
