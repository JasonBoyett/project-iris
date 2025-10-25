
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  firstName: 'firstName',
  lastName: 'lastName',
  maxWpm: 'maxWpm',
  testSpeed: 'testSpeed',
  currentWpm: 'currentWpm',
  highlightColor: 'highlightColor',
  lastSchulte: 'lastSchulte',
  lastSpeedTest: 'lastSpeedTest',
  lastFourByOne: 'lastFourByOne',
  lastOneByTwo: 'lastOneByTwo',
  lastTwoByTwo: 'lastTwoByTwo',
  lastOneByOne: 'lastOneByOne',
  lastTwoByOne: 'lastTwoByOne',
  lastEvenNumbers: 'lastEvenNumbers',
  lastCubeByTwo: 'lastCubeByTwo',
  lastCubeByThree: 'lastCubeByThree',
  lastNumberGuesser: 'lastNumberGuesser',
  lastLetterMatcher: 'lastLetterMatcher',
  lastWordPairs: 'lastWordPairs',
  lastGreenDot: 'lastGreenDot',
  numberGuesserFigures: 'numberGuesserFigures',
  font: 'font',
  isUsingChecklist: 'isUsingChecklist',
  isAdmin: 'isAdmin',
  isStudySubject: 'isStudySubject',
  schulteLevel: 'schulteLevel',
  schulteAdvanceCount: 'schulteAdvanceCount',
  language: 'language',
  tested: 'tested'
};

exports.Prisma.TimeTestScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  sessionId: 'sessionId',
  CreatedAt: 'CreatedAt',
  highScore: 'highScore',
  lowScore: 'lowScore',
  accuracy: 'accuracy'
};

exports.Prisma.SchulteSessionScalarFieldEnum = {
  id: 'id',
  type: 'type',
  time: 'time',
  errorCount: 'errorCount',
  userId: 'userId',
  date: 'date',
  platform: 'platform'
};

exports.Prisma.EvenNumberSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  errorCount: 'errorCount',
  time: 'time',
  date: 'date',
  platform: 'platform'
};

exports.Prisma.HighlightSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  speed: 'speed',
  date: 'date',
  type: 'type',
  platform: 'platform'
};

exports.Prisma.NumberGuesserSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  numberCorrect: 'numberCorrect',
  numberWrong: 'numberWrong',
  longestStreak: 'longestStreak',
  figuresAtStart: 'figuresAtStart',
  figuresAtEnd: 'figuresAtEnd',
  date: 'date',
  platform: 'platform'
};

exports.Prisma.LetterMatcherSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  numberCorrect: 'numberCorrect',
  numberWrong: 'numberWrong',
  date: 'date',
  platform: 'platform'
};

exports.Prisma.WordFlasherSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  speed: 'speed',
  date: 'date',
  type: 'type',
  platform: 'platform'
};

exports.Prisma.BoxFlasherSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  speed: 'speed',
  date: 'date',
  type: 'type',
  platform: 'platform'
};

exports.Prisma.GreenDotSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  platform: 'platform'
};

exports.Prisma.PairsSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  date: 'date',
  time: 'time',
  errorCount: 'errorCount',
  platform: 'platform'
};

exports.Prisma.SpeedTestSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  startSpeed: 'startSpeed',
  endSpeed: 'endSpeed',
  date: 'date',
  errorCount: 'errorCount',
  platform: 'platform'
};

exports.Prisma.SpeedQuestionScalarFieldEnum = {
  id: 'id',
  passage: 'passage',
  question: 'question',
  answerA: 'answerA',
  answerB: 'answerB',
  answerC: 'answerC',
  answerD: 'answerD',
  correctAnswer: 'correctAnswer',
  language: 'language'
};

exports.Prisma.WordPairScalarFieldEnum = {
  id: 'id',
  primaryWord: 'primaryWord',
  secondaryWord: 'secondaryWord',
  language: 'language'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};
exports.Overlay = {
  BLUE: 'BLUE',
  BLUE_GREY: 'BLUE_GREY',
  GREEN: 'GREEN',
  GREY: 'GREY',
  ORANGE: 'ORANGE',
  PEACH: 'PEACH',
  PURPLE: 'PURPLE',
  RED: 'RED',
  TURQUOISE: 'TURQUOISE',
  YELLOW: 'YELLOW'
};

exports.Font = {
  sans: 'sans',
  serif: 'serif',
  mono: 'mono',
  robotoMono: 'robotoMono',
  rem: 'rem',
  kanit: 'kanit',
  preahvihear: 'preahvihear',
  bebasNeue: 'bebasNeue',
  chakraPetch: 'chakraPetch',
  ibmPlexMono: 'ibmPlexMono'
};

exports.SchulteType = {
  three: 'three',
  five: 'five',
  seven: 'seven'
};

exports.Language = {
  english: 'english',
  spanish: 'spanish',
  italian: 'italian',
  german: 'german'
};

exports.HighlightType = {
  fourByOne: 'fourByOne',
  oneByTwo: 'oneByTwo',
  twoByTwo: 'twoByTwo',
  oneByOne: 'oneByOne',
  twoByOne: 'twoByOne'
};

exports.BoxType = {
  two: 'two',
  three: 'three'
};

exports.Prisma.ModelName = {
  User: 'User',
  TimeTest: 'TimeTest',
  SchulteSession: 'SchulteSession',
  EvenNumberSession: 'EvenNumberSession',
  HighlightSession: 'HighlightSession',
  NumberGuesserSession: 'NumberGuesserSession',
  LetterMatcherSession: 'LetterMatcherSession',
  WordFlasherSession: 'WordFlasherSession',
  BoxFlasherSession: 'BoxFlasherSession',
  GreenDotSession: 'GreenDotSession',
  PairsSession: 'PairsSession',
  SpeedTestSession: 'SpeedTestSession',
  SpeedQuestion: 'SpeedQuestion',
  WordPair: 'WordPair'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
