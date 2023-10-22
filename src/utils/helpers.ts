import { type User, Exercise } from './types'

export function userHilightToHex(user: User) {
  switch (user.highlightColor) {
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

function isToday(date2: string | undefined) {
  if (!date2) return false
  const today = formatDate(new Date())
  const date2Formatted = date2

  console.log('today:', today)
  console.log('date2:', date2Formatted)

  const result = today === date2Formatted
  console.log('result:', result)
  return result
}

export function isAlreadyDone(user: User, exercise: Exercise) {
  switch (exercise) {
    case 'speedTest': return user.tested
    case 'fourByOne': return isToday(user.lastFourByOne)
    case 'numberGuesser': return isToday(user.lastNumberGuesser)
    case 'oneByTwo': return isToday(user.lastOneByTwo)
    case 'twoByTwo': return isToday(user.lastTwoByTwo)
    case 'oneByOne': return isToday(user.lastOneByOne)
    case 'schulteByThree': return isToday(user.lastSchulteByThree)
    case 'schulteByFive': return isToday(user.lastSchulteByFive)
    case 'schulteBySeven': return isToday(user.lastSchulteBySeven)
    case 'twoByOne': return isToday(user.lastTwoByOne)
    case 'evenNumbers': return isToday(user.lastEvenNumbers)
    case 'cubeByTwo': return isToday(user.lastCubeByTwo)
    case 'cubeByThree': return isToday(user.lastCubeByThree)
    case 'letterMatcher': return isToday(user.lastLetterMatcher)
    default: return null
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
export function getNextExercise(user: User | undefined | null) {

  if (!user) return null

  const available: Exercise[] = []


  Exercise.forEach((exercise) => {
    if (!isAlreadyDone(user, exercise)) {
      available.push(exercise)
    }
  })

  if (available.length === 0 || available === undefined || !available) {
    return null
  }
  console.log('available: ', available)
  const choice = available[Math.floor(Math.random() * available.length)]
  return choice
}

export const formatDate = (date: Date | undefined) => {
  if (!date) date = new Date()
  return date
    .toString()
    .replace(
      /(\w{3}) (\w{3}) (\d{2}) (\d{4}).*/,
      (
        _: string,
        dayOfWeek: string,
        month: string,
        day: string,
        year: string,
      ) => `${dayOfWeek} ${month} ${day} ${year}`,
    )
}

export function getNextURL(next: Exercise | undefined | null): string {
  if (!next) {
    return '/done'
  }
  switch (next) {
    case null || undefined:
      return '/nav'
    case 'numberGuesser':
      return '/exercises/numbermatcher'
    case 'fourByOne':
      return '/instructions/flashingwords/fourbyone'
    case 'oneByTwo':
      return '/instructions/flashingwords/onebytwo'
    case 'twoByTwo':
      return '/instructions/flashingwords/twobytwo'
    case 'oneByOne':
      return '/instructions/flashingwords/onebyone'
    case 'twoByOne':
      return '/instructions/flashingwords/twobyone'
    case 'schulteByThree':
      return 'exercises/schulteby3'
    case 'schulteByFive':
      return '/exercises/schulteby5'
    case 'schulteBySeven':
      return 'exercises/schulteby7'
    case 'evenNumbers':
      return '/exercises/evennumbers'
    case 'cubeByTwo':
      return '/exercises/cubebytwo'
    case 'cubeByThree':
      return '/exercises/cubebythree'
    case 'letterMatcher':
      return '/exercises/lettermatcher'
    default:
      return '/done'
  }
}
