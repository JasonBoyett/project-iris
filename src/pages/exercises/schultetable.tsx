import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '~/components/sidebar'
import { useRouter } from 'next/router'
import TableSwitcher from '~/components/tableswitcher'
import { api } from '~/utils/api'
import type { User } from '~/utils/types'
import { useEffect, useState } from 'react'

const SchulteTable = dynamic(() => import('~/components/schultetable'), { ssr: false })

export default function Page() {
  const params = useRouter().query
  const [param, setParam] = useState(params.type as string)
  const user = api.user.getUnique.useQuery()


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

  useEffect(() => {
    setParam(params.type as string)
  }, [params])

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <TableSwitcher 
        user={user.data as User} 
        className='absolute top-0 right-0 mt-4 mr-4 flex gap-4'
      />
      <Sidebar />
      <div className='grid min-h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <SchulteTable sideLength={getSideLength(param)} />
        </div>
      </div>
    </>
  )
}
