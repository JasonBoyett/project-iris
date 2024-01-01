import type { Config } from "drizzle-kit"
import dotenv from "dotenv"

dotenv.config({
  path: ".env",
})

const url = process.env["DRIZZLE_DB_URL"]

export default{
  schema: "./packages/db/drizzle/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: url as string,
  },
} satisfies Config
