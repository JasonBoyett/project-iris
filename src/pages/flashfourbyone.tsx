import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { api } from '~/utils/api'
import { ReactElement, useEffect, useState } from 'react'
import FlashingGrid from 'src/componants/flashingcell'
import { FlasherLayout } from 'src/componants/flashingcell'
import HomeButton from 'src/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'
import SchulteTable from '~/componants/schultetable'


interface PageProps {
  grid?: JSX.Element
}

const nextComponant = '/schulte'


const Page: NextPage<PageProps> = () => {
  const loading: ReactElement= (
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
      <SettingsButton />
      <HomeButton />
      <div 
        className='flex min-h-screen grid-cols-2 flex-col items-center justify-center gap-4 py-2'
      >
        <FlashingGrid 
          layout={FlasherLayout.FOUR_BY_ONE}
          next={nextComponant}
        />
      </div>
    </>
  )
}

export default Page
