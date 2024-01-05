import { useRouter, type SingletonRouter } from 'next/router'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { uuid } from 'uuidv4'
import { FontProvider } from '../cva/fontProvider'
import { useStopWatch } from '../hooks/useStopWatch'
import useUserStore from '../stores/userStore'
import { trpc } from '../utils/trpc'
import { formatDate, navigateToNextExercise } from '@acme/helpers'
import type { Font, WordPair } from '@acme/types'

function useGetProps(total = 18, diffCount = 5) {
  const pairs = trpc.excercise.getWordPairs.useQuery({
    count: diffCount,
    language: 'english',
  })
  const words = trpc.excercise.getRandomWords.useQuery({
    number: total - diffCount,
    language: 'english',
    max: 7,
  })

  const result = useMemo(() => {
    if (words.isSuccess && pairs.isSuccess) {
      return {
        words: words.data,
        pairs: pairs.data,
      }
    } else
      return {
        words: undefined,
        pairs: undefined,
      }
  }, [pairs, words])

  return result
}

type PairsProps = {
  diffCount: number
}

export default function WordPairs({ diffCount }: PairsProps) {
  const total = 18
  const { words, pairs } = useGetProps(total, diffCount)
  const user = trpc.user.get.useQuery()
  const { mutate: updateUser } = trpc.user.set.useMutation()
  const userStore = useUserStore()
  const { mutate: collectSessionData } =
    trpc.collect.wordPairSession.useMutation()
  const stopWatch = useStopWatch()
  const router = useRouter()
  const foud = useRef(0)
  const wrongs = useRef(0)
  const font = useRef<Font>('sans')
  const [grid, setGrid] = useState<JSX.Element[]>()

  function generateGrid() {
    if (!pairs || !words) return
    const cells = new Array<JSX.Element>()
    words.forEach(word => {
      cells.push(generateSame(word))
    })
    pairs.forEach(pair => {
      cells.push(generateDifferent(pair))
    })
    stopWatch.start()
    return cells.sort(() => Math.random() - 0.5)
  }

  const handleCellClick = useCallback((answer: 'correct' | 'error') => {
    console.log(answer)
    if (answer === 'correct') {
      foud.current += 1
    }
    if (answer === 'error') {
      wrongs.current += 1
    }

    if (foud.current === diffCount) tearDown()
    console.log('pairsFound', foud.current)
  }, [])

  function tearDown() {
    console.log('teardown')
    if (!user) return
    if (!userStore.user) return
    stopWatch.end()
    updateUser({ lastWordPairs: formatDate(new Date()) })
    userStore.setUser({
      ...userStore.user,
      lastWordPairs: formatDate(new Date()),
    })
    if (user.data && user.data.isStudySubject) {
      collectSessionData({
        userId: user.data.id,
        errorCount: wrongs.current,
        time: stopWatch.getDuration(),
      })
    }
    navigateToNextExercise(
      router as SingletonRouter,
      user.data ?? userStore.user,
    )
  }

  function generateSame(word: string) {
    return (
      <Cell
        different={false}
        font={font.current}
        word1={word}
        word2={word}
        id={uuid()}
        callback={handleCellClick}
      />
    )
  }
  function generateDifferent(pair: WordPair) {
    return (
      <Cell
        different={true}
        font={font.current}
        word1={pair.primaryWord}
        word2={pair.secondaryWord}
        id={uuid()}
        callback={handleCellClick}
      />
    )
  }

  useEffect(() => {
    if (!user.data) return
    font.current = user.data.font
  }, [user])

  useEffect(() => {
    setGrid(() => generateGrid())
  }, [words, pairs])

  return <div className='grid grid-cols-3 gap-2'>{grid}</div>
}

type CellProps = {
  font?: Font
  different: boolean
  word1: string
  word2: string
  id?: string
  callback: (answer: 'correct' | 'error') => void
}

function Cell({ font, different, word1, word2, id, callback }: CellProps) {
  const [highlighted, setHighlighted] = useState(false)

  function handleClick() {
    if (different && !highlighted) {
      callback('correct')
      setHighlighted(() => true)
    } else if (!different && !highlighted) {
      setHighlighted(() => true)
      callback('error')
    }
  }
  return (
    <FontProvider
      font={font}
      key={id}
      onClick={() => handleClick()}
      id={id?.toString() ?? '0'}
      className={[
        'grid grid-cols-1 items-center rounded-lg text-white',
        'md:p-2 md:text-3xl',
        'p-1 text-2xl',
        `${
          highlighted
            ? different
              ? 'bg-white/10'
              : 'bg-red-500/40'
            : 'bg-white/20'
        }`,
        'cursor-pointer',
      ].join(' ')}
    >
      <div>{word1}</div>
      <div>{word2}</div>
    </FontProvider>
  )
}
