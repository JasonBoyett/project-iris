import Link from 'next/link'
import Image from 'next/image'
import settings from 'public/settings.png'

export default function SettingsButton({
  className = 'absolute top-5 right-5 md:w-20 md:h-20 w-14 h-14 border border-white rounded-full bg-slate-700/40',
}){
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
