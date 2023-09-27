import { z } from 'zod'
//zod is a library for data validation and parsing
//in this code base z represents the zod validation library and its members

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  maxWpm: z.number().default(250),
  currentWpm: z.number().default(230),
  testSpeed: z.number().default(230),
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
  lastSchulteByThree: z.string().default(' '),
  lastSchulteByFive: z.string().default(' '),
  lastSchulteBySeven: z.string().default(' '),
  lastSpeedTest: z.string().default(' '),
  lastFourByOne: z.string().default(' '),
  lastOneByTwo: z.string().default(' '),
  lastTwoByTwo: z.string().default(' '),
  lastOneByOne: z.string().default(' '),
  lastTwoByOne: z.string().default(' '),
  lastEvenNumbers: z.string().default(' '),
  lastNumberGuesser: z.string().default(' '),
  lastCubeByThree: z.string().default(' '),
  lastCubeByTwo: z.string().default(' '),
  numberGuesserFigures: z.number().default(0),
  isAdmin: z.boolean().default(false),
  isStudySubject: z.boolean().default(false),
  tested: z.boolean().default(false),
})

export const speedTestSchema = z.object({
  id: z.number().optional(),
  question: z.string(),
  passage: z.string(),
  answerA: z.string(),
  answerB: z.string(),
  answerC: z.string(),
  answerD: z.string(),
  correctAnswer: z.string(),
})

const randomWordInputs = z.object({
  number: z.number(),
  language: z.union([
    z.literal('english'),
    z.literal('spanish'),
  ]),
})

const exercise = z.union([
  z.literal('fourByOne'),
  z.literal('oneByTwo'),
  z.literal('twoByTwo'),
  z.literal('oneByOne'),
  z.literal('twoByOne'),
  z.literal('schulteByThree'),
  z.literal('schulteByFive'),
  z.literal('schulteBySeven'),
  z.literal('speedTest'),
  z.literal('evenNumbers'),
  z.literal('cubeByTwo'),
  z.literal('cubeByThree'),
  z.literal('numberGuesser'),
])

export const schemas = {
  user: userSchema,
  speedTest: speedTestSchema,
  exercise: exercise
}

export const inputs = {
  randomWords: randomWordInputs,
}
