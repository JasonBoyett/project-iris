import { navigate } from "@acme/helpers"
import { type SingletonRouter, useRouter } from "next/router"

 export default function Page() {
  const router = useRouter()
  return (
    <div
      className='flex flex-col items-center justify-center min-h-screen text-6xl text-white gap-5'
    >
       <div
         className='items-center justify-center text-6xl text-white'
       >
       You&apos;re done for the Day!
       </div>
       <button 
         className='bg-white/20 rounded-full text-4xl p-4'
         onClick={() => {
            navigate(router as SingletonRouter, '/nav')
         }}
       >
          Go to Dashboard
       </button>
    </div>
  )
}
