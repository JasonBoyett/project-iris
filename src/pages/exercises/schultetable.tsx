import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '~/components/sidebar'
import { type SingletonRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import TableSwitcher from '~/components/tableswitcher'
import { api } from '~/utils/api'
import type { User } from '~/utils/types'

const SchulteTable = dynamic(() => import('~/components/schultetable'), { ssr: false })

  function getSideLength(param: string) {
    switch (param) {
      case '3':
        return 3
      case '5':
        return 5
      case '7':
        return 7
      default:
        return 5
    }
  }

export default function Page() {
  const router = useRouter()
  const params = router.query
  const user = api.user.getUnique.useQuery()
  const [type, setType] = useState< 3| 5 | 7>(getSideLength(params.type as string))


  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <TableSwitcher 
        callback={setType}
        user={user.data as User} 
        className='absolute top-0 right-0 mt-4 mr-4 flex gap-4'
      />
      <Sidebar />
      <div className='grid min-h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <SchulteTable sideLength={type} />
        </div>
      </div>
    </>
  )
}
