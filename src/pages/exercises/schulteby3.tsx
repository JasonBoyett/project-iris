import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '~/components/sidebar'

const SchulteTable = dynamic(() => import('~/components/schultetable'), { ssr: false })

export default function Page() {
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <Sidebar />
      <div className='grid min-h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <SchulteTable sideLength={3} />
        </div>
      </div>
    </>
  )
}

