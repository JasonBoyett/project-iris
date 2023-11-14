import { formatDate, navigate } from '~/utils/helpers'
import React, { useState, useRef, useEffect } from 'react'
import { v4 } from 'uuid'
import { SingletonRouter, useRouter } from 'next/router'
import { api } from '~/utils/api'
import useUserStore from '~/stores/userStore'
import { FontProvider } from '~/cva/fontProvider'
import type { Font } from '~/utils/types'
import { useStopWatch } from '~/hooks/useStopWatch'


type SchulteTableProps = {
  sideLength: 3 | 5 | 7
}

type CellProps = {
  innerValue: number
  counterSetter: React.Dispatch<React.SetStateAction<number>>
  errorSetter: (number: number) => void
  counter: number
  errorCounter: number
}

function Cell({
  innerValue,
  counterSetter,
  errorSetter,
  counter,
  errorCounter,
}: CellProps) {
  const clicked = useRef(false)
  const store = useUserStore()

  function handleClick() {
    if (innerValue !== counter && !clicked.current) {
      errorSetter(errorCounter + 1)
      clicked.current = true
    } else if (!clicked.current) {
      clicked.current = true
      counterSetter((prev) => prev + 1)
    }
  }

  useEffect(() => {
    if (!store.user) return
  }, [store])

  return (
    <div
      className='h-12 w-12 text-white text-lg md:text-2xl flex items-center justify-center rounded-md bg-white/20 md:h-20 md:w-20'
      onClick={handleClick}
      id={v4()}
    >
      {innerValue}
    </div>
  )
}

export default function SchulteTable({ sideLength }: SchulteTableProps) {
  const [counter, setCount] = useState(1)
  const [font, setFont] = useState<Font>('sans')
  const errors = useRef(0)
  const router = useRouter()
  const { mutate } = api.user.setUser.useMutation()
  const store = useUserStore()
  const user = store.user
  const totalCells = Math.pow(sideLength, 2)
  const [classString, setClassString] = useState('')
  const stopWatch = useStopWatch() 
  const collectData = api.schulteSession.setUnique.useMutation()
  const numbers = useRef(
    Array.from({ length: totalCells }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5,
    ),
  )

  function formatType(sideLength: number) {
    switch (sideLength) {
      case 3: return 'three'
      case 5: return 'five'
      case 7: return 'seven'
      default: return 'five'
    }
  }

  function setErrors(number: number) {
    errors.current = number
  }

  function teardown() {
    stopWatch.end()
    if (!user) return
    if (user.isStudySubject) {
      collectData.mutate({
        userId: user.id,
        type: formatType(sideLength),
        time: stopWatch.getDuration(),
        errorCount: errors.current,

      })
    }
    switch (sideLength) {
      case 3:
        mutate({ lastSchulteByThree: formatDate(new Date()) })
        if (!user) return
        else
          store.setUser({ ...user, lastSchulteByThree: formatDate(new Date()) })
        break
      case 5:
        mutate({ lastSchulteByFive: formatDate(new Date()) })
        if (!user) return
        else store.setUser({ ...user, lastSchulteByFive: formatDate(new Date()) })
        break
      case 7:
        mutate({ lastSchulteBySeven: formatDate(new Date()) })
        if (!user) return
        else store.setUser({ ...user, lastSchulteBySeven: formatDate(new Date()) })
        break
    }
    navigate(router as SingletonRouter, '/next')
  }

  function Table({ classString }: { classString: string }) {
    const cells = numbers.current.map(
      (number) => (
        <>
          <div>
            <Cell
              innerValue={number}
              counterSetter={setCount}
              errorSetter={setErrors}
              counter={counter}
              key={number}
              errorCounter={errors.current}
            />
          </div>
        </>
      )
    )
    return (
      <div className={classString}>
        {cells}
      </div>
    )
  }

  useEffect(() => {
    if (counter === totalCells + 1) {
      teardown()
    }
  }, [counter])

  useEffect(() => {
    if (sideLength === 3) setClassString('grid grid-cols-3 gap-1')
    if (sideLength === 5) setClassString('grid grid-cols-5 gap-1')
    if (sideLength === 7) setClassString('grid grid-cols-7 gap-1')
    stopWatch.start()
  }, [])

  useEffect(() => {
    if (!store.user) return
    setFont(store.user.font)
  }, [store])

  return (
    <>
      <Table classString={classString} />
      <FontProvider
        font={font}
        className='md:text-4xl text-white'
      >
        Find: <span className='text-yellow-200'>{counter}</span>
      </FontProvider>
    </>
  )
}
