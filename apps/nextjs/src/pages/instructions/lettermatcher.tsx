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
          Focus on the dot in the center of the grid. After you press one of the
          buttons below the grid the dots will briefly turn into letters.
          <span className='font-bold'>
            While focusing on the dot in the center of the grid, use your
            pirpheral vision to see if the yellow letters are either all the
            same or different.
          </span>
          If they are all the same press the &#34;✓&#34; button, if they are
          different press &#34;⛔&#34;. Once the game starts you will have 1
          minute to answer as many times as you can. Press either button to
          start.
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
          Konzentrieren Sie sich auf den Punkt in der Mitte des Rasters. Nachdem
          Sie eine der Tasten unten gedrückt haben Im Raster verwandeln sich die
          Punkte kurzzeitig in Buchstaben. Konzentrieren Sie sich dabei auf den
          Punkt in der Mitte des Rasters und nutzen Sie dabei Ihre periphere
          Sicht Um zu sehen, dass die gelben Buchstaben entweder alle gleich
          oder unterschiedlich sind. Wenn sie alle gleich sind, drücken Sie die
          Taste &#34;✓&#34; Taste, wenn sie unterschiedlich sind, drücken Sie
          &#34;⛔&#34;. Sobald das Spiel beginnt, haben Sie 1 Minute Zeit, so
          oft wie möglich zu antworten. Drücken Sie zum Starten eine der beiden
          Tasten.
        </p>
      </div>
    )
  else if (user.language === 'spanish')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Concéntrate en el punto en el centro de la cuadrícula. Después de
          presionar uno de los botones a continuación En la cuadrícula, los
          puntos se convertirán brevemente en letras. Mientras te concentras en
          el punto en el centro de la cuadrícula, usa tu visión periférica. para
          ver si las letras amarillas son todas iguales o diferentes. Si son
          todos iguales presione el &#34;✓&#34; botón, si son diferentes
          presione &#34;⛔&#34;. Una vez que comience el juego tendrás 1 minuto
          para responder tantas veces como puedas. Presione cualquiera de los
          botones para comenzar.
        </p>
      </div>
    )
  else if (user.language === 'italian')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Concentrati sul punto al centro della griglia. Dopo aver premuto uno
          dei pulsanti sottostanti sulla griglia i punti si trasformeranno
          brevemente in lettere. Mentre ti concentri sul punto al centro della
          griglia, usa la visione periferica per vedere se le lettere gialle
          sono tutte uguali o diverse. Se sono tutti uguali premere il tasto
          &#34;✓&#34; pulsante, se sono diversi premere &#34;⛔&#34;. Una volta
          avviato il gioco avrai 1 minuto per rispondere quante più volte
          possibile. Premere uno dei pulsanti per iniziare.
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
        navigate(router as SingletonRouter, '/exercises/lettermatcher')
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
