import Head from 'next/head'
import Sidebar from '../../components/sidebar'
import LetterGrid from '../../components/letterMatcher'

export default function Page() {
  return (
    <>
      <Head>
        <title>Letter Matcher</title>
      </Head>
      <Sidebar />
      <div className='flex min-h-screen flex-col items-center justify-center'>
        <LetterGrid size={7} />
      </div>
    </>
  )
}
