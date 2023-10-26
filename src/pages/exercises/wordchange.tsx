import Head from 'next/head'
import WordChanger from 'src/componants/wordchanger'
import Sidebar from '~/componants/sidebar'

export default function Page(){
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <Sidebar/>
      <div className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
        <WordChanger
          wpm={200}
          wordsPerCell={1}
        />
      </div>
    </>
  )
}
