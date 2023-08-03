export const Overlay = [
  'BLUE',
  'BLUE_GREY',
  'GREEN',
  'GREY',
  'ORANGE',
  'PEACH',
  'PURPLE',
  'RED',
  'TURQUOISE',
  'YELLOW',
] as const

/**
 * Overlay is a type that represents the different overlay colors
 * available for the flasher exercises.
 **/
export type Overlay = (typeof Overlay)[number]

/**
 * The User type maps to the Prisma User type,
 * but it is defined here to make it easier for
 * TypeScript to infer the type of user objects.
 **/
export type User = {
  Id: string
  FirstName: string
  LastName: string
  UpdatedAt: Date
  CreatedAt: Date
  CurrentWpm: number
  MaxWpm: number
  LastSchulteSession?: string
  LastSpeedTest?: string
  LastFourByOne?: string
  LastOneByTwo?: string
  LastTwoByTwo?: string
  LastOneByOne?: string
  LastTwoByOne?: string
  LastEvenNumbers?: string
}

const Language = ['ENGLISH', 'SPANISH'] as const

export type Language = (typeof Language)[number]

export const Exercise = [
  'FOUR_BY_ONE',
  'ONE_BY_TWO',
  'TWO_BY_TWO',
  'ONE_BY_ONE',
  'SCHULTE',
  'TWO_BY_ONE',
  'SPEED_TEST',
  'EVEN_NUMBERS',
] as const

/**
 * Exercise contains the different types of speed reading exercises.
 * The types are used to determine which exercise to render and
 * which ones have been performed in the past day.
 **/
export type Exercise = (typeof Exercise)[number]
