import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { v4 } from 'uuid'

export type SchulteTableProps = {
  length: number
  width: number
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
    ? 'h-16 w-16 text-white lg:h-22 lg:w-22 flex items-center justify-center rounded bg-gray-900 sm:h-20 sm:w-20 opacity-50'
    : 'h-16 w-16 text-white lg:h-22 lg:w-22 flex items-center justify-center hover:border hover:border-white hover:border-2 rounded bg-gray-900 sm:h-20 sm:w-20'

  const handleClick = () => {
    if (innerValue !== counter && !clicked) errorSetter(errorCounter++)
    else if (!clicked) {
      setClicked(true)
      counterSetter((prev) => prev + 1)
    }
    console.log(counter)
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

const SchulteTable = ({ length, width }: SchulteTableProps) => {
  const [counter, setCount] = useState(1)
  const errors = useRef(0)
  const classString = `flex grid grid-cols-${width} gap-1`
  const incrementErrors = (number: number) => (errors.current = number)
  const numbers = useRef(
    Array.from({ length: length * width }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    ),
  )
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
  const done = <div className='text-4xl text-green-400'>Done!</div>

  return (
    <>
      <div className={classString}>
        {counter === length * width + 1 ? done : table}
      </div>
    </>
  )
}
export default SchulteTable
