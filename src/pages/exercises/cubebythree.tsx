import CornerFlasher from '~/componants/cubeflasher'
import type { NextPage } from 'next/types'
import HomeButton from '~/componants/homebutton'
import SettingsButton from '~/componants/settingsbutton'

const Page: NextPage = () => {
  return (
    <>
      <HomeButton />
      <SettingsButton />
      <div className='min-h-screen min-w-screen flex flex-col justify-center items-center'>
        <CornerFlasher number={3} />
      </div>
    </>
  )
}
export default Page
