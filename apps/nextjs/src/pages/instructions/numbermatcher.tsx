import { useState, useEffect } from 'react'
import Head from 'next/head'
import LoadingSpinner from '../../components/loadingspinner'
import { useUserStore } from '../../stores/userStore'
import type { Font, User } from '@acme/types'
import { type SingletonRouter, useRouter } from "next/router";
import { FontProvider } from "../../cva/fontProvider";
import Sidebar from '../../components/sidebar'
import { navigate } from '@acme/helpers'

const INSTRUCTION_DELAY = 5_000

function Paragraph1({ user }: { user: User | undefined }) {
  if (!user) return <LoadingSpinner />
  if (user.language === 'english') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        After a short countdown you will be shown a series of numbers. The numbers will
        remain on screen for a short period of time and then disappear. Once they
        disappear use the buttons on screen to enter the numbers you saw and then press
        &#34;✓&#34;. You will have 1 minute to answer as many times as you can.
      </p>
    </div>
  )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  else if (user.language === 'italian') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Dopo un breve conto alla rovescia ti verranno mostrati una serie di numeri. I numeri lo faranno
        rimangono sullo schermo per un breve periodo di tempo e poi scompaiono. Una volta loro
        scomparire utilizzare i pulsanti sullo schermo per inserire i numeri visualizzati e quindi premere
        &#34;✓&#34;. Avrai 1 minuto per rispondere quante più volte possibile.
      </p>
    </div>
  )
  else if (user.language === 'german') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Nach einem kurzen Countdown wird Ihnen eine Zahlenreihe angezeigt. Die Zahlen werden
        bleiben für kurze Zeit auf dem Bildschirm und verschwinden dann. Sobald sie
        Verschwinden Verwenden Sie die Tasten auf dem Bildschirm, um die angezeigten Zahlen einzugeben, und drücken Sie dann
        &#34;✓&#34;. Sie haben 1 Minute Zeit, so oft wie möglich zu antworten.
      </p>
    </div>
  )
  else if (user.language === 'spanish') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Después de una breve cuenta regresiva se le mostrará una serie de números. Los números
        permanecen en la pantalla por un corto período de tiempo y luego desaparecen. Una vez que ellos
        desaparecer use los botones en la pantalla para ingresar los números que vio y luego presione
        &#34;✓&#34;. Tendrás 1 minuto para responder tantas veces como puedas.
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
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={() => navigate(router as SingletonRouter, '/exercises/numbermatcher')}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}

function Page() {
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
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 user={userStore.user} />
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}

export default Page
