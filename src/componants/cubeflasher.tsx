import { type ReactElement, useEffect, useRef, useState } from 'react'
import { api } from '~/utils/api'
import { StyledCube } from '~/cva/cube-flasher'
import { useCubeStore } from '~/stores/useCubeStore'
import useUserStore from '~/stores/userStore'
import useInterval from '~/hooks/useInterval'
import { formatDate } from '~/utils/helpers'
import { useRouter } from 'next/router'
import { FontProvider } from '~/cva/fontProvider'

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
  return partitionedWords
}

type CornerFlasherCellProps = {
  number: number
  wordsArray: string[]
}

const CornerFlasherCell = ({ number, wordsArray }: CornerFlasherCellProps) => {
  const store = useCubeStore()
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    if (store.current === number) setVisible(true)
    else setVisible(false)
  }, [])
  useEffect(() => {
    if (store.current === number) setVisible(true)
    else setVisible(false)
  }, [store.current])
  return (
    <>
      <StyledCube intent={store.current === number ? 'flash' : 'noFlash'}>
        <div
          className='absolute bottom-0 left-0 p-2'
          hidden={!visible}
        >
          {wordsArray[0]}
        </div>
        <div
          className='absolute bottom-0 right-0 p-2'
          hidden={!visible}
        >
          {wordsArray[1]}
        </div>
        <div
          className='absolute top-0 right-0 p-2'
          hidden={!visible}
        >
          {wordsArray[2]}
        </div>
        <div
          className='absolute top-0 left-0 p-2'
          hidden={!visible}
        >
          {wordsArray[3]}
        </div>
      </StyledCube>
    </>
  )
}

type CornerFlasherProps = {
  number: 2 | 3
}

export default function CornerFlasher({ number }: CornerFlasherProps) {
  const store = useCubeStore()
  const [font, setFont] = useState<
    | 'sans'
    | 'mono'
    | 'serif'
    | 'robotoMono'
    | 'rem'
    | 'kanit'
    | 'preahvihear'
    | 'bebasNeue'
    | 'chakraPetch'
    | 'ibmPlexMono'
    | null
    | undefined
  >('sans')
  const userStore = useUserStore()
  const { mutate } = api.user.setUser.useMutation()
  const [section, setSection] = useState<number>(0)
  const [counter, setCounter] = useState<number>(0)
  const router = useRouter()
  // let done = false
  const { data } = api.getExcerciseProps.getRandomWords.useQuery({
    number: (() => {
      if(!userStore.user) return 0
      return userStore.user.currentWpm * 4
    })(),
    language: 'english',
  })
  const cubes = useRef<JSX.Element[]>([])
  const formattedCubes = useRef<JSX.Element[][]>([])
  const [displayedCubes, setDisplayedCubes] = useState<
    JSX.Element[] | undefined
  >([])

  const getRate = () => {
    if(!userStore.user) return 60_000 / 200
    return 60_000 / userStore.user.currentWpm
  }

  const tearDown = () => {
    //TODO write data collection
    switch (number) {
      case 2:
        mutate({lastCubeByTwo: formatDate(new Date())})
        if(!userStore.user) return
        userStore.setUser({
          ...userStore.user,
          lastCubeByTwo: formatDate(new Date())
        })
        break
      case 3:
        mutate({lastCubeByThree: formatDate(new Date())})
        if(!userStore.user) return
        userStore.setUser({
          ...userStore.user,
          lastCubeByThree: formatDate(new Date())
        })
        break
    }
    router.replace('/next').catch(console.error)
  }

  useEffect(() => {
    if (!data) return
    let cubeNumber = 0
    const formattedArray = (() => {
      let holder: string[] = []
      const holderArray: string[][] = []
      data.forEach((words, index) => {
        if (index % 4 === 0 && index !== 0) {
          holder.push(words)
          holderArray.push(holder)
          holder = []
        } else holder.push(words)
      })
      return holderArray
    })()
    cubes.current = formattedArray.map((wordsArray, index) => {
      if (cubeNumber >= number) cubeNumber = 0
      const cube = (
        <CornerFlasherCell
          key={index}
          number={cubeNumber}
          wordsArray={wordsArray}
        />
      )
      cubeNumber++
      return cube
    })
    let holderTwo: ReactElement[] = []
    cubes.current.forEach((cube, index) => {
      if (index % number === 0) {
        holderTwo.push(cube)
        if (holderTwo.length === number) formattedCubes.current.push(holderTwo)
        holderTwo = []
      } else holderTwo.push(cube)
    })
    if (!formattedCubes.current[0]) return
    setDisplayedCubes(formattedCubes.current[0])
    setCounter(0)
    store.reset()
    if (!userStore.user) return
    setFont(userStore.user.font)
    if (data.length === 0) router.reload()
  }, [userStore.user, data])

  useInterval(() => {
    if (!displayedCubes) return
    if (!data) return
    if (!userStore.user) return
    if (displayedCubes.length !== number) return
    if (counter >= cubes.current.length) tearDown()
    if (store.current < number - 1) {
      store.increment()
    } else {
      if (!formattedCubes.current[section]) return
      setDisplayedCubes(formattedCubes.current[section])
      setSection(section + 1)
      store.reset()
    }
    setCounter(counter + 1)
  }, getRate())

  return (
    <>
      <FontProvider
        font={font}
        className='grid gap-2 p-2'
      >
        {displayedCubes}
      </FontProvider>
    </>
  )
}
