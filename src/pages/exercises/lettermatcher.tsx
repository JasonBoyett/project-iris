import Head from 'next/head'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'
import dynamic from 'next/dynamic'

const LetterMatcher = dynamic(() => import('~/componants/letterMatcher'), { ssr: false })

export default function Page(){
  return (
    <>
    <Head>
      <title>Letter Matcher</title>
    </Head>
      <HomeButton />
      <SettingsButton />
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <LetterMatcher size={7} />
    </div>
    </>
  )
}

