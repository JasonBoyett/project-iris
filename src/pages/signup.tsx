import Head from 'next/head'
import Image from 'next/image'
import StudyLogo from 'public/study-logo.png'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>

      <main className='flex h-screen flex-col items-center justify-center'>
        <SignUp
          signInUrl={'/signin'}
          redirectUrl={'/nav'}
        />
        <Image
          src={StudyLogo}
          alt='Visionary'
          width={580}
          height={325}
          className='p-10'
        />
      </main>
    </>
  )
}

