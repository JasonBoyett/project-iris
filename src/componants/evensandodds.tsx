import React, { useEffect, useRef, useState } from 'react'
import { FontProviderButton } from '~/cva/fontProvider'
import type { Dispatch, FC, ReactElement, SetStateAction } from 'react'
import { uuid } from 'uuidv4'
import { motion } from 'framer-motion'
import { FontProvider } from '~/cva/fontProvider'
import useUserStore from '~/stores/userStore'
import { fontSelector } from '~/utils/helpers'
import { SelectFont } from '~/utils/types'
const DEFAULT =
  'flex text-white text-xl justify-center p-4 border-2 border-slate-700 gap-0 bg-white/20'
const HILIGHT =
  'flex text-white text-xl justify-center p-4 bg-blue-500 border-2 border-slate-700 gap-0 bg-slate-700/40'

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

const randomNumber = (segFigs: number, isEven: boolean) => {
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

const generateNumbers = (props: EvenOddProps) => {
  const count = props.cols * props.rows
  const numbers: number[] = []

  for (let i = 0; i < count; i++) {
    numbers.push(randomNumber(props.segFigs, i < props.evens ? true : false))
  }
  return numbers.sort(() => Math.random() - 0.5)
}

const Cell = (props: CellProps) => {
  const [currentClass, setCurrentClass] = useState(props.defaultClass)
  const userStore = useUserStore()
  const [font, setFont] = useState<SelectFont>('sans')
  const [disabled, setDisabled] = useState(false)
  
  const handleClick = () => {
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
    if(!userStore.user) return
    setFont(fontSelector(userStore.user))
  }, [userStore.user])

  return (
    <FontProviderButton
      font={font}
      className={currentClass}
      key={uuid()}
      onClick={() => handleClick()}
      id={props.id.toString()}
      disabled={disabled}
    >
      {props.id}
    </FontProviderButton>
  ) as ReactElement
}

const generateComponants = (
  props: EvenOddProps,
  evenEvent: () => void,
  oddEvent: () => void,
) => {
  const componants: ReactElement[] = []
  const numbers = generateNumbers(props)

  for (const num of numbers) {
    const attributes: CellProps = {
      id: num,
      defaultClass: DEFAULT,
      hilightClass: HILIGHT,
      evenEvent: evenEvent,
      oddEvent: oddEvent,
    }
    componants.push(
      <Cell
        id={num}
        defaultClass={DEFAULT}
        hilightClass={HILIGHT}
        evenEvent={() => evenEvent()}
        oddEvent={() => oddEvent()}
      />,
    )
  }
  return componants
}

const EvensAndOdds = (props: EvenOddProps) => {
  const [grid, setGrid]: [
    ReactElement[],
    Dispatch<SetStateAction<ReactElement[]>>,
  ] = useState<ReactElement[]>([])
  const [cleared, setCleared]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(0)
  const evenCount = useRef(0)
  const errorCount = useRef(0)
  const GRID_CLASS = useState(`grid grid-cols-${props.cols}`)[0]

  const pressEven = () => {
    evenCount.current++
    if (evenCount.current === props.evens && props.frameSetter) {
      setGrid(generateComponants(props, pressEven, pressOdd))
      evenCount.current = 0
      props.frameSetter((prev) => prev + 1)
      setCleared((prev) => prev + 1)
    } else if (evenCount.current === props.evens && !props.frameSetter) {
      setGrid(generateComponants(props, pressEven, pressOdd))
      evenCount.current = 0
      setCleared((prev) => prev + 1)
    }
  }

  const pressOdd = () => {
    errorCount.current++
  }

  useEffect(() => {
    const newGrid = generateComponants(props, pressEven, pressOdd)
    setGrid(newGrid)
  }, [])


  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div
          className={GRID_CLASS}
        >
          {grid}
        </div>
        <div
          className='white text-md'
        >
          frames cleared: <span className='text-yellow-400'>{cleared}</span>
        </div>
      </motion.div>
    </>
  )
}

export { EvensAndOdds, generateNumbers }
export type { EvenOddProps }
module.exports = { EvensAndOdds, generateNumbers }
