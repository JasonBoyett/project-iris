import { NextPage } from 'next'
import Head from 'next/head'
import HomeButton from '~/componants/homebutton'
import { Router, useRouter } from 'next/router'
import useUserStore from '~/stores/userStore'
import useMutateUser from '~/stores/useMutateUser'
import { useEffect, useState } from 'react'

const Page: NextPage = () => {
  const user = useUserStore((state) => state.user)
  const [first, setFirst] = useState<string>()
  const [last, setLast] = useState<string>()
  const [currentWpm, setCurrentWpm] = useState<number>()
  const { mutateUser } = useMutateUser()
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal'
  const router = useRouter()

  useEffect(() => {
    if (user) {
      setFirst(user.FirstName)
      setLast(user.LastName)
      setCurrentWpm(user.CurrentWpm)
    }
  }, [])
  return (
    <>
      <Head>Settings</Head>
      <HomeButton />
      <main className='flex flex-col h-screen items-center justify-center'>
        <h1 className='md:text-6xl font-extrabold text-white py-4'>Settings</h1>
        <form
          className='flex flex-col p-2 justify-items-end'
          onSubmit={(e) => {
            e.preventDefault()
            if (!user) return
            mutateUser({
              ...user,
              FirstName: first as string,
              LastName: last as string,
              CurrentWpm: currentWpm as number,
            })
            router.replace('/nav').catch((e) => console.log(e))
          }}
        >
          <label className='py-4 text-white text-2xl font-bold'>
            First Name:{' '}
            <input
              type='text'
              defaultValue={first}
              className={inputStyle}
              onChange={(e) => setFirst(e.target.value)}
            />
          </label>
          <label className='py-4 text-white text-2xl font-bold'>
            Last Name:{' '}
            <input
              type='text'
              defaultValue={last}
              className={inputStyle}
              onChange={(e) => setLast(e.target.value)}
            />
          </label>
          <label className='py-4 text-white text-2xl font-bold'>
            Scroll Speed:{' '}
            <input
              type='number'
              defaultValue={currentWpm}
              className={inputStyle}
              onChange={(e) => setCurrentWpm(parseInt(e.target.value))}
            />
          </label>
          <button className='bg-white/20 rounded-full p-4 h-16 py-5 text-black font-normal'>
            Save
          </button>
        </form>
      </main>
    </>
  )
}
export default Page
