import { useUserStore } from '../stores/userStore'
import type { NextPage } from 'next'
import Head from 'next/head'
import { type SingletonRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import Sidebar from '../components/sidebar'
import { navigateToNextExercise } from '@acme/helpers'

const Page: NextPage = () => {
  const user = trpc.user.get.useQuery().data
  const [first, setFirst] = useState<string>()
  const [last, setLast] = useState<string>()
  const store = useUserStore()
  const { mutate } = trpc.user.set.useMutation()
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
      <main className='flex h-screen flex-col items-center justify-center'>
        <h1 className='py-4 font-extrabold text-white md:text-6xl'>
          Let&#39;s Get Started!
        </h1>
        <h2 className='py-4 font-extrabold text-white md:text-4xl'>
          Please tell us your name
        </h2>
        <form
          className='flex flex-col justify-items-end p-2'
          onSubmit={e => {
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
            navigateToNextExercise(router as SingletonRouter, user)
          }}
        >
          <label className='py-4 text-2xl font-bold text-white'>
            First Name:{' '}
            <input
              type='text'
              defaultValue={first}
              className={inputStyle}
              onChange={e => setFirst(e.target.value)}
            />
          </label>
          <label className='py-4 text-2xl font-bold text-white'>
            Last Name:{' '}
            <input
              type='text'
              defaultValue={last}
              className={inputStyle}
              onChange={e => setLast(e.target.value)}
            />
          </label>
          <button className='h-16 rounded-full bg-white/20 p-4 py-5 font-normal text-white'>
            Start
          </button>
        </form>
      </main>
    </>
  )
}
export default Page
