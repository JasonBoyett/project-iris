import { useState, useEffect } from 'react'
import Head from 'next/head'
import LoadingSpinner from '~/components/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { Font, User } from '~/utils/types'
import { type SingletonRouter, useRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import Sidebar from '~/components/sidebar'
import { navigate } from '~/utils/helpers'

const INSTRUCTION_DELAY = 5_000

function Paragraph1({ user }: { user: User | undefined }) {
  if (!user) return <LoadingSpinner />
  if (user.language === 'english') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Focus on the green dot at the center of the screen.
        <span className='font-bold'>
          Do not attempt to read the words on the page.
        </span>
        Simply focus on the green dot and attempt to keep as much of the text in your
        peripheral vision as possible.
      </p>
    </div>
  )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  if (user.language === 'spanish') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Concéntrate en el punto verde en el centro de la pantalla.
        No intente leer las palabras de la página.
        Simplemente concéntrate en el punto verde e intenta
        mantener la mayor cantidad de texto en tu
        visión periférica posible.
      </p>
    </div>
  )
  if (user.language === 'german') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Konzentrieren Sie sich auf den grünen Punkt in der Mitte des Bildschirms.
        Versuchen Sie nicht, die Wörter auf der Seite zu lesen.
        Konzentrieren Sie sich einfach auf den grünen Punkt und versuchen Sie,
        möglichst viel Text in Ihrem Text zu behalten
        möglichst peripheres Sehen.
      </p>
    </div>
  )
  if (user.language === 'italian') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Concentrati sul punto verde al centro dello schermo.
        Non tentare di leggere le parole sulla pagina.
        Concentrati semplicemente sul punto verde e cerca di
        mantenere la maggior parte del testo nel tuo
        visione periferica possibile.
      </p>
    </div>
  )
}

function StartButton() {
  const [time, setTime] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
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
  })

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 user={userStore.user}/>
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}
