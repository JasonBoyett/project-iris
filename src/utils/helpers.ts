import type { Overlay, User, Exercise } from './types'
import { Exercise as ex} from './types'

export const overlayToHex = (overlay: Overlay) => {
  switch (overlay) {
    case 'BLUE':
      return '#96adfc'
    case 'BLUE_GREY':
      return '#dbe1f1'
    case 'GREEN':
      return '#a8f29a'
    case 'GREY':
      return '#d8d3d6'
    case 'ORANGE':
      return '#eddd6e'
    case 'PEACH':
      return '#edd1b0'
    case 'PURPLE':
      return '#b987dc'
    case 'RED':
      return '#e0a6aa'
    case 'TURQUOISE':
      return '#a5f7e1'
    case 'YELLOW':
      return '#F8fd89'
  }
}
/**
 * getNextExercise takes a user object and returns the next exercise to be displayed.
 * First the function checks if the user has already done a speed test that day. 
  * If not, it returnsthe speed test exercise.
 * The function checks if the user has already done the other exercises today and if so,
  * it removes it from the list of available exercises.
  * If the user has done all the exercises, the function returns null.
**/
export const getNextExercise = (user: User) => {
  const available: Exercise[] = []

  type Is_already_done_params = {
    user: User
    exercise: Exercise
  }

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    )
  }

  if (!isSameDay(user.LastSpeedTest, new Date())) return 'SPEED_TEST'

  const isAlreadyDone = ({user, exercise}: Is_already_done_params) => {
    switch (exercise) {
      case 'FOUR_BY_ONE':
        return isSameDay(user.LastFourByOne, new Date())
      case 'ONE_BY_TWO':
        return isSameDay(user.LastOneByTwo, new Date())
      case 'TWO_BY_TWO':
        return isSameDay(user.LastTwoByTwo, new Date())
      case 'ONE_BY_ONE':
        return isSameDay(user.LastOneByOne, new Date())
      case 'SCHULTE':
        return isSameDay(user.LastSchulteSession, new Date())
      case 'SPEED_TEST':
        return false
    }
  }

  ex.forEach((exercise: Exercise) => {
    if (!isAlreadyDone({ user, exercise })) {
      available.push(exercise)
    }
  })
  
  if (available.length === 0) {
    return null
  }
  const choice = available[Math.floor(Math.random() * available.length)]
  return choice
}
