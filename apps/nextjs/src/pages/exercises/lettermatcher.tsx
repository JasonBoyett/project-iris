import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '../../components/sidebar'

const LetterMatcher = dynamic(() => import('../../components/letterMatcher'), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <Head>
        <title>Letter Matcher</title>
      </Head>
      <Sidebar />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <LetterMatcher size={7} />
      </div>
    </>
  )
}
