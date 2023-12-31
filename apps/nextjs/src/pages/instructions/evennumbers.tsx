import { useState, useEffect } from 'react'
import Head from 'next/head'
import LoadingSpinner from '../../components/loadingspinner'
import { useUserStore } from '../../stores/userStore'
import type { Font, User } from '@acme/types'
import { useRouter, type SingletonRouter } from "next/router";
import { FontProvider } from "../../cva/fontProvider";
import Sidebar from '../../components/sidebar'
import { navigate } from '@acme/helpers'

const INSTRUCTION_DELAY = 5_000

function Paragraph1({ user }: { user: User | undefined }) {
  if (!user) return <LoadingSpinner />
  if (user.language === 'english') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        <span className='font-bold'>
          The goal of this exercise is for you to find the six even numbers in
          the table.
        </span>
        <br />
        There is no time limit, though your time will be recorded to track your
        progression. so try to go as quickly as you can while remaining
        accurate. This exercise is designed to help you improve your ability to
        focus and your perception. Try to stay relaxed and focused while you are
        doing this exercise. It is up to you how you want to approach this
        exercise. But we recommend that you either search the table row by row
        or column by column.
      </p>
    </div>
  )
  // all of the following are grabbed from google translate and may not be accurate
  // if you speak any of these languages and can correct them, please do so.
  // TODO get proper translations
  else if (user.language === 'german') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        Das Ziel dieser Übung ist es, die sechs geraden Zahlen zu finden
        Der Tisch. Es gibt keine zeitliche Begrenzung, Ihre Zeit wird jedoch
        aufgezeichnet, um Ihre Zeit zu verfolgen
        Fortschreiten. Versuchen Sie also, so schnell wie möglich zu gehen,
        während Sie bleiben genau. Diese Übung soll Ihnen dabei helfen, Ihre
        Fähigkeiten zu verbessern
        Fokus und Ihre Wahrnehmung. Versuchen Sie dabei entspannt und
        konzentriert zu bleiben
        diese Übung machen. Es liegt an Ihnen, wie Sie dies angehen möchten
        Übung. Wir empfehlen Ihnen jedoch, die Tabelle entweder zeilenweise zu durchsuchen
        oder Spalte für Spalte.
      </p>
    </div>
  )
  else if (user.language === 'spanish') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        El objetivo de este ejercicio es que encuentres los seis números pares en
        la mesa. No hay límite de tiempo, aunque su tiempo se registrará para
        realizar un seguimiento de su
        progresión. así que intenta ir lo más rápido que puedas mientras permaneces
        preciso. Este ejercicio está diseñado para ayudarle a mejorar su capacidad para
        enfoque y tu percepción. Intenta mantenerte relajado y concentrado mientras estás
        haciendo este ejercicio. Depende de usted cómo quiere abordar esto
        ejercicio. Pero le recomendamos que busque en la tabla fila por fila
        o columna por columna.
      </p>
    </div>
  )
  else if (user.language === 'italian') return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:h-3/5 h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-auto'>
      <p>
        L&apos;obiettivo di questo esercizio è trovare i sei numeri pari
        la tavola. Non c&apos;è limite di tempo, anche se il tuo tempo verrà
        registrato per tenere traccia del tuo
        progressione. quindi prova ad andare il più velocemente possibile rimanendo
        accurato. Questo esercizio è progettato per aiutarti a migliorare la tua capacità di
        concentrazione e la tua percezione. Cerca di rimanere rilassato e concentrato
        mentre lo sei
        facendo questo esercizio. Dipende da te come vuoi affrontare questo problema
        esercizio. Ma ti consigliamo di cercare nella tabella riga per riga
        o colonna per colonna.
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
      onClick={() => navigate(router as SingletonRouter, '/exercises/evennumbers')}
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
        <div className='flex flex-col items-center justify-center min-h-screen py-10 gap-4'>
          <Paragraph1 user={userStore.user} />
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}
