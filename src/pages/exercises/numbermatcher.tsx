import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '~/componants/sidebar'

const NumberMatcher = dynamic(() => import('~/componants/numbermatcher'), { ssr: false })

export default function Page(){
  return (
    <>
    <Head>
      <title>Number Matcher</title>
    </Head>
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <Sidebar />
      <NumberMatcher />
    </div>
    </>
  )
}
