import { SignIn } from '@clerk/nextjs'
import Head from 'next/head'
import Image from 'next/image'
import StudyLogo from 'public/study-logo.png'

export default function Page() {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
        <SignIn
          signUpUrl={'/signup'}
          redirectUrl={'/nav'}
        />
      <main className='flex h-screen flex-col items-center justify-center'>
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
