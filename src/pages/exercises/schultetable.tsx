import Head from 'next/head'
import dynamic from 'next/dynamic'
import Sidebar from '~/components/sidebar'
import { useRouter } from 'next/router'

const SchulteTable = dynamic(() => import('~/components/schultetable'), { ssr: false })

export default function Page() {
  const router = useRouter()
  const params = router.query

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

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <Sidebar />
      <div className='grid min-h-screen'>
        <div className='flex flex-col items-center justify-center'>
          <SchulteTable sideLength={ getSideLength(params.type as string) } />
        </div>
      </div>
    </>
  )
}
