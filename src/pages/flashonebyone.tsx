import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'
import { useEffect, useState } from 'react'
import FlashingGrid from 'src/componants/flashingcell'
import { Layout } from 'src/componants/flashingcell'

interface PageProps {
  grid?: JSX.Element
}


const Page: NextPage<PageProps> = () => {

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div 
        className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'
      >
        <FlashingGrid layout={Layout.FOUR_BY_ONE}/>
      </div>
    </>
  )
}

export default Page
