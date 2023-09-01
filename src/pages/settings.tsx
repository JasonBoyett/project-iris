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
import { FontProvider } from '~/cva/fontProvider'
import { Font } from '@prisma/client'

const Page: NextPage = () => {
  const user: User | undefined = api.user.getUnique.useQuery<User>().data
  const [first, setFirst] = useState<string>()
  const [last, setLast] = useState<string>()
  const [currentWpm, setCurrentWpm] = useState<number>()
  const { mutate } = api.user.setUser.useMutation()
  const store = useUserStore()
  const [hideFont, setHideFont] = useState(true)
  const [currentHilight, setCurrentHilight] = useState<Overlay>(
    (user?.HighlightColor as Overlay) ??
      (store.user?.HighlightColor as Overlay) ??
      'GREY',
  )
  const [currentFont, setCurrentFont] = useState<Font>(
    (user?.Font as Font) ?? (store.user?.Font as Font) ?? 'SANS',
  )
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal'
  const router = useRouter()

  useEffect(() => {
    if (user) {
      setFirst(user.FirstName)
      setLast(user.LastName)
      setCurrentWpm(user.CurrentWpm)
      setCurrentHilight(user.HighlightColor as Overlay)
      setCurrentFont(user.Font as Font)
    } else if (store.user) {
      setFirst(store.user.FirstName)
      setLast(store.user.LastName)
      setCurrentWpm(store.user.CurrentWpm)
      setCurrentHilight(store.user.HighlightColor as Overlay)
      setCurrentFont(store.user.Font as Font)
    }
  }, [])
  return (
    <>
      <Head>Settings</Head>
      <HomeButton />
      <main className='flex flex-col h-screen items-center justify-center'>
        <h1 className='md:text-6xl font-extrabold text-white py-4'>Settings</h1>
        <form
          className='flex flex-col p-2 justify-items-end gap-y-2'
          onSubmit={(e) => {
            e.preventDefault()
            if (!user) return
            else if (
              (first === 'Unnamed' && last === 'User') ||
              (first === null && last === null)
            ) {
              mutate({
                HighlightColor: currentHilight,
                Font: currentFont,
                CurrentWpm: currentWpm,
              })
              store.setUser({
                ...user,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
                Font: currentFont,
              })
            } else if (first === 'Unnamed' || first === null) {
              mutate({
                ...user,
                CurrentWpm: currentWpm,
                HighlightColor: currentHilight,
                Font: currentFont,
              })
              store.setUser({
                ...user,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
                Font: currentFont,
              })
            } else if (last === 'User' || last === null) {
              mutate({
                HighlightColor: currentHilight,
                Font: currentFont,
                CurrentWpm: currentWpm,
              })
              store.setUser({
                ...user,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
                Font: currentFont,
              })
            } else {
              mutate({
                FirstName: first,
                LastName: last,
                CurrentWpm: currentWpm,
                HighlightColor: currentHilight,
                Font: currentFont,
              })
              store.setUser({
                ...user,
                FirstName: first as string,
                LastName: last as string,
                CurrentWpm: currentWpm as number,
                HighlightColor: currentHilight,
                Font: currentFont,
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
                if (!user) return
                if (!currentWpm) return
                if (currentWpm <= user.CurrentWpm - 10)
                  setCurrentWpm((prev) => (prev as number) + 10)
              }}
              className='bg-white/20 rounded-full p-4 h-12 py-2 font-normal'
            >
              ▲
            </button>
            <button
              type='button'
              onClick={() => {
                if (!currentWpm) return
                if (currentWpm > 70)
                  setCurrentWpm((prev) => (prev as number) - 10)
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
          </label>
          <button
            type='button'
            onClick={() => setHideFont(!hideFont)}
            className='bg-white/20 rounded-full p-4 h-12 w-40 py-2 text-2xl text-white font-bold'
          >
            Set Font
          </button>
          <label
            className={
              !hideFont
                ? 'grid items-center py-4 text-white text-2xl font-bold p-2 gap-2'
                : 'hidden'
            }
          >
            <FontProvider font='sans'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('SANS')}
              >
                Sans
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'SANS' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider font='serif'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('SERIF')}
              >
                Serif
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'SERIF' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider font='mono'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('MONO')}
              >
                Mono
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'MONO' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider font='rem'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('REM')}
              >
                Rem
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'REM' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider
              font='ibmPlexMono'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('IBM_PLEX_MONO')}
              >
                IBM
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'IBM_PLEX_MONO' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider
              font='robotoMono'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('RROBOTO_MONO')}
              >
                Roboto
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'RROBOTO_MONO' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider
              font='kanit'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('KANIT')}
              >
                Kanit
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'KANIT' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider
              font='preahvihear'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('PREAHVIHEAR')}
              >
                Preahvihear
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'PREAHVIHEAR' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider
              font='bebasNeue'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('BEBAS_NEUE')}
              >
                Bebas
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'BEBAS_NEUE' ? '✓' : ''}
              </span>
            </FontProvider>
            <FontProvider
              font='chakraPetch'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('CHAKRA_PETCH')}
              >
                Chakra
              </button>
              <span className='text-5xl text-green-400'>
                {currentFont === 'CHAKRA_PETCH' ? '✓' : ''}
              </span>
            </FontProvider>
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
