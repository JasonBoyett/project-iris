import { z as zodValidate } from 'zod'

export const userSchema = zodValidate.object({
  Id: zodValidate.string(),
  FirstName: zodValidate.string(),
  LastName: zodValidate.string(),
  MaxWpm: zodValidate.number(),
  CurrentWpm: zodValidate.number(),
  CreatedAt: zodValidate.date(),
  UpdatedAt: zodValidate.date(),
  HighlightColor: zodValidate
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
  Font: zodValidate.union([
    zodValidate.literal('SANS'),
    zodValidate.literal('SERIF'),
    zodValidate.literal('MONO'),
    zodValidate.literal('RROBOTO_MONO'),
    zodValidate.literal('REM'),
    zodValidate.literal('KANIT'),
    zodValidate.literal('PREAHVIHEAR'),
    zodValidate.literal('BEBAS_NEUE'),
    zodValidate.literal('CHAKRA_PETCH'),
    zodValidate.literal('IBM_PLEX_MONO'),
  ]),
  LastSchulteByThree: zodValidate.string().optional(),
  LastSchulteByFive: zodValidate.string().optional(),
  LastSchulteBySeven: zodValidate.string().optional(),
  LastSpeedTest: zodValidate.string().optional(),
  LastFourByOne: zodValidate.string().optional(),
  LastOneByTwo: zodValidate.string().optional(),
  LastTwoByTwo: zodValidate.string().optional(),
  LastOneByOne: zodValidate.string().optional(),
  LastTwoByOne: zodValidate.string().optional(),
  LastEvenNumbers: zodValidate.string().optional(),
  LastCubeByThree: zodValidate.string().optional(),
  LastCubeByTwo: zodValidate.string().optional(),
  isAdmin: zodValidate.boolean().default(false),
})

export const speedTestSchema = zodValidate.object({
  Id: zodValidate.number(),
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
    zodValidate.literal('ENGLISH'),
    zodValidate.literal('SPANISH'),
  ]),
})

export const inputs = {
  randomWords: randomWordInputs,
}
