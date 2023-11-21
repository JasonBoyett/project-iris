import Link from "next/link"
import { type User } from "~/utils/types"

export default function TableSwitcher({ user, className, callback }: { user: User | null, className?: string, callback: (type: 3 | 5 | 7) => void }) {
  function NavEasy() {
    return (
      <button
        className='bg-white/20 text-white rounded-md px-4 py-2'
        onClick={
          () => {
            callback(3)
          }
        }
      >
        Easy
      </button>
    )
  }
  function NavMed() {
    return (
      <button
        className='bg-white/20 text-white rounded-md px-4 py-2'
        onClick={
          () => {
            callback(5)
          }}
      >
        Medium
      </button>
    )
  }
  function NavHard() {
    return (
      <button
        className='bg-white/20 text-white rounded-md px-4 py-2'
        onClick={() => {
            callback(7)
        }}
      >
        Hard
      </button>
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
