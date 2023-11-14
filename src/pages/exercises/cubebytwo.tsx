import CornerFlasher from '~/components/cubeflasher'
import Sidebar from '~/components/sidebar'

export default function Page(){
  return (
    <>
      <Sidebar />
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <CornerFlasher number={2} />
      </div>
    </>
  )
}
