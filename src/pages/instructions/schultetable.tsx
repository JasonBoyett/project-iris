import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LoadingSpinner from '~/components/loadingspinner'
import { useUserStore } from '~/stores/userStore'
import type { Font, User } from '~/utils/types'
import { type SingletonRouter, useRouter } from "next/router";
import { FontProvider } from "~/cva/fontProvider";
import Sidebar from '~/components/sidebar'
import { navigate } from '~/utils/helpers'
import { Beginner, Ideal, Intermediate } from '~/components/schultedraw'
import { api } from '~/utils/api'

const INSTRUCTION_DELAY = 5_000

function Paragraph1(){
  return (
    <div className='gap-2 bg-white text-2xl p-12 rounded-lg shadow-md md:max-h-fit max-h-96 md:w-2/5 w-4/5 items-center md:overflow-y-auto overflow-y-scroll'>
      <p>
        Each box in the table will contain a number. The goal of this exercise is to click 
        the boxes from lowest number to highest number. Keep your eyes focused on the box
        at the center of the table. Your eyes will naturally wander but try to Keep
        your eyes focused on the center box. As you practice your focus will improve and you
        will begin to use your pariferal vision to see the numbers in the other boxes.
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
  const { data } = api.user.getUnique.useQuery()
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
  })

  return (
    <>
      <Head>Even Number Exercise Instructions</Head>
      <Sidebar />
      <FontProvider font={font}>
        <div className='flex flex-col items-center justify-center py-10 gap-4'>
          <Paragraph1 />
          <StartButton />
        </div>
      </FontProvider>
    </>
  )
}

export default Page
