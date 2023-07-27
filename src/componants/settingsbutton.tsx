import Link from 'next/link'
import Image from 'next/image'
import settings from 'public/settings.png'

const SettingsButton = ({
  className = 'absolute top-5 right-5 w-20 h-20 border border-white rounded-full bg-slate-700/40',
}) => {
  return (
    <div className={className}>
      <Link href='/settings'>
        <Image
          src={settings}
          alt='Settings'
          fill={true}
        />
      </Link>
    </div>
  )
}
export default SettingsButton
