import { useEffect, useCallback, useRef } from 'react'

type TimeMeasure = 'milliseconds' | 'seconds' | 'minutes'

export default function useTimer(
  timeUnit: TimeMeasure,
  endTime: number,
  eventName: string,
) {
  const time = useRef(0)
  const running = useRef(false)
  const ticker = useRef<NodeJS.Timeout>()
  const duration = useRef(0)
  const delay = useRef(0)
  const unit = useRef<TimeMeasure>(timeUnit)
  const event = new Event(eventName)
  const end = (() => {
    switch (unit.current) {
      case 'milliseconds':
        delay.current = 1
        return endTime
      case 'seconds':
        delay.current = 100
        return endTime * 1000
      case 'minutes':
        delay.current = 1_000
        return endTime * 60_000
      // the interval numbers are kind of arbitrary.
      // I wanted them small enough to be accurate,
      // but large enough to not be a performance issue.
    }
  })()

  const start = useCallback(() => {
    time.current = Date.now()
    running.current = true
  }, [])

  const restart = useCallback(() => {
    running.current = false
    running.current = true
  }, [])

  const tick = useCallback(() => {
    if (!running.current) return
    if (time.current === 0) return
    duration.current = Date.now() - time.current
    if (duration.current >= end) {
      running.current = false
      document.dispatchEvent(event)
      // clearInterval(ticker.current)
    }
  }, [])

  const clear = useCallback(() => {
    running.current = false as const
    clearInterval(ticker.current)
    duration.current = 0
  }, [])

  useEffect(() => {
    if (!running) {
      clearInterval(ticker.current as NodeJS.Timeout)
      duration.current = 0
      return
    } else {
      ticker.current = setInterval(() => {
        tick()
      }, delay.current)
    }
  }, [running.current])

  return { start, restart, clear }
}
