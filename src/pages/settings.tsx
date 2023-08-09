import type { NextPage } from 'next'
import Head from 'next/head'
import HomeButton from '~/componants/homebutton'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { api } from '~/utils/api'
import type { User } from '~/utils/types'
import useUserStore from '~/stores/userStore'
import type { Overlay } from '~/utils/types'
import { HighlightButton } from '~/cva/highlightSelectorButton'

const Page: NextPage = () => {
  const user: User | undefined = api.user.getUnique.useQuery<User>().data
  const [first, setFirst] = useState<string>()
  const [last, setLast] = useState<string>()
  const [currentWpm, setCurrentWpm] = useState<number>()
  const { mutate } = api.user.setUser.useMutation()
  const store = useUserStore()
  const [currentHilight, setCurrentHilight] = useState<Overlay>(
    user?.HighlightColor as Overlay ?? store.user?.HighlightColor as Overlay ?? 'GREY'
  )
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal'
  const router = useRouter()

  useEffect(() => {
    if (user) {
      setFirst(user.FirstName)
      setLast(user.LastName)
      setCurrentWpm(user.CurrentWpm)
    }
    else if(store.user){
      setFirst(store.user.FirstName)
      setLast(store.user.LastName)
      setCurrentWpm(store.user.CurrentWpm)
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
            else if (
              (first === 'Unnamed' && last === 'User') ||
              (first === null && last === null)
            ) {
              mutate({ 
                HighlightColor: currentHilight,
                CurrentWpm: currentWpm })
              store.setUser({
                ...user,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
              })
            } else if (first === 'Unnamed' || first === null) {
              mutate({ ...user, 
                CurrentWpm: currentWpm,
                HighlightColor: currentHilight,
              })
              store.setUser({
                ...user,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
              })
            } else if (last === 'User' || last === null) {
              mutate({ 
                HighlightColor: currentHilight,
                CurrentWpm: currentWpm })
              store.setUser({
                ...user,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
              })
            } else {
              mutate({
                FirstName: first,
                LastName: last,
                CurrentWpm: currentWpm,
                HighlightColor: currentHilight,
              })
              store.setUser({
                ...user,
                FirstName: first as string,
                LastName: last as string,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
              })
            }
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
              readOnly={true}
              defaultValue={currentWpm}
              className={inputStyle}
              onChange={(e) => setCurrentWpm(parseInt(e.target.value))}
            />
            <button
              type='button'
              onClick={() => {
                if(!user) return
                if(!currentWpm) return
                if(currentWpm <= user.CurrentWpm - 10) 
                  setCurrentWpm((prev) => (prev as number) + 10)
              }}
              className='bg-white/20 rounded-full p-4 h-12 py-2 font-normal'
            >
              ▲
            </button>
            <button
              type='button'
              onClick={() => {
                if(!currentWpm) return
                if(currentWpm > 70) setCurrentWpm((prev) => (prev as number) - 10)
              }}
              className='bg-white/20 rounded-full p-4 h-12 py-2 font-normal'
            >
              ▼
            </button>
          </label>
          <label className='flex items-center py-4 text-white text-2xl font-bold p-2 gap-2'>
            Highlight Color:{' '}
            <HighlightButton
              intent='blue'
              type='button'
              onClick={() => setCurrentHilight('BLUE')}
              >
              {currentHilight === 'BLUE' ?'✓' : ''} 
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='blueGrey'
              onClick={() => setCurrentHilight('BLUE_GREY')}
              >
              {currentHilight === 'BLUE_GREY' ?'✓' : ''}
              </HighlightButton>
            <HighlightButton
              type='button'
              intent='green'
              onClick={() => setCurrentHilight('GREEN')}
              >
              {currentHilight === 'GREEN' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='grey'
              onClick={() => setCurrentHilight('GREY')}
              >
              {currentHilight === 'GREY' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='orange'
              onClick={() => setCurrentHilight('ORANGE')}
              >
              {currentHilight === 'ORANGE' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='peach'
              onClick={() => setCurrentHilight('PEACH')}
              >
              {currentHilight === 'PEACH' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='purple'
              onClick={() => setCurrentHilight('PURPLE')}
              >
              {currentHilight === 'PURPLE' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='red'
              onClick={() => setCurrentHilight('RED')}
              >
              {currentHilight === 'RED' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='turquoise'
              onClick={() => setCurrentHilight('TURQUOISE')}
              >
              {currentHilight === 'TURQUOISE' ?'✓' : ''}
            </HighlightButton>
            <HighlightButton
              type='button'
              intent='yellow'
              onClick={() => setCurrentHilight('YELLOW')}
              >
              {currentHilight === 'YELLOW' ?'✓' : ''}
            </HighlightButton>
          </label>
          <button className='bg-white/20 rounded-full p-4 h-16 py-5 text-white font-normal'>
            Save
          </button>
        </form>
      </main>
    </>
  )
}
export default Page
