import CornerFlasher from '~/componants/cubeflasher'
import Sidebar from '~/componants/sidebar'

export default function Page(){
  return (
    <>
      <Sidebar />
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <CornerFlasher number={3} />
      </div>
    </>
  )
}
