import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Page: NextPage = () => {
  return (
    <>
      <Head>Done</Head>
      <main className='flex grid-cols-1 justify-center items-center min-h-screen mt-8'>
        <div className='grid justify-center items-center'>
          <div className='flex justify-center items-center'></div>
          <p className='md:text-5xl text-4xl text-center text-white font-bold'>
            You&#39;re done all done for the day!
          </p>
          <div className='flex items-center justify-center p-12'>
            <Link
              href='/nav'
              className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
            >
              Home
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
export default Page
