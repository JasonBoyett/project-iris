import Head from 'next/head'
import FlashingGrid from 'src/componants/flashingcell'
import Sidebar from '~/componants/sidebar'


export default function Page(){
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <Sidebar />
      <div className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'>
        <FlashingGrid type={ 'oneByTwo' } />
      </div>
    </>
  )
}
