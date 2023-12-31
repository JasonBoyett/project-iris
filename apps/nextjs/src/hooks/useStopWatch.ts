import { useRef } from "react"

/**
 * @description A simple stop watch class to measure the time it takes
 * for ane exercise to be completed
 *
 * in order to use this stop watch in an exercise, instantiate a new StopWatch
 * using an on mount useEffect hook, and call the start method.
 * Then, at the end of the exercise call the end method.
 * Finally, call the getDuration method to get the duration of the exercise.
 * Keep in mind that the StopWatch will return the duration in milliseconds.
 * @example
 * const stopWatch = useStopWatch()
 * ...
 * useEffect(() => {
 *  stopWatch.start()
 * },[])
 *
 * function endExercise(){
 *  stopWatch.end()
 * }
 *
 * function getResults(){
 *  const duration = stopWatch.getDuration()
 * }
 *
 *
 * @throws Error if the stopWatch is not started before getting duration
 *
 * @class StopWatch
**/
export function useStopWatch(){
  const startTime = useRef(0)
  const endTime = useRef(0)

  function start() {
    startTime.current = Date.now()
  }

  function end() {
    endTime.current = Date.now()
  }

  function getDuration() {
    if (startTime.current === 0 ) {
      throw new Error('StopWatch must be started before getting duration')
    }
    if (endTime.current === 0) {
      end()
    }
    return endTime.current - startTime.current
  }
  
  return {
    start,
    end,
    getDuration
  }
}
