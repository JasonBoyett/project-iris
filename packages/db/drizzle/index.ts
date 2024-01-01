import { drizzle } from "drizzle-orm/planetscale-serverless"
import { connect } from "@planetscale/database"
import { User } from "@acme/types"
import { eq } from "drizzle-orm"
import * as schema from "./schema"

const connection = connect({
  host: process.env["DATABASE_HOST"],
  username: process.env["DATABASE_USERNAME"],
  password: process.env["DATABASE_PASSWORD"],
})

const db = drizzle(connection, { schema })

export const getUser = (id: string) => db.select()
  .from(schema.user)
  .where(eq(schema.user.id, id))

export const setUser = (user: Partial<User>, id: string) => db.update(schema.user)
  .set({
          ...getUser(id),
          firstName: user.firstName,
          lastName: user.lastName,
          maxWpm: user.maxWpm,
          currentWpm: user.currentWpm,
          updatedAt: user?.updatedAt?.toString() ?? new Date().toString(),
          highlightColor: user.highlightColor,
          lastSchulte: user.lastSchulte,
          lastSpeedTest: user.lastSpeedTest,
          lastFourByOne: user.lastFourByOne,
          lastOneByTwo: user.lastOneByTwo,
          lastTwoByTwo: user.lastTwoByTwo,
          lastOneByOne: user.lastOneByOne,
          lastTwoByOne: user.lastTwoByOne,
          lastEvenNumbers: user.lastEvenNumbers,
          lastCubeByThree: user.lastCubeByThree,
          lastCubeByTwo: user.lastCubeByTwo,
          lastNumberGuesser: user.lastNumberGuesser,
          lastLetterMatcher: user.lastLetterMatcher,
          lastWordPairs: user.lastWordPairs, 
          lastGreenDot: user.lastGreenDot,
          numberGuesserFigures: user.numberGuesserFigures,
          schulteLevel: user.schulteLevel,
          schulteAdvanceCount: user.schulteAdvanceCount,
          isAdmin: Number(user.isAdmin),
          isUsingChecklist: Number(user.isUsingChecklist),
          font: user.font,
          language: user.language,
          tested: Number(user.tested) ?? Number(false),
  })
  .where(eq(schema.user.id, id))

