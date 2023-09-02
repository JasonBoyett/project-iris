import { z as zodValidate } from 'zod'

export const userSchema = zodValidate.object({
  id: zodValidate.string(),
  firstName: zodValidate.string(),
  lastName: zodValidate.string(),
  maxWpm: zodValidate.number(),
  currentWpm: zodValidate.number(),
  createdAt: zodValidate.date(),
  updatedAt: zodValidate.date(),
  highlightColor: zodValidate
    .union([
      zodValidate.literal('BLUE'),
      zodValidate.literal('BLUE_GREY'),
      zodValidate.literal('GREEN'),
      zodValidate.literal('GREY'),
      zodValidate.literal('ORANGE'),
      zodValidate.literal('PEACH'),
      zodValidate.literal('PURPLE'),
      zodValidate.literal('RED'),
      zodValidate.literal('TURQUOISE'),
      zodValidate.literal('YELLOW'),
    ])
    .optional(),
  font: zodValidate.union([
    zodValidate.literal('sans'),
    zodValidate.literal('serif'),
    zodValidate.literal('mono'),
    zodValidate.literal('robotoMono'),
    zodValidate.literal('rem'),
    zodValidate.literal('kanit'),
    zodValidate.literal('preahvihear'),
    zodValidate.literal('bebasNeue'),
    zodValidate.literal('chakraPetch'),
    zodValidate.literal('ibmPlexMono'),
  ]),
  lastSchulteByThree: zodValidate.string().optional(),
  lastSchulteByFive: zodValidate.string().optional(),
  lastSchulteBySeven: zodValidate.string().optional(),
  lastSpeedTest: zodValidate.string().optional(),
  lastFourByOne: zodValidate.string().optional(),
  lastOneByTwo: zodValidate.string().optional(),
  lastTwoByTwo: zodValidate.string().optional(),
  lastOneByOne: zodValidate.string().optional(),
  lastTwoByOne: zodValidate.string().optional(),
  lastEvenNumbers: zodValidate.string().optional(),
  lastCubeByThree: zodValidate.string().optional(),
  lastCubeByTwo: zodValidate.string().optional(),
  isAdmin: zodValidate.boolean().default(false),
})

export const speedTestSchema = zodValidate.object({
  id: zodValidate.number(),
  question: zodValidate.string(),
  passage: zodValidate.string(),
  answerA: zodValidate.string(),
  answerB: zodValidate.string(),
  answerC: zodValidate.string(),
  answerD: zodValidate.string(),
  correctAnswer: zodValidate.string(),
})

export const schemas = {
  user: userSchema,
  speedTest: speedTestSchema,
}

const randomWordInputs = zodValidate.object({
  number: zodValidate.number(),
  language: zodValidate.union([
    zodValidate.literal('english'),
    zodValidate.literal('spanish'),
  ]),
})

export const inputs = {
  randomWords: randomWordInputs,
}
