/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, {
  useState,
  useEffect,
  ReactNode,
  ReactElement,
  Dispatch,
  SetStateAction,
} from 'react'
import useInterval from '~/hooks/useInterval'
import axios from 'axios'
import { api } from '~/utils/api'
import { motion } from 'framer-motion'

//props for the Grid
type GridProps = {
  wordsPerCell: number
  wpm: number
  width: number
  height: number
}

//tailwind class constants
const FLASH =
  'flex text-white text-xl justify-center p-4 bg-gray-500 rounded-md gap-1'
const NO_FLASH = 'flex text-white text-xl justify-center p-4'

//helper functions
const getWords = async (number: number) => {
  try {
    if (number > 500) {
      //random words api won't return more than 500 words at a time so here's a hacky workaround
      const holder: string[] = []
      for (let i = 0; i < number / 500 + 1; i++) {
        const response = await axios.get(
          `https://random-word-api.vercel.app/api?words=500`,
        )
        holder.push(...(response.data as string[]))
      }
      return holder.slice(0, number)
    } else {
      const response = await axios.get(
        `https://random-word-api.vercel.app/api?words=${number}`,
      )
      return response.data as string[]
    }
  } catch (error) {
    console.log("Here's the error: ", error)
    return ['error']
  }
}

const partitionWords = (
  words: string[],
  indexes: number,
  sections: number,
  wordsPerCell: number,
) => {
  const partitionedWords: string[][] = []
  const wordJoiner: string[] = []
  for (let i = 0; i < words.length / wordsPerCell; i += wordsPerCell) {
    wordJoiner.push(words.slice(i, i + wordsPerCell).join(' '))
  }
  for (let i = 0; i < sections; i++) {
    partitionedWords.push(wordJoiner.slice(i))
  }
  return partitionedWords
}

const wordToComponent = (word: string, id: string) => {
  // return React.createElement('div', { className: NO_FLASH, key: id }, word)
  return (
    <div
      className={NO_FLASH}
      key={id}
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0 }}
      // transition={{ duration: 0.25 }}
    >
      {word}
    </div>
  )
}

const toggleFlash = (element: React.ReactElement) => {
  if (element.props.children !== undefined) {
    const currentClass: React.FC | string = element.props.className as
      | React.FC
      | string
    const newClassName = currentClass !== FLASH ? FLASH : NO_FLASH
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newProps = {
      ...element.props,
      className: newClassName,
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const newElm: ReactNode = React.cloneElement(
      element,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      newProps,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      element.props.children,
    )
    return newElm as ReactElement
  } else {
    return element
  }
}

const calculateSectionNumber = (props: GridProps) => {
  const perSection = props.width * props.height
  return Math.ceil(props.wpm / perSection)
}

const flashingGrid: React.FC<GridProps> = (props: GridProps) => {
  const [words, setWords] = useState<string[][]>([[]])
  const [section, setSection]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(0)
  const [index, setIndex]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(0)
  // eslint-disable-next-line @typescript-eslint/ban-types
  const [grid, setGrid]: [any[], Function] = useState([])
  const [fetched, setFetched]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false)
  const [loaded, setLoaded]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState<boolean>(false)
  const [gridCount, setGridCount]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(calculateSectionNumber(props))
  const returnClass = useState<string>(`grid grid-cols-${props.width} gap-2`)[0]
  const [cellCount, setCellCount]: [number, Dispatch<SetStateAction<number>>] =
    useState<number>(props.width * props.height)

  const done = (
    <div className='flex items-center justify-center text-3xl text-white'>
      Done!
    </div>
  )
  const error = <div>Error</div>
  const loading = (
    <motion.div
      className='flex items-center justify-center text-3xl text-white'
      initial={{ opacity: 0, x: '-100vw' }}
      animate={{ opacity: 1, x: '0vw' }}
      transition={{ duration: 2 }}
    >
      Loading..
    </motion.div>
  )

  const buildGrid = () => {
    // eslint-disable-next-line prefer-const
    let newGrid: React.ReactElement[] = []
    for (let i = 0; i < cellCount; i++) {
      newGrid.push(
        wordToComponent(
          words[section]?.[i] as string,
          i.toString() + ', ' + section.toString(),
        ),
      )
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setGrid(newGrid)
    setFetched(true)
  }

  const step = () => {
    try {
      if (index === cellCount && section === gridCount) {
        return false
      }
      if (!index) {
        const newGrid: React.ReactElement[] = grid as React.ReactElement[]
        newGrid[0] = toggleFlash(newGrid[0]!)
        setGrid(newGrid)
        setIndex((previous) => previous + 1)
      } else if (index < cellCount) {
        const newGrid: React.ReactElement[] = grid as React.ReactElement[]
        newGrid[index] = toggleFlash(newGrid[index]!)
        newGrid[index - 1] = toggleFlash(newGrid[index - 1]!)

        setGrid(newGrid)
        setIndex((previous) => previous + 1)
      } else {
        setSection((previous: number) => previous + 1)
        setIndex(0)
      }
      return true
    } catch (Exception) {
      return false
    }
  }

  useInterval(() => {
    fetched ? step() : setLoaded(true)
  }, 60000 / props.wpm)

  useEffect(() => {
    const getWordsAndBuildGrid = async () => {
      const holder = await getWords(gridCount * cellCount * props.wordsPerCell)
      setWords(partitionWords(holder, cellCount, gridCount, props.wordsPerCell))
      buildGrid()
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getWordsAndBuildGrid()
  }, [])

  useEffect(() => {
    if (section < gridCount) {
      buildGrid()
    } else {
      setGrid(null)
    }
  }, [words, section])

  try {
    return (
      <>
        <motion.div
          className={returnClass}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            type: 'tween',
          }}
        >
          {grid ?? done}
        </motion.div>
      </>
    )
  } catch (Exception) {
    return error
  }
}

export default flashingGrid
export type { GridProps }
