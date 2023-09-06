/**
 * @description A simple timer class to measure the time it takes
 * for ane exercise to be completed
 *
 * in order to use this timer in an exercise, instantiate a new timer
 * using an on mount useEffect hook, and call the start method.
 * Then, at the end of the exercise call the end method.
 * Finally, call the getDuration method to get the duration of the exercise.
 * Keep in mind that the timer will return the duration in milliseconds.
 * @example
 * const timer = new Timer()
 * ...
 * useEffect(() => {
 *  timer.start()
 * },[])
 *
 * function endExercise(){
 *  timer.end()
 * }
 *
 * function getResults(){
 *  const duration = timer.getDuration()
 * }
 *
 *
 * @throws Error if the timer is not started and ended before getting duration
 *
 * @class Timer
**/
export default class Timer{
  private startTime: number
  private endTime: number
  public constructor(){
    this.startTime = 0
    this.endTime = 0
  }

  public start(){
    this.startTime = Date.now()
  }

  public end(){
    this.endTime = Date.now()
  }

  public getDuration(){
    if(this.startTime === 0 || this.endTime === 0){
      throw new Error('Timer must be started and ended before getting duration')
    }
    return this.endTime - this.startTime
  }

}
