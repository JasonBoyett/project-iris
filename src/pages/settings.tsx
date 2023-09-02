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
<<<<<<< HEAD
    (user?.HighlightColor as Overlay) ??
      (store.user?.HighlightColor as Overlay) ??
      'GREY',
  )
  const [currentFont, setCurrentFont] = useState<Font>(
    (user?.Font as Font) ?? (store.user?.Font as Font) ?? 'SANS',
=======
    user?.highlightColor as Overlay ?? store.user?.highlightColor as Overlay ?? 'GREY'
  )
  const [currentFont, setCurrentFont] = useState<Font>(
    user?.font as Font ?? store.user?.font as Font ?? 'sans'
>>>>>>> 8556d45 ("beginning large refactor")
  )
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal'
  const router = useRouter()

  useEffect(() => {
    if (user) {
<<<<<<< HEAD
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
=======
      setFirst(user.firstName)
      setLast(user.lastName)
      setCurrentWpm(user.currentWpm)
      setCurrentHilight(user.highlightColor as Overlay)
      setCurrentFont(user.font as Font)
    }
    else if(store.user){
      setFirst(store.user.firstName)
      setLast(store.user.lastName)
      setCurrentWpm(store.user.currentWpm)
      setCurrentHilight(store.user.highlightColor as Overlay)
      setCurrentFont(store.user.font as Font)
>>>>>>> 8556d45 ("beginning large refactor")
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
<<<<<<< HEAD
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
=======
              mutate({ 
                highlightColor: currentHilight,
                font: currentFont,
                currentWpm: currentWpm })
              store.setUser({
                ...user,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont
              })
            } else if (first === 'Unnamed' || first === null) {
              mutate({ ...user, 
                currentWpm: currentWpm,
                highlightColor: currentHilight,
                font: currentFont
              })
              store.setUser({
                ...user,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont
              })
            } else if (last === 'User' || last === null) {
              mutate({ 
                highlightColor: currentHilight,
                font: currentFont,
                currentWpm: currentWpm })
              store.setUser({
                ...user,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont
              })
            } else {
              mutate({
                firstName: first,
                lastName: last,
                currentWpm: currentWpm,
                highlightColor: currentHilight,
                font: currentFont
              })
              store.setUser({
                ...user,
                firstName: first as string,
                lastName: last as string,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont
>>>>>>> 8556d45 ("beginning large refactor")
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
<<<<<<< HEAD
                if (!user) return
                if (!currentWpm) return
                if (currentWpm <= user.CurrentWpm - 10)
=======
                if(!user) return
                if(!currentWpm) return
                if(currentWpm <= user.currentWpm - 10) 
>>>>>>> 8556d45 ("beginning large refactor")
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
                onClick={() => setCurrentFont('sans')}
              >
                Sans
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'SANS' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'sans' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider font='serif'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('serif')}
              >
                Serif
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'SERIF' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'serif' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider font='mono'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('mono')}
              >
                Mono
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'MONO' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'mono' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider font='rem'>
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('rem')}
              >
                Rem
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'REM' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'rem' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider
              font='ibmPlexMono'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('ibmPlexMono')}
              >
                IBM
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'IBM_PLEX_MONO' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'ibmPlexMono' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider
              font='robotoMono'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('robotoMono')}
              >
                Roboto
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'RROBOTO_MONO' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'robotoMono' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider
              font='kanit'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('kanit')}
              >
                Kanit
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'KANIT' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'kanit' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider
              font='preahvihear'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('preahvihear')}
              >
                Preahvihear
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'PREAHVIHEAR' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'preahvihear' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider
              font='bebasNeue'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('bebasNeue')}
              >
                Bebas
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'BEBAS_NEUE' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'bebasNeue' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
            </FontProvider>
            <FontProvider
              font='chakraPetch'
              className='text-2xl'
            >
              <button
                className='bg-white/20 rounded-full p-4 h-12 py-2'
                type='button'
                onClick={() => setCurrentFont('chakraPetch')}
              >
                Chakra
              </button>
<<<<<<< HEAD
              <span className='text-5xl text-green-400'>
                {currentFont === 'CHAKRA_PETCH' ? '✓' : ''}
              </span>
=======
                <span className='text-5xl text-green-400'>{
                  currentFont === 'chakraPetch' ? '✓' : ''
                }</span>
>>>>>>> 8556d45 ("beginning large refactor")
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
