import { useAuth } from '@clerk/clerk-expo'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'

export default function SignOut() {
  const { signOut } = useAuth()
  useEffect(() => {
    signOut()
  }, [])
  return (
    <SafeAreaView
      className='bg-[#2e026d] bg-gradient-to-b from-[#2e026d] to-[#15162c] min-h-screen'
    />
  )
}
