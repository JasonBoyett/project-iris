import { SignIn } from "@clerk/nextjs";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import StudyLogo from "public/study-logo.png";

const Page: NextPage = () => {
  return(
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <main className='flex h-screen flex-col items-center justify-center'>
      <SignIn signUpUrl={"/signup"} redirectUrl={"/nav"}/>
      <Image 
        src={StudyLogo} 
        alt="Visionary" 
        width={580} 
        height={325}
        className='p-10'
      />
      </main>
    </>
  )
}
export default Page
