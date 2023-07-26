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
import { useRouter } from 'next/router'
import { useUserStore } from '~/stores/userStore'

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

const LoadingSpinner = () => {
  return (
    <div role='status'>
      <svg
        aria-hidden='true'
        className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
      <span className='sr-only'>Loading...</span>
    </div>
  )
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
  const user = useUserStore((state) => state.user)
  const router = useRouter()
  const [display, setDisplay] = useState<
    JSX.Element | JSX.Element[] | undefined
  >(<LoadingSpinner />)

  const setSpeed = () => {
    if (!user) throw new Error('User not found')
    return 60_000 / user.CurrentWpm
  }
  const tearDown = () => {
    if (next) {
      //TODO impliment data collection here
      return router.push(next).catch((err) => console.log(err))
    } else router.push('/nav').catch((err) => console.log(err))
  }

  useEffect(() => {
    if (!user) throw new Error('User not found')
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
  }, setSpeed())

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
