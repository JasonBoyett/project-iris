import CornerFlasher from '../../components/cubeflasher'
import Sidebar from '../../components/sidebar'

export default function Page() {
  return (
    <>
      <Sidebar />
      <div className='min-w-screen flex min-h-screen flex-col items-center justify-center'>
        <div className='rounded-lg bg-white'>
          <CornerFlasher number={2} />
        </div>
      </div>
    </>
  )
}
