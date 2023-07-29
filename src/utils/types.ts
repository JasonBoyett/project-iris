import { User as PrismaUser } from '@prisma/client'

type Overlay = 
  'BLUE'|
  'BLUE_GREY'|
  'GREEN'|
  'GREY'|
  'ORANGE'|
  'PEACH'|
  'PURPLE'|
  'RED'|
  'TURQUOISE'|
  'YELLOW'

export type User = {
  Id: PrismaUser['Id']
  FirstName: PrismaUser['FirstName']
  LastName: PrismaUser['LastName']
  UpdatedAt: PrismaUser['UpdatedAt']
  CreatedAt: PrismaUser['CreatedAt']
  CurrentWpm: PrismaUser['CurrentWpm']
  MaxWpm: PrismaUser['MaxWpm']
  DarkMode: PrismaUser['DarkMode']
  HighlightColor: Overlay
}


