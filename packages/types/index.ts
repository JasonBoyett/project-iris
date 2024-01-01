import type { z } from 'zod'
import type { language, userSchema, wordPairData } from '@acme/validators'
import type { speedTestSchema } from '@acme/validators'

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
 * Overlay is a type that represents the different overlay colors available for the flasher exercises.
 **/
export type Overlay = (typeof Overlay)[number]

/**
 * The User type maps to the Prisma User type,
 * but it is defined here to make it easier for
 * TypeScript to infer the type of user objects.
 **/
export type User = z.infer<typeof userSchema>

export type WordPair = z.infer<typeof wordPairData>

export type SpeedTest = z.infer<typeof speedTestSchema>

const Highlight = [
  'fourByOne',
  'oneByTwo',
  'twoByTwo',
  'oneByOne',
  'twoByOne',
] as const

export type HighlightType = (typeof Highlight)[number]

const Answer = ['A', 'B', 'C', 'D'] as const

export type Answer = (typeof Answer)[number]


export type Language = z.infer<typeof language>

export const Exercise = [
  'fourByOne',
  'oneByTwo',
  'twoByTwo',
  'oneByOne',
  'twoByOne',
  'schulteTable',
  'speedTest',
  'evenNumbers',
  'cubeByTwo',
  'cubeByThree',
  'numberGuesser',
  'letterMatcher',
  'wordPairs',
  'greenDot',
] as const

/**
 * Exercise contains the different types of speed reading exercises.
 * The types are used to determine which exercise to render and
 * which ones have been performed in the past day.
 **/
export type Exercise = (typeof Exercise)[number]

const Font = [
  'sans',
  'mono',
  'serif',
  'robotoMono',
  'rem',
  'kanit',
  'preahvihear',
  'bebasNeue',
  'chakraPetch',
  'ibmPlexMono',
] as const

export type Font = (typeof Font)[number] | null | undefined