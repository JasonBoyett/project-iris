import React, { useEffect, useRef, useState } from 'react'
import { FontProviderButton } from '~/cva/fontProvider'
import type { Dispatch, SetStateAction } from 'react'
import { motion } from 'framer-motion'
import useUserStore from '~/stores/userStore'
import type { Font } from '~/utils/types'
import { useStopWatch } from '~/hooks/useStopWatch'
import { type SingletonRouter, useRouter } from 'next/router'
import { api } from '~/utils/api'
import { formatDate, navigate } from '~/utils/helpers'
const DEFAULT =
  'flex text-white md:text-3xl text-xl justify-center md:p-4 p-2 bg-white/10 rounded-md'
const HILIGHT =
  'flex text-white md:text-3xl text-1xl justify-center md:p-4 p-2 bg-blue-500 gap-0 bg-slate-700/40 rounded-md'

type EvenOddProps = {
  segFigs: number
  evens: number
  cols: number
  rows: number
  framesCleared?: number
  frameSetter?: Dispatch<SetStateAction<number>>
}

type CellProps = {
  id: number
  defaultClass: string
  hilightClass: string
  evenEvent: () => void
  oddEvent: () => void
}

type GenerateorProps = {
  props: EvenOddProps,
  evenEvent: () => void,
  oddEvent: () => void,
}

function randomNumber(segFigs: number, isEven: boolean){
  const min = Math.pow(10, segFigs - 1)
  const max = Math.pow(10, segFigs) - 1
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  if (isEven) {
    const newNumber = randomNumber % 2 === 0 ? randomNumber : randomNumber + 1
    if (newNumber > max) {
      return newNumber - 2
    } else if (newNumber < min) {
      return newNumber + 2
    } else {
      return newNumber
    }
  } else {
    const newNumber = randomNumber % 2 === 0 ? randomNumber + 1 : randomNumber
    if (newNumber > max) {
      return newNumber - 2
    } else if (newNumber < min) {
      return newNumber + 2
    } else {
      return newNumber
    }
  }
}

function generateNumbers(props: EvenOddProps): number[]{
  const count = props.cols * props.rows
  const numbers: number[] = []

  for (let i = 0; i < count; i++) {
    numbers.push(randomNumber(props.segFigs, i < props.evens ? true : false))
  }
  console.log(numbers)
  return numbers.sort(() => Math.random() - 0.5)
}

function Cell(props: CellProps){
  const [currentClass, setCurrentClass] = useState(props.defaultClass)
  const userStore = useUserStore()
  const [font, setFont] = useState<Font>('sans')
  const [disabled, setDisabled] = useState(false)

  function handleClick(){
    if (props.id % 2 === 0 && !disabled) {
      setCurrentClass(props.hilightClass)
      setDisabled(true)
      props.evenEvent()
    } else {
      props.oddEvent()
    }
  }

  useEffect(() => {
    if (currentClass === HILIGHT) {
      setCurrentClass(props.defaultClass)
      setDisabled(false)
    }
  }, [props.id])

  useEffect(() => {
    if (!userStore.user) return
    setFont(userStore.user.font)
  }, [userStore.user])

  return (
    <FontProviderButton
      font={font}
      className={currentClass}
      key={props.id}
      onClick={() => handleClick()}
      id={props.id.toString()}
      disabled={disabled}
    >
      {props.id}
    </FontProviderButton>
  ) 
}

function Grid({ props, evenEvent,oddEvent } : GenerateorProps){
  return generateNumbers(props).map((num, i) => (
      <Cell
        id={num}
        key={i}
        defaultClass={DEFAULT}
        hilightClass={HILIGHT}
        evenEvent={() => evenEvent()}
        oddEvent={() => oddEvent()}
      />
    )
  )
}

export default function EvensAndOdds(props: EvenOddProps){
  const evenCount = useRef(0)
  const errorCount = useRef(0)
  const GRID_CLASS = useState(`grid grid-cols-${props.cols} gap-1`)[0]
  const timer = useStopWatch()
  const router = useRouter()
  const { mutate } = api.user.setUser.useMutation()
  const user = api.user.getUnique.useQuery().data
  const collectData = api.evenNumbersSession.setUnique.useMutation()
  const userStore = useUserStore()

  function tearDown(){
    if(!user) return
    if(user.isStudySubject){
      timer.end()
      collectData.mutate({
        userId: user.id,
        time: timer.getDuration(),
        errorCount: errorCount.current,
      })  
    }
    mutate({...user, lastEvenNumbers: formatDate(new Date())})
    userStore.setUser({...user, lastEvenNumbers: formatDate(new Date())})
    navigate(router as SingletonRouter, '/next')
  }

  const pressEven = () => {
    evenCount.current++
    if (evenCount.current === props.evens && props.frameSetter) {
      tearDown()
    }
  }

  const pressOdd = () => {
    errorCount.current++
  }

  useEffect(() => {
    timer.start()
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={GRID_CLASS}>
          <Grid
            props={props}
            evenEvent={() => pressEven()}
            oddEvent={() => pressOdd()}
          />
        </div>
      </motion.div>
    </>
  )
}

export { generateNumbers }
export type { EvenOddProps }
