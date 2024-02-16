import { useState, useEffect } from 'react'
import Head from 'next/head'
import LoadingSpinner from '../../components/loadingspinner'
import { useUserStore } from '../../stores/userStore'
import type { Font, User } from '@acme/types'
import { useRouter, type SingletonRouter } from 'next/router'
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
          <span className='font-bold'>
            Each cell will contain two words. In five of the cells the words
            will be slightly different and the remaining cells contain matching
            words. Click on all of the cells that contain two different words.
          </span>
          <br />
          There is no time limit, though your time will be recorded to track
          your progression. So try to go as quickly as you can while remaining
          accurate. This exercise is designed to help you improve your ability
          to focus and your perception. Try to stay relaxed and focused while
          you are doing this exercise. It is up to you how you want to approach
          this exercise. But we recommend that you either search the table row
          by row or column by column.
        </p>
      </div>
    )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  else if (user.language === 'german')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Jede Zelle enthält zwei Wörter. In fünf der Zellen stehen die Wörter
          etwas anders und die restlichen Zellen enthalten übereinstimmende
          Wörter. Klicken Sie auf alle Zellen, die zwei verschiedene Wörter
          enthalten. Es gibt keine zeitliche Begrenzung, Ihre Zeit wird jedoch
          aufgezeichnet, um Ihre Zeit zu verfolgen Fortschreiten. Versuchen Sie
          also, so schnell wie möglich zu gehen, während Sie bleiben genau.
          Diese Übung soll Ihnen dabei helfen, Ihre Fähigkeiten zu verbessern
          Fokus und Ihre Wahrnehmung. Versuchen Sie dabei entspannt und
          konzentriert zu bleiben diese Übung machen. Es liegt an Ihnen, wie Sie
          dies angehen möchten Übung. Wir empfehlen Ihnen jedoch, die Tabelle
          entweder zeilenweise zu durchsuchen oder Spalte für Spalte.
        </p>
      </div>
    )
  else if (user.language === 'spanish')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Cada celda contendrá dos palabras. En cinco de las celdas las palabras
          estarán ligeramente diferentes y las celdas restantes contienen
          palabras coincidentes. Haga clic en todas las celdas que contengan dos
          palabras diferentes. No hay límite de tiempo, aunque su tiempo se
          registrará para realizar un seguimiento de su progresión. así que
          intenta ir lo más rápido que puedas mientras permaneces preciso. Este
          ejercicio está diseñado para ayudarle a mejorar su capacidad para
          enfoque y tu percepción. Intenta mantenerte relajado y concentrado
          mientras estás haciendo este ejercicio. Depende de usted cómo quiere
          abordar esto ejercicio. Pero le recomendamos que busque en la tabla
          fila por fila o columna por columna.
        </p>
      </div>
    )
  else if (user.language === 'italian')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Ogni cella conterrà due parole. In cinque celle ci saranno le parole
          leggermente diverso e le celle rimanenti contengono parole
          corrispondenti. Fare clic su tutte le celle che contengono due parole
          diverse. Non c&apos;è limite di tempo, anche se il tuo tempo verrà
          registrato per tenere traccia del tuo progressione. quindi prova ad
          andare il più velocemente possibile rimanendo accurato. Questo
          esercizio è progettato per aiutarti a migliorare la tua capacità di
          concentrazione e la tua percezione. Cerca di rimanere rilassato e
          concentrato mentre lo sei facendo questo esercizio. Dipende da te come
          vuoi affrontare questo problema esercizio. Ma ti consigliamo di
          cercare nella tabella riga per riga o colonna per colonna.
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
      onClick={() =>
        navigate(router as SingletonRouter, '/exercises/wordpairs')
      }
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
