import CornerFlasher from '~/components/cubeflasher'
import Sidebar from '~/components/sidebar'
import { useRouter } from 'next/router'

export default function Page() {
  const params = useRouter().query

  function getSideLength(param: string) {
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
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <div className='bg-white rounded-lg shadow-lg'>
          <CornerFlasher number={ getSideLength(params.type as string) } />
        </div>
      </div>
    </>
  )
}
