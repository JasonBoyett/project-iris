import { router, protectedProcedure } from '../trpc'
import { z } from 'zod'
import type { Language } from '@acme/types'
import axios from 'axios'
import {
  exercise,
  inputs,
  schemas,
  speedTestSchema,
  userSchema,
  wordPairData,
  wordPairProps,
} from '@acme/validators'
import { Prisma, type SpeedQuestion, type WordPair } from '@acme/db'
import { getNextExercise, getNextWebURL } from '@acme/helpers'

const multiTest = speedTestSchema.array()

async function getRandomWords(size: number, language: Language) {
  if (language === 'english') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?number=${size}`,
    )
    return response.data
  }
  if (language === 'spanish') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=es&number=${size}`,
    )
    return response.data
  }
  if (language === 'italian') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=it&number=${size}`,
    )
    return response.data
  }
  if (language === 'german') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=de&number=${size}`,
    )
    return response.data
  }
}
type GetRandomWordsLimitLength = {
  wordsReturned: number
  wordLength: number
  language: Language
}
async function getRandomWordsLimitLength({
  wordsReturned,
  wordLength,
  language,
}: GetRandomWordsLimitLength) {
  const blockSize = Math.ceil(wordsReturned / 3)
  const words = new Array<string>()
  const block1 = await getWords({
    wordsReturned: blockSize,
    wordLength: wordLength,
    language: language,
  })
  const block2 = await getWords({
    wordsReturned: blockSize,
    wordLength: wordLength - 1,
    language: language,
  })
  const block3 = await getWords({
    wordsReturned: blockSize,
    wordLength: wordLength - 2,
    language: language,
  })
  if (block1 === undefined || block2 === undefined || block3 === undefined) {
    return
  }
  block1.forEach(word => {
    words.push(word)
  })
  block2.forEach(word => {
    words.push(word)
  })
  block3.forEach(word => {
    words.push(word)
  })
  return words
    .slice(0, wordsReturned)
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
}

async function getWords({
  wordsReturned,
  wordLength,
  language,
}: GetRandomWordsLimitLength) {
  if (language === 'english') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?number=${wordsReturned}&length=${wordLength}`,
    )
    console.log(response.data)
    return response.data
  }
  if (language === 'spanish') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=es&number=${wordsReturned}&length=${wordLength}`,
    )
    return response.data
  }
  if (language === 'italian') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=it&number=${wordsReturned}&length=${wordLength}`,
    )
    return response.data
  }
  if (language === 'german') {
    const response = await axios.get<string[]>(
      `https://random-word-api.herokuapp.com/word?lang=de&number=${wordsReturned}&length=${wordLength}`,
    )
    return response.data
  }
}

export const excercisePropsRouter = router({
  getSingleSpeedTestProps: protectedProcedure
    .output(schemas.speedTest)
    .query(async ({ ctx }) => {
      const numberOfTables = await ctx.prisma.speedQuestion.count()
      const random = Math.floor(Math.random() * numberOfTables)
      const result = await ctx.prisma.speedQuestion.findUnique({
        where: {
          id: random,
        },
      })
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getMultipleSpeedTestProps: protectedProcedure
    .output(multiTest)
    .input(z.number())
    .query(async ({ input, ctx }) => {
      const result = await ctx.prisma.$queryRaw<Array<SpeedQuestion>>(
        Prisma.sql`SELECT * FROM SpeedQuestion ORDER BY RANDOM() LIMIT ${input}`,
      )
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getRandomWords: protectedProcedure
    .input(inputs.randomWords)
    .output(z.array(z.string()).or(z.undefined()))
    .query<string[] | undefined>(async ({ input }) => {
      if (input.max < 0) {
        return getRandomWords(input.number, input.language)
      } else {
        return getRandomWordsLimitLength({
          wordsReturned: input.number,
          wordLength: input.max,
          language: input.language,
        })
      }
    }),

  getWordPairs: protectedProcedure
    .input(wordPairProps)
    .output(wordPairData.array())
    .query(async ({ input, ctx }) => {
      const result = await ctx.prisma.$queryRaw<Array<WordPair>>(
        Prisma.sql`SELECT * FROM WordPair ORDER BY RAND() LIMIT ${input.count}`,
      )
      if (result === null || result === undefined) throw new Error('No result')
      return result
    }),

  getNextUrl: protectedProcedure
    .input(userSchema)
    .output(z.string())
    .query(({ input }) => {
      const next = getNextExercise(input)
      return getNextWebURL(next)
    }),

  getNext: protectedProcedure
    .output(exercise.or(z.undefined()))
    .query(async ({ ctx }) => {
      const id = ctx.auth.userId
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: id,
        },
      })
      const next = getNextExercise(user)
      const result = exercise.safeParse(next) 
      if (!result.success) {
        return undefined
      }
      return result.data
    }),
})
