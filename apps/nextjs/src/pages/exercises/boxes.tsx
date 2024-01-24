import CornerFlasher from '../../components/cubeflasher'
import Sidebar from '../../components/sidebar'
import { useRouter } from 'next/router'

export default function Page() {
  const params = useRouter().query

  function getBoxCount(param: string) {
    switch (param) {
      case '2':
        return 2
      case '3':
        return 3
      default:
        return 2
    }
  }
  return (
    <>
      <Sidebar />
      <div className='min-w-screen flex min-h-screen flex-col items-center justify-center'>
        <div className='rounded-lg bg-white shadow-lg'>
          <CornerFlasher number={getBoxCount(params.type as string)} />
        </div>
      </div>
    </>
  )
}
