import { z } from 'zod'
//zod is a library for data validation and parsing
//in this code base z represents the zod validation library and its members

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  maxWpm: z.number(),
  currentWpm: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
  highlightColor: z
    .union([
      z.literal('BLUE'),
      z.literal('BLUE_GREY'),
      z.literal('GREEN'),
      z.literal('GREY'),
      z.literal('ORANGE'),
      z.literal('PEACH'),
      z.literal('PURPLE'),
      z.literal('RED'),
      z.literal('TURQUOISE'),
      z.literal('YELLOW'),
    ])
    .optional(),
  font: z.union([
    z.literal('sans'),
    z.literal('serif'),
    z.literal('mono'),
    z.literal('robotoMono'),
    z.literal('rem'),
    z.literal('kanit'),
    z.literal('preahvihear'),
    z.literal('bebasNeue'),
    z.literal('chakraPetch'),
    z.literal('ibmPlexMono'),
  ])
   .default('sans'),
  language: z.union([
    z.literal('english'),
    z.literal('spanish'),
  ])
    .default('english'),
  lastSchulteByThree: z.string().optional(),
  lastSchulteByFive: z.string().optional(),
  lastSchulteBySeven: z.string().optional(),
  lastSpeedTest: z.string().optional(),
  lastFourByOne: z.string().optional(),
  lastOneByTwo: z.string().optional(),
  lastTwoByTwo: z.string().optional(),
  lastOneByOne: z.string().optional(),
  lastTwoByOne: z.string().optional(),
  lastEvenNumbers: z.string().optional(),
  lastCubeByThree: z.string().optional(),
  lastCubeByTwo: z.string().optional(),
  isAdmin: z.boolean().default(false),
})

export const speedTestSchema = z.object({
  id: z.number(),
  question: z.string(),
  passage: z.string(),
  answerA: z.string(),
  answerB: z.string(),
  answerC: z.string(),
  answerD: z.string(),
  correctAnswer: z.string(),
})

export const schemas = {
  user: userSchema,
  speedTest: speedTestSchema,
}

const randomWordInputs = z.object({
  number: z.number(),
  language: z.union([
    z.literal('english'),
    z.literal('spanish'),
  ]),
})

export const inputs = {
  randomWords: randomWordInputs,
}
