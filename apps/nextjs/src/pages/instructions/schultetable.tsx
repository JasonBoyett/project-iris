import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '../../components/loadingspinner'
import { useUserStore } from '../../stores/userStore'
import type { Font, User } from '@acme/types'
import { type SingletonRouter, useRouter } from "next/router";
import { FontProvider } from "../../cva/fontProvider";
import Sidebar from '../../components/sidebar'
import { navigate } from '@acme/helpers'
import { 
  Beginner, 
  Ideal, 
  Intermediate, 
} from '../../components/schultedraw'
import { trpc } from '../../utils/trpc'

const INSTRUCTION_DELAY = 5_000

function Paragraph1({ user }: { user: User | undefined }) {
  if (!user) return <LoadingSpinner />
  if (user.language === 'english') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:max-h-fit max-h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-scroll'>
      <p>
        Each box in the table will contain a number. The goal of this exercise is to click 
        the boxes from lowest number to highest number. Keep your eyes focused on the box
        at the center of the table. Your eyes will naturally wander but try to Keep
        your eyes focused on the center box. As you practice your focus will improve and you
        will begin to use your peripheral vision to see the numbers in the other boxes.
        As you progress your eye movements should look something like this:
      </p>
      Beginner: 
      <Beginner />
      Intermediate:
      <Intermediate />
      Advanced:
      <Ideal />

      <p>
        As you improve at this exercise the tables will get larger. Starting with a 3x3 table,
        then a 5x5 table, and finally a 7x7 table.
      </p>
    </div>
  )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  else if (user.language === 'italian') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:max-h-fit max-h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-scroll'>
      <p>
        Ogni casella nella tabella conterrà un numero. 
        L&apos;obiettivo di questo esercizio è fare clic
        le caselle dal numero più basso al numero più alto.
        Tieni gli occhi concentrati sulla scatola
        al centro del tavolo. I tuoi occhi vagheranno naturalmente, 
        ma cerca di mantenere
        i tuoi occhi si concentrano sul riquadro centrale. Man mano che ti eserciti,
        la tua concentrazione migliorerà e tu
        inizierai a utilizzare la tua visione periferica per vedere i numeri nelle 
        altre caselle.
        Man mano che avanzi, i movimenti oculari dovrebbero assomigliare a questo:
      </p>
      Principiante: 
      <Beginner />
      Intermedia:
      <Intermediate />
      Avanzate:
      <Ideal />

      <p>
        Man mano che migliorerai in questo esercizio, 
        le tabelle diventeranno più grandi. A partire da una tabella 3x3,
        poi una tabella 5x5 e infine una tabella 7x7.
      </p>
    </div>
  )
  else if (user.language === 'spanish') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:max-h-fit max-h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-scroll'>
      <p>
        Cada casilla de la tabla contendrá un número. 
        El objetivo de este ejercicio es hacer clic
        las casillas del número más bajo al número más alto. 
        Mantén tus ojos enfocados en la caja.
        en el centro de la mesa. Tus ojos naturalmente se desviarán pero trata de mantener
        Tus ojos se centraron en el cuadro central. A medida que practiques, 
        tu concentración mejorará y podrás
        Comenzará a utilizar su visión periférica para ver los números en los otros cuadros.
        A medida que avances, los movimientos de tus ojos deberían verse así:
      </p>
      Principiante: 
      <Beginner />
      Intermedia:
      <Intermediate />
      Avanzada:
      <Ideal />

      <p>
        A medida que vayas mejorando en este ejercicio, 
        las tablas se harán más grandes. Comenzando con una mesa de 3x3,
        luego una mesa de 5x5 y finalmente una mesa de 7x7.
      </p>
    </div>
  )
  else if (user.language === 'german') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:max-h-fit max-h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-scroll'>
      <p>
        Jedes Feld in der Tabelle enthält eine Nummer. Das Ziel dieser Übung ist das Klicken
        die Kästchen von der niedrigsten zur höchsten Zahl. 
        Konzentrieren Sie Ihren Blick auf die Box
        in der Mitte des Tisches. Ihr Blick wird natürlich wandern, 
        aber versuchen Sie, ihn beizubehalten
        Deine Augen waren auf den mittleren Kasten gerichtet. 
        Während Sie üben, wird sich Ihr Fokus verbessern und Sie
        beginnt, Ihr peripheres Sehvermögen zu nutzen, 
        um die Zahlen in den anderen Kästchen zu sehen.
        Im weiteren Verlauf sollten Ihre Augenbewegungen etwa so aussehen:
      </p>
      Anfänger: 
      <Beginner />
      Dazwischenliegend:
      <Intermediate />
      Fortschrittlich:
      <Ideal />

      <p>
        Je besser Sie diese Übung machen, desto größer werden die Tische. 
        Beginnend mit einem 3x3-Tisch,
        dann ein 5x5-Tisch und schließlich ein 7x7-Tisch.
      </p>
    </div>
  )
  else return <>Language not supported</>
}

function getUrl(user: User | undefined){
  if(!user) return '/nav'
  switch(user.schulteLevel){
    case 'three': {
      console.log('three')
      return '/exercises/schultetable?type=3'
    }
    case 'five': {
      console.log('five')
      return '/exercises/schultetable?type=5'
    }
    case 'seven': {
      console.log('seven')
      return '/exercises/schultetable?type=7'
    }
    default: return '/exercises/schultetable?type=5'
  }
}

function StartButton(){
  const [time, setTime] = useState(false)
  const { data } = trpc.user.get.useQuery()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => setTime(true), INSTRUCTION_DELAY)
  }, [])

  return time ? (
    <button
      className='text-white md:text-5xl text-4xl bg-white/10 flex items-center justify-center rounded-full md:w-40 w-60 p-4 h-16 hover:bg-white/20'
      onClick={() => navigate(router as SingletonRouter, getUrl(data))}
    >
      Start
    </button>
  ) : (
    <LoadingSpinner />
  )
}

const Page: NextPage = () => {
  const userStore = useUserStore()
  const [font, setFont] = useState<Font>('sans')
  useEffect(() => {
    if(!userStore.user) return
    setFont(userStore.user.font)
  }, [userStore.user])

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center py-10 gap-4'>
          <Paragraph1 user={ userStore.user }/>
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}

export default Page
