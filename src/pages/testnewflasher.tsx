import { type NextPage } from 'next'
import Head from 'next/head'
import Grid from '~/componants/flashingcell'

const Page: NextPage = () => {
  const tempClick = () => {
    window.open('/', '_self')
  }
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <div className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'>
        <Grid wpm={200} wordsPerCell={5} rows={5} width={2}/>
      </div>
    </>
  )
}

export default Page
