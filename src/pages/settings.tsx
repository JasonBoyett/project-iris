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
import type { SelectFont } from '~/utils/types'
import type { Language } from "~/utils/types"

const Page: NextPage = () => {
  const user: User | undefined = api.user.getUnique.useQuery<User>().data
  const [first, setFirst] = useState<string>()
  const [currentLanguage, setCurrentLanguage] = useState<Language>('english')
  const [last, setLast] = useState<string>()
  const [currentWpm, setCurrentWpm] = useState<number>()
  const { mutate } = api.user.setUser.useMutation()
  const store = useUserStore()
  const [currentHilight, setCurrentHilight] = useState<Overlay>('GREY')
  const [currentFont, setCurrentFont] = useState<SelectFont>('sans')
  const inputStyle =
    'rounded-full p-4 h-16 py-5 bg-white/20 text-black font-normal'
  const router = useRouter()

  useEffect(() => {
    if (user) {
      setFirst(user.firstName)
      setLast(user.lastName)
      setCurrentWpm(user.currentWpm)
      setCurrentHilight(user.highlightColor as Overlay)
      setCurrentFont(user.font as SelectFont)
      setCurrentLanguage(user.language)
    }
    else if(store.user){
      setFirst(store.user.firstName)
      setLast(store.user.lastName)
      setCurrentWpm(store.user.currentWpm)
      setCurrentHilight(store.user.highlightColor as Overlay)
      setCurrentFont(store.user.font as SelectFont)
      setCurrentLanguage(store.user.language)
    }
  }, [user, store])
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
            if (!currentFont) return 
            else if (
              (first === 'Unnamed' && last === 'User') ||
              (first === null && last === null)
            ) {
              mutate({ 
                highlightColor: currentHilight,
                font: currentFont,
                currentWpm: currentWpm,
                language: currentLanguage
              })
              store.setUser({
                ...user,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont,
                language: currentLanguage
              })
            } else if (first === 'Unnamed' || first === null) {
              mutate({ ...user, 
                currentWpm: currentWpm,
                highlightColor: currentHilight,
                font: currentFont,
                language: currentLanguage
              })
              store.setUser({
                ...user,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont,
                language: currentLanguage
              })
            } else if (last === 'User' || last === null) {
              mutate({ 
                highlightColor: currentHilight,
                font: currentFont,
                currentWpm: currentWpm,
                language: currentLanguage
              })
              store.setUser({
                ...user,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont,
                language: currentLanguage
              })
            } else {
              mutate({
                firstName: first,
                lastName: last,
                currentWpm: currentWpm,
                highlightColor: currentHilight,
                font: currentFont,
                language: currentLanguage
              })
              store.setUser({
                ...user,
                firstName: first as string,
                lastName: last as string,
                currentWpm: currentWpm as number,
                highlightColor: currentHilight,
                font: currentFont,
                language: currentLanguage

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
          <label className='py-4 text-white text-2xl font-bold'>
            Random Word Language:{' '}
          <button
            className='bg-white/20 rounded-full p-4 h-12 w-40 py-2 text-2xl text-white font-bold'
            type='button'
            onClick={() => setCurrentLanguage('english')}
          >
            English {currentLanguage === 'english' ? '✓' : ''}
          </button>
          <button
            className='bg-white/20 rounded-full p-4 h-12 w-40 py-2 text-2xl text-white font-bold'
            type='button'
            onClick={() => setCurrentLanguage('spanish')}
          >
            Español {currentLanguage === 'spanish' ? '✓' : ''}
          </button>
          </label>
          <label className='py-4 text-white text-2xl font-bold'>
            Font:{' '}
            <select
              id='fontPicker'
              onChange={(e) => setCurrentFont(e.target.value as SelectFont)}
              defaultValue={currentFont as string}
              className='bg-white/20 text-white text-2xl rounded-lg w-40 p-2.5'>
              <option value='sans' className='bg-slate-500 font-sans'>Sans</option>
              <option value='mono' className='bg-slate-500 font-mono'>Mono</option>
              <option value='serif' className='bg-slate-500 font-serif'>Serif</option>
              <option value='robotoMono' className='bg-slate-500 font-robotoMono'>Roboto Mono</option>
              <option value='rem' className='bg-slate-500 font-rem'>Rem</option>
              <option value='kanti' className='bg-slate-500 font-kanit'>Kanti</option>
              <option value='preahvihear' className='bg-slate-500 font-preahvihear'>Preahvihear</option>
              <option value='bebasNeue' className='bg-slate-500 font-bebasNeue'>BebasNeue</option>
              <option value='chakraPetch' className='bg-slate-500 font-chakraPetch'>Chakra Petch</option>
              <option value='ibmPlexMono' className='bg-slate-500 font-ibmPlexMono'>Ibm Plex Mono</option>
              </select>
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
