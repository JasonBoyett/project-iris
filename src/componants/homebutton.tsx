import Link from 'next/link'
import Image from 'next/image'
import homeImage from 'public/home.png'

const HomeButton = ({
  className = 'absolute top-5 left-5 w-20 h-20 border border-white rounded-full bg-slate-600',
}) => {
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

export default HomeButton
