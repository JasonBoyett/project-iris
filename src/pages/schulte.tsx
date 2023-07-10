import { type NextPage } from 'next'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { api } from '~/utils/api'
import HomeButton from '~/componants/homebutton'

const Page: NextPage = () => {
  const [currentNumber, setCurrentNumber] = useState(1)
  let localNumber: number = currentNumber
  const [doneString, setDoneString] = useState(' ')
  const [sideLength, setSideLength] = useState(5)
  const [currentErrors, setCurrentErrors] = useState(0)

  const shuffledNumbers = (last: number): number[] => {
    const arr: number[] | undefined[] = []
    for (let i = 1; i <= last; i++) {
      arr.push(i as never)
    }
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr as number[]
  }

  const [numbers, changeNumbers] = useState(
    shuffledNumbers(sideLength * sideLength),
  )

  const handleClick = (content: number) => {
    if (content === localNumber || content === currentNumber) {
      setCurrentNumber((prevNumber) => prevNumber + 1)
      if (localNumber < sideLength * sideLength) {
        localNumber++
      }
    } else {
      setCurrentErrors((prevErrors) => prevErrors + 1)
    }
  }

  const teardown = () => {
    //log info here
    changeNumbers(shuffledNumbers(sideLength * sideLength))
    setCurrentNumber(1)
    localNumber = 1
    setCurrentErrors(0)
    setDoneString(' ')
  }

  const Cell = (content: number): JSX.Element => {
    const className =
      'h-16 w-16 lg:h-22 lg:w-22 flex items-center justify-center hover:border hover:border-white hover:border-2 rounded bg-gray-900 sm:h-20 sm:w-20'
    return (
      <button
        className={className}
        onClick={() => handleClick(content)}
      >
        <div className='text-center text-2xl text-white'>{content}</div>
      </button>
    )
  }

  const generateCells = (): JSX.Element[] => {
    const cells: JSX.Element[] = numbers.map((n) => {
      return Cell(n)
    })
    return cells
  }

  const generateTable = (): JSX.Element => {
    return (
      <div className={`flex grid grid-cols-5 gap-1`}>{generateCells()}</div>
    )
  }
  const [table, setTable] = useState(generateTable())
  useEffect(() => {
    setTable(table)
  }, [table])
  useEffect(() => {
    if (
      localNumber < sideLength * sideLength + 1 
      && doneString !== 'Done!'
    ) {
      setCurrentNumber(localNumber)
    } else if (
      localNumber === sideLength * sideLength + 1 
      && doneString !== 'Done!'
    ) {
      setCurrentNumber(0)
      setDoneString('Done!')
    }
  }, [currentNumber, currentErrors, localNumber, doneString])

  return (
    <>
      <Head>
        <title>Schulte Table</title>
        <meta
          name='Schulte Table'
          content='A speed reading game called Schulte Table'
        />
      </Head>
      <HomeButton />

      <motion.div
        className='flex flex-col items-center justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className='flex h-screen flex-col items-start justify-center'>
          <button onClick={teardown}>
            <motion.p
              className='text-center text-7xl text-green-500'
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              {doneString}
            </motion.p>
          </button>
          {table}
          <div className='justify-left p-2 text-2xl text-white'>
            <p>Number: {currentNumber}</p>
            <p>Errors: {currentErrors}</p>
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default Page
