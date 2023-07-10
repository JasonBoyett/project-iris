import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { api } from '~/utils/api'
import WordChanger from 'src/componants/wordchanger'
import HomeButton from '~/componants/homebutton'

const words = ['this', 'is', 'a', 'test', 'of', 'the', 'word', 'changer']

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <HomeButton />

      <div className='flex-grid flex h-screen  items-center justify-center text-3xl text-white'>
        <WordChanger
          wpm={200}
          wordsPerCell={1}
        />
      </div>
    </>
  )
}
export default Page
