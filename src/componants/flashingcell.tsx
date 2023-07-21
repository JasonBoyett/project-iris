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
import { api } from '../utils/api'
import { useIsVisible } from '~/hooks/useIsVisible'
import { userContext, userType } from '~/pages/_app'
import { useRouter } from 'next/router'

const counterContext = createContext<number>(0)

interface CellType extends ReactElement {
  display: JSX.Element
  flash: (current: number) => void
}

export enum FlasherLayout {
  ONE_BY_ONE = 'ONE_BY_ONE',
  ONE_BY_TWO = 'ONE_BY_TWO',
  TWO_BY_ONE = 'TWO_BY_ONE',
  TWO_BY_TWO = 'TWO_BY_TWO',
  FOUR_BY_TWO = 'FOUR_BY_TWO',
  FOUR_BY_ONE = 'FOUR_BY_ONE',
}

type CellProps = {
  content: string
  location: number
  loadCheck: React.Dispatch<React.SetStateAction<boolean>>
}

interface GridType extends ReactElement {
  cells: CellType[]
  getCurrentCell(): number
  stepThroughCells: () => void
}

type GridProps = {
  layout: FlasherLayout
  rows?: number
  next?: string
}

const layoutManager = (layout: FlasherLayout) => {
  switch (layout) {
    case FlasherLayout.ONE_BY_ONE:
      return [1, 1]
    case FlasherLayout.ONE_BY_TWO:
      return [1, 2]
    case FlasherLayout.TWO_BY_ONE:
      return [2, 1]
    case FlasherLayout.TWO_BY_TWO:
      return [2, 2]
    case FlasherLayout.FOUR_BY_TWO:
      return [4, 2]
    case FlasherLayout.FOUR_BY_ONE:
      return [4, 1]
  }
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
  for (let i = 0; i < sections; i += wordsPerCell) {
    wordJoiner.push(words.slice(i, i + wordsPerCell).join(' '))
  }
  for (let i = 0; i < wordJoiner.length; i += frames) {
    partitionedWords.push(wordJoiner.slice(i, i + frames))
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return partitionedWords
}

const Cell = ({ content, location, loadCheck }: CellProps) => {
  const FLASH =
    'flex text-white text-xl justify-center p-4 bg-gray-500 rounded-md gap-1'
  const NO_FLASH = 'flex text-white text-xl justify-center p-4'
  const [className, setClassName] = useState(NO_FLASH)
  const counter = useContext(counterContext)
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useIsVisible(ref)

  const highlight = () => {
    setClassName(FLASH)
  }

  const toDefault = () => {
    setClassName(NO_FLASH)
  }

  useEffect(() => {
    counter === location ? highlight() : toDefault()
  }, [counter, location])

  useEffect(() => loadCheck(true), [ref])

  return (
    <div
      className={className}
      key={uuid()}
      ref={ref}
    >
      {content}
    </div>
  )
}

export const createCells = ({
  words,
  loadCheck,
}: {
  words: string[]
  loadCheck: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const cells: ReactElement[] = []
  words.forEach((word, index) => {
    cells.push(
      <Cell
        location={index}
        content={word}
        loadCheck={loadCheck}
        key={uuid()}
      />,
    )
  })
  return cells
}

const Grid = ({ rows = 5, layout, next }: GridProps) => {
  const [cellCounter, setCounter] = useState<number>(-1)
  //cellCounter starts at -1 so the animation doesn't start until
  //the component has been visible for just a moment
  const words = useRef<string[][]>([])
  const section = useRef<number>(0)
  const [wordsPerCell, width]: [number, number] | number[] =
    layoutManager(layout)
  const [grid, setGrid] = useState<JSX.Element[]>()
  const returnClass = useState<string>(`grid grid-cols-${width} gap-2`)[0]
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const context = useContext(userContext)
  const user = context.state
  const router = useRouter()

  const tearDown = () => {
    if (next) {
      //TODO impliment data collection here
      return router.push(next).catch((err) => console.log(err))
    } else router.push('/nav').catch((err) => console.log(err))
  }

  useEffect(() => {
    const setup = (async () => {
      const wordsArry = await getWords(wordsPerCell * user.CurrentWpm * rows)
      words.current = partitionWords(
        wordsArry,
        wordsArry.length / wordsPerCell,
        rows * width,
      )
      setGrid(
        createCells({ words: words.current[0]!, loadCheck: setIsVisible }),
      )
      console.log('width: ', width)
      console.log('wordsPerCell: ', wordsPerCell)
    })()
  }, [])

  useInterval(() => {
    if (!isVisible) {
      console.log(isVisible)
      console.log('not visible')
      return
    }
    if (
      section.current >= words.current.length - 1 &&
      cellCounter >= rows * width
    ) {
      tearDown()?.catch((err) => console.log(err))
      return
    }
    if (cellCounter >= rows * width) {
      section.current++
      console.log(section)
      setGrid(
        createCells({
          words: words.current[section.current]!,
          loadCheck: setIsVisible,
        }),
      )
      setCounter(0)
    } else {
      setCounter((prev) => prev + 1)
    }
    console.log(cellCounter)
  }, 60_000 / user.CurrentWpm)

  return (
    <counterContext.Provider value={cellCounter}>
      <div
        className={returnClass}
        ref={ref}
      >
        {grid}
      </div>
    </counterContext.Provider>
  ) as GridType
}

export default Grid
