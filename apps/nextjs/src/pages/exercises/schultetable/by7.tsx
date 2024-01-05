import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '../../../components/sidebar'
import TableSwitcher from '../../../components/tableswitcher'
import { trpc } from '../../../utils/trpc'
import type { User } from '@acme/types'

const SchulteTable = dynamic(() => import('../../../components/schultetable'), {
  ssr: false,
})

export default function Page() {
  const user = trpc.user.get.useQuery()

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
          <SchulteTable sideLength={7} />
        </div>
      </div>
    </>
  )
}
