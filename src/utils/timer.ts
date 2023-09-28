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
