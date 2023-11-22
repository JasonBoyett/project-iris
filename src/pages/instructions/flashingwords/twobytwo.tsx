import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useUserStore } from '~/stores/userStore'
import type { Font, User } from '~/utils/types'
import { FontProvider } from '~/cva/fontProvider'
import Sidebar from '~/components/sidebar'
import FlasherStartButton from '~/components/flasherstartbutton'
import LoadingSpinner from '~/components/loadingspinner'

const INSTRUCTION_DELAY = 5_000

const Paragraph1 = ({ user }: { user: User | undefined }) => {
  if (!user) return <LoadingSpinner />
  if (user.language === 'english') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Follow the highlighted word with your eyes. This exercise is meant to
        help improve your ability to scan and focus as you read. Do not actively
        attempt to read the words, just follow the highligter. In order to get
        the most out of this exercise, try to stay relaxed and focused. The
        exercise will only be counted as completed if you do not navigate away
        from the page. The page will automatically navigate away and be counted
        as complete after one minute.
      </p>
    </div>
  )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  if (user.language === 'spanish') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Sigue la palabra resaltada con tus ojos. Este ejercicio está destinado a
        ayude a mejorar su capacidad para escanear y concentrarse mientras lee. no activamente
        Intente leer las palabras, simplemente siga el resaltador. Para obtener
        Para aprovechar al máximo este ejercicio, trate de mantenerse relajado y concentrado. El
        El ejercicio solo se contará como completado si no navegas
        de la página. La página se alejará automáticamente y se contará.
        como completo después de un minuto.
      </p>
    </div>
  )
  if (user.language === 'german') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Folgen Sie dem markierten Wort mit Ihren Augen. Diese Übung soll dazu dienen
        Helfen Sie dabei, Ihre Fähigkeit zu scannen und sich beim Lesen zu konzentrieren. Nicht aktiv
        Versuchen Sie, die Wörter zu lesen, folgen Sie einfach der Hervorhebung. Um zu bekommen
        Um das Beste aus dieser Übung herauszuholen, versuchen Sie, entspannt und konzentriert zu bleiben. Der
        Die Übung gilt nur dann als abgeschlossen, wenn Sie nicht wegnavigieren
        von der Seite. Die Seite wird automatisch wegnavigiert und gezählt
        als abgeschlossen nach einer Minute.
      </p>
    </div>
  )
  if (user.language === 'italian') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Segui con lo sguardo la parola evidenziata. Questo esercizio è pensato per
        aiuta a migliorare la tua capacità di scansione e concentrazione mentre leggi. Non attivamente
        tentare di leggere le parole, basta seguire l&apos;evidenziatore. Per ottenere
        Per ottenere il massimo da questo esercizio, cerca di rimanere rilassato e concentrato. IL
        l&apos;esercizio verrà conteggiato come completato solo se non esci dall&apos;attività
        dalla pagina. La pagina verrà automaticamente allontanata e verrà conteggiata
        come completo dopo un minuto.
      </p>
    </div>
  )
}

export default function Page() {
  const userStore = useUserStore()
  const [font, setFont] = useState<Font>('sans')
  const option = 'twoByTwo'

  useEffect(() => {
    if (!userStore.user) return
    setFont(userStore.user.font)
  }, [userStore.user])

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 user={userStore.user} />
          <FlasherStartButton option={option} delay={INSTRUCTION_DELAY} />
        </div>
      </FontProvider>
    </>
  )
}
