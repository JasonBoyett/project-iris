import Link from "next/link"
import { type User } from "~/utils/types"

export default function TableSwitcher({ user, className }: { user: User | null, className?: string }) {
  function NavEasy() {
    return (
      <Link
        className='bg-white/20 text-white rounded-md px-4 py-2'
        href='/exercises/schultetable/by3'
      >
        Easy
      </Link>
    )
  }
  function NavMed() {
    return (
      <Link
        className='bg-white/20 text-white rounded-md px-4 py-2'
        href='/exercises/schultetable/by5'
      >
        Medium
      </Link>
    )
  }
  function NavHard() {
    return (
      <Link
        className='bg-white/20 text-white rounded-md px-4 py-2'
        href='/exercises/schultetable/by7'
      >
        Hard
      </Link>
    )
  }

  if (!user) return <></>
  if (user.schulteLevel === 'three') return <></>
  if (user.schulteLevel === 'seven') {
    return (
      <div className={className}>
        <NavEasy />
        <NavMed />
        <NavHard />
      </div>
    )
  }
  if (user.schulteLevel === 'five') {
    return (
      <div className={className}>
        <NavEasy />
        <NavMed />
      </div>
    )
  }
}
