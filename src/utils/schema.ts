import { formatDate } from '~/utils/helpers'
import {
  sqliteTable as table,
  text,
  integer,
  uniqueIndex,
} from 'drizzle-orm/sqlite-core'

export const user = table('user', {
  id: text('').primaryKey(),
  createdAt: text('').default(formatDate(new Date())),
  updatedAt: text('').default(formatDate(new Date())),
  firstName: text('Unnamed'),
  lastName: text('User'),
  maxWpm: integer('real'),
  currentWpm: integer('real'),
})
