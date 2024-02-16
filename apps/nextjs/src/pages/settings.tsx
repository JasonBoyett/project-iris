import type { NextPage } from 'next'
import Head from 'next/head'
import { SingletonRouter, useRouter } from 'next/router'
import { Suspense, useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'
import type { User, Color, Language, Font } from '@acme/types'
import useUserStore from '../stores/userStore'
import { HighlightButton } from '../cva/highlightSelectorButton'
import LoadingSpinner from '../components/loadingspinner'
import Sidebar from '../components/sidebar'
import { navigate } from '@acme/helpers'

const Page: NextPage = () => {
  const user: User | undefined = trpc.user.get.useQuery().data
  const [first, setFirst] = useState<string>()
  const [currentLanguage, setCurrentLanguage] = useState<Language>('english')
  const [last, setLast] = useState<string>()
  const [currentWpm, setCurrentWpm] = useState<number>()
  const { mutate } = trpc.user.set.useMutation()
  const store = useUserStore()
  const [currentHilight, setCurrentHilight] = useState<Color>('GREY')
  const [currentFont, setCurrentFont] = useState<Font>('sans')
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal w-full md:w-max'
  const router = useRouter()

  function handleSubmition(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!user) return
    if (!currentFont) return
    else if (
      (first === 'Unnamed' && last === 'User') ||
      (first === null && last === null)
    ) {
      mutate({
        highlightColor: currentHilight,
        font: currentFont,
        currentWpm: currentWpm as number,
        language: currentLanguage,
      })
      store.setUser({
        ...user,
        currentWpm: currentWpm as number,
        highlightColor: currentHilight,
        font: currentFont,
        language: currentLanguage,
      })
    } else if (first === 'Unnamed' || first === null) {
      mutate({
        ...user,
        currentWpm: currentWpm as number,
        highlightColor: currentHilight,
        font: currentFont,
        language: currentLanguage,
      })
      store.setUser({
        ...user,
        currentWpm: currentWpm as number,
        highlightColor: currentHilight,
        font: currentFont,
        language: currentLanguage,
      })
    } else if (last === 'User' || last === null) {
      mutate({
        highlightColor: currentHilight,
        font: currentFont,
        currentWpm: currentWpm,
        language: currentLanguage,
      })
      store.setUser({
        ...user,
        currentWpm: currentWpm as number,
        highlightColor: currentHilight,
        font: currentFont,
        language: currentLanguage,
      })
    } else {
      mutate({
        firstName: first,
        lastName: last,
        currentWpm: currentWpm as number,
        highlightColor: currentHilight,
        font: currentFont,
        language: currentLanguage,
      })
      store.setUser({
        ...user,
        firstName: first as string,
        lastName: last as string,
        currentWpm: currentWpm as number,
        highlightColor: currentHilight,
        font: currentFont,
        language: currentLanguage,
      })
    }
    navigate(router as SingletonRouter, '/nav')
  }

  useEffect(() => {
    if (user) {
      setFirst(user.firstName)
      setLast(user.lastName)
      setCurrentWpm(user.currentWpm)
      setCurrentHilight(user.highlightColor as Color)
      setCurrentFont(user.font as Font)
      setCurrentLanguage(user.language)
    } else if (store.user) {
      setFirst(store.user.firstName)
      setLast(store.user.lastName)
      setCurrentWpm(store.user.currentWpm)
      setCurrentHilight(store.user.highlightColor as Color)
      setCurrentFont(store.user.font as Font)
      setCurrentLanguage(store.user.language)
    }
  }, [user, store])

  return (
    <>
      <Head>Settings</Head>
      <Sidebar />
      <main className='mx-auto mb-10 flex min-h-screen max-w-4xl items-center justify-center'>
        <div className='flex w-full flex-col items-center justify-center'>
          <h1 className='py-4 font-extrabold text-white md:text-6xl'>
            Settings
          </h1>
          <form
            className='flex w-full flex-col gap-y-2 px-4 md:justify-items-end'
            onSubmit={e => handleSubmition(e)}
          >
            <label className='flex w-full flex-col gap-3 py-4 text-2xl font-bold text-white md:flex-row md:items-center'>
              First Name:{' '}
              <input
                type='text'
                defaultValue={first}
                className={inputStyle}
                onChange={e => setFirst(e.target.value)}
              />
            </label>
            <label className='flex flex-col gap-3 py-4 text-2xl font-bold text-white md:flex-row md:items-center'>
              Last Name:{' '}
              <input
                type='text'
                defaultValue={last}
                className={inputStyle}
                onChange={e => setLast(e.target.value)}
              />
            </label>
            <label className='flex flex-col gap-3 py-4 text-2xl font-bold text-white md:flex-row md:items-center'>
              Scroll Speed:{' '}
              <input
                type='number'
                readOnly={true}
                defaultValue={currentWpm}
                className={inputStyle}
                onChange={e => setCurrentWpm(parseInt(e.target.value))}
              />
              <div className='mt-4 flex items-center gap-4 md:mt-0'>
                <button
                  type='button'
                  onClick={() => {
                    if (!currentWpm) return
                    if (!user) return
                    if (currentWpm >= user.maxWpm && !user.isAdmin) return
                    else {
                      setCurrentWpm(prev => (prev as number) + 10)
                    }
                  }}
                  className='flex h-12 w-12 min-w-max items-center justify-center rounded-full bg-white/20 font-normal'
                >
                  ▲
                </button>
                <button
                  type='button'
                  onClick={() => {
                    if (!currentWpm) return
                    if (currentWpm > 70)
                      setCurrentWpm(prev => (prev as number) - 10)
                  }}
                  className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20 font-normal'
                >
                  ▼
                </button>
              </div>
            </label>
            <label className='flex flex-col gap-3 p-2 py-4 text-2xl font-bold text-white md:flex-row md:items-center'>
              Highlight Color:{' '}
              <div className='flex flex-wrap gap-3'>
                <HighlightButton
                  intent='blue'
                  type='button'
                  onClick={() => setCurrentHilight('BLUE')}
                >
                  {currentHilight === 'BLUE' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='blueGrey'
                  onClick={() => setCurrentHilight('BLUE_GREY')}
                >
                  {currentHilight === 'BLUE_GREY' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='green'
                  onClick={() => setCurrentHilight('GREEN')}
                >
                  {currentHilight === 'GREEN' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='grey'
                  onClick={() => setCurrentHilight('GREY')}
                >
                  {currentHilight === 'GREY' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='orange'
                  onClick={() => setCurrentHilight('ORANGE')}
                >
                  {currentHilight === 'ORANGE' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='peach'
                  onClick={() => setCurrentHilight('PEACH')}
                >
                  {currentHilight === 'PEACH' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='purple'
                  onClick={() => setCurrentHilight('PURPLE')}
                >
                  {currentHilight === 'PURPLE' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='red'
                  onClick={() => setCurrentHilight('RED')}
                >
                  {currentHilight === 'RED' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='turquoise'
                  onClick={() => setCurrentHilight('TURQUOISE')}
                >
                  {currentHilight === 'TURQUOISE' ? '✓' : ''}
                </HighlightButton>
                <HighlightButton
                  type='button'
                  intent='yellow'
                  onClick={() => setCurrentHilight('YELLOW')}
                >
                  {currentHilight === 'YELLOW' ? '✓' : ''}
                </HighlightButton>
              </div>
            </label>
            <label className='flex flex-col gap-3 py-4 text-2xl font-bold text-white md:flex-row'>
              Language:{' '}
              <button
                className='h-12 rounded-full bg-white/20 p-4 py-2 text-2xl font-bold text-white'
                type='button'
                onClick={() => setCurrentLanguage('english')}
              >
                {currentLanguage === 'english' ? 'English ✓' : 'English'}
              </button>
              <button
                className='h-12 rounded-full bg-white/20 p-4 py-2 text-2xl font-bold text-white'
                type='button'
                onClick={() => setCurrentLanguage('spanish')}
              >
                Español {currentLanguage === 'spanish' ? '✓' : ''}
              </button>
              <button
                className='h-12 rounded-full bg-white/20 p-4 py-2 text-2xl font-bold text-white'
                type='button'
                onClick={() => setCurrentLanguage('german')}
              >
                Deutsch {currentLanguage === 'german' ? '✓' : ''}
              </button>
              <button
                className='h-12 rounded-full bg-white/20 p-4 py-2 text-2xl font-bold text-white'
                type='button'
                onClick={() => setCurrentLanguage('italian')}
              >
                Italiano {currentLanguage === 'italian' ? '✓' : ''}
              </button>
            </label>
            <Suspense fallback={<LoadingSpinner />}>
              <label className='items-center gap-3 py-4 text-2xl font-bold text-white md:flex'>
                Font:{' '}
                <select
                  id='fontPicker'
                  onChange={e => setCurrentFont(e.target.value as Font)}
                  value={currentFont as string}
                  className='rounded-lg bg-white/20 p-2.5 text-2xl text-white md:w-40'
                >
                  <option
                    value='sans'
                    className='bg-slate-500 font-sans'
                  >
                    Sans
                  </option>
                  <option
                    value='mono'
                    className='bg-slate-500 font-mono'
                  >
                    Mono
                  </option>
                  <option
                    value='serif'
                    className='bg-slate-500 font-serif'
                  >
                    Serif
                  </option>
                  <option
                    value='robotoMono'
                    className='font-robotoMono bg-slate-500'
                  >
                    Roboto Mono
                  </option>
                  <option
                    value='rem'
                    className='font-rem bg-slate-500'
                  >
                    Rem
                  </option>
                  <option
                    value='kanti'
                    className='font-kanit bg-slate-500'
                  >
                    Kanti
                  </option>
                  <option
                    value='preahvihear'
                    className='font-preahvihear bg-slate-500'
                  >
                    Preahvihear
                  </option>
                  <option
                    value='bebasNeue'
                    className='font-bebasNeue bg-slate-500'
                  >
                    BebasNeue
                  </option>
                  <option
                    value='chakraPetch'
                    className='font-chakraPetch bg-slate-500'
                  >
                    Chakra Petch
                  </option>
                  <option
                    value='ibmPlexMono'
                    className='font-ibmPlexMono bg-slate-500'
                  >
                    Ibm Plex Mono
                  </option>
                </select>
              </label>
            </Suspense>
            <button className='h-16 rounded-full bg-white/20 p-4 py-5 font-normal text-white'>
              Save
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
export default Page
