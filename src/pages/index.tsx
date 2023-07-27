import { SignOutButton } from '@clerk/nextjs'
import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import irisLogo from 'public/IRIS-LOGO.png'
import Image from 'next/image'
import { api } from '~/utils/api'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Speed Reading</title>
        <meta
          name='description'
          content='Schreiner University Speed Reading Study'
        />
        <link
          rel='icon'
          href='/logo.png'
        />
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-center'>
        <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
          <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
            Welcome to
            <span className='text-[#39b54a]'> Iris</span>
          </h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
            <Link
              className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
              href='/signup'
              target='_self'
            >
              <h3 className='text-2xl font-bold text-yellow-300'>Sign up→</h3>
              <div className='text-lg'>
                Submit your information to enter our beta program. Join us in
                creating a routine to enhance student&#39;s reading speed and
                academic potential.
              </div>
            </Link>
            <Link
              className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
              href='/nav' //this will lead to a page that will serve games to the user
              target='_self'
            >
              <h3 className='text-2xl font-bold text-yellow-300'>
                Start Growing→
              </h3>
              <div className='text-lg'>
                Begin your journey to becoming a better reader.
              </div>
            </Link>
          </div>
          <p className='text-2xl text-white'></p>
        </div>
      </main>
    </>
  )
}

export default Home
