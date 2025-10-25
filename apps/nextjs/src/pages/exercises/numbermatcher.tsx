import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import NumberGrid from '../../components/numbermatcher'

export default function Page() {
  return (
    <>
      <Head>
        <title>Number Matcher</title>
      </Head>
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <Sidebar />
        <NumberGrid />
      </div>
    </>
  )
}
