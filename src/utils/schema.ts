import { formatDate } from '~/utils/helpers'
import {
sqliteTable as table,
text, 
integer,
uniqueIndex,
} from 'drizzle-orm/sqlite-core'

export const user = table('user', {
  Id: text('').primaryKey(),
  CreatedAt: text('').default(formatDate(new Date())),
  UpdatedAt: text('').default(formatDate(new Date())),
  FirstName: text('Unnamed'),
  LastName: text('User'),
  MaxWpm: integer('real'),
  CurrentWpm: integer('real'),
   
})
