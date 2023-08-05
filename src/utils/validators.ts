import { z as zodValidate } from 'zod'

const userSchema = zodValidate.object({
  Id: zodValidate.string(),
  FirstName: zodValidate.string(),
  LastName: zodValidate.string(),
  MaxWpm: zodValidate.number(),
  CurrentWpm: zodValidate.number(),
  CreatedAt: zodValidate.date(),
  UpdatedAt: zodValidate.date(),
  HighlightColor: zodValidate.union([
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
})

const speedTestSchema = zodValidate.object({
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
