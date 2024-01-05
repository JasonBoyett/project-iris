import CornerFlasher from '../../components/cubeflasher'
import Sidebar from '../../components/sidebar'

export default function Page() {
  return (
    <>
      <Sidebar />
      <div className='min-w-screen flex min-h-screen flex-col items-center justify-center'>
        <div className='rounded-lg bg-white shadow-lg'>
          <CornerFlasher number={3} />
        </div>
      </div>
    </>
  )
}
