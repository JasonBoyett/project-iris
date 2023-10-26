import Link from 'next/link'
import Image from 'next/image'
import homeImage from 'public/home.png'

export default function HomeButton({
  className = 'absolute top-5 left-5 md:w-20 md:h-20 h-14 w-14 border border-white rounded-full bg-slate-700/40',
}){
  return (
    <div className={className}>
      <Link href='/nav'>
        <Image
          src={homeImage}
          alt='/public/home.png'
          fill={true}
        />
      </Link>
    </div>
  )
}
