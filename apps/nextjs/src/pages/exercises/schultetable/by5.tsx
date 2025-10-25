import Head from 'next/head'
import Sidebar from '../../../components/sidebar'
import TableSwitcher from '../../../components/tableswitcher'
import { trpc } from '../../../utils/trpc'
import type { User } from '@acme/types'

import SchulteTable from '../../../components/schultetable'

export default function Page() {
  const user = trpc.user.get.useQuery()

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <TableSwitcher
        user={user.data as User}
        className='absolute right-0 top-0 mr-4 mt-4 flex gap-4'
      />
      <Sidebar />
      <div className='grid min-h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <SchulteTable sideLength={5} />
        </div>
      </div>
    </>
  )
}
