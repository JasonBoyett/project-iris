import { formatDate } from '~/utils/helpers'
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { v4 } from 'uuid'
import { useRouter } from 'next/router'
import { api } from '~/utils/api'

type SchulteTableProps = {
  sideLength: 3 | 5 | 7
}

const Cell = ({
  innerValue,
  counterSetter,
  errorSetter,
  counter,
  errorCounter,
}: {
  innerValue: number
  counterSetter: React.Dispatch<React.SetStateAction<number>>
  errorSetter: (number: number) => void
  counter: number
  errorCounter: number
}) => {
  const [clicked, setClicked] = useState(false)
  const style: string = clicked
    ? 'h-12 w-12 text-white text-lg md:text-2xl flex items-center justify-center rounded bg-white/10 md:h-20 md:w-20 opacity-50 hover:border hover:border-white hover:border-2'
    : 'h-12 w-12 text-white text-lg md:text-2xl flex items-center justify-center hover:border hover:border-white hover:border-2 rounded bg-white/20 md:h-20 md:w-20'

  const handleClick = () => {
    if (innerValue !== counter && !clicked) errorSetter(errorCounter++)
    else if (!clicked) {
      setClicked(true)
      counterSetter((prev) => prev + 1)
    }
  }

  return (
    <div
      className={style}
      onClick={handleClick}
      id={v4()}
    >
      {innerValue}
    </div>
  )
}

const SchulteTable = ({sideLength}: SchulteTableProps) => {
  const [counter, setCount] = useState(1)
  const errors = useRef(0)
  const router = useRouter()
  const { mutate } = api.user.setUser.useMutation()
  const totalCells = Math.pow(sideLength, 2) 
  const [classString, setClassString]= useState('')
  const incrementErrors = (number: number) => (errors.current = number)
  const numbers = useRef(
    Array.from({ length: totalCells}, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    ),
  )
  
  const teardown = () => {
    //log info here
    switch (sideLength) {
      case 3:
        mutate({ LastSchulteByThree: formatDate(new Date()) })
        break
      case 5:
        mutate({ LastSchulteByFive: formatDate(new Date()) })
        break
      case 7:
        mutate({ LastSchulteBySeven: formatDate(new Date()) })
        break
    }
    router.replace('/next').catch((err) => console.log(err))
  }
  const table = numbers.current.map((number) => (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Cell
          innerValue={number}
          counterSetter={setCount}
          errorSetter={incrementErrors}
          counter={counter}
          key={v4()}
          errorCounter={errors.current}
        />
      </motion.div>
    </>
  ))
  useEffect(() => {
    if (counter === totalCells + 1) {
      teardown()
    }
  }, [counter])
  useEffect(() => {
    if(sideLength === 3) setClassString('grid grid-cols-3 gap-1')
    if(sideLength === 5) setClassString('grid grid-cols-5 gap-1')
    if(sideLength === 7) setClassString('grid grid-cols-7 gap-1')
  }, [])
  return (
    <>
      <div className={classString}>
        {table}
        </div>
      <div className='md:text-4xl text-white'>
        Find: <span className='text-yellow-200'>{counter}</span>
      </div>

    </>
  )
}
export default SchulteTable
