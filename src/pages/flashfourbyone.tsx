import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'
import { useEffect, useState } from 'react'
import FlashingGrid from 'src/componants/flashingcell'

interface PageProps {
  grid?: JSX.Element
}

const Page: NextPage<PageProps> = () => {
  const loading = (
    <div className='flex flex-col items-center justify-center'>
      Loading Game...
    </div>
  )

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div 
        className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'
      >
        <FlashingGrid layout={FlasherLayout.FOUR_BY_ONE}/>
      </div>
    </>
  )
}

export default Page
