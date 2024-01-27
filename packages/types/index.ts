import type { z } from 'zod'
import { 
  exercise, 
  type language, 
  type userSchema, 
  type wordPairData,
  highlightColor,
  type FlasherType,
} from '@acme/validators'
import type { speedTestSchema } from '@acme/validators'

/**
 * Overlay is a type that represents the different overlay colors available for the flasher exercises.
 **/
export type Overlay = z.infer<typeof highlightColor>

export const colorList = highlightColor.options.map(option => option.value)


/*
 * The User type is infered from the userSchema defined in the validators package.
 * but it is defined here to make it easier for
 * TypeScript to infer the type of user objects.
 */
export type User = z.infer<typeof userSchema>

export type Color = z.infer<typeof highlightColor>

export type WordPair = z.infer<typeof wordPairData>

export type SpeedTest = z.infer<typeof speedTestSchema>

export type FlasherType = z.infer<typeof FlasherType>

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

/**
 * Exercise contains the different types of speed reading exercises.
 * The types are used to determine which exercise to render and
 * which ones have been performed in the past day.
 **/
export type Exercise = z.infer<typeof exercise>

export const ExerciseList = exercise.options.map(option => option.value)


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
