import React, { useState, useEffect, type CSSProperties } from 'react'
import useInterval from '../hooks/useInterval'
import { trpc } from '../utils/trpc'
import { type SingletonRouter, useRouter } from 'next/router'
import { formatDate, navigate } from '@acme/helpers'
import useUserStore from '../stores/userStore'

export default function PieTimer({
  seconds,
  pixels,
}: {
  seconds: number
  pixels: number
}) {
  const MILLISECONDS_IN_A_SECOND = 1_000
  const [started, setStarted] = useState<boolean>(false)
  const { mutate } = trpc.user.set.useMutation()
  const collectData = trpc.collect.greenDotSession.useMutation()
  const [count, setCount] = useState(0)
  const router = useRouter()
  const user = trpc.user.get.useQuery()
  const userStore = useUserStore()

  //styles
  //I'm not using Tailwind here or in this component because these styles are
  //going to be more complex and require more control.
  //I'll still use tailwind colors to help keep colors consistent
  //I'll note the tailwind color in the comments
  const BG_COLOR = '#16a34a' //tailwind green-600
  const FG_COLOR = '#166534' //tailwind green-800

  const clock: CSSProperties = {
    position: 'relative',
    height: `${pixels}px`,
    width: `${pixels}px`,
    backgroundColor: BG_COLOR,
    borderRadius: '50%',
  }

  const rotator: CSSProperties = {
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: FG_COLOR,
    borderRadius: `${pixels / 2}px 0 0 ${pixels / 2}px`,
    transform: 'rotate(0deg)',
    transformOrigin: '100% 50%',
    transition: 'transform 1s linear',
  }

  const mask: CSSProperties = {
    position: 'absolute',
    height: '100%',
    width: '50%',
    backgroundColor: BG_COLOR,
    borderRadius: `${pixels / 2}px 0 0 ${pixels / 2}px`,
    transformOrigin: '100% 50%',
  }

  const [rotatorStyle, setRotatorStyle] = useState<CSSProperties>(rotator)
  const [maskStyle, setMaskStyle] = useState<CSSProperties>(mask)

  function teardown() {
    if (!user.data) return
    if (!userStore.user) return
    mutate({ lastGreenDot: formatDate(new Date()) })
    userStore.setUser({
      ...userStore.user,
      lastGreenDot: formatDate(new Date()),
    })
    collectData.mutate()
    navigate(router as SingletonRouter, '/next')
  }

  useInterval(() => {
    if (!started) return
    if (count >= seconds + 1) {
      teardown()
    }
    setCount(count + 1)
    console.log(count)
    setRotatorStyle({
      ...rotatorStyle,
      transform: `rotate(${count * (360 / seconds)}deg)`,
    })
    if (seconds / 2 < count) {
      setMaskStyle({
        ...maskStyle,
        backgroundColor: FG_COLOR,
        transform: 'rotate(180deg)',
        right: '50%',
      })
    }
  }, MILLISECONDS_IN_A_SECOND)

  useEffect(() => {
    if (!user) return
    if (user) {
      setStarted(() => true)
    }
  }, [user])

  return (
    <div style={clock}>
      <div style={rotatorStyle} />
      <div style={maskStyle} />
    </div>
  )
}
