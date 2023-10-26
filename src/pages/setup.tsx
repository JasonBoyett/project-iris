import { useUserStore } from '~/stores/userStore'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import type { User } from '~/utils/types'
import Sidebar from '~/componants/sidebar'

const Page: NextPage = () => {
  const user: User | undefined = api.user.getUnique.useQuery<User>().data
  const [first, setFirst] = useState<string>()
  const [last, setLast] = useState<string>()
  const store = useUserStore()
  const { mutate } = api.user.setUser.useMutation()
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal'
  const router = useRouter()

  useEffect(() => {
    if (user) {
      setFirst(user.firstName)
      setLast(user.lastName)
    }
  }, [])
  return (
    <>
      <Head>Let&#39;s Get Started!</Head>
      <Sidebar />
      <main className='flex flex-col h-screen items-center justify-center'>
        <h1 className='md:text-6xl font-extrabold text-white py-4'>
          Let&#39;s Get Started!
        </h1>
        <h2 className='md:text-4xl font-extrabold text-white py-4'>
          Please tell us your name
        </h2>
        <form
          className='flex flex-col p-2 justify-items-end'
          onSubmit={(e) => {
            e.preventDefault()
            if (!user) return
            else if (
              (first === 'Unnamed' && last === 'User') ||
              (first === '' && last === '') ||
              (first === null && last === null)
            ) {
              console.warn('Plase enter your first and last name')
            } else if (first === 'Unnamed' || first === null || first === '') {
              console.warn('Plase enter your firts name')
            } else if (last === 'User' || last === null || last === '') {
              console.warn('Plase enter your last name')
            } else {
              if (!last || !first) return
              mutate({
                firstName: first,
                lastName: last,
              })
              store.setUser({
                ...user,
                firstName: first,
                lastName: last,
              })
            }
            router.replace('/loadnext').catch((e) => console.log(e))
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
          <button className='bg-white/20 rounded-full p-4 h-16 py-5 text-white font-normal'>
            Start
          </button>
        </form>
      </main>
    </>
  )
}
export default Page
