import { trpc } from '../utils/trpc'
import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import irisLogo from '../../public/IRIS-LOGO.png'
import Image from 'next/image'
import { useEffect } from 'react'
import { type SingletonRouter, useRouter } from 'next/router'
import { navigate } from '@acme/helpers'

const Home: NextPage = () => {
  const session = trpc.auth.getSession.useQuery()
  const router = useRouter()

  useEffect(() => {
    if (!session.data) return
    if (session.data.status === 'active') {
      navigate(router as SingletonRouter, '/nav')
    }
    console.log(session.data.status)
  }, [session])

  return (
    <>
      <Head>
        <title>Project Iris</title>
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
          <div className='h-60 w-60 items-center justify-center md:h-96 md:w-96'>
            <Image
              src={irisLogo}
              alt='IRIS Logo'
            />
          </div>
          <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-[5rem] md:text-5xl'>
            Welcome to
            <span className='text-[#39b54a]'> Iris</span>
          </h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
            <Link
              className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
              href='/sign-up'
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
              href='/sign-in' //this will lead to a page that will serve games to the user
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
