import type { SingletonRouter } from 'next/router'
import { type User, Exercise } from './types'
import type NextRouter from 'next/router'

export function checkName(name: string | undefined | null) {
  if (!name) return false
  const regex = /[a-zA-Z]/
  return regex.test(name)
}

export function navigate(router: typeof NextRouter | SingletonRouter, url: string) {
  router.push(url).catch(() => {
    router.push(url).catch(() => {
      setTimeout(() => {
        router.push(url).catch(() => {
          router.push('/nav').catch((err) => {
            console.log('error navigating: ', err)
            alert('There was an error navigating to the next exercise. Please try again.')
          })
        })
      }, 3_000)
    })
  })
}

export function navigateToNextExercise(router: typeof NextRouter | SingletonRouter, user: User) {
  navigate(router, getNextURL(getNextExercise(user)))
}

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

/**
 * isToday takes a string that is the result of calling 
 * the formatDate function on a date object 
 * and returns true if the date is today.
 *
 * @param date2 - a string that is the result of calling
 * the formatDate function on a date object.
**/
function isToday(date2: string | undefined) {
  if (!date2) return false
  const today = formatDate()
  const date2Formatted = date2
  return today === date2Formatted
}

export function getAvailableExercises(user: User) {
  if (!user) return null

  const available: Exercise[] = []


  Exercise.forEach((exercise) => {
    if (!isAlreadyDone(user, exercise)) {
      available.push(exercise)
    }
  })

  return available
}

export function isAlreadyDone(user: User, exercise: Exercise) {
  switch (exercise) {
    case 'speedTest': return user.tested
    case 'fourByOne': return isToday(user.lastFourByOne)
    case 'numberGuesser': return isToday(user.lastNumberGuesser)
    case 'oneByTwo': return isToday(user.lastOneByTwo)
    case 'twoByTwo': return isToday(user.lastTwoByTwo)
    case 'oneByOne': return isToday(user.lastOneByOne)
    case 'schulteTable': return isToday(user.lastSchulte)
    case 'twoByOne': return isToday(user.lastTwoByOne)
    case 'evenNumbers': return isToday(user.lastEvenNumbers)
    case 'cubeByTwo': return isToday(user.lastCubeByTwo)
    case 'cubeByThree': return isToday(user.lastCubeByThree)
    case 'letterMatcher': return isToday(user.lastLetterMatcher)
    case 'greenDot': return isToday(user.lastGreenDot)
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

  const available = getAvailableExercises(user)

  if (!available) return null

  if (available.length === 0 || available === undefined) {
    return null
  }
  console.log('available: ', available)
  const choice = available[Math.floor(Math.random() * available.length)]
  return choice
}

export const formatDate = (date?: Date | undefined | null) => {
  if (!date) {
  date = new Date()
  }
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
      return '/instructions/numbermatcher'
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
    case 'schulteTable':
      return '/instructions/schultetable'
    case 'evenNumbers':
      return '/instructions/evennumbers'
    case 'cubeByTwo':
      return '/instructions/boxes?type=two'
    case 'cubeByThree':
      return '/instructions/boxes?type=three'
    case 'letterMatcher':
      return '/instructions/lettermatcher'
    case 'greenDot':
      return '/instructions/greendot'
    default:
      return '/done'
  }
}
