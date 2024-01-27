import { z } from 'zod'
//zod is a library for data validation and parsing
//in this code base z represents the zod validation library and its members

export const language = z.union([
  z.literal('english'),
  z.literal('spanish'),
  z.literal('german'),
  z.literal('italian'),
])

export const font = z.union([
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


export const highlightColor = z.union([
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

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  maxWpm: z.number().default(250),
  currentWpm: z.number().default(230),
  testSpeed: z.number().default(230),
  createdAt: z.date(),
  updatedAt: z.date(),
  highlightColor: highlightColor.optional(),
  font: font.default('sans'),
  language: language.default('english'),
  lastSchulte: z.string().default(' '),
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
  lastLetterMatcher: z.string().default(' '),
  lastGreenDot: z.string().default(' '),
  lastWordPairs: z.string().default(' '),
  numberGuesserFigures: z.number().default(0),
  schulteLevel: z.union([
    z.literal('three'),
    z.literal('five'),
    z.literal('seven'),
  ]).default('three'),
  schulteAdvanceCount: z.number().default(0),
  isAdmin: z.boolean().default(false),
  isStudySubject: z.boolean().default(false),
  isUsingChecklist: z.boolean().default(true),
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
  correctAnswer: z.union([
    z.literal('A'),
    z.literal('B'),
    z.literal('C'),
    z.literal('D'),
  ]).or(z.string()),
})

const randomWordInputs = z.object({
  number: z.number(),
  max: z.number(),
  language: language,
})

export const exercise = z.union([
  z.literal('fourByOne'),
  z.literal('oneByTwo'),
  z.literal('twoByTwo'),
  z.literal('oneByOne'),
  z.literal('twoByOne'),
  z.literal('schulteTable'),
  z.literal('speedTest'),
  z.literal('evenNumbers'),
  z.literal('cubeByTwo'),
  z.literal('cubeByThree'),
  z.literal('numberGuesser'),
  z.literal('letterMatcher'),
  z.literal('wordPairs'),
  z.literal('greenDot'),
])

export const FlasherType = z.union([
  z.literal('fourByOne'),
  z.literal('oneByTwo'),
  z.literal('twoByTwo'),
  z.literal('oneByOne'),
  z.literal('twoByOne'),
])
export const highlightData = z.object({
  type: FlasherType,
  userId: z.string(),
  speed: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const schulteData = z.object({
  userId: z.string(),
  type: z.union([z.literal('three'), z.literal('five'), z.literal('seven')]),
  time: z.number(),
  errorCount: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const numberGuesserData = z.object({
  userId: z.string(),
  numberCorrect: z.number(),
  numberWrong: z.number(),
  longestStreak: z.number(),
  figuresAtStart: z.number(),
  figuresAtEnd: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const letterMatcherData = z.object({
  userId: z.string(),
  numberCorrect: z.number(),
  numberWrong: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const evenNumbersData = z.object({
  userId: z.string(),
  time: z.number(),
  errorCount: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const boxFlasherData = z.object({
  userId: z.string(),
  type: z.union([z.literal('two'), z.literal('three')]),
  speed: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const wordPairData = z.object({
  primaryWord: z.string(),
  secondaryWord: z.string(),
  language: language,
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const wordPairSessionData = z.object({
  userId: z.string(),
  errorCount: z.number(),
  time: z.number(),
  platform: z.union([z.literal('mobile'), z.literal('web')])
    .default('web'),
})

export const speedTestData = z.object({
  numberWrong: z.number(),
  startSpeed: z.number(),
  endSpeed: z.number(),
  platform: z.union([
    z.literal('mobile'), 
    z.literal('web')
  ]).default('web'),
})

export const wordPairProps = z.object({
  count: z.number(),
  language: language,
})

export const schemas = {
  user: userSchema,
  speedTest: speedTestSchema,
  exercise: exercise,
}

export const inputs = {
  randomWords: randomWordInputs,
}
