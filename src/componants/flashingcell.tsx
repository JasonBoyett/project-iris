import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { StyledCell } from '~/cva/flashingStyles'
import type { ReactElement } from 'react'
import useInterval from '@/hooks/useInterval'
import { v4 as uuid } from 'uuid'
import { useIsVisible } from '@/hooks/useIsVisible'
import { useRouter } from 'next/router'
import { useUserStore } from '~/stores/userStore'
import { api } from '~/utils/api'
import type { SelectFont, User } from '~/utils/types'
import { formatDate } from '~/utils/helpers'
import { FontProvider } from '~/cva/fontProvider'
import type { HighlightType } from '~/utils/types'

const counterContext = createContext<number>(0)

interface CellType extends ReactElement {
  display: JSX.Element
  flash: (current: number) => void
}

type CellProps = {
  content: string
  location: number
  user: User
  loadCheck: React.Dispatch<React.SetStateAction<boolean>>
}

interface GridType extends ReactElement {
  cells: CellType[]
  getCurrentCell(): number
  stepThroughCells: () => void
}

type GridProps = {
  type: HighlightType
  rows?: number
}

const layoutManager = (layout: HighlightType) => {
  switch (layout) {
    case 'oneByOne':
      return [1, 1]
    case 'oneByTwo':
      return [1, 2]
    case 'twoByOne':
      return [2, 1]
    case 'twoByTwo':
      return [2, 2]
    case 'fourByOne':
      return [4, 1]
  }
}

function colorSelector(user: User) {
  switch (user.highlightColor) {
    case 'BLUE': return 'blue'
    case 'BLUE_GREY': return 'blueGrey'
    case 'GREEN': return 'green'
    case 'GREY': return 'grey'
    case 'ORANGE': return 'orange'
    case 'PEACH': return 'peach'
    case 'PURPLE': return 'purple'
    case 'RED': return 'red'
    case 'TURQUOISE': return 'turquoise'
    case 'YELLOW': return 'yellow'
  }
  return 'none'
}

export function partitionWords(
  words: string[],
  sections: number,
  frames: number,
) {
  const partitionedWords: string[][] = []
  const wordJoiner: string[] = []
  const wordsPerCell = words.length / sections
  for (let i = 0; i < sections; i += wordsPerCell) {
    wordJoiner.push(words.slice(i, i + wordsPerCell).join(' '))
  }
  for (let i = 0; i < wordJoiner.length; i += frames) {
    partitionedWords.push(wordJoiner.slice(i, i + frames))
  }
  return partitionedWords
}

function Cell({ content, location, loadCheck, user }: CellProps) {
  const [intent, setIntent] = useState<'noFlash' | 'flash' | null | undefined>(
    'noFlash',
  )
  const [color, setColor] = useState<
    | 'none'
    | 'blue'
    | 'green'
    | 'grey'
    | 'orange'
    | 'peach'
    | 'purple'
    | 'red'
    | 'turquoise'
    | 'yellow'
    | 'blueGrey'
    | null
    | undefined
  >('none')
  const counter = useContext(counterContext)
  const ref = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isVisible = useIsVisible(ref)

  const highlight = () => {
    setIntent('flash')
    setColor(colorSelector(user))
  }

  const toDefault = () => {
    setIntent('noFlash')
    setColor('none')
  }

  useEffect(() => {
    counter === location ? highlight() : toDefault()
  }, [counter, location])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => loadCheck(true), [ref])

  return (
    <div
      className='flex items-center justify-center'
      ref={ref}
    >
      <StyledCell
        intent={intent}
        flashColor={color}
        key={uuid()}
      >
        {content}
      </StyledCell>
    </div>
  )
}

export function createCells({
  words,
  loadCheck,
  user,
}: {
  words: string[] | undefined
  user: User
  loadCheck: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const cells: ReactElement[] = []
  if (!words) return
  words.forEach((word, index) => {
    cells.push(
      <Cell
        location={index}
        content={word}
        loadCheck={loadCheck}
        user={user}
        key={uuid()}
      />,
    )
  })
  return cells
}

function Grid({ rows = 4, type, }: GridProps) {
  const [cellCounter, setCounter] = useState<number>(0)
  const [fetched, setFetched] = useState<string[]>([])
  const words = useRef<string[][]>([])
  const section = useRef<number>(0)
  const [wordsPerCell, width]: [number, number] | number[] = layoutManager(type)
  const [grid, setGrid] = useState<JSX.Element[]>()
  const returnClass = useState<string>(
    `grid grid-cols-${width} gap-2 bg-white p-12 rounded-lg shadow-md md:h-auto h-min md:w-2/5 w-4/5 items-center`,
  )[0]
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const store = useUserStore((state) => state)
  const [font, setFont] = useState<SelectFont>('sans')
  const user = store.user
  const router = useRouter()
  const { mutate } = api.user.setUser.useMutation()
  const buff = api.getExcerciseProps.getRandomWords.useQuery(
    {
      number: wordsPerCell * (user?.currentWpm as number),
      language: user?.language as "english" | "spanish",
    },
    { enabled: !!user }
  )
  const collectData = api.highlightSession.setUnique.useMutation()

  function setSpeed(user: User | undefined) {
    if (!user) return 60_000 / 200
    return 60_000 / user.currentWpm
  }

  function markComplete() {
    if (!user) return
    if (type === 'oneByOne') {
      mutate({ lastOneByOne: formatDate(new Date()) })
      store.setUser({ ...user, lastOneByOne: formatDate(new Date()) })
    }
    if (type === 'oneByTwo') {
      mutate({ lastOneByTwo: formatDate(new Date()) })
      store.setUser({ ...user, lastOneByTwo: formatDate(new Date()) })
    }
    if (type === 'fourByOne') {
      mutate({ lastFourByOne: formatDate(new Date()) })
      store.setUser({ ...user, lastFourByOne: formatDate(new Date()) })
    }
    if (type === 'twoByTwo') {
      mutate({ lastTwoByTwo: formatDate(new Date()) })
      store.setUser({ ...user, lastTwoByTwo: formatDate(new Date()) })
    }
    if (type === 'twoByOne') {
      mutate({ lastTwoByOne: formatDate(new Date()) })
      store.setUser({ ...user, lastTwoByOne: formatDate(new Date()) })
    }
  }

  function tearDown() {
    if (!user) return
    if (user.isStudySubject) {
      collectData.mutate({
        userId: user.id,
        type: type,
        speed: user.currentWpm,
      })
    }
    markComplete()
    return router.replace('/next').catch((err) => console.log(err))
  }

  useEffect(() => {
    if (!buff.data) return
    setFetched(buff.data)
  }, [buff])

  useEffect(() => {
    if (!user) return
    (() => {
      const wordsArry = fetched
      words.current = partitionWords(
        wordsArry,
        wordsArry.length / wordsPerCell,
        rows * width,
      )
      setGrid(createCells({
        words: words.current[0],
        loadCheck: setIsVisible,
        user: user
      }))
      setFont(user.font)
    })()
  }, [fetched])

  useInterval(() => {
    if (!isVisible) {
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
      if (!user) return
      setGrid(
        createCells({
          words: words.current[section.current],
          user: user,
          loadCheck: setIsVisible,
        }),
      )
      setCounter(0)
    } else {
      setCounter((prev) => prev + 1)
    }
  }, setSpeed(user))

  return (
    <counterContext.Provider value={cellCounter}>
      <FontProvider
        font={font}
        className={returnClass}
      >
        {grid}
      </FontProvider>
    </counterContext.Provider>
  ) as GridType
}

export default Grid
