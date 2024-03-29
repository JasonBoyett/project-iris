import { useState, useEffect } from 'react'
import Head from 'next/head'
import LoadingSpinner from '../../components/loadingspinner'
import { useUserStore } from '../../stores/userStore'
import type { Font, User } from '@acme/types'
import { type SingletonRouter, useRouter } from 'next/router'
import { FontProvider } from '../../cva/fontProvider'
import Sidebar from '../../components/sidebar'
import { navigate } from '@acme/helpers'

const INSTRUCTION_DELAY = 5_000

function Paragraph1({ user }: { user: User | undefined }) {
  if (!user) return <LoadingSpinner />
  if (user.language === 'english')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Focus on the green dot at the center of the screen.
          <span className='font-bold'>
            Do not attempt to read the words on the page.
          </span>
          Simply focus on the green dot and attempt to keep as much of the text
          in your peripheral vision as possible.
        </p>
      </div>
    )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  else if (user.language === 'spanish')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Concéntrate en el punto verde en el centro de la pantalla. No intente
          leer las palabras de la página. Simplemente concéntrate en el punto
          verde e intenta mantener la mayor cantidad de texto en tu visión
          periférica posible.
        </p>
      </div>
    )
  else if (user.language === 'german')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Konzentrieren Sie sich auf den grünen Punkt in der Mitte des
          Bildschirms. Versuchen Sie nicht, die Wörter auf der Seite zu lesen.
          Konzentrieren Sie sich einfach auf den grünen Punkt und versuchen Sie,
          möglichst viel Text in Ihrem Text zu behalten möglichst peripheres
          Sehen.
        </p>
      </div>
    )
  else if (user.language === 'italian')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Concentrati sul punto verde al centro dello schermo. Non tentare di
          leggere le parole sulla pagina. Concentrati semplicemente sul punto
          verde e cerca di mantenere la maggior parte del testo nel tuo visione
          periferica possibile.
        </p>
      </div>
    )
  else return <>Language not supported</>
}

function StartButton() {
  const [time, setTime] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='flex h-16 w-60 items-center justify-center rounded-full bg-white/10 p-4 text-4xl text-white hover:bg-white/20 md:w-40 md:text-5xl'
      onClick={() => navigate(router as SingletonRouter, '/exercises/greendot')}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}

export default function Page() {
  const userStore = useUserStore()
  const [font, setFont] = useState<Font>('sans')
  useEffect(() => {
    if (!userStore.user) return
    setFont(userStore.user.font)
  }, [userStore.user])

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex min-h-screen flex-col items-center justify-center gap-4 py-10'>
          <Paragraph1 user={userStore.user} />
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}
