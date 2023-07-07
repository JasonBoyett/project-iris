import SchultyTable from 'src/componants/schultetable'
import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'
import { useEffect, useState } from 'react'
import { ChangerProps } from 'src/componants/wordchanger'
import React from 'react'

const words = ['this', 'is', 'a', 'test', 'of', 'the', 'word', 'changer']

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Schulte Table</title>
        <meta
          name='Schulte Table'
          content='A speed reading game called Schulte Table'
        />
      </Head>
      <div className='flex h-screen flex-col items-start justify-center'>
        <SchultyTable
          length={5}
          width={5}
        />
      </div>
    </>
  )
}
export default Page
