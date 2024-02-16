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
          You will be asked a series of questions to test your reading
          comprehension at different speeds.
          <span className='font-bold'>
            Remember to read the passage and answer the question based solely on
            the information provided.
          </span>
          Some questions may contain information that is different from reality.
          You will be asked a total of 10 questions and if you can answer 8 of
          them correctly your maximum reading speed will be increased. Your
          maximum speed will not be decreased if you fail to answer 8 questions
          correctly. This test is designed for you to take once a week to
          evaluate and set your progress. Remember to try to remain relaxed and
          focused while taking this test.
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
          Se le harán una serie de preguntas para evaluar su comprensión lectora
          a diferentes velocidades. Recuerde leer el pasaje y responder la
          pregunta basándose únicamente en la información proporcionada. Algunas
          preguntas pueden contener información diferente a la realidad. Se te
          harán un total de 10 preguntas y si puedes responder correctamente 8
          de ellas, tu velocidad máxima de lectura aumentará. Su velocidad
          máxima no disminuirá si no responde correctamente 8 preguntas. Esta
          prueba está diseñada para que usted la realice una vez por semana para
          evaluar y establecer su progreso. Recuerde intentar permanecer
          relajado y concentrado mientras realiza esta prueba.
        </p>
      </div>
    )
  else if (user.language === 'italian')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Ti verranno poste una serie di domande per testare la tua comprensione
          della lettura a diverse velocità. Ricordati di leggere il passaggio e
          di rispondere alla domanda basandoti esclusivamente sulle informazioni
          fornite. Alcune domande potrebbero contenere informazioni diverse
          dalla realtà. Ti verranno poste un totale di 10 domande e se riesci a
          rispondere correttamente ad 8 di esse la tua velocità massima di
          lettura aumenterà. La tua velocità massima non verrà ridotta se non
          rispondi correttamente a 8 domande. Questo test è progettato per
          essere svolto una volta alla settimana per valutare e definire i tuoi
          progressi. Ricordati di cercare di rimanere rilassato e concentrato
          mentre fai questo test.
        </p>
      </div>
    )
  else if (user.language === 'german')
    return (
      <div className='h-96 w-4/5 items-center gap-2 overflow-y-auto rounded-lg bg-white p-12 text-2xl shadow-md md:h-3/5 md:w-2/5 md:overflow-y-auto'>
        <p>
          Ihnen werden eine Reihe von Fragen gestellt, um Ihr Leseverständnis in
          verschiedenen Geschwindigkeiten zu testen. Denken Sie daran, die
          Passage zu lesen und die Frage ausschließlich auf der Grundlage der
          bereitgestellten Informationen zu beantworten. Einige Fragen können
          Informationen enthalten, die von der Realität abweichen. Ihnen werden
          insgesamt 10 Fragen gestellt und wenn Sie 8 davon richtig beantworten
          können, erhöht sich Ihre maximale Lesegeschwindigkeit. Ihre
          Höchstgeschwindigkeit wird nicht verringert, wenn Sie 8 Fragen nicht
          richtig beantworten. Dieser Test ist so konzipiert, dass Sie ihn
          einmal pro Woche absolvieren können, um Ihre Fortschritte zu bewerten
          und festzulegen. Denken Sie daran, bei diesem Test entspannt und
          konzentriert zu bleiben.
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
        navigate(router as SingletonRouter, '/exercises/speedtest')
      }
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
        <div className='flex min-h-screen flex-col items-center justify-center gap-4 py-10'>
          <Paragraph1 user={userStore.user} />
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}

export default Page
