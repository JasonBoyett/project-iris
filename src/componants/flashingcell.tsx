import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { ReactElement } from 'react'
import useInterval from '../hooks/useInterval'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

const counterContext = createContext <number>(0)

interface CellType extends ReactElement {
  display: JSX.Element
  flash: (current: number) => void
}

type CellProps = {
  content: string
  location: number
  current: number
}

interface GridType extends ReactElement {
  cells: CellType[]
  getCurrentCell(): number
  stepThroughCells: () => void
}

type GridProps = {
  wordsPerCell: number
  rows: number
  wpm: number
  width: number
}
export const getWords = async (number: number) => {
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

export const partitionWords = (
  words: string[],
  sections: number,
  frames: number,
) => {
  const partitionedWords: string[][] = []
  const wordJoiner: string[] = []
  const wordsPerCell = words.length / sections
  for (let i = 0; i < sections; i += wordsPerCell){
    wordJoiner.push(words.slice(i, i + wordsPerCell).join(' '))
  }
  for (let i = 0; i < wordJoiner.length; i += frames) {
    partitionedWords.push(wordJoiner.slice(i, i + frames))
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log(partitionedWords.length)
  return partitionedWords
}

const Cell = ({ content, location }: CellProps) => {
  const FLASH =
    'flex text-white text-xl justify-center p-4 bg-gray-500 rounded-md gap-1'
  const NO_FLASH = 'flex text-white text-xl justify-center p-4'
  const [className, setClassName] = useState(NO_FLASH)
  const counter = useContext(counterContext)

  const highlight = () => {
    setClassName(FLASH)
  }

  const toDefault = () => {
    setClassName(NO_FLASH)
  }


  useEffect(() => {
    counter === location 
      ? highlight() 
      : toDefault()
  }, [counter, location])

  return (
    <div 
    className={className}
    key={uuid()}
    >
      {content}
    </div>
  )
}

export const createCells = ({
  words,
  cellCounter,
}: {
  words: string[]
  cellCounter: number
}) => {
  const cells: ReactElement[] = []
  words.forEach((word, index) => {
    cells.push(
      <Cell
        location={index}
        content={word}
        current={cellCounter}
        key={uuid()}
      />,
    )
  })
  return cells
}

const Grid = ({ wordsPerCell, wpm, rows, width }: GridProps) => {
  const [cellCounter, setCounter] = useState<number>(0)
  const words = useRef<string[][]>([])
  const section = useRef<number>(0)
  const [done, setDone] = useState<JSX.Element | null>(null)
  const [grid, setGrid] = useState<JSX.Element[]>()
  const returnClass = useState<string>(`grid grid-cols-${width} gap-2`)[0]
  const [loadBuffer, setBuffer] = useState<number>(0) //WARNING: this is a hacky solution for loading lag. prototype use only remove before launch

  const tearDown = () => {
    setDone(<div className='text-white text-4xl'>done</div>)
  }

  useEffect(() => {
    const setup = (async () => {
      const wordsArry = await getWords(wordsPerCell * wpm * rows )
      words.current = partitionWords(wordsArry, wordsArry.length / (wordsPerCell), rows * width)
      setGrid(createCells({ words: words.current[0]!, cellCounter }))
    })()
  }, [])


  useInterval(() => {
    if (loadBuffer < (rows * width)){
      setBuffer(prev => prev + 1)
      console.log('triggered')
      return
    }//WARNING: this is a hacky solution for loading lag. prototype use only remove before launch
    if (section.current >= words.current.length - 1 && cellCounter >= rows * width) {
      tearDown()
      return
    }
    if (cellCounter >= rows * width) {
      section.current ++
      console.log(section)
      setGrid(
        createCells({
          words: words.current[section.current]!,
          cellCounter,
        }),
      )
      setCounter(0)
    } else {
      setCounter(prev => prev + 1)
    }
    console.log(cellCounter)
  }, 60_000 / wpm)
  
  return (
    <counterContext.Provider value={cellCounter}>
      <div className={returnClass}>{grid}</div>
    </counterContext.Provider>
  ) as GridType
}

export default Grid
