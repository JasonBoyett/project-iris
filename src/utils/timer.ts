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
 * const stopWatch = new StopWatch()
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
 * @throws Error if the stopWatch is not started and ended before getting duration
 *
 * @class StopWatch
**/
export class StopWatch {
  private startTime: number
  private endTime: number
  public constructor() {
    this.startTime = 0
    this.endTime = 0
  }

  public start() {
    this.startTime = Date.now()
  }

  public end() {
    this.endTime = Date.now()
  }

  public getDuration() {
    if (this.startTime === 0 || this.endTime === 0) {
      throw new Error('StopWatch must be started and ended before getting duration')
    }
    return this.endTime - this.startTime
  }

}

type TimeMeasure = 'milliseconds' | 'seconds'| 'minutes'

export class Timer {

  private time = 0
  private running = false
  private ticker: NodeJS.Timeout | undefined
  private duration = 0
  private callback: VoidFunction
  private interval: number
  private unit: TimeMeasure
  private end: number

  constructor(unit: TimeMeasure, end: number, callback: VoidFunction) {
    this.unit = unit
    this.callback = callback
    this.end = (() => {
      switch (this.unit) {
        case 'milliseconds':
          this.interval = 1
          return end
        case 'seconds':
          this.interval = 100
          return end * 1000
        case 'minutes':
          this.interval = 1_000
          return end * 60_000
        // the interval numbers are kind of arbitrary.
        // I wanted them small enough to be accurate,
        // but large enough to not be a performance issue.
      }
    })()
    // this isn't as gross as it looks.
    // It's just a function that executes itself and returns the value.
  }

  private tick() {
    this.duration = Date.now() - this.time
    if (this.duration >= this.end) {
      this.running = false
      this.callback()
      clearInterval(this.ticker)
    }
  }

  public start() {
    if(this.ticker) {
      clearInterval(this.ticker)
    }
    this.running = true
    this.time = Date.now()
    this.ticker = setInterval(() => {
      this.tick()
    }, this.interval)
  }

  public reset() {
    this.time = 0
    clearInterval(this.ticker)
  }

  public restart(callback?: VoidFunction): void {
    this.reset()
    this.start()
    if (callback) {
      this.callback = callback
    }
  }

  public setCallback(callback: VoidFunction) {

    this.callback = callback
  }

  public getRunning() {
    return this.running
  }
}
