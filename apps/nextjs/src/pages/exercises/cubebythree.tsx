import CornerFlasher from '../../components/cubeflasher'
import Sidebar from '../../components/sidebar'

export default function Page() {
  return (
    <>
      <Sidebar />
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <div className='bg-white rounded-lg shadow-lg'>
          <CornerFlasher number={3} />
        </div>
      </div>
    </>
  )
}
