
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    timeTests: TimeTestPayload<ExtArgs>[]
    shulteSessions: SchulteSessionPayload<ExtArgs>[]
    evenNumberSessions: EvenNumberSessionPayload<ExtArgs>[]
    wordGridFlasherSessions: HighlightSessionPayload<ExtArgs>[]
    wordFlasherSessions: WordFlasherSessionPayload<ExtArgs>[]
    LetterMatcherSessions: LetterMatcherSessionPayload<ExtArgs>[]
    GreenDotSessions: GreenDotSessionPayload<ExtArgs>[]
    NumberGuesserSession: NumberGuesserSessionPayload<ExtArgs>[]
    BoxFlasherSession: BoxFlasherSessionPayload<ExtArgs>[]
    PairsSession: PairsSessionPayload<ExtArgs>[]
    SpeedTestSessions: SpeedTestSessionPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    maxWpm: number
    testSpeed: number
    currentWpm: number
    highlightColor: Overlay
    lastSchulte: string
    lastSpeedTest: string
    lastFourByOne: string
    lastOneByTwo: string
    lastTwoByTwo: string
    lastOneByOne: string
    lastTwoByOne: string
    lastEvenNumbers: string
    lastCubeByTwo: string
    lastCubeByThree: string
    lastNumberGuesser: string
    lastLetterMatcher: string
    lastWordPairs: string
    lastGreenDot: string
    numberGuesserFigures: number
    font: Font
    isUsingChecklist: boolean
    isAdmin: boolean
    isStudySubject: boolean
    schulteLevel: SchulteType
    schulteAdvanceCount: number
    language: Language
    tested: boolean
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type TimeTestPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "TimeTest"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    sessionId: string
    CreatedAt: Date
    highScore: number
    lowScore: number
    accuracy: number
  }, ExtArgs["result"]["timeTest"]>
  composites: {}
}

/**
 * Model TimeTest
 * 
 */
export type TimeTest = runtime.Types.DefaultSelection<TimeTestPayload>
export type SchulteSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SchulteSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    type: SchulteType
    time: number
    errorCount: number
    userId: string
    date: Date
    platform: string
  }, ExtArgs["result"]["schulteSession"]>
  composites: {}
}

/**
 * Model SchulteSession
 * 
 */
export type SchulteSession = runtime.Types.DefaultSelection<SchulteSessionPayload>
export type EvenNumberSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "EvenNumberSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    errorCount: number
    time: number
    date: Date
    platform: string
  }, ExtArgs["result"]["evenNumberSession"]>
  composites: {}
}

/**
 * Model EvenNumberSession
 * 
 */
export type EvenNumberSession = runtime.Types.DefaultSelection<EvenNumberSessionPayload>
export type HighlightSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "HighlightSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    speed: number
    date: Date
    type: HighlightType
    platform: string
  }, ExtArgs["result"]["highlightSession"]>
  composites: {}
}

/**
 * Model HighlightSession
 * 
 */
export type HighlightSession = runtime.Types.DefaultSelection<HighlightSessionPayload>
export type NumberGuesserSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "NumberGuesserSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date
    platform: string
  }, ExtArgs["result"]["numberGuesserSession"]>
  composites: {}
}

/**
 * Model NumberGuesserSession
 * 
 */
export type NumberGuesserSession = runtime.Types.DefaultSelection<NumberGuesserSessionPayload>
export type LetterMatcherSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "LetterMatcherSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    date: Date
    platform: string
  }, ExtArgs["result"]["letterMatcherSession"]>
  composites: {}
}

/**
 * Model LetterMatcherSession
 * 
 */
export type LetterMatcherSession = runtime.Types.DefaultSelection<LetterMatcherSessionPayload>
export type WordFlasherSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "WordFlasherSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    speed: number
    date: Date
    type: string
    platform: string
  }, ExtArgs["result"]["wordFlasherSession"]>
  composites: {}
}

/**
 * Model WordFlasherSession
 * 
 */
export type WordFlasherSession = runtime.Types.DefaultSelection<WordFlasherSessionPayload>
export type BoxFlasherSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "BoxFlasherSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    speed: number
    date: Date
    type: BoxType
    platform: string
  }, ExtArgs["result"]["boxFlasherSession"]>
  composites: {}
}

/**
 * Model BoxFlasherSession
 * 
 */
export type BoxFlasherSession = runtime.Types.DefaultSelection<BoxFlasherSessionPayload>
export type GreenDotSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "GreenDotSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    date: Date
    platform: string
  }, ExtArgs["result"]["greenDotSession"]>
  composites: {}
}

/**
 * Model GreenDotSession
 * 
 */
export type GreenDotSession = runtime.Types.DefaultSelection<GreenDotSessionPayload>
export type PairsSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "PairsSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    date: Date
    time: number
    errorCount: number
    platform: string
  }, ExtArgs["result"]["pairsSession"]>
  composites: {}
}

/**
 * Model PairsSession
 * 
 */
export type PairsSession = runtime.Types.DefaultSelection<PairsSessionPayload>
export type SpeedTestSessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SpeedTestSession"
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    id: string
    userId: string
    startSpeed: number
    endSpeed: number
    date: Date
    errorCount: number
    platform: string
  }, ExtArgs["result"]["speedTestSession"]>
  composites: {}
}

/**
 * Model SpeedTestSession
 * 
 */
export type SpeedTestSession = runtime.Types.DefaultSelection<SpeedTestSessionPayload>
export type SpeedQuestionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "SpeedQuestion"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    passage: string
    question: string
    answerA: string
    answerB: string
    answerC: string
    answerD: string
    correctAnswer: string
    language: Language
  }, ExtArgs["result"]["speedQuestion"]>
  composites: {}
}

/**
 * Model SpeedQuestion
 * 
 */
export type SpeedQuestion = runtime.Types.DefaultSelection<SpeedQuestionPayload>
export type WordPairPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "WordPair"
  objects: {}
  scalars: $Extensions.GetResult<{
    id: number
    primaryWord: string
    secondaryWord: string
    language: Language
  }, ExtArgs["result"]["wordPair"]>
  composites: {}
}

/**
 * Model WordPair
 * 
 */
export type WordPair = runtime.Types.DefaultSelection<WordPairPayload>

/**
 * Enums
 */

export const Overlay: {
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

export type Overlay = (typeof Overlay)[keyof typeof Overlay]


export const Font: {
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

export type Font = (typeof Font)[keyof typeof Font]


export const SchulteType: {
  three: 'three',
  five: 'five',
  seven: 'seven'
};

export type SchulteType = (typeof SchulteType)[keyof typeof SchulteType]


export const Language: {
  english: 'english',
  spanish: 'spanish',
  italian: 'italian',
  german: 'german'
};

export type Language = (typeof Language)[keyof typeof Language]


export const HighlightType: {
  fourByOne: 'fourByOne',
  oneByTwo: 'oneByTwo',
  twoByTwo: 'twoByTwo',
  oneByOne: 'oneByOne',
  twoByOne: 'twoByOne'
};

export type HighlightType = (typeof HighlightType)[keyof typeof HighlightType]


export const BoxType: {
  two: 'two',
  three: 'three'
};

export type BoxType = (typeof BoxType)[keyof typeof BoxType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.timeTest`: Exposes CRUD operations for the **TimeTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TimeTests
    * const timeTests = await prisma.timeTest.findMany()
    * ```
    */
  get timeTest(): Prisma.TimeTestDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.schulteSession`: Exposes CRUD operations for the **SchulteSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchulteSessions
    * const schulteSessions = await prisma.schulteSession.findMany()
    * ```
    */
  get schulteSession(): Prisma.SchulteSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.evenNumberSession`: Exposes CRUD operations for the **EvenNumberSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EvenNumberSessions
    * const evenNumberSessions = await prisma.evenNumberSession.findMany()
    * ```
    */
  get evenNumberSession(): Prisma.EvenNumberSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.highlightSession`: Exposes CRUD operations for the **HighlightSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HighlightSessions
    * const highlightSessions = await prisma.highlightSession.findMany()
    * ```
    */
  get highlightSession(): Prisma.HighlightSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.numberGuesserSession`: Exposes CRUD operations for the **NumberGuesserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NumberGuesserSessions
    * const numberGuesserSessions = await prisma.numberGuesserSession.findMany()
    * ```
    */
  get numberGuesserSession(): Prisma.NumberGuesserSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.letterMatcherSession`: Exposes CRUD operations for the **LetterMatcherSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LetterMatcherSessions
    * const letterMatcherSessions = await prisma.letterMatcherSession.findMany()
    * ```
    */
  get letterMatcherSession(): Prisma.LetterMatcherSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.wordFlasherSession`: Exposes CRUD operations for the **WordFlasherSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordFlasherSessions
    * const wordFlasherSessions = await prisma.wordFlasherSession.findMany()
    * ```
    */
  get wordFlasherSession(): Prisma.WordFlasherSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.boxFlasherSession`: Exposes CRUD operations for the **BoxFlasherSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoxFlasherSessions
    * const boxFlasherSessions = await prisma.boxFlasherSession.findMany()
    * ```
    */
  get boxFlasherSession(): Prisma.BoxFlasherSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.greenDotSession`: Exposes CRUD operations for the **GreenDotSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GreenDotSessions
    * const greenDotSessions = await prisma.greenDotSession.findMany()
    * ```
    */
  get greenDotSession(): Prisma.GreenDotSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.pairsSession`: Exposes CRUD operations for the **PairsSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PairsSessions
    * const pairsSessions = await prisma.pairsSession.findMany()
    * ```
    */
  get pairsSession(): Prisma.PairsSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.speedTestSession`: Exposes CRUD operations for the **SpeedTestSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeedTestSessions
    * const speedTestSessions = await prisma.speedTestSession.findMany()
    * ```
    */
  get speedTestSession(): Prisma.SpeedTestSessionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.speedQuestion`: Exposes CRUD operations for the **SpeedQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeedQuestions
    * const speedQuestions = await prisma.speedQuestion.findMany()
    * ```
    */
  get speedQuestion(): Prisma.SpeedQuestionDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.wordPair`: Exposes CRUD operations for the **WordPair** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WordPairs
    * const wordPairs = await prisma.wordPair.findMany()
    * ```
    */
  get wordPair(): Prisma.WordPairDelegate<GlobalReject, ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'timeTest' | 'schulteSession' | 'evenNumberSession' | 'highlightSession' | 'numberGuesserSession' | 'letterMatcherSession' | 'wordFlasherSession' | 'boxFlasherSession' | 'greenDotSession' | 'pairsSession' | 'speedTestSession' | 'speedQuestion' | 'wordPair'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TimeTest: {
        payload: TimeTestPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.TimeTestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeTestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>
          }
          findFirst: {
            args: Prisma.TimeTestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeTestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>
          }
          findMany: {
            args: Prisma.TimeTestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>[]
          }
          create: {
            args: Prisma.TimeTestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>
          }
          createMany: {
            args: Prisma.TimeTestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TimeTestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>
          }
          update: {
            args: Prisma.TimeTestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>
          }
          deleteMany: {
            args: Prisma.TimeTestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TimeTestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TimeTestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<TimeTestPayload>
          }
          aggregate: {
            args: Prisma.TimeTestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTimeTest>
          }
          groupBy: {
            args: Prisma.TimeTestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TimeTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeTestCountArgs<ExtArgs>,
            result: $Utils.Optional<TimeTestCountAggregateOutputType> | number
          }
        }
      }
      SchulteSession: {
        payload: SchulteSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SchulteSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchulteSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>
          }
          findFirst: {
            args: Prisma.SchulteSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchulteSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>
          }
          findMany: {
            args: Prisma.SchulteSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>[]
          }
          create: {
            args: Prisma.SchulteSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>
          }
          createMany: {
            args: Prisma.SchulteSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SchulteSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>
          }
          update: {
            args: Prisma.SchulteSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>
          }
          deleteMany: {
            args: Prisma.SchulteSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SchulteSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SchulteSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SchulteSessionPayload>
          }
          aggregate: {
            args: Prisma.SchulteSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSchulteSession>
          }
          groupBy: {
            args: Prisma.SchulteSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SchulteSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchulteSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SchulteSessionCountAggregateOutputType> | number
          }
        }
      }
      EvenNumberSession: {
        payload: EvenNumberSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.EvenNumberSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvenNumberSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>
          }
          findFirst: {
            args: Prisma.EvenNumberSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvenNumberSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>
          }
          findMany: {
            args: Prisma.EvenNumberSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>[]
          }
          create: {
            args: Prisma.EvenNumberSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>
          }
          createMany: {
            args: Prisma.EvenNumberSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EvenNumberSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>
          }
          update: {
            args: Prisma.EvenNumberSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>
          }
          deleteMany: {
            args: Prisma.EvenNumberSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EvenNumberSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EvenNumberSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<EvenNumberSessionPayload>
          }
          aggregate: {
            args: Prisma.EvenNumberSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvenNumberSession>
          }
          groupBy: {
            args: Prisma.EvenNumberSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EvenNumberSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvenNumberSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<EvenNumberSessionCountAggregateOutputType> | number
          }
        }
      }
      HighlightSession: {
        payload: HighlightSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.HighlightSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HighlightSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>
          }
          findFirst: {
            args: Prisma.HighlightSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HighlightSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>
          }
          findMany: {
            args: Prisma.HighlightSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>[]
          }
          create: {
            args: Prisma.HighlightSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>
          }
          createMany: {
            args: Prisma.HighlightSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HighlightSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>
          }
          update: {
            args: Prisma.HighlightSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>
          }
          deleteMany: {
            args: Prisma.HighlightSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HighlightSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HighlightSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<HighlightSessionPayload>
          }
          aggregate: {
            args: Prisma.HighlightSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHighlightSession>
          }
          groupBy: {
            args: Prisma.HighlightSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HighlightSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HighlightSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<HighlightSessionCountAggregateOutputType> | number
          }
        }
      }
      NumberGuesserSession: {
        payload: NumberGuesserSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.NumberGuesserSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumberGuesserSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>
          }
          findFirst: {
            args: Prisma.NumberGuesserSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumberGuesserSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>
          }
          findMany: {
            args: Prisma.NumberGuesserSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>[]
          }
          create: {
            args: Prisma.NumberGuesserSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>
          }
          createMany: {
            args: Prisma.NumberGuesserSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NumberGuesserSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>
          }
          update: {
            args: Prisma.NumberGuesserSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>
          }
          deleteMany: {
            args: Prisma.NumberGuesserSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NumberGuesserSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NumberGuesserSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<NumberGuesserSessionPayload>
          }
          aggregate: {
            args: Prisma.NumberGuesserSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNumberGuesserSession>
          }
          groupBy: {
            args: Prisma.NumberGuesserSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NumberGuesserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumberGuesserSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<NumberGuesserSessionCountAggregateOutputType> | number
          }
        }
      }
      LetterMatcherSession: {
        payload: LetterMatcherSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.LetterMatcherSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LetterMatcherSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>
          }
          findFirst: {
            args: Prisma.LetterMatcherSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LetterMatcherSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>
          }
          findMany: {
            args: Prisma.LetterMatcherSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>[]
          }
          create: {
            args: Prisma.LetterMatcherSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>
          }
          createMany: {
            args: Prisma.LetterMatcherSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LetterMatcherSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>
          }
          update: {
            args: Prisma.LetterMatcherSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>
          }
          deleteMany: {
            args: Prisma.LetterMatcherSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LetterMatcherSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LetterMatcherSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<LetterMatcherSessionPayload>
          }
          aggregate: {
            args: Prisma.LetterMatcherSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLetterMatcherSession>
          }
          groupBy: {
            args: Prisma.LetterMatcherSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LetterMatcherSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LetterMatcherSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<LetterMatcherSessionCountAggregateOutputType> | number
          }
        }
      }
      WordFlasherSession: {
        payload: WordFlasherSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.WordFlasherSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFlasherSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>
          }
          findFirst: {
            args: Prisma.WordFlasherSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFlasherSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>
          }
          findMany: {
            args: Prisma.WordFlasherSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>[]
          }
          create: {
            args: Prisma.WordFlasherSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>
          }
          createMany: {
            args: Prisma.WordFlasherSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WordFlasherSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>
          }
          update: {
            args: Prisma.WordFlasherSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>
          }
          deleteMany: {
            args: Prisma.WordFlasherSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WordFlasherSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WordFlasherSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordFlasherSessionPayload>
          }
          aggregate: {
            args: Prisma.WordFlasherSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWordFlasherSession>
          }
          groupBy: {
            args: Prisma.WordFlasherSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WordFlasherSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordFlasherSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<WordFlasherSessionCountAggregateOutputType> | number
          }
        }
      }
      BoxFlasherSession: {
        payload: BoxFlasherSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.BoxFlasherSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoxFlasherSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>
          }
          findFirst: {
            args: Prisma.BoxFlasherSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoxFlasherSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>
          }
          findMany: {
            args: Prisma.BoxFlasherSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>[]
          }
          create: {
            args: Prisma.BoxFlasherSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>
          }
          createMany: {
            args: Prisma.BoxFlasherSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BoxFlasherSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>
          }
          update: {
            args: Prisma.BoxFlasherSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>
          }
          deleteMany: {
            args: Prisma.BoxFlasherSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BoxFlasherSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BoxFlasherSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<BoxFlasherSessionPayload>
          }
          aggregate: {
            args: Prisma.BoxFlasherSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBoxFlasherSession>
          }
          groupBy: {
            args: Prisma.BoxFlasherSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BoxFlasherSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoxFlasherSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<BoxFlasherSessionCountAggregateOutputType> | number
          }
        }
      }
      GreenDotSession: {
        payload: GreenDotSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GreenDotSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GreenDotSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>
          }
          findFirst: {
            args: Prisma.GreenDotSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GreenDotSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>
          }
          findMany: {
            args: Prisma.GreenDotSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>[]
          }
          create: {
            args: Prisma.GreenDotSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>
          }
          createMany: {
            args: Prisma.GreenDotSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GreenDotSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>
          }
          update: {
            args: Prisma.GreenDotSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>
          }
          deleteMany: {
            args: Prisma.GreenDotSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GreenDotSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GreenDotSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GreenDotSessionPayload>
          }
          aggregate: {
            args: Prisma.GreenDotSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGreenDotSession>
          }
          groupBy: {
            args: Prisma.GreenDotSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GreenDotSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GreenDotSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<GreenDotSessionCountAggregateOutputType> | number
          }
        }
      }
      PairsSession: {
        payload: PairsSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PairsSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PairsSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>
          }
          findFirst: {
            args: Prisma.PairsSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PairsSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>
          }
          findMany: {
            args: Prisma.PairsSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>[]
          }
          create: {
            args: Prisma.PairsSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>
          }
          createMany: {
            args: Prisma.PairsSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PairsSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>
          }
          update: {
            args: Prisma.PairsSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>
          }
          deleteMany: {
            args: Prisma.PairsSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PairsSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PairsSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PairsSessionPayload>
          }
          aggregate: {
            args: Prisma.PairsSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePairsSession>
          }
          groupBy: {
            args: Prisma.PairsSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PairsSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PairsSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<PairsSessionCountAggregateOutputType> | number
          }
        }
      }
      SpeedTestSession: {
        payload: SpeedTestSessionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SpeedTestSessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeedTestSessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>
          }
          findFirst: {
            args: Prisma.SpeedTestSessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeedTestSessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>
          }
          findMany: {
            args: Prisma.SpeedTestSessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>[]
          }
          create: {
            args: Prisma.SpeedTestSessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>
          }
          createMany: {
            args: Prisma.SpeedTestSessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SpeedTestSessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>
          }
          update: {
            args: Prisma.SpeedTestSessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>
          }
          deleteMany: {
            args: Prisma.SpeedTestSessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SpeedTestSessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SpeedTestSessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedTestSessionPayload>
          }
          aggregate: {
            args: Prisma.SpeedTestSessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpeedTestSession>
          }
          groupBy: {
            args: Prisma.SpeedTestSessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SpeedTestSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeedTestSessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SpeedTestSessionCountAggregateOutputType> | number
          }
        }
      }
      SpeedQuestion: {
        payload: SpeedQuestionPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SpeedQuestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeedQuestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>
          }
          findFirst: {
            args: Prisma.SpeedQuestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeedQuestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>
          }
          findMany: {
            args: Prisma.SpeedQuestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>[]
          }
          create: {
            args: Prisma.SpeedQuestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>
          }
          createMany: {
            args: Prisma.SpeedQuestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SpeedQuestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>
          }
          update: {
            args: Prisma.SpeedQuestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>
          }
          deleteMany: {
            args: Prisma.SpeedQuestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SpeedQuestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SpeedQuestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SpeedQuestionPayload>
          }
          aggregate: {
            args: Prisma.SpeedQuestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpeedQuestion>
          }
          groupBy: {
            args: Prisma.SpeedQuestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SpeedQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeedQuestionCountArgs<ExtArgs>,
            result: $Utils.Optional<SpeedQuestionCountAggregateOutputType> | number
          }
        }
      }
      WordPair: {
        payload: WordPairPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.WordPairFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordPairFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>
          }
          findFirst: {
            args: Prisma.WordPairFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordPairFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>
          }
          findMany: {
            args: Prisma.WordPairFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>[]
          }
          create: {
            args: Prisma.WordPairCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>
          }
          createMany: {
            args: Prisma.WordPairCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WordPairDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>
          }
          update: {
            args: Prisma.WordPairUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>
          }
          deleteMany: {
            args: Prisma.WordPairDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WordPairUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WordPairUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<WordPairPayload>
          }
          aggregate: {
            args: Prisma.WordPairAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWordPair>
          }
          groupBy: {
            args: Prisma.WordPairGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WordPairGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordPairCountArgs<ExtArgs>,
            result: $Utils.Optional<WordPairCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    timeTests: number
    shulteSessions: number
    evenNumberSessions: number
    wordGridFlasherSessions: number
    wordFlasherSessions: number
    LetterMatcherSessions: number
    GreenDotSessions: number
    NumberGuesserSession: number
    BoxFlasherSession: number
    PairsSession: number
    SpeedTestSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    timeTests?: boolean | UserCountOutputTypeCountTimeTestsArgs
    shulteSessions?: boolean | UserCountOutputTypeCountShulteSessionsArgs
    evenNumberSessions?: boolean | UserCountOutputTypeCountEvenNumberSessionsArgs
    wordGridFlasherSessions?: boolean | UserCountOutputTypeCountWordGridFlasherSessionsArgs
    wordFlasherSessions?: boolean | UserCountOutputTypeCountWordFlasherSessionsArgs
    LetterMatcherSessions?: boolean | UserCountOutputTypeCountLetterMatcherSessionsArgs
    GreenDotSessions?: boolean | UserCountOutputTypeCountGreenDotSessionsArgs
    NumberGuesserSession?: boolean | UserCountOutputTypeCountNumberGuesserSessionArgs
    BoxFlasherSession?: boolean | UserCountOutputTypeCountBoxFlasherSessionArgs
    PairsSession?: boolean | UserCountOutputTypeCountPairsSessionArgs
    SpeedTestSessions?: boolean | UserCountOutputTypeCountSpeedTestSessionsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimeTestsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TimeTestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShulteSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SchulteSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvenNumberSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EvenNumberSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWordGridFlasherSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HighlightSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWordFlasherSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WordFlasherSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLetterMatcherSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LetterMatcherSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGreenDotSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GreenDotSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNumberGuesserSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NumberGuesserSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoxFlasherSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoxFlasherSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPairsSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PairsSessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpeedTestSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SpeedTestSessionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    maxWpm: number | null
    testSpeed: number | null
    currentWpm: number | null
    numberGuesserFigures: number | null
    schulteAdvanceCount: number | null
  }

  export type UserSumAggregateOutputType = {
    maxWpm: number | null
    testSpeed: number | null
    currentWpm: number | null
    numberGuesserFigures: number | null
    schulteAdvanceCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    maxWpm: number | null
    testSpeed: number | null
    currentWpm: number | null
    highlightColor: Overlay | null
    lastSchulte: string | null
    lastSpeedTest: string | null
    lastFourByOne: string | null
    lastOneByTwo: string | null
    lastTwoByTwo: string | null
    lastOneByOne: string | null
    lastTwoByOne: string | null
    lastEvenNumbers: string | null
    lastCubeByTwo: string | null
    lastCubeByThree: string | null
    lastNumberGuesser: string | null
    lastLetterMatcher: string | null
    lastWordPairs: string | null
    lastGreenDot: string | null
    numberGuesserFigures: number | null
    font: Font | null
    isUsingChecklist: boolean | null
    isAdmin: boolean | null
    isStudySubject: boolean | null
    schulteLevel: SchulteType | null
    schulteAdvanceCount: number | null
    language: Language | null
    tested: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    firstName: string | null
    lastName: string | null
    maxWpm: number | null
    testSpeed: number | null
    currentWpm: number | null
    highlightColor: Overlay | null
    lastSchulte: string | null
    lastSpeedTest: string | null
    lastFourByOne: string | null
    lastOneByTwo: string | null
    lastTwoByTwo: string | null
    lastOneByOne: string | null
    lastTwoByOne: string | null
    lastEvenNumbers: string | null
    lastCubeByTwo: string | null
    lastCubeByThree: string | null
    lastNumberGuesser: string | null
    lastLetterMatcher: string | null
    lastWordPairs: string | null
    lastGreenDot: string | null
    numberGuesserFigures: number | null
    font: Font | null
    isUsingChecklist: boolean | null
    isAdmin: boolean | null
    isStudySubject: boolean | null
    schulteLevel: SchulteType | null
    schulteAdvanceCount: number | null
    language: Language | null
    tested: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    firstName: number
    lastName: number
    maxWpm: number
    testSpeed: number
    currentWpm: number
    highlightColor: number
    lastSchulte: number
    lastSpeedTest: number
    lastFourByOne: number
    lastOneByTwo: number
    lastTwoByTwo: number
    lastOneByOne: number
    lastTwoByOne: number
    lastEvenNumbers: number
    lastCubeByTwo: number
    lastCubeByThree: number
    lastNumberGuesser: number
    lastLetterMatcher: number
    lastWordPairs: number
    lastGreenDot: number
    numberGuesserFigures: number
    font: number
    isUsingChecklist: number
    isAdmin: number
    isStudySubject: number
    schulteLevel: number
    schulteAdvanceCount: number
    language: number
    tested: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    maxWpm?: true
    testSpeed?: true
    currentWpm?: true
    numberGuesserFigures?: true
    schulteAdvanceCount?: true
  }

  export type UserSumAggregateInputType = {
    maxWpm?: true
    testSpeed?: true
    currentWpm?: true
    numberGuesserFigures?: true
    schulteAdvanceCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    maxWpm?: true
    testSpeed?: true
    currentWpm?: true
    highlightColor?: true
    lastSchulte?: true
    lastSpeedTest?: true
    lastFourByOne?: true
    lastOneByTwo?: true
    lastTwoByTwo?: true
    lastOneByOne?: true
    lastTwoByOne?: true
    lastEvenNumbers?: true
    lastCubeByTwo?: true
    lastCubeByThree?: true
    lastNumberGuesser?: true
    lastLetterMatcher?: true
    lastWordPairs?: true
    lastGreenDot?: true
    numberGuesserFigures?: true
    font?: true
    isUsingChecklist?: true
    isAdmin?: true
    isStudySubject?: true
    schulteLevel?: true
    schulteAdvanceCount?: true
    language?: true
    tested?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    maxWpm?: true
    testSpeed?: true
    currentWpm?: true
    highlightColor?: true
    lastSchulte?: true
    lastSpeedTest?: true
    lastFourByOne?: true
    lastOneByTwo?: true
    lastTwoByTwo?: true
    lastOneByOne?: true
    lastTwoByOne?: true
    lastEvenNumbers?: true
    lastCubeByTwo?: true
    lastCubeByThree?: true
    lastNumberGuesser?: true
    lastLetterMatcher?: true
    lastWordPairs?: true
    lastGreenDot?: true
    numberGuesserFigures?: true
    font?: true
    isUsingChecklist?: true
    isAdmin?: true
    isStudySubject?: true
    schulteLevel?: true
    schulteAdvanceCount?: true
    language?: true
    tested?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    firstName?: true
    lastName?: true
    maxWpm?: true
    testSpeed?: true
    currentWpm?: true
    highlightColor?: true
    lastSchulte?: true
    lastSpeedTest?: true
    lastFourByOne?: true
    lastOneByTwo?: true
    lastTwoByTwo?: true
    lastOneByOne?: true
    lastTwoByOne?: true
    lastEvenNumbers?: true
    lastCubeByTwo?: true
    lastCubeByThree?: true
    lastNumberGuesser?: true
    lastLetterMatcher?: true
    lastWordPairs?: true
    lastGreenDot?: true
    numberGuesserFigures?: true
    font?: true
    isUsingChecklist?: true
    isAdmin?: true
    isStudySubject?: true
    schulteLevel?: true
    schulteAdvanceCount?: true
    language?: true
    tested?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    maxWpm: number
    testSpeed: number
    currentWpm: number
    highlightColor: Overlay
    lastSchulte: string
    lastSpeedTest: string
    lastFourByOne: string
    lastOneByTwo: string
    lastTwoByTwo: string
    lastOneByOne: string
    lastTwoByOne: string
    lastEvenNumbers: string
    lastCubeByTwo: string
    lastCubeByThree: string
    lastNumberGuesser: string
    lastLetterMatcher: string
    lastWordPairs: string
    lastGreenDot: string
    numberGuesserFigures: number
    font: Font
    isUsingChecklist: boolean
    isAdmin: boolean
    isStudySubject: boolean
    schulteLevel: SchulteType
    schulteAdvanceCount: number
    language: Language
    tested: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    maxWpm?: boolean
    testSpeed?: boolean
    currentWpm?: boolean
    highlightColor?: boolean
    lastSchulte?: boolean
    lastSpeedTest?: boolean
    lastFourByOne?: boolean
    lastOneByTwo?: boolean
    lastTwoByTwo?: boolean
    lastOneByOne?: boolean
    lastTwoByOne?: boolean
    lastEvenNumbers?: boolean
    lastCubeByTwo?: boolean
    lastCubeByThree?: boolean
    lastNumberGuesser?: boolean
    lastLetterMatcher?: boolean
    lastWordPairs?: boolean
    lastGreenDot?: boolean
    numberGuesserFigures?: boolean
    font?: boolean
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: boolean
    schulteAdvanceCount?: boolean
    language?: boolean
    tested?: boolean
    timeTests?: boolean | User$timeTestsArgs<ExtArgs>
    shulteSessions?: boolean | User$shulteSessionsArgs<ExtArgs>
    evenNumberSessions?: boolean | User$evenNumberSessionsArgs<ExtArgs>
    wordGridFlasherSessions?: boolean | User$wordGridFlasherSessionsArgs<ExtArgs>
    wordFlasherSessions?: boolean | User$wordFlasherSessionsArgs<ExtArgs>
    LetterMatcherSessions?: boolean | User$LetterMatcherSessionsArgs<ExtArgs>
    GreenDotSessions?: boolean | User$GreenDotSessionsArgs<ExtArgs>
    NumberGuesserSession?: boolean | User$NumberGuesserSessionArgs<ExtArgs>
    BoxFlasherSession?: boolean | User$BoxFlasherSessionArgs<ExtArgs>
    PairsSession?: boolean | User$PairsSessionArgs<ExtArgs>
    SpeedTestSessions?: boolean | User$SpeedTestSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstName?: boolean
    lastName?: boolean
    maxWpm?: boolean
    testSpeed?: boolean
    currentWpm?: boolean
    highlightColor?: boolean
    lastSchulte?: boolean
    lastSpeedTest?: boolean
    lastFourByOne?: boolean
    lastOneByTwo?: boolean
    lastTwoByTwo?: boolean
    lastOneByOne?: boolean
    lastTwoByOne?: boolean
    lastEvenNumbers?: boolean
    lastCubeByTwo?: boolean
    lastCubeByThree?: boolean
    lastNumberGuesser?: boolean
    lastLetterMatcher?: boolean
    lastWordPairs?: boolean
    lastGreenDot?: boolean
    numberGuesserFigures?: boolean
    font?: boolean
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: boolean
    schulteAdvanceCount?: boolean
    language?: boolean
    tested?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    timeTests?: boolean | User$timeTestsArgs<ExtArgs>
    shulteSessions?: boolean | User$shulteSessionsArgs<ExtArgs>
    evenNumberSessions?: boolean | User$evenNumberSessionsArgs<ExtArgs>
    wordGridFlasherSessions?: boolean | User$wordGridFlasherSessionsArgs<ExtArgs>
    wordFlasherSessions?: boolean | User$wordFlasherSessionsArgs<ExtArgs>
    LetterMatcherSessions?: boolean | User$LetterMatcherSessionsArgs<ExtArgs>
    GreenDotSessions?: boolean | User$GreenDotSessionsArgs<ExtArgs>
    NumberGuesserSession?: boolean | User$NumberGuesserSessionArgs<ExtArgs>
    BoxFlasherSession?: boolean | User$BoxFlasherSessionArgs<ExtArgs>
    PairsSession?: boolean | User$PairsSessionArgs<ExtArgs>
    SpeedTestSessions?: boolean | User$SpeedTestSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    timeTests<T extends User$timeTestsArgs<ExtArgs> = {}>(args?: Subset<T, User$timeTestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findMany', never>| Null>;

    shulteSessions<T extends User$shulteSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$shulteSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    evenNumberSessions<T extends User$evenNumberSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$evenNumberSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    wordGridFlasherSessions<T extends User$wordGridFlasherSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$wordGridFlasherSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    wordFlasherSessions<T extends User$wordFlasherSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$wordFlasherSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    LetterMatcherSessions<T extends User$LetterMatcherSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$LetterMatcherSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    GreenDotSessions<T extends User$GreenDotSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$GreenDotSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    NumberGuesserSession<T extends User$NumberGuesserSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$NumberGuesserSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    BoxFlasherSession<T extends User$BoxFlasherSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$BoxFlasherSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    PairsSession<T extends User$PairsSessionArgs<ExtArgs> = {}>(args?: Subset<T, User$PairsSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    SpeedTestSessions<T extends User$SpeedTestSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$SpeedTestSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.timeTests
   */
  export type User$timeTestsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    where?: TimeTestWhereInput
    orderBy?: Enumerable<TimeTestOrderByWithRelationInput>
    cursor?: TimeTestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TimeTestScalarFieldEnum>
  }


  /**
   * User.shulteSessions
   */
  export type User$shulteSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    where?: SchulteSessionWhereInput
    orderBy?: Enumerable<SchulteSessionOrderByWithRelationInput>
    cursor?: SchulteSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SchulteSessionScalarFieldEnum>
  }


  /**
   * User.evenNumberSessions
   */
  export type User$evenNumberSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    where?: EvenNumberSessionWhereInput
    orderBy?: Enumerable<EvenNumberSessionOrderByWithRelationInput>
    cursor?: EvenNumberSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<EvenNumberSessionScalarFieldEnum>
  }


  /**
   * User.wordGridFlasherSessions
   */
  export type User$wordGridFlasherSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    where?: HighlightSessionWhereInput
    orderBy?: Enumerable<HighlightSessionOrderByWithRelationInput>
    cursor?: HighlightSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<HighlightSessionScalarFieldEnum>
  }


  /**
   * User.wordFlasherSessions
   */
  export type User$wordFlasherSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    where?: WordFlasherSessionWhereInput
    orderBy?: Enumerable<WordFlasherSessionOrderByWithRelationInput>
    cursor?: WordFlasherSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WordFlasherSessionScalarFieldEnum>
  }


  /**
   * User.LetterMatcherSessions
   */
  export type User$LetterMatcherSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    where?: LetterMatcherSessionWhereInput
    orderBy?: Enumerable<LetterMatcherSessionOrderByWithRelationInput>
    cursor?: LetterMatcherSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LetterMatcherSessionScalarFieldEnum>
  }


  /**
   * User.GreenDotSessions
   */
  export type User$GreenDotSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    where?: GreenDotSessionWhereInput
    orderBy?: Enumerable<GreenDotSessionOrderByWithRelationInput>
    cursor?: GreenDotSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GreenDotSessionScalarFieldEnum>
  }


  /**
   * User.NumberGuesserSession
   */
  export type User$NumberGuesserSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    where?: NumberGuesserSessionWhereInput
    orderBy?: Enumerable<NumberGuesserSessionOrderByWithRelationInput>
    cursor?: NumberGuesserSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<NumberGuesserSessionScalarFieldEnum>
  }


  /**
   * User.BoxFlasherSession
   */
  export type User$BoxFlasherSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    where?: BoxFlasherSessionWhereInput
    orderBy?: Enumerable<BoxFlasherSessionOrderByWithRelationInput>
    cursor?: BoxFlasherSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<BoxFlasherSessionScalarFieldEnum>
  }


  /**
   * User.PairsSession
   */
  export type User$PairsSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    where?: PairsSessionWhereInput
    orderBy?: Enumerable<PairsSessionOrderByWithRelationInput>
    cursor?: PairsSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PairsSessionScalarFieldEnum>
  }


  /**
   * User.SpeedTestSessions
   */
  export type User$SpeedTestSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    where?: SpeedTestSessionWhereInput
    orderBy?: Enumerable<SpeedTestSessionOrderByWithRelationInput>
    cursor?: SpeedTestSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SpeedTestSessionScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model TimeTest
   */


  export type AggregateTimeTest = {
    _count: TimeTestCountAggregateOutputType | null
    _avg: TimeTestAvgAggregateOutputType | null
    _sum: TimeTestSumAggregateOutputType | null
    _min: TimeTestMinAggregateOutputType | null
    _max: TimeTestMaxAggregateOutputType | null
  }

  export type TimeTestAvgAggregateOutputType = {
    highScore: number | null
    lowScore: number | null
    accuracy: number | null
  }

  export type TimeTestSumAggregateOutputType = {
    highScore: number | null
    lowScore: number | null
    accuracy: number | null
  }

  export type TimeTestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    CreatedAt: Date | null
    highScore: number | null
    lowScore: number | null
    accuracy: number | null
  }

  export type TimeTestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    sessionId: string | null
    CreatedAt: Date | null
    highScore: number | null
    lowScore: number | null
    accuracy: number | null
  }

  export type TimeTestCountAggregateOutputType = {
    id: number
    userId: number
    sessionId: number
    CreatedAt: number
    highScore: number
    lowScore: number
    accuracy: number
    _all: number
  }


  export type TimeTestAvgAggregateInputType = {
    highScore?: true
    lowScore?: true
    accuracy?: true
  }

  export type TimeTestSumAggregateInputType = {
    highScore?: true
    lowScore?: true
    accuracy?: true
  }

  export type TimeTestMinAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    CreatedAt?: true
    highScore?: true
    lowScore?: true
    accuracy?: true
  }

  export type TimeTestMaxAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    CreatedAt?: true
    highScore?: true
    lowScore?: true
    accuracy?: true
  }

  export type TimeTestCountAggregateInputType = {
    id?: true
    userId?: true
    sessionId?: true
    CreatedAt?: true
    highScore?: true
    lowScore?: true
    accuracy?: true
    _all?: true
  }

  export type TimeTestAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeTest to aggregate.
     */
    where?: TimeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeTests to fetch.
     */
    orderBy?: Enumerable<TimeTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TimeTests
    **/
    _count?: true | TimeTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeTestMaxAggregateInputType
  }

  export type GetTimeTestAggregateType<T extends TimeTestAggregateArgs> = {
        [P in keyof T & keyof AggregateTimeTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimeTest[P]>
      : GetScalarType<T[P], AggregateTimeTest[P]>
  }




  export type TimeTestGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TimeTestWhereInput
    orderBy?: Enumerable<TimeTestOrderByWithAggregationInput>
    by: TimeTestScalarFieldEnum[]
    having?: TimeTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeTestCountAggregateInputType | true
    _avg?: TimeTestAvgAggregateInputType
    _sum?: TimeTestSumAggregateInputType
    _min?: TimeTestMinAggregateInputType
    _max?: TimeTestMaxAggregateInputType
  }


  export type TimeTestGroupByOutputType = {
    id: string
    userId: string
    sessionId: string
    CreatedAt: Date
    highScore: number
    lowScore: number
    accuracy: number
    _count: TimeTestCountAggregateOutputType | null
    _avg: TimeTestAvgAggregateOutputType | null
    _sum: TimeTestSumAggregateOutputType | null
    _min: TimeTestMinAggregateOutputType | null
    _max: TimeTestMaxAggregateOutputType | null
  }

  type GetTimeTestGroupByPayload<T extends TimeTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TimeTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeTestGroupByOutputType[P]>
            : GetScalarType<T[P], TimeTestGroupByOutputType[P]>
        }
      >
    >


  export type TimeTestSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    CreatedAt?: boolean
    highScore?: boolean
    lowScore?: boolean
    accuracy?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["timeTest"]>

  export type TimeTestSelectScalar = {
    id?: boolean
    userId?: boolean
    sessionId?: boolean
    CreatedAt?: boolean
    highScore?: boolean
    lowScore?: boolean
    accuracy?: boolean
  }

  export type TimeTestInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type TimeTestGetPayload<S extends boolean | null | undefined | TimeTestArgs> = $Types.GetResult<TimeTestPayload, S>

  type TimeTestCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TimeTestFindManyArgs, 'select' | 'include'> & {
      select?: TimeTestCountAggregateInputType | true
    }

  export interface TimeTestDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TimeTest'], meta: { name: 'TimeTest' } }
    /**
     * Find zero or one TimeTest that matches the filter.
     * @param {TimeTestFindUniqueArgs} args - Arguments to find a TimeTest
     * @example
     * // Get one TimeTest
     * const timeTest = await prisma.timeTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TimeTestFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TimeTestFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TimeTest'> extends True ? Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one TimeTest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TimeTestFindUniqueOrThrowArgs} args - Arguments to find a TimeTest
     * @example
     * // Get one TimeTest
     * const timeTest = await prisma.timeTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TimeTestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeTestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first TimeTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestFindFirstArgs} args - Arguments to find a TimeTest
     * @example
     * // Get one TimeTest
     * const timeTest = await prisma.timeTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TimeTestFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TimeTestFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TimeTest'> extends True ? Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first TimeTest that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestFindFirstOrThrowArgs} args - Arguments to find a TimeTest
     * @example
     * // Get one TimeTest
     * const timeTest = await prisma.timeTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TimeTestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeTestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more TimeTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TimeTests
     * const timeTests = await prisma.timeTest.findMany()
     * 
     * // Get first 10 TimeTests
     * const timeTests = await prisma.timeTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const timeTestWithIdOnly = await prisma.timeTest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TimeTestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeTestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a TimeTest.
     * @param {TimeTestCreateArgs} args - Arguments to create a TimeTest.
     * @example
     * // Create one TimeTest
     * const TimeTest = await prisma.timeTest.create({
     *   data: {
     *     // ... data to create a TimeTest
     *   }
     * })
     * 
    **/
    create<T extends TimeTestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TimeTestCreateArgs<ExtArgs>>
    ): Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many TimeTests.
     *     @param {TimeTestCreateManyArgs} args - Arguments to create many TimeTests.
     *     @example
     *     // Create many TimeTests
     *     const timeTest = await prisma.timeTest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TimeTestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeTestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TimeTest.
     * @param {TimeTestDeleteArgs} args - Arguments to delete one TimeTest.
     * @example
     * // Delete one TimeTest
     * const TimeTest = await prisma.timeTest.delete({
     *   where: {
     *     // ... filter to delete one TimeTest
     *   }
     * })
     * 
    **/
    delete<T extends TimeTestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TimeTestDeleteArgs<ExtArgs>>
    ): Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one TimeTest.
     * @param {TimeTestUpdateArgs} args - Arguments to update one TimeTest.
     * @example
     * // Update one TimeTest
     * const timeTest = await prisma.timeTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TimeTestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TimeTestUpdateArgs<ExtArgs>>
    ): Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more TimeTests.
     * @param {TimeTestDeleteManyArgs} args - Arguments to filter TimeTests to delete.
     * @example
     * // Delete a few TimeTests
     * const { count } = await prisma.timeTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TimeTestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TimeTestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TimeTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TimeTests
     * const timeTest = await prisma.timeTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TimeTestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TimeTestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TimeTest.
     * @param {TimeTestUpsertArgs} args - Arguments to update or create a TimeTest.
     * @example
     * // Update or create a TimeTest
     * const timeTest = await prisma.timeTest.upsert({
     *   create: {
     *     // ... data to create a TimeTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TimeTest we want to update
     *   }
     * })
    **/
    upsert<T extends TimeTestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TimeTestUpsertArgs<ExtArgs>>
    ): Prisma__TimeTestClient<$Types.GetResult<TimeTestPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of TimeTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestCountArgs} args - Arguments to filter TimeTests to count.
     * @example
     * // Count the number of TimeTests
     * const count = await prisma.timeTest.count({
     *   where: {
     *     // ... the filter for the TimeTests we want to count
     *   }
     * })
    **/
    count<T extends TimeTestCountArgs>(
      args?: Subset<T, TimeTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TimeTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeTestAggregateArgs>(args: Subset<T, TimeTestAggregateArgs>): Prisma.PrismaPromise<GetTimeTestAggregateType<T>>

    /**
     * Group by TimeTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeTestGroupByArgs['orderBy'] }
        : { orderBy?: TimeTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TimeTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TimeTestClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TimeTest base type for findUnique actions
   */
  export type TimeTestFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * Filter, which TimeTest to fetch.
     */
    where: TimeTestWhereUniqueInput
  }

  /**
   * TimeTest findUnique
   */
  export interface TimeTestFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TimeTestFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TimeTest findUniqueOrThrow
   */
  export type TimeTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * Filter, which TimeTest to fetch.
     */
    where: TimeTestWhereUniqueInput
  }


  /**
   * TimeTest base type for findFirst actions
   */
  export type TimeTestFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * Filter, which TimeTest to fetch.
     */
    where?: TimeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeTests to fetch.
     */
    orderBy?: Enumerable<TimeTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeTests.
     */
    cursor?: TimeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeTests.
     */
    distinct?: Enumerable<TimeTestScalarFieldEnum>
  }

  /**
   * TimeTest findFirst
   */
  export interface TimeTestFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends TimeTestFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TimeTest findFirstOrThrow
   */
  export type TimeTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * Filter, which TimeTest to fetch.
     */
    where?: TimeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeTests to fetch.
     */
    orderBy?: Enumerable<TimeTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TimeTests.
     */
    cursor?: TimeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TimeTests.
     */
    distinct?: Enumerable<TimeTestScalarFieldEnum>
  }


  /**
   * TimeTest findMany
   */
  export type TimeTestFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * Filter, which TimeTests to fetch.
     */
    where?: TimeTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TimeTests to fetch.
     */
    orderBy?: Enumerable<TimeTestOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TimeTests.
     */
    cursor?: TimeTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TimeTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TimeTests.
     */
    skip?: number
    distinct?: Enumerable<TimeTestScalarFieldEnum>
  }


  /**
   * TimeTest create
   */
  export type TimeTestCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * The data needed to create a TimeTest.
     */
    data: XOR<TimeTestCreateInput, TimeTestUncheckedCreateInput>
  }


  /**
   * TimeTest createMany
   */
  export type TimeTestCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TimeTests.
     */
    data: Enumerable<TimeTestCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TimeTest update
   */
  export type TimeTestUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * The data needed to update a TimeTest.
     */
    data: XOR<TimeTestUpdateInput, TimeTestUncheckedUpdateInput>
    /**
     * Choose, which TimeTest to update.
     */
    where: TimeTestWhereUniqueInput
  }


  /**
   * TimeTest updateMany
   */
  export type TimeTestUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TimeTests.
     */
    data: XOR<TimeTestUpdateManyMutationInput, TimeTestUncheckedUpdateManyInput>
    /**
     * Filter which TimeTests to update
     */
    where?: TimeTestWhereInput
  }


  /**
   * TimeTest upsert
   */
  export type TimeTestUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * The filter to search for the TimeTest to update in case it exists.
     */
    where: TimeTestWhereUniqueInput
    /**
     * In case the TimeTest found by the `where` argument doesn't exist, create a new TimeTest with this data.
     */
    create: XOR<TimeTestCreateInput, TimeTestUncheckedCreateInput>
    /**
     * In case the TimeTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeTestUpdateInput, TimeTestUncheckedUpdateInput>
  }


  /**
   * TimeTest delete
   */
  export type TimeTestDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
    /**
     * Filter which TimeTest to delete.
     */
    where: TimeTestWhereUniqueInput
  }


  /**
   * TimeTest deleteMany
   */
  export type TimeTestDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which TimeTests to delete
     */
    where?: TimeTestWhereInput
  }


  /**
   * TimeTest without action
   */
  export type TimeTestArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TimeTest
     */
    select?: TimeTestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TimeTestInclude<ExtArgs> | null
  }



  /**
   * Model SchulteSession
   */


  export type AggregateSchulteSession = {
    _count: SchulteSessionCountAggregateOutputType | null
    _avg: SchulteSessionAvgAggregateOutputType | null
    _sum: SchulteSessionSumAggregateOutputType | null
    _min: SchulteSessionMinAggregateOutputType | null
    _max: SchulteSessionMaxAggregateOutputType | null
  }

  export type SchulteSessionAvgAggregateOutputType = {
    time: number | null
    errorCount: number | null
  }

  export type SchulteSessionSumAggregateOutputType = {
    time: number | null
    errorCount: number | null
  }

  export type SchulteSessionMinAggregateOutputType = {
    id: string | null
    type: SchulteType | null
    time: number | null
    errorCount: number | null
    userId: string | null
    date: Date | null
    platform: string | null
  }

  export type SchulteSessionMaxAggregateOutputType = {
    id: string | null
    type: SchulteType | null
    time: number | null
    errorCount: number | null
    userId: string | null
    date: Date | null
    platform: string | null
  }

  export type SchulteSessionCountAggregateOutputType = {
    id: number
    type: number
    time: number
    errorCount: number
    userId: number
    date: number
    platform: number
    _all: number
  }


  export type SchulteSessionAvgAggregateInputType = {
    time?: true
    errorCount?: true
  }

  export type SchulteSessionSumAggregateInputType = {
    time?: true
    errorCount?: true
  }

  export type SchulteSessionMinAggregateInputType = {
    id?: true
    type?: true
    time?: true
    errorCount?: true
    userId?: true
    date?: true
    platform?: true
  }

  export type SchulteSessionMaxAggregateInputType = {
    id?: true
    type?: true
    time?: true
    errorCount?: true
    userId?: true
    date?: true
    platform?: true
  }

  export type SchulteSessionCountAggregateInputType = {
    id?: true
    type?: true
    time?: true
    errorCount?: true
    userId?: true
    date?: true
    platform?: true
    _all?: true
  }

  export type SchulteSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchulteSession to aggregate.
     */
    where?: SchulteSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchulteSessions to fetch.
     */
    orderBy?: Enumerable<SchulteSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchulteSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchulteSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchulteSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchulteSessions
    **/
    _count?: true | SchulteSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchulteSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchulteSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchulteSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchulteSessionMaxAggregateInputType
  }

  export type GetSchulteSessionAggregateType<T extends SchulteSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSchulteSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchulteSession[P]>
      : GetScalarType<T[P], AggregateSchulteSession[P]>
  }




  export type SchulteSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SchulteSessionWhereInput
    orderBy?: Enumerable<SchulteSessionOrderByWithAggregationInput>
    by: SchulteSessionScalarFieldEnum[]
    having?: SchulteSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchulteSessionCountAggregateInputType | true
    _avg?: SchulteSessionAvgAggregateInputType
    _sum?: SchulteSessionSumAggregateInputType
    _min?: SchulteSessionMinAggregateInputType
    _max?: SchulteSessionMaxAggregateInputType
  }


  export type SchulteSessionGroupByOutputType = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    userId: string
    date: Date
    platform: string
    _count: SchulteSessionCountAggregateOutputType | null
    _avg: SchulteSessionAvgAggregateOutputType | null
    _sum: SchulteSessionSumAggregateOutputType | null
    _min: SchulteSessionMinAggregateOutputType | null
    _max: SchulteSessionMaxAggregateOutputType | null
  }

  type GetSchulteSessionGroupByPayload<T extends SchulteSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SchulteSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchulteSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchulteSessionGroupByOutputType[P]>
            : GetScalarType<T[P], SchulteSessionGroupByOutputType[P]>
        }
      >
    >


  export type SchulteSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    time?: boolean
    errorCount?: boolean
    userId?: boolean
    date?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["schulteSession"]>

  export type SchulteSessionSelectScalar = {
    id?: boolean
    type?: boolean
    time?: boolean
    errorCount?: boolean
    userId?: boolean
    date?: boolean
    platform?: boolean
  }

  export type SchulteSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type SchulteSessionGetPayload<S extends boolean | null | undefined | SchulteSessionArgs> = $Types.GetResult<SchulteSessionPayload, S>

  type SchulteSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SchulteSessionFindManyArgs, 'select' | 'include'> & {
      select?: SchulteSessionCountAggregateInputType | true
    }

  export interface SchulteSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchulteSession'], meta: { name: 'SchulteSession' } }
    /**
     * Find zero or one SchulteSession that matches the filter.
     * @param {SchulteSessionFindUniqueArgs} args - Arguments to find a SchulteSession
     * @example
     * // Get one SchulteSession
     * const schulteSession = await prisma.schulteSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SchulteSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SchulteSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SchulteSession'> extends True ? Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SchulteSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SchulteSessionFindUniqueOrThrowArgs} args - Arguments to find a SchulteSession
     * @example
     * // Get one SchulteSession
     * const schulteSession = await prisma.schulteSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SchulteSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SchulteSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SchulteSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionFindFirstArgs} args - Arguments to find a SchulteSession
     * @example
     * // Get one SchulteSession
     * const schulteSession = await prisma.schulteSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SchulteSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SchulteSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SchulteSession'> extends True ? Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SchulteSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionFindFirstOrThrowArgs} args - Arguments to find a SchulteSession
     * @example
     * // Get one SchulteSession
     * const schulteSession = await prisma.schulteSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SchulteSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SchulteSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SchulteSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchulteSessions
     * const schulteSessions = await prisma.schulteSession.findMany()
     * 
     * // Get first 10 SchulteSessions
     * const schulteSessions = await prisma.schulteSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schulteSessionWithIdOnly = await prisma.schulteSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SchulteSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SchulteSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SchulteSession.
     * @param {SchulteSessionCreateArgs} args - Arguments to create a SchulteSession.
     * @example
     * // Create one SchulteSession
     * const SchulteSession = await prisma.schulteSession.create({
     *   data: {
     *     // ... data to create a SchulteSession
     *   }
     * })
     * 
    **/
    create<T extends SchulteSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SchulteSessionCreateArgs<ExtArgs>>
    ): Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SchulteSessions.
     *     @param {SchulteSessionCreateManyArgs} args - Arguments to create many SchulteSessions.
     *     @example
     *     // Create many SchulteSessions
     *     const schulteSession = await prisma.schulteSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SchulteSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SchulteSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SchulteSession.
     * @param {SchulteSessionDeleteArgs} args - Arguments to delete one SchulteSession.
     * @example
     * // Delete one SchulteSession
     * const SchulteSession = await prisma.schulteSession.delete({
     *   where: {
     *     // ... filter to delete one SchulteSession
     *   }
     * })
     * 
    **/
    delete<T extends SchulteSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SchulteSessionDeleteArgs<ExtArgs>>
    ): Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SchulteSession.
     * @param {SchulteSessionUpdateArgs} args - Arguments to update one SchulteSession.
     * @example
     * // Update one SchulteSession
     * const schulteSession = await prisma.schulteSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SchulteSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SchulteSessionUpdateArgs<ExtArgs>>
    ): Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SchulteSessions.
     * @param {SchulteSessionDeleteManyArgs} args - Arguments to filter SchulteSessions to delete.
     * @example
     * // Delete a few SchulteSessions
     * const { count } = await prisma.schulteSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SchulteSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SchulteSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchulteSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchulteSessions
     * const schulteSession = await prisma.schulteSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SchulteSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SchulteSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchulteSession.
     * @param {SchulteSessionUpsertArgs} args - Arguments to update or create a SchulteSession.
     * @example
     * // Update or create a SchulteSession
     * const schulteSession = await prisma.schulteSession.upsert({
     *   create: {
     *     // ... data to create a SchulteSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchulteSession we want to update
     *   }
     * })
    **/
    upsert<T extends SchulteSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SchulteSessionUpsertArgs<ExtArgs>>
    ): Prisma__SchulteSessionClient<$Types.GetResult<SchulteSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SchulteSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionCountArgs} args - Arguments to filter SchulteSessions to count.
     * @example
     * // Count the number of SchulteSessions
     * const count = await prisma.schulteSession.count({
     *   where: {
     *     // ... the filter for the SchulteSessions we want to count
     *   }
     * })
    **/
    count<T extends SchulteSessionCountArgs>(
      args?: Subset<T, SchulteSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchulteSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchulteSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SchulteSessionAggregateArgs>(args: Subset<T, SchulteSessionAggregateArgs>): Prisma.PrismaPromise<GetSchulteSessionAggregateType<T>>

    /**
     * Group by SchulteSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchulteSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SchulteSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchulteSessionGroupByArgs['orderBy'] }
        : { orderBy?: SchulteSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SchulteSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchulteSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SchulteSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SchulteSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SchulteSession base type for findUnique actions
   */
  export type SchulteSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * Filter, which SchulteSession to fetch.
     */
    where: SchulteSessionWhereUniqueInput
  }

  /**
   * SchulteSession findUnique
   */
  export interface SchulteSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SchulteSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SchulteSession findUniqueOrThrow
   */
  export type SchulteSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * Filter, which SchulteSession to fetch.
     */
    where: SchulteSessionWhereUniqueInput
  }


  /**
   * SchulteSession base type for findFirst actions
   */
  export type SchulteSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * Filter, which SchulteSession to fetch.
     */
    where?: SchulteSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchulteSessions to fetch.
     */
    orderBy?: Enumerable<SchulteSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchulteSessions.
     */
    cursor?: SchulteSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchulteSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchulteSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchulteSessions.
     */
    distinct?: Enumerable<SchulteSessionScalarFieldEnum>
  }

  /**
   * SchulteSession findFirst
   */
  export interface SchulteSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SchulteSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SchulteSession findFirstOrThrow
   */
  export type SchulteSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * Filter, which SchulteSession to fetch.
     */
    where?: SchulteSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchulteSessions to fetch.
     */
    orderBy?: Enumerable<SchulteSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchulteSessions.
     */
    cursor?: SchulteSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchulteSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchulteSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchulteSessions.
     */
    distinct?: Enumerable<SchulteSessionScalarFieldEnum>
  }


  /**
   * SchulteSession findMany
   */
  export type SchulteSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * Filter, which SchulteSessions to fetch.
     */
    where?: SchulteSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchulteSessions to fetch.
     */
    orderBy?: Enumerable<SchulteSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchulteSessions.
     */
    cursor?: SchulteSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchulteSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchulteSessions.
     */
    skip?: number
    distinct?: Enumerable<SchulteSessionScalarFieldEnum>
  }


  /**
   * SchulteSession create
   */
  export type SchulteSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a SchulteSession.
     */
    data: XOR<SchulteSessionCreateInput, SchulteSessionUncheckedCreateInput>
  }


  /**
   * SchulteSession createMany
   */
  export type SchulteSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchulteSessions.
     */
    data: Enumerable<SchulteSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SchulteSession update
   */
  export type SchulteSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a SchulteSession.
     */
    data: XOR<SchulteSessionUpdateInput, SchulteSessionUncheckedUpdateInput>
    /**
     * Choose, which SchulteSession to update.
     */
    where: SchulteSessionWhereUniqueInput
  }


  /**
   * SchulteSession updateMany
   */
  export type SchulteSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchulteSessions.
     */
    data: XOR<SchulteSessionUpdateManyMutationInput, SchulteSessionUncheckedUpdateManyInput>
    /**
     * Filter which SchulteSessions to update
     */
    where?: SchulteSessionWhereInput
  }


  /**
   * SchulteSession upsert
   */
  export type SchulteSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the SchulteSession to update in case it exists.
     */
    where: SchulteSessionWhereUniqueInput
    /**
     * In case the SchulteSession found by the `where` argument doesn't exist, create a new SchulteSession with this data.
     */
    create: XOR<SchulteSessionCreateInput, SchulteSessionUncheckedCreateInput>
    /**
     * In case the SchulteSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchulteSessionUpdateInput, SchulteSessionUncheckedUpdateInput>
  }


  /**
   * SchulteSession delete
   */
  export type SchulteSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
    /**
     * Filter which SchulteSession to delete.
     */
    where: SchulteSessionWhereUniqueInput
  }


  /**
   * SchulteSession deleteMany
   */
  export type SchulteSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchulteSessions to delete
     */
    where?: SchulteSessionWhereInput
  }


  /**
   * SchulteSession without action
   */
  export type SchulteSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchulteSession
     */
    select?: SchulteSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SchulteSessionInclude<ExtArgs> | null
  }



  /**
   * Model EvenNumberSession
   */


  export type AggregateEvenNumberSession = {
    _count: EvenNumberSessionCountAggregateOutputType | null
    _avg: EvenNumberSessionAvgAggregateOutputType | null
    _sum: EvenNumberSessionSumAggregateOutputType | null
    _min: EvenNumberSessionMinAggregateOutputType | null
    _max: EvenNumberSessionMaxAggregateOutputType | null
  }

  export type EvenNumberSessionAvgAggregateOutputType = {
    errorCount: number | null
    time: number | null
  }

  export type EvenNumberSessionSumAggregateOutputType = {
    errorCount: number | null
    time: number | null
  }

  export type EvenNumberSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    errorCount: number | null
    time: number | null
    date: Date | null
    platform: string | null
  }

  export type EvenNumberSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    errorCount: number | null
    time: number | null
    date: Date | null
    platform: string | null
  }

  export type EvenNumberSessionCountAggregateOutputType = {
    id: number
    userId: number
    errorCount: number
    time: number
    date: number
    platform: number
    _all: number
  }


  export type EvenNumberSessionAvgAggregateInputType = {
    errorCount?: true
    time?: true
  }

  export type EvenNumberSessionSumAggregateInputType = {
    errorCount?: true
    time?: true
  }

  export type EvenNumberSessionMinAggregateInputType = {
    id?: true
    userId?: true
    errorCount?: true
    time?: true
    date?: true
    platform?: true
  }

  export type EvenNumberSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    errorCount?: true
    time?: true
    date?: true
    platform?: true
  }

  export type EvenNumberSessionCountAggregateInputType = {
    id?: true
    userId?: true
    errorCount?: true
    time?: true
    date?: true
    platform?: true
    _all?: true
  }

  export type EvenNumberSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvenNumberSession to aggregate.
     */
    where?: EvenNumberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvenNumberSessions to fetch.
     */
    orderBy?: Enumerable<EvenNumberSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvenNumberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvenNumberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvenNumberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EvenNumberSessions
    **/
    _count?: true | EvenNumberSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvenNumberSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvenNumberSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvenNumberSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvenNumberSessionMaxAggregateInputType
  }

  export type GetEvenNumberSessionAggregateType<T extends EvenNumberSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateEvenNumberSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvenNumberSession[P]>
      : GetScalarType<T[P], AggregateEvenNumberSession[P]>
  }




  export type EvenNumberSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EvenNumberSessionWhereInput
    orderBy?: Enumerable<EvenNumberSessionOrderByWithAggregationInput>
    by: EvenNumberSessionScalarFieldEnum[]
    having?: EvenNumberSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvenNumberSessionCountAggregateInputType | true
    _avg?: EvenNumberSessionAvgAggregateInputType
    _sum?: EvenNumberSessionSumAggregateInputType
    _min?: EvenNumberSessionMinAggregateInputType
    _max?: EvenNumberSessionMaxAggregateInputType
  }


  export type EvenNumberSessionGroupByOutputType = {
    id: string
    userId: string
    errorCount: number
    time: number
    date: Date
    platform: string
    _count: EvenNumberSessionCountAggregateOutputType | null
    _avg: EvenNumberSessionAvgAggregateOutputType | null
    _sum: EvenNumberSessionSumAggregateOutputType | null
    _min: EvenNumberSessionMinAggregateOutputType | null
    _max: EvenNumberSessionMaxAggregateOutputType | null
  }

  type GetEvenNumberSessionGroupByPayload<T extends EvenNumberSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EvenNumberSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvenNumberSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvenNumberSessionGroupByOutputType[P]>
            : GetScalarType<T[P], EvenNumberSessionGroupByOutputType[P]>
        }
      >
    >


  export type EvenNumberSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    errorCount?: boolean
    time?: boolean
    date?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["evenNumberSession"]>

  export type EvenNumberSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    errorCount?: boolean
    time?: boolean
    date?: boolean
    platform?: boolean
  }

  export type EvenNumberSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type EvenNumberSessionGetPayload<S extends boolean | null | undefined | EvenNumberSessionArgs> = $Types.GetResult<EvenNumberSessionPayload, S>

  type EvenNumberSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EvenNumberSessionFindManyArgs, 'select' | 'include'> & {
      select?: EvenNumberSessionCountAggregateInputType | true
    }

  export interface EvenNumberSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EvenNumberSession'], meta: { name: 'EvenNumberSession' } }
    /**
     * Find zero or one EvenNumberSession that matches the filter.
     * @param {EvenNumberSessionFindUniqueArgs} args - Arguments to find a EvenNumberSession
     * @example
     * // Get one EvenNumberSession
     * const evenNumberSession = await prisma.evenNumberSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EvenNumberSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EvenNumberSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'EvenNumberSession'> extends True ? Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one EvenNumberSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EvenNumberSessionFindUniqueOrThrowArgs} args - Arguments to find a EvenNumberSession
     * @example
     * // Get one EvenNumberSession
     * const evenNumberSession = await prisma.evenNumberSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EvenNumberSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EvenNumberSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first EvenNumberSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionFindFirstArgs} args - Arguments to find a EvenNumberSession
     * @example
     * // Get one EvenNumberSession
     * const evenNumberSession = await prisma.evenNumberSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EvenNumberSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EvenNumberSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'EvenNumberSession'> extends True ? Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first EvenNumberSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionFindFirstOrThrowArgs} args - Arguments to find a EvenNumberSession
     * @example
     * // Get one EvenNumberSession
     * const evenNumberSession = await prisma.evenNumberSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EvenNumberSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EvenNumberSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more EvenNumberSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EvenNumberSessions
     * const evenNumberSessions = await prisma.evenNumberSession.findMany()
     * 
     * // Get first 10 EvenNumberSessions
     * const evenNumberSessions = await prisma.evenNumberSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evenNumberSessionWithIdOnly = await prisma.evenNumberSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EvenNumberSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EvenNumberSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a EvenNumberSession.
     * @param {EvenNumberSessionCreateArgs} args - Arguments to create a EvenNumberSession.
     * @example
     * // Create one EvenNumberSession
     * const EvenNumberSession = await prisma.evenNumberSession.create({
     *   data: {
     *     // ... data to create a EvenNumberSession
     *   }
     * })
     * 
    **/
    create<T extends EvenNumberSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EvenNumberSessionCreateArgs<ExtArgs>>
    ): Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many EvenNumberSessions.
     *     @param {EvenNumberSessionCreateManyArgs} args - Arguments to create many EvenNumberSessions.
     *     @example
     *     // Create many EvenNumberSessions
     *     const evenNumberSession = await prisma.evenNumberSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EvenNumberSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EvenNumberSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EvenNumberSession.
     * @param {EvenNumberSessionDeleteArgs} args - Arguments to delete one EvenNumberSession.
     * @example
     * // Delete one EvenNumberSession
     * const EvenNumberSession = await prisma.evenNumberSession.delete({
     *   where: {
     *     // ... filter to delete one EvenNumberSession
     *   }
     * })
     * 
    **/
    delete<T extends EvenNumberSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EvenNumberSessionDeleteArgs<ExtArgs>>
    ): Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one EvenNumberSession.
     * @param {EvenNumberSessionUpdateArgs} args - Arguments to update one EvenNumberSession.
     * @example
     * // Update one EvenNumberSession
     * const evenNumberSession = await prisma.evenNumberSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EvenNumberSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EvenNumberSessionUpdateArgs<ExtArgs>>
    ): Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more EvenNumberSessions.
     * @param {EvenNumberSessionDeleteManyArgs} args - Arguments to filter EvenNumberSessions to delete.
     * @example
     * // Delete a few EvenNumberSessions
     * const { count } = await prisma.evenNumberSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EvenNumberSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EvenNumberSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EvenNumberSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EvenNumberSessions
     * const evenNumberSession = await prisma.evenNumberSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EvenNumberSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EvenNumberSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EvenNumberSession.
     * @param {EvenNumberSessionUpsertArgs} args - Arguments to update or create a EvenNumberSession.
     * @example
     * // Update or create a EvenNumberSession
     * const evenNumberSession = await prisma.evenNumberSession.upsert({
     *   create: {
     *     // ... data to create a EvenNumberSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EvenNumberSession we want to update
     *   }
     * })
    **/
    upsert<T extends EvenNumberSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EvenNumberSessionUpsertArgs<ExtArgs>>
    ): Prisma__EvenNumberSessionClient<$Types.GetResult<EvenNumberSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of EvenNumberSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionCountArgs} args - Arguments to filter EvenNumberSessions to count.
     * @example
     * // Count the number of EvenNumberSessions
     * const count = await prisma.evenNumberSession.count({
     *   where: {
     *     // ... the filter for the EvenNumberSessions we want to count
     *   }
     * })
    **/
    count<T extends EvenNumberSessionCountArgs>(
      args?: Subset<T, EvenNumberSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvenNumberSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EvenNumberSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvenNumberSessionAggregateArgs>(args: Subset<T, EvenNumberSessionAggregateArgs>): Prisma.PrismaPromise<GetEvenNumberSessionAggregateType<T>>

    /**
     * Group by EvenNumberSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvenNumberSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvenNumberSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvenNumberSessionGroupByArgs['orderBy'] }
        : { orderBy?: EvenNumberSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvenNumberSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvenNumberSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for EvenNumberSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EvenNumberSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * EvenNumberSession base type for findUnique actions
   */
  export type EvenNumberSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * Filter, which EvenNumberSession to fetch.
     */
    where: EvenNumberSessionWhereUniqueInput
  }

  /**
   * EvenNumberSession findUnique
   */
  export interface EvenNumberSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EvenNumberSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EvenNumberSession findUniqueOrThrow
   */
  export type EvenNumberSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * Filter, which EvenNumberSession to fetch.
     */
    where: EvenNumberSessionWhereUniqueInput
  }


  /**
   * EvenNumberSession base type for findFirst actions
   */
  export type EvenNumberSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * Filter, which EvenNumberSession to fetch.
     */
    where?: EvenNumberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvenNumberSessions to fetch.
     */
    orderBy?: Enumerable<EvenNumberSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvenNumberSessions.
     */
    cursor?: EvenNumberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvenNumberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvenNumberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvenNumberSessions.
     */
    distinct?: Enumerable<EvenNumberSessionScalarFieldEnum>
  }

  /**
   * EvenNumberSession findFirst
   */
  export interface EvenNumberSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends EvenNumberSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * EvenNumberSession findFirstOrThrow
   */
  export type EvenNumberSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * Filter, which EvenNumberSession to fetch.
     */
    where?: EvenNumberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvenNumberSessions to fetch.
     */
    orderBy?: Enumerable<EvenNumberSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EvenNumberSessions.
     */
    cursor?: EvenNumberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvenNumberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvenNumberSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EvenNumberSessions.
     */
    distinct?: Enumerable<EvenNumberSessionScalarFieldEnum>
  }


  /**
   * EvenNumberSession findMany
   */
  export type EvenNumberSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * Filter, which EvenNumberSessions to fetch.
     */
    where?: EvenNumberSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EvenNumberSessions to fetch.
     */
    orderBy?: Enumerable<EvenNumberSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EvenNumberSessions.
     */
    cursor?: EvenNumberSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EvenNumberSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EvenNumberSessions.
     */
    skip?: number
    distinct?: Enumerable<EvenNumberSessionScalarFieldEnum>
  }


  /**
   * EvenNumberSession create
   */
  export type EvenNumberSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a EvenNumberSession.
     */
    data: XOR<EvenNumberSessionCreateInput, EvenNumberSessionUncheckedCreateInput>
  }


  /**
   * EvenNumberSession createMany
   */
  export type EvenNumberSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EvenNumberSessions.
     */
    data: Enumerable<EvenNumberSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * EvenNumberSession update
   */
  export type EvenNumberSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a EvenNumberSession.
     */
    data: XOR<EvenNumberSessionUpdateInput, EvenNumberSessionUncheckedUpdateInput>
    /**
     * Choose, which EvenNumberSession to update.
     */
    where: EvenNumberSessionWhereUniqueInput
  }


  /**
   * EvenNumberSession updateMany
   */
  export type EvenNumberSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EvenNumberSessions.
     */
    data: XOR<EvenNumberSessionUpdateManyMutationInput, EvenNumberSessionUncheckedUpdateManyInput>
    /**
     * Filter which EvenNumberSessions to update
     */
    where?: EvenNumberSessionWhereInput
  }


  /**
   * EvenNumberSession upsert
   */
  export type EvenNumberSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the EvenNumberSession to update in case it exists.
     */
    where: EvenNumberSessionWhereUniqueInput
    /**
     * In case the EvenNumberSession found by the `where` argument doesn't exist, create a new EvenNumberSession with this data.
     */
    create: XOR<EvenNumberSessionCreateInput, EvenNumberSessionUncheckedCreateInput>
    /**
     * In case the EvenNumberSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvenNumberSessionUpdateInput, EvenNumberSessionUncheckedUpdateInput>
  }


  /**
   * EvenNumberSession delete
   */
  export type EvenNumberSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
    /**
     * Filter which EvenNumberSession to delete.
     */
    where: EvenNumberSessionWhereUniqueInput
  }


  /**
   * EvenNumberSession deleteMany
   */
  export type EvenNumberSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which EvenNumberSessions to delete
     */
    where?: EvenNumberSessionWhereInput
  }


  /**
   * EvenNumberSession without action
   */
  export type EvenNumberSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EvenNumberSession
     */
    select?: EvenNumberSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EvenNumberSessionInclude<ExtArgs> | null
  }



  /**
   * Model HighlightSession
   */


  export type AggregateHighlightSession = {
    _count: HighlightSessionCountAggregateOutputType | null
    _avg: HighlightSessionAvgAggregateOutputType | null
    _sum: HighlightSessionSumAggregateOutputType | null
    _min: HighlightSessionMinAggregateOutputType | null
    _max: HighlightSessionMaxAggregateOutputType | null
  }

  export type HighlightSessionAvgAggregateOutputType = {
    speed: number | null
  }

  export type HighlightSessionSumAggregateOutputType = {
    speed: number | null
  }

  export type HighlightSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    speed: number | null
    date: Date | null
    type: HighlightType | null
    platform: string | null
  }

  export type HighlightSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    speed: number | null
    date: Date | null
    type: HighlightType | null
    platform: string | null
  }

  export type HighlightSessionCountAggregateOutputType = {
    id: number
    userId: number
    speed: number
    date: number
    type: number
    platform: number
    _all: number
  }


  export type HighlightSessionAvgAggregateInputType = {
    speed?: true
  }

  export type HighlightSessionSumAggregateInputType = {
    speed?: true
  }

  export type HighlightSessionMinAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
  }

  export type HighlightSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
  }

  export type HighlightSessionCountAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
    _all?: true
  }

  export type HighlightSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightSession to aggregate.
     */
    where?: HighlightSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightSessions to fetch.
     */
    orderBy?: Enumerable<HighlightSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HighlightSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HighlightSessions
    **/
    _count?: true | HighlightSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HighlightSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HighlightSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HighlightSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HighlightSessionMaxAggregateInputType
  }

  export type GetHighlightSessionAggregateType<T extends HighlightSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateHighlightSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHighlightSession[P]>
      : GetScalarType<T[P], AggregateHighlightSession[P]>
  }




  export type HighlightSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: HighlightSessionWhereInput
    orderBy?: Enumerable<HighlightSessionOrderByWithAggregationInput>
    by: HighlightSessionScalarFieldEnum[]
    having?: HighlightSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HighlightSessionCountAggregateInputType | true
    _avg?: HighlightSessionAvgAggregateInputType
    _sum?: HighlightSessionSumAggregateInputType
    _min?: HighlightSessionMinAggregateInputType
    _max?: HighlightSessionMaxAggregateInputType
  }


  export type HighlightSessionGroupByOutputType = {
    id: string
    userId: string
    speed: number
    date: Date
    type: HighlightType
    platform: string
    _count: HighlightSessionCountAggregateOutputType | null
    _avg: HighlightSessionAvgAggregateOutputType | null
    _sum: HighlightSessionSumAggregateOutputType | null
    _min: HighlightSessionMinAggregateOutputType | null
    _max: HighlightSessionMaxAggregateOutputType | null
  }

  type GetHighlightSessionGroupByPayload<T extends HighlightSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HighlightSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HighlightSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HighlightSessionGroupByOutputType[P]>
            : GetScalarType<T[P], HighlightSessionGroupByOutputType[P]>
        }
      >
    >


  export type HighlightSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    speed?: boolean
    date?: boolean
    type?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["highlightSession"]>

  export type HighlightSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    speed?: boolean
    date?: boolean
    type?: boolean
    platform?: boolean
  }

  export type HighlightSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type HighlightSessionGetPayload<S extends boolean | null | undefined | HighlightSessionArgs> = $Types.GetResult<HighlightSessionPayload, S>

  type HighlightSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<HighlightSessionFindManyArgs, 'select' | 'include'> & {
      select?: HighlightSessionCountAggregateInputType | true
    }

  export interface HighlightSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HighlightSession'], meta: { name: 'HighlightSession' } }
    /**
     * Find zero or one HighlightSession that matches the filter.
     * @param {HighlightSessionFindUniqueArgs} args - Arguments to find a HighlightSession
     * @example
     * // Get one HighlightSession
     * const highlightSession = await prisma.highlightSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HighlightSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HighlightSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'HighlightSession'> extends True ? Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one HighlightSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HighlightSessionFindUniqueOrThrowArgs} args - Arguments to find a HighlightSession
     * @example
     * // Get one HighlightSession
     * const highlightSession = await prisma.highlightSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HighlightSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HighlightSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first HighlightSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionFindFirstArgs} args - Arguments to find a HighlightSession
     * @example
     * // Get one HighlightSession
     * const highlightSession = await prisma.highlightSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HighlightSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HighlightSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'HighlightSession'> extends True ? Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first HighlightSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionFindFirstOrThrowArgs} args - Arguments to find a HighlightSession
     * @example
     * // Get one HighlightSession
     * const highlightSession = await prisma.highlightSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HighlightSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HighlightSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more HighlightSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HighlightSessions
     * const highlightSessions = await prisma.highlightSession.findMany()
     * 
     * // Get first 10 HighlightSessions
     * const highlightSessions = await prisma.highlightSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const highlightSessionWithIdOnly = await prisma.highlightSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HighlightSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HighlightSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a HighlightSession.
     * @param {HighlightSessionCreateArgs} args - Arguments to create a HighlightSession.
     * @example
     * // Create one HighlightSession
     * const HighlightSession = await prisma.highlightSession.create({
     *   data: {
     *     // ... data to create a HighlightSession
     *   }
     * })
     * 
    **/
    create<T extends HighlightSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HighlightSessionCreateArgs<ExtArgs>>
    ): Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many HighlightSessions.
     *     @param {HighlightSessionCreateManyArgs} args - Arguments to create many HighlightSessions.
     *     @example
     *     // Create many HighlightSessions
     *     const highlightSession = await prisma.highlightSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HighlightSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HighlightSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HighlightSession.
     * @param {HighlightSessionDeleteArgs} args - Arguments to delete one HighlightSession.
     * @example
     * // Delete one HighlightSession
     * const HighlightSession = await prisma.highlightSession.delete({
     *   where: {
     *     // ... filter to delete one HighlightSession
     *   }
     * })
     * 
    **/
    delete<T extends HighlightSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HighlightSessionDeleteArgs<ExtArgs>>
    ): Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one HighlightSession.
     * @param {HighlightSessionUpdateArgs} args - Arguments to update one HighlightSession.
     * @example
     * // Update one HighlightSession
     * const highlightSession = await prisma.highlightSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HighlightSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HighlightSessionUpdateArgs<ExtArgs>>
    ): Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more HighlightSessions.
     * @param {HighlightSessionDeleteManyArgs} args - Arguments to filter HighlightSessions to delete.
     * @example
     * // Delete a few HighlightSessions
     * const { count } = await prisma.highlightSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HighlightSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HighlightSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HighlightSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HighlightSessions
     * const highlightSession = await prisma.highlightSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HighlightSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HighlightSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HighlightSession.
     * @param {HighlightSessionUpsertArgs} args - Arguments to update or create a HighlightSession.
     * @example
     * // Update or create a HighlightSession
     * const highlightSession = await prisma.highlightSession.upsert({
     *   create: {
     *     // ... data to create a HighlightSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HighlightSession we want to update
     *   }
     * })
    **/
    upsert<T extends HighlightSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HighlightSessionUpsertArgs<ExtArgs>>
    ): Prisma__HighlightSessionClient<$Types.GetResult<HighlightSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of HighlightSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionCountArgs} args - Arguments to filter HighlightSessions to count.
     * @example
     * // Count the number of HighlightSessions
     * const count = await prisma.highlightSession.count({
     *   where: {
     *     // ... the filter for the HighlightSessions we want to count
     *   }
     * })
    **/
    count<T extends HighlightSessionCountArgs>(
      args?: Subset<T, HighlightSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HighlightSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HighlightSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HighlightSessionAggregateArgs>(args: Subset<T, HighlightSessionAggregateArgs>): Prisma.PrismaPromise<GetHighlightSessionAggregateType<T>>

    /**
     * Group by HighlightSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HighlightSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HighlightSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HighlightSessionGroupByArgs['orderBy'] }
        : { orderBy?: HighlightSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HighlightSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHighlightSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for HighlightSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HighlightSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * HighlightSession base type for findUnique actions
   */
  export type HighlightSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * Filter, which HighlightSession to fetch.
     */
    where: HighlightSessionWhereUniqueInput
  }

  /**
   * HighlightSession findUnique
   */
  export interface HighlightSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends HighlightSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HighlightSession findUniqueOrThrow
   */
  export type HighlightSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * Filter, which HighlightSession to fetch.
     */
    where: HighlightSessionWhereUniqueInput
  }


  /**
   * HighlightSession base type for findFirst actions
   */
  export type HighlightSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * Filter, which HighlightSession to fetch.
     */
    where?: HighlightSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightSessions to fetch.
     */
    orderBy?: Enumerable<HighlightSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightSessions.
     */
    cursor?: HighlightSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightSessions.
     */
    distinct?: Enumerable<HighlightSessionScalarFieldEnum>
  }

  /**
   * HighlightSession findFirst
   */
  export interface HighlightSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends HighlightSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * HighlightSession findFirstOrThrow
   */
  export type HighlightSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * Filter, which HighlightSession to fetch.
     */
    where?: HighlightSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightSessions to fetch.
     */
    orderBy?: Enumerable<HighlightSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HighlightSessions.
     */
    cursor?: HighlightSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HighlightSessions.
     */
    distinct?: Enumerable<HighlightSessionScalarFieldEnum>
  }


  /**
   * HighlightSession findMany
   */
  export type HighlightSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * Filter, which HighlightSessions to fetch.
     */
    where?: HighlightSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HighlightSessions to fetch.
     */
    orderBy?: Enumerable<HighlightSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HighlightSessions.
     */
    cursor?: HighlightSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HighlightSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HighlightSessions.
     */
    skip?: number
    distinct?: Enumerable<HighlightSessionScalarFieldEnum>
  }


  /**
   * HighlightSession create
   */
  export type HighlightSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a HighlightSession.
     */
    data: XOR<HighlightSessionCreateInput, HighlightSessionUncheckedCreateInput>
  }


  /**
   * HighlightSession createMany
   */
  export type HighlightSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HighlightSessions.
     */
    data: Enumerable<HighlightSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * HighlightSession update
   */
  export type HighlightSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a HighlightSession.
     */
    data: XOR<HighlightSessionUpdateInput, HighlightSessionUncheckedUpdateInput>
    /**
     * Choose, which HighlightSession to update.
     */
    where: HighlightSessionWhereUniqueInput
  }


  /**
   * HighlightSession updateMany
   */
  export type HighlightSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HighlightSessions.
     */
    data: XOR<HighlightSessionUpdateManyMutationInput, HighlightSessionUncheckedUpdateManyInput>
    /**
     * Filter which HighlightSessions to update
     */
    where?: HighlightSessionWhereInput
  }


  /**
   * HighlightSession upsert
   */
  export type HighlightSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the HighlightSession to update in case it exists.
     */
    where: HighlightSessionWhereUniqueInput
    /**
     * In case the HighlightSession found by the `where` argument doesn't exist, create a new HighlightSession with this data.
     */
    create: XOR<HighlightSessionCreateInput, HighlightSessionUncheckedCreateInput>
    /**
     * In case the HighlightSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HighlightSessionUpdateInput, HighlightSessionUncheckedUpdateInput>
  }


  /**
   * HighlightSession delete
   */
  export type HighlightSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
    /**
     * Filter which HighlightSession to delete.
     */
    where: HighlightSessionWhereUniqueInput
  }


  /**
   * HighlightSession deleteMany
   */
  export type HighlightSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which HighlightSessions to delete
     */
    where?: HighlightSessionWhereInput
  }


  /**
   * HighlightSession without action
   */
  export type HighlightSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HighlightSession
     */
    select?: HighlightSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HighlightSessionInclude<ExtArgs> | null
  }



  /**
   * Model NumberGuesserSession
   */


  export type AggregateNumberGuesserSession = {
    _count: NumberGuesserSessionCountAggregateOutputType | null
    _avg: NumberGuesserSessionAvgAggregateOutputType | null
    _sum: NumberGuesserSessionSumAggregateOutputType | null
    _min: NumberGuesserSessionMinAggregateOutputType | null
    _max: NumberGuesserSessionMaxAggregateOutputType | null
  }

  export type NumberGuesserSessionAvgAggregateOutputType = {
    numberCorrect: number | null
    numberWrong: number | null
    longestStreak: number | null
    figuresAtStart: number | null
    figuresAtEnd: number | null
  }

  export type NumberGuesserSessionSumAggregateOutputType = {
    numberCorrect: number | null
    numberWrong: number | null
    longestStreak: number | null
    figuresAtStart: number | null
    figuresAtEnd: number | null
  }

  export type NumberGuesserSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    numberCorrect: number | null
    numberWrong: number | null
    longestStreak: number | null
    figuresAtStart: number | null
    figuresAtEnd: number | null
    date: Date | null
    platform: string | null
  }

  export type NumberGuesserSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    numberCorrect: number | null
    numberWrong: number | null
    longestStreak: number | null
    figuresAtStart: number | null
    figuresAtEnd: number | null
    date: Date | null
    platform: string | null
  }

  export type NumberGuesserSessionCountAggregateOutputType = {
    id: number
    userId: number
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: number
    platform: number
    _all: number
  }


  export type NumberGuesserSessionAvgAggregateInputType = {
    numberCorrect?: true
    numberWrong?: true
    longestStreak?: true
    figuresAtStart?: true
    figuresAtEnd?: true
  }

  export type NumberGuesserSessionSumAggregateInputType = {
    numberCorrect?: true
    numberWrong?: true
    longestStreak?: true
    figuresAtStart?: true
    figuresAtEnd?: true
  }

  export type NumberGuesserSessionMinAggregateInputType = {
    id?: true
    userId?: true
    numberCorrect?: true
    numberWrong?: true
    longestStreak?: true
    figuresAtStart?: true
    figuresAtEnd?: true
    date?: true
    platform?: true
  }

  export type NumberGuesserSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    numberCorrect?: true
    numberWrong?: true
    longestStreak?: true
    figuresAtStart?: true
    figuresAtEnd?: true
    date?: true
    platform?: true
  }

  export type NumberGuesserSessionCountAggregateInputType = {
    id?: true
    userId?: true
    numberCorrect?: true
    numberWrong?: true
    longestStreak?: true
    figuresAtStart?: true
    figuresAtEnd?: true
    date?: true
    platform?: true
    _all?: true
  }

  export type NumberGuesserSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberGuesserSession to aggregate.
     */
    where?: NumberGuesserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberGuesserSessions to fetch.
     */
    orderBy?: Enumerable<NumberGuesserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumberGuesserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberGuesserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberGuesserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NumberGuesserSessions
    **/
    _count?: true | NumberGuesserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumberGuesserSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumberGuesserSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumberGuesserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumberGuesserSessionMaxAggregateInputType
  }

  export type GetNumberGuesserSessionAggregateType<T extends NumberGuesserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateNumberGuesserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumberGuesserSession[P]>
      : GetScalarType<T[P], AggregateNumberGuesserSession[P]>
  }




  export type NumberGuesserSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: NumberGuesserSessionWhereInput
    orderBy?: Enumerable<NumberGuesserSessionOrderByWithAggregationInput>
    by: NumberGuesserSessionScalarFieldEnum[]
    having?: NumberGuesserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumberGuesserSessionCountAggregateInputType | true
    _avg?: NumberGuesserSessionAvgAggregateInputType
    _sum?: NumberGuesserSessionSumAggregateInputType
    _min?: NumberGuesserSessionMinAggregateInputType
    _max?: NumberGuesserSessionMaxAggregateInputType
  }


  export type NumberGuesserSessionGroupByOutputType = {
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date
    platform: string
    _count: NumberGuesserSessionCountAggregateOutputType | null
    _avg: NumberGuesserSessionAvgAggregateOutputType | null
    _sum: NumberGuesserSessionSumAggregateOutputType | null
    _min: NumberGuesserSessionMinAggregateOutputType | null
    _max: NumberGuesserSessionMaxAggregateOutputType | null
  }

  type GetNumberGuesserSessionGroupByPayload<T extends NumberGuesserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<NumberGuesserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumberGuesserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumberGuesserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], NumberGuesserSessionGroupByOutputType[P]>
        }
      >
    >


  export type NumberGuesserSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    numberCorrect?: boolean
    numberWrong?: boolean
    longestStreak?: boolean
    figuresAtStart?: boolean
    figuresAtEnd?: boolean
    date?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["numberGuesserSession"]>

  export type NumberGuesserSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    numberCorrect?: boolean
    numberWrong?: boolean
    longestStreak?: boolean
    figuresAtStart?: boolean
    figuresAtEnd?: boolean
    date?: boolean
    platform?: boolean
  }

  export type NumberGuesserSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type NumberGuesserSessionGetPayload<S extends boolean | null | undefined | NumberGuesserSessionArgs> = $Types.GetResult<NumberGuesserSessionPayload, S>

  type NumberGuesserSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<NumberGuesserSessionFindManyArgs, 'select' | 'include'> & {
      select?: NumberGuesserSessionCountAggregateInputType | true
    }

  export interface NumberGuesserSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NumberGuesserSession'], meta: { name: 'NumberGuesserSession' } }
    /**
     * Find zero or one NumberGuesserSession that matches the filter.
     * @param {NumberGuesserSessionFindUniqueArgs} args - Arguments to find a NumberGuesserSession
     * @example
     * // Get one NumberGuesserSession
     * const numberGuesserSession = await prisma.numberGuesserSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NumberGuesserSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NumberGuesserSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NumberGuesserSession'> extends True ? Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one NumberGuesserSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NumberGuesserSessionFindUniqueOrThrowArgs} args - Arguments to find a NumberGuesserSession
     * @example
     * // Get one NumberGuesserSession
     * const numberGuesserSession = await prisma.numberGuesserSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NumberGuesserSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NumberGuesserSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first NumberGuesserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionFindFirstArgs} args - Arguments to find a NumberGuesserSession
     * @example
     * // Get one NumberGuesserSession
     * const numberGuesserSession = await prisma.numberGuesserSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NumberGuesserSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NumberGuesserSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NumberGuesserSession'> extends True ? Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first NumberGuesserSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionFindFirstOrThrowArgs} args - Arguments to find a NumberGuesserSession
     * @example
     * // Get one NumberGuesserSession
     * const numberGuesserSession = await prisma.numberGuesserSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NumberGuesserSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NumberGuesserSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more NumberGuesserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NumberGuesserSessions
     * const numberGuesserSessions = await prisma.numberGuesserSession.findMany()
     * 
     * // Get first 10 NumberGuesserSessions
     * const numberGuesserSessions = await prisma.numberGuesserSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const numberGuesserSessionWithIdOnly = await prisma.numberGuesserSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NumberGuesserSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NumberGuesserSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a NumberGuesserSession.
     * @param {NumberGuesserSessionCreateArgs} args - Arguments to create a NumberGuesserSession.
     * @example
     * // Create one NumberGuesserSession
     * const NumberGuesserSession = await prisma.numberGuesserSession.create({
     *   data: {
     *     // ... data to create a NumberGuesserSession
     *   }
     * })
     * 
    **/
    create<T extends NumberGuesserSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NumberGuesserSessionCreateArgs<ExtArgs>>
    ): Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many NumberGuesserSessions.
     *     @param {NumberGuesserSessionCreateManyArgs} args - Arguments to create many NumberGuesserSessions.
     *     @example
     *     // Create many NumberGuesserSessions
     *     const numberGuesserSession = await prisma.numberGuesserSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NumberGuesserSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NumberGuesserSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NumberGuesserSession.
     * @param {NumberGuesserSessionDeleteArgs} args - Arguments to delete one NumberGuesserSession.
     * @example
     * // Delete one NumberGuesserSession
     * const NumberGuesserSession = await prisma.numberGuesserSession.delete({
     *   where: {
     *     // ... filter to delete one NumberGuesserSession
     *   }
     * })
     * 
    **/
    delete<T extends NumberGuesserSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NumberGuesserSessionDeleteArgs<ExtArgs>>
    ): Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one NumberGuesserSession.
     * @param {NumberGuesserSessionUpdateArgs} args - Arguments to update one NumberGuesserSession.
     * @example
     * // Update one NumberGuesserSession
     * const numberGuesserSession = await prisma.numberGuesserSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NumberGuesserSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NumberGuesserSessionUpdateArgs<ExtArgs>>
    ): Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more NumberGuesserSessions.
     * @param {NumberGuesserSessionDeleteManyArgs} args - Arguments to filter NumberGuesserSessions to delete.
     * @example
     * // Delete a few NumberGuesserSessions
     * const { count } = await prisma.numberGuesserSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NumberGuesserSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NumberGuesserSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NumberGuesserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NumberGuesserSessions
     * const numberGuesserSession = await prisma.numberGuesserSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NumberGuesserSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NumberGuesserSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NumberGuesserSession.
     * @param {NumberGuesserSessionUpsertArgs} args - Arguments to update or create a NumberGuesserSession.
     * @example
     * // Update or create a NumberGuesserSession
     * const numberGuesserSession = await prisma.numberGuesserSession.upsert({
     *   create: {
     *     // ... data to create a NumberGuesserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NumberGuesserSession we want to update
     *   }
     * })
    **/
    upsert<T extends NumberGuesserSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NumberGuesserSessionUpsertArgs<ExtArgs>>
    ): Prisma__NumberGuesserSessionClient<$Types.GetResult<NumberGuesserSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of NumberGuesserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionCountArgs} args - Arguments to filter NumberGuesserSessions to count.
     * @example
     * // Count the number of NumberGuesserSessions
     * const count = await prisma.numberGuesserSession.count({
     *   where: {
     *     // ... the filter for the NumberGuesserSessions we want to count
     *   }
     * })
    **/
    count<T extends NumberGuesserSessionCountArgs>(
      args?: Subset<T, NumberGuesserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumberGuesserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NumberGuesserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NumberGuesserSessionAggregateArgs>(args: Subset<T, NumberGuesserSessionAggregateArgs>): Prisma.PrismaPromise<GetNumberGuesserSessionAggregateType<T>>

    /**
     * Group by NumberGuesserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumberGuesserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NumberGuesserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumberGuesserSessionGroupByArgs['orderBy'] }
        : { orderBy?: NumberGuesserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NumberGuesserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumberGuesserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NumberGuesserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NumberGuesserSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * NumberGuesserSession base type for findUnique actions
   */
  export type NumberGuesserSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * Filter, which NumberGuesserSession to fetch.
     */
    where: NumberGuesserSessionWhereUniqueInput
  }

  /**
   * NumberGuesserSession findUnique
   */
  export interface NumberGuesserSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends NumberGuesserSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NumberGuesserSession findUniqueOrThrow
   */
  export type NumberGuesserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * Filter, which NumberGuesserSession to fetch.
     */
    where: NumberGuesserSessionWhereUniqueInput
  }


  /**
   * NumberGuesserSession base type for findFirst actions
   */
  export type NumberGuesserSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * Filter, which NumberGuesserSession to fetch.
     */
    where?: NumberGuesserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberGuesserSessions to fetch.
     */
    orderBy?: Enumerable<NumberGuesserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberGuesserSessions.
     */
    cursor?: NumberGuesserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberGuesserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberGuesserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberGuesserSessions.
     */
    distinct?: Enumerable<NumberGuesserSessionScalarFieldEnum>
  }

  /**
   * NumberGuesserSession findFirst
   */
  export interface NumberGuesserSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends NumberGuesserSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NumberGuesserSession findFirstOrThrow
   */
  export type NumberGuesserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * Filter, which NumberGuesserSession to fetch.
     */
    where?: NumberGuesserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberGuesserSessions to fetch.
     */
    orderBy?: Enumerable<NumberGuesserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NumberGuesserSessions.
     */
    cursor?: NumberGuesserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberGuesserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberGuesserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NumberGuesserSessions.
     */
    distinct?: Enumerable<NumberGuesserSessionScalarFieldEnum>
  }


  /**
   * NumberGuesserSession findMany
   */
  export type NumberGuesserSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * Filter, which NumberGuesserSessions to fetch.
     */
    where?: NumberGuesserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NumberGuesserSessions to fetch.
     */
    orderBy?: Enumerable<NumberGuesserSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NumberGuesserSessions.
     */
    cursor?: NumberGuesserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NumberGuesserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NumberGuesserSessions.
     */
    skip?: number
    distinct?: Enumerable<NumberGuesserSessionScalarFieldEnum>
  }


  /**
   * NumberGuesserSession create
   */
  export type NumberGuesserSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a NumberGuesserSession.
     */
    data: XOR<NumberGuesserSessionCreateInput, NumberGuesserSessionUncheckedCreateInput>
  }


  /**
   * NumberGuesserSession createMany
   */
  export type NumberGuesserSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NumberGuesserSessions.
     */
    data: Enumerable<NumberGuesserSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NumberGuesserSession update
   */
  export type NumberGuesserSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a NumberGuesserSession.
     */
    data: XOR<NumberGuesserSessionUpdateInput, NumberGuesserSessionUncheckedUpdateInput>
    /**
     * Choose, which NumberGuesserSession to update.
     */
    where: NumberGuesserSessionWhereUniqueInput
  }


  /**
   * NumberGuesserSession updateMany
   */
  export type NumberGuesserSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NumberGuesserSessions.
     */
    data: XOR<NumberGuesserSessionUpdateManyMutationInput, NumberGuesserSessionUncheckedUpdateManyInput>
    /**
     * Filter which NumberGuesserSessions to update
     */
    where?: NumberGuesserSessionWhereInput
  }


  /**
   * NumberGuesserSession upsert
   */
  export type NumberGuesserSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the NumberGuesserSession to update in case it exists.
     */
    where: NumberGuesserSessionWhereUniqueInput
    /**
     * In case the NumberGuesserSession found by the `where` argument doesn't exist, create a new NumberGuesserSession with this data.
     */
    create: XOR<NumberGuesserSessionCreateInput, NumberGuesserSessionUncheckedCreateInput>
    /**
     * In case the NumberGuesserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumberGuesserSessionUpdateInput, NumberGuesserSessionUncheckedUpdateInput>
  }


  /**
   * NumberGuesserSession delete
   */
  export type NumberGuesserSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
    /**
     * Filter which NumberGuesserSession to delete.
     */
    where: NumberGuesserSessionWhereUniqueInput
  }


  /**
   * NumberGuesserSession deleteMany
   */
  export type NumberGuesserSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which NumberGuesserSessions to delete
     */
    where?: NumberGuesserSessionWhereInput
  }


  /**
   * NumberGuesserSession without action
   */
  export type NumberGuesserSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NumberGuesserSession
     */
    select?: NumberGuesserSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: NumberGuesserSessionInclude<ExtArgs> | null
  }



  /**
   * Model LetterMatcherSession
   */


  export type AggregateLetterMatcherSession = {
    _count: LetterMatcherSessionCountAggregateOutputType | null
    _avg: LetterMatcherSessionAvgAggregateOutputType | null
    _sum: LetterMatcherSessionSumAggregateOutputType | null
    _min: LetterMatcherSessionMinAggregateOutputType | null
    _max: LetterMatcherSessionMaxAggregateOutputType | null
  }

  export type LetterMatcherSessionAvgAggregateOutputType = {
    numberCorrect: number | null
    numberWrong: number | null
  }

  export type LetterMatcherSessionSumAggregateOutputType = {
    numberCorrect: number | null
    numberWrong: number | null
  }

  export type LetterMatcherSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    numberCorrect: number | null
    numberWrong: number | null
    date: Date | null
    platform: string | null
  }

  export type LetterMatcherSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    numberCorrect: number | null
    numberWrong: number | null
    date: Date | null
    platform: string | null
  }

  export type LetterMatcherSessionCountAggregateOutputType = {
    id: number
    userId: number
    numberCorrect: number
    numberWrong: number
    date: number
    platform: number
    _all: number
  }


  export type LetterMatcherSessionAvgAggregateInputType = {
    numberCorrect?: true
    numberWrong?: true
  }

  export type LetterMatcherSessionSumAggregateInputType = {
    numberCorrect?: true
    numberWrong?: true
  }

  export type LetterMatcherSessionMinAggregateInputType = {
    id?: true
    userId?: true
    numberCorrect?: true
    numberWrong?: true
    date?: true
    platform?: true
  }

  export type LetterMatcherSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    numberCorrect?: true
    numberWrong?: true
    date?: true
    platform?: true
  }

  export type LetterMatcherSessionCountAggregateInputType = {
    id?: true
    userId?: true
    numberCorrect?: true
    numberWrong?: true
    date?: true
    platform?: true
    _all?: true
  }

  export type LetterMatcherSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LetterMatcherSession to aggregate.
     */
    where?: LetterMatcherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LetterMatcherSessions to fetch.
     */
    orderBy?: Enumerable<LetterMatcherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LetterMatcherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LetterMatcherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LetterMatcherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LetterMatcherSessions
    **/
    _count?: true | LetterMatcherSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LetterMatcherSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LetterMatcherSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LetterMatcherSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LetterMatcherSessionMaxAggregateInputType
  }

  export type GetLetterMatcherSessionAggregateType<T extends LetterMatcherSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateLetterMatcherSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLetterMatcherSession[P]>
      : GetScalarType<T[P], AggregateLetterMatcherSession[P]>
  }




  export type LetterMatcherSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: LetterMatcherSessionWhereInput
    orderBy?: Enumerable<LetterMatcherSessionOrderByWithAggregationInput>
    by: LetterMatcherSessionScalarFieldEnum[]
    having?: LetterMatcherSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LetterMatcherSessionCountAggregateInputType | true
    _avg?: LetterMatcherSessionAvgAggregateInputType
    _sum?: LetterMatcherSessionSumAggregateInputType
    _min?: LetterMatcherSessionMinAggregateInputType
    _max?: LetterMatcherSessionMaxAggregateInputType
  }


  export type LetterMatcherSessionGroupByOutputType = {
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    date: Date
    platform: string
    _count: LetterMatcherSessionCountAggregateOutputType | null
    _avg: LetterMatcherSessionAvgAggregateOutputType | null
    _sum: LetterMatcherSessionSumAggregateOutputType | null
    _min: LetterMatcherSessionMinAggregateOutputType | null
    _max: LetterMatcherSessionMaxAggregateOutputType | null
  }

  type GetLetterMatcherSessionGroupByPayload<T extends LetterMatcherSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LetterMatcherSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LetterMatcherSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LetterMatcherSessionGroupByOutputType[P]>
            : GetScalarType<T[P], LetterMatcherSessionGroupByOutputType[P]>
        }
      >
    >


  export type LetterMatcherSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    numberCorrect?: boolean
    numberWrong?: boolean
    date?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["letterMatcherSession"]>

  export type LetterMatcherSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    numberCorrect?: boolean
    numberWrong?: boolean
    date?: boolean
    platform?: boolean
  }

  export type LetterMatcherSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type LetterMatcherSessionGetPayload<S extends boolean | null | undefined | LetterMatcherSessionArgs> = $Types.GetResult<LetterMatcherSessionPayload, S>

  type LetterMatcherSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<LetterMatcherSessionFindManyArgs, 'select' | 'include'> & {
      select?: LetterMatcherSessionCountAggregateInputType | true
    }

  export interface LetterMatcherSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LetterMatcherSession'], meta: { name: 'LetterMatcherSession' } }
    /**
     * Find zero or one LetterMatcherSession that matches the filter.
     * @param {LetterMatcherSessionFindUniqueArgs} args - Arguments to find a LetterMatcherSession
     * @example
     * // Get one LetterMatcherSession
     * const letterMatcherSession = await prisma.letterMatcherSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LetterMatcherSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LetterMatcherSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LetterMatcherSession'> extends True ? Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one LetterMatcherSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LetterMatcherSessionFindUniqueOrThrowArgs} args - Arguments to find a LetterMatcherSession
     * @example
     * // Get one LetterMatcherSession
     * const letterMatcherSession = await prisma.letterMatcherSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LetterMatcherSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterMatcherSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first LetterMatcherSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionFindFirstArgs} args - Arguments to find a LetterMatcherSession
     * @example
     * // Get one LetterMatcherSession
     * const letterMatcherSession = await prisma.letterMatcherSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LetterMatcherSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LetterMatcherSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LetterMatcherSession'> extends True ? Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first LetterMatcherSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionFindFirstOrThrowArgs} args - Arguments to find a LetterMatcherSession
     * @example
     * // Get one LetterMatcherSession
     * const letterMatcherSession = await prisma.letterMatcherSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LetterMatcherSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterMatcherSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more LetterMatcherSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LetterMatcherSessions
     * const letterMatcherSessions = await prisma.letterMatcherSession.findMany()
     * 
     * // Get first 10 LetterMatcherSessions
     * const letterMatcherSessions = await prisma.letterMatcherSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const letterMatcherSessionWithIdOnly = await prisma.letterMatcherSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LetterMatcherSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterMatcherSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a LetterMatcherSession.
     * @param {LetterMatcherSessionCreateArgs} args - Arguments to create a LetterMatcherSession.
     * @example
     * // Create one LetterMatcherSession
     * const LetterMatcherSession = await prisma.letterMatcherSession.create({
     *   data: {
     *     // ... data to create a LetterMatcherSession
     *   }
     * })
     * 
    **/
    create<T extends LetterMatcherSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LetterMatcherSessionCreateArgs<ExtArgs>>
    ): Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many LetterMatcherSessions.
     *     @param {LetterMatcherSessionCreateManyArgs} args - Arguments to create many LetterMatcherSessions.
     *     @example
     *     // Create many LetterMatcherSessions
     *     const letterMatcherSession = await prisma.letterMatcherSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LetterMatcherSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterMatcherSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LetterMatcherSession.
     * @param {LetterMatcherSessionDeleteArgs} args - Arguments to delete one LetterMatcherSession.
     * @example
     * // Delete one LetterMatcherSession
     * const LetterMatcherSession = await prisma.letterMatcherSession.delete({
     *   where: {
     *     // ... filter to delete one LetterMatcherSession
     *   }
     * })
     * 
    **/
    delete<T extends LetterMatcherSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LetterMatcherSessionDeleteArgs<ExtArgs>>
    ): Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one LetterMatcherSession.
     * @param {LetterMatcherSessionUpdateArgs} args - Arguments to update one LetterMatcherSession.
     * @example
     * // Update one LetterMatcherSession
     * const letterMatcherSession = await prisma.letterMatcherSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LetterMatcherSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LetterMatcherSessionUpdateArgs<ExtArgs>>
    ): Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more LetterMatcherSessions.
     * @param {LetterMatcherSessionDeleteManyArgs} args - Arguments to filter LetterMatcherSessions to delete.
     * @example
     * // Delete a few LetterMatcherSessions
     * const { count } = await prisma.letterMatcherSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LetterMatcherSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LetterMatcherSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LetterMatcherSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LetterMatcherSessions
     * const letterMatcherSession = await prisma.letterMatcherSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LetterMatcherSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LetterMatcherSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LetterMatcherSession.
     * @param {LetterMatcherSessionUpsertArgs} args - Arguments to update or create a LetterMatcherSession.
     * @example
     * // Update or create a LetterMatcherSession
     * const letterMatcherSession = await prisma.letterMatcherSession.upsert({
     *   create: {
     *     // ... data to create a LetterMatcherSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LetterMatcherSession we want to update
     *   }
     * })
    **/
    upsert<T extends LetterMatcherSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LetterMatcherSessionUpsertArgs<ExtArgs>>
    ): Prisma__LetterMatcherSessionClient<$Types.GetResult<LetterMatcherSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of LetterMatcherSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionCountArgs} args - Arguments to filter LetterMatcherSessions to count.
     * @example
     * // Count the number of LetterMatcherSessions
     * const count = await prisma.letterMatcherSession.count({
     *   where: {
     *     // ... the filter for the LetterMatcherSessions we want to count
     *   }
     * })
    **/
    count<T extends LetterMatcherSessionCountArgs>(
      args?: Subset<T, LetterMatcherSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LetterMatcherSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LetterMatcherSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LetterMatcherSessionAggregateArgs>(args: Subset<T, LetterMatcherSessionAggregateArgs>): Prisma.PrismaPromise<GetLetterMatcherSessionAggregateType<T>>

    /**
     * Group by LetterMatcherSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LetterMatcherSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LetterMatcherSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LetterMatcherSessionGroupByArgs['orderBy'] }
        : { orderBy?: LetterMatcherSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LetterMatcherSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLetterMatcherSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LetterMatcherSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LetterMatcherSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LetterMatcherSession base type for findUnique actions
   */
  export type LetterMatcherSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * Filter, which LetterMatcherSession to fetch.
     */
    where: LetterMatcherSessionWhereUniqueInput
  }

  /**
   * LetterMatcherSession findUnique
   */
  export interface LetterMatcherSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LetterMatcherSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LetterMatcherSession findUniqueOrThrow
   */
  export type LetterMatcherSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * Filter, which LetterMatcherSession to fetch.
     */
    where: LetterMatcherSessionWhereUniqueInput
  }


  /**
   * LetterMatcherSession base type for findFirst actions
   */
  export type LetterMatcherSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * Filter, which LetterMatcherSession to fetch.
     */
    where?: LetterMatcherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LetterMatcherSessions to fetch.
     */
    orderBy?: Enumerable<LetterMatcherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LetterMatcherSessions.
     */
    cursor?: LetterMatcherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LetterMatcherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LetterMatcherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LetterMatcherSessions.
     */
    distinct?: Enumerable<LetterMatcherSessionScalarFieldEnum>
  }

  /**
   * LetterMatcherSession findFirst
   */
  export interface LetterMatcherSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends LetterMatcherSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LetterMatcherSession findFirstOrThrow
   */
  export type LetterMatcherSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * Filter, which LetterMatcherSession to fetch.
     */
    where?: LetterMatcherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LetterMatcherSessions to fetch.
     */
    orderBy?: Enumerable<LetterMatcherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LetterMatcherSessions.
     */
    cursor?: LetterMatcherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LetterMatcherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LetterMatcherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LetterMatcherSessions.
     */
    distinct?: Enumerable<LetterMatcherSessionScalarFieldEnum>
  }


  /**
   * LetterMatcherSession findMany
   */
  export type LetterMatcherSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * Filter, which LetterMatcherSessions to fetch.
     */
    where?: LetterMatcherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LetterMatcherSessions to fetch.
     */
    orderBy?: Enumerable<LetterMatcherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LetterMatcherSessions.
     */
    cursor?: LetterMatcherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LetterMatcherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LetterMatcherSessions.
     */
    skip?: number
    distinct?: Enumerable<LetterMatcherSessionScalarFieldEnum>
  }


  /**
   * LetterMatcherSession create
   */
  export type LetterMatcherSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a LetterMatcherSession.
     */
    data: XOR<LetterMatcherSessionCreateInput, LetterMatcherSessionUncheckedCreateInput>
  }


  /**
   * LetterMatcherSession createMany
   */
  export type LetterMatcherSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LetterMatcherSessions.
     */
    data: Enumerable<LetterMatcherSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LetterMatcherSession update
   */
  export type LetterMatcherSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a LetterMatcherSession.
     */
    data: XOR<LetterMatcherSessionUpdateInput, LetterMatcherSessionUncheckedUpdateInput>
    /**
     * Choose, which LetterMatcherSession to update.
     */
    where: LetterMatcherSessionWhereUniqueInput
  }


  /**
   * LetterMatcherSession updateMany
   */
  export type LetterMatcherSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LetterMatcherSessions.
     */
    data: XOR<LetterMatcherSessionUpdateManyMutationInput, LetterMatcherSessionUncheckedUpdateManyInput>
    /**
     * Filter which LetterMatcherSessions to update
     */
    where?: LetterMatcherSessionWhereInput
  }


  /**
   * LetterMatcherSession upsert
   */
  export type LetterMatcherSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the LetterMatcherSession to update in case it exists.
     */
    where: LetterMatcherSessionWhereUniqueInput
    /**
     * In case the LetterMatcherSession found by the `where` argument doesn't exist, create a new LetterMatcherSession with this data.
     */
    create: XOR<LetterMatcherSessionCreateInput, LetterMatcherSessionUncheckedCreateInput>
    /**
     * In case the LetterMatcherSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LetterMatcherSessionUpdateInput, LetterMatcherSessionUncheckedUpdateInput>
  }


  /**
   * LetterMatcherSession delete
   */
  export type LetterMatcherSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
    /**
     * Filter which LetterMatcherSession to delete.
     */
    where: LetterMatcherSessionWhereUniqueInput
  }


  /**
   * LetterMatcherSession deleteMany
   */
  export type LetterMatcherSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which LetterMatcherSessions to delete
     */
    where?: LetterMatcherSessionWhereInput
  }


  /**
   * LetterMatcherSession without action
   */
  export type LetterMatcherSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LetterMatcherSession
     */
    select?: LetterMatcherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LetterMatcherSessionInclude<ExtArgs> | null
  }



  /**
   * Model WordFlasherSession
   */


  export type AggregateWordFlasherSession = {
    _count: WordFlasherSessionCountAggregateOutputType | null
    _avg: WordFlasherSessionAvgAggregateOutputType | null
    _sum: WordFlasherSessionSumAggregateOutputType | null
    _min: WordFlasherSessionMinAggregateOutputType | null
    _max: WordFlasherSessionMaxAggregateOutputType | null
  }

  export type WordFlasherSessionAvgAggregateOutputType = {
    speed: number | null
  }

  export type WordFlasherSessionSumAggregateOutputType = {
    speed: number | null
  }

  export type WordFlasherSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    speed: number | null
    date: Date | null
    type: string | null
    platform: string | null
  }

  export type WordFlasherSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    speed: number | null
    date: Date | null
    type: string | null
    platform: string | null
  }

  export type WordFlasherSessionCountAggregateOutputType = {
    id: number
    userId: number
    speed: number
    date: number
    type: number
    platform: number
    _all: number
  }


  export type WordFlasherSessionAvgAggregateInputType = {
    speed?: true
  }

  export type WordFlasherSessionSumAggregateInputType = {
    speed?: true
  }

  export type WordFlasherSessionMinAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
  }

  export type WordFlasherSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
  }

  export type WordFlasherSessionCountAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
    _all?: true
  }

  export type WordFlasherSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordFlasherSession to aggregate.
     */
    where?: WordFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordFlasherSessions to fetch.
     */
    orderBy?: Enumerable<WordFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordFlasherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordFlasherSessions
    **/
    _count?: true | WordFlasherSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordFlasherSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordFlasherSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordFlasherSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordFlasherSessionMaxAggregateInputType
  }

  export type GetWordFlasherSessionAggregateType<T extends WordFlasherSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateWordFlasherSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordFlasherSession[P]>
      : GetScalarType<T[P], AggregateWordFlasherSession[P]>
  }




  export type WordFlasherSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WordFlasherSessionWhereInput
    orderBy?: Enumerable<WordFlasherSessionOrderByWithAggregationInput>
    by: WordFlasherSessionScalarFieldEnum[]
    having?: WordFlasherSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordFlasherSessionCountAggregateInputType | true
    _avg?: WordFlasherSessionAvgAggregateInputType
    _sum?: WordFlasherSessionSumAggregateInputType
    _min?: WordFlasherSessionMinAggregateInputType
    _max?: WordFlasherSessionMaxAggregateInputType
  }


  export type WordFlasherSessionGroupByOutputType = {
    id: string
    userId: string
    speed: number
    date: Date
    type: string
    platform: string
    _count: WordFlasherSessionCountAggregateOutputType | null
    _avg: WordFlasherSessionAvgAggregateOutputType | null
    _sum: WordFlasherSessionSumAggregateOutputType | null
    _min: WordFlasherSessionMinAggregateOutputType | null
    _max: WordFlasherSessionMaxAggregateOutputType | null
  }

  type GetWordFlasherSessionGroupByPayload<T extends WordFlasherSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WordFlasherSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordFlasherSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordFlasherSessionGroupByOutputType[P]>
            : GetScalarType<T[P], WordFlasherSessionGroupByOutputType[P]>
        }
      >
    >


  export type WordFlasherSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    speed?: boolean
    date?: boolean
    type?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["wordFlasherSession"]>

  export type WordFlasherSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    speed?: boolean
    date?: boolean
    type?: boolean
    platform?: boolean
  }

  export type WordFlasherSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type WordFlasherSessionGetPayload<S extends boolean | null | undefined | WordFlasherSessionArgs> = $Types.GetResult<WordFlasherSessionPayload, S>

  type WordFlasherSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WordFlasherSessionFindManyArgs, 'select' | 'include'> & {
      select?: WordFlasherSessionCountAggregateInputType | true
    }

  export interface WordFlasherSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordFlasherSession'], meta: { name: 'WordFlasherSession' } }
    /**
     * Find zero or one WordFlasherSession that matches the filter.
     * @param {WordFlasherSessionFindUniqueArgs} args - Arguments to find a WordFlasherSession
     * @example
     * // Get one WordFlasherSession
     * const wordFlasherSession = await prisma.wordFlasherSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WordFlasherSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WordFlasherSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WordFlasherSession'> extends True ? Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one WordFlasherSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WordFlasherSessionFindUniqueOrThrowArgs} args - Arguments to find a WordFlasherSession
     * @example
     * // Get one WordFlasherSession
     * const wordFlasherSession = await prisma.wordFlasherSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WordFlasherSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFlasherSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first WordFlasherSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionFindFirstArgs} args - Arguments to find a WordFlasherSession
     * @example
     * // Get one WordFlasherSession
     * const wordFlasherSession = await prisma.wordFlasherSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WordFlasherSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WordFlasherSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WordFlasherSession'> extends True ? Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first WordFlasherSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionFindFirstOrThrowArgs} args - Arguments to find a WordFlasherSession
     * @example
     * // Get one WordFlasherSession
     * const wordFlasherSession = await prisma.wordFlasherSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WordFlasherSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFlasherSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more WordFlasherSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordFlasherSessions
     * const wordFlasherSessions = await prisma.wordFlasherSession.findMany()
     * 
     * // Get first 10 WordFlasherSessions
     * const wordFlasherSessions = await prisma.wordFlasherSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordFlasherSessionWithIdOnly = await prisma.wordFlasherSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WordFlasherSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFlasherSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a WordFlasherSession.
     * @param {WordFlasherSessionCreateArgs} args - Arguments to create a WordFlasherSession.
     * @example
     * // Create one WordFlasherSession
     * const WordFlasherSession = await prisma.wordFlasherSession.create({
     *   data: {
     *     // ... data to create a WordFlasherSession
     *   }
     * })
     * 
    **/
    create<T extends WordFlasherSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WordFlasherSessionCreateArgs<ExtArgs>>
    ): Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many WordFlasherSessions.
     *     @param {WordFlasherSessionCreateManyArgs} args - Arguments to create many WordFlasherSessions.
     *     @example
     *     // Create many WordFlasherSessions
     *     const wordFlasherSession = await prisma.wordFlasherSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WordFlasherSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFlasherSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WordFlasherSession.
     * @param {WordFlasherSessionDeleteArgs} args - Arguments to delete one WordFlasherSession.
     * @example
     * // Delete one WordFlasherSession
     * const WordFlasherSession = await prisma.wordFlasherSession.delete({
     *   where: {
     *     // ... filter to delete one WordFlasherSession
     *   }
     * })
     * 
    **/
    delete<T extends WordFlasherSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WordFlasherSessionDeleteArgs<ExtArgs>>
    ): Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one WordFlasherSession.
     * @param {WordFlasherSessionUpdateArgs} args - Arguments to update one WordFlasherSession.
     * @example
     * // Update one WordFlasherSession
     * const wordFlasherSession = await prisma.wordFlasherSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WordFlasherSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WordFlasherSessionUpdateArgs<ExtArgs>>
    ): Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more WordFlasherSessions.
     * @param {WordFlasherSessionDeleteManyArgs} args - Arguments to filter WordFlasherSessions to delete.
     * @example
     * // Delete a few WordFlasherSessions
     * const { count } = await prisma.wordFlasherSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WordFlasherSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordFlasherSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordFlasherSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordFlasherSessions
     * const wordFlasherSession = await prisma.wordFlasherSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WordFlasherSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WordFlasherSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WordFlasherSession.
     * @param {WordFlasherSessionUpsertArgs} args - Arguments to update or create a WordFlasherSession.
     * @example
     * // Update or create a WordFlasherSession
     * const wordFlasherSession = await prisma.wordFlasherSession.upsert({
     *   create: {
     *     // ... data to create a WordFlasherSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordFlasherSession we want to update
     *   }
     * })
    **/
    upsert<T extends WordFlasherSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WordFlasherSessionUpsertArgs<ExtArgs>>
    ): Prisma__WordFlasherSessionClient<$Types.GetResult<WordFlasherSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of WordFlasherSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionCountArgs} args - Arguments to filter WordFlasherSessions to count.
     * @example
     * // Count the number of WordFlasherSessions
     * const count = await prisma.wordFlasherSession.count({
     *   where: {
     *     // ... the filter for the WordFlasherSessions we want to count
     *   }
     * })
    **/
    count<T extends WordFlasherSessionCountArgs>(
      args?: Subset<T, WordFlasherSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordFlasherSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordFlasherSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordFlasherSessionAggregateArgs>(args: Subset<T, WordFlasherSessionAggregateArgs>): Prisma.PrismaPromise<GetWordFlasherSessionAggregateType<T>>

    /**
     * Group by WordFlasherSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFlasherSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordFlasherSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordFlasherSessionGroupByArgs['orderBy'] }
        : { orderBy?: WordFlasherSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordFlasherSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordFlasherSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WordFlasherSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WordFlasherSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WordFlasherSession base type for findUnique actions
   */
  export type WordFlasherSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which WordFlasherSession to fetch.
     */
    where: WordFlasherSessionWhereUniqueInput
  }

  /**
   * WordFlasherSession findUnique
   */
  export interface WordFlasherSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends WordFlasherSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WordFlasherSession findUniqueOrThrow
   */
  export type WordFlasherSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which WordFlasherSession to fetch.
     */
    where: WordFlasherSessionWhereUniqueInput
  }


  /**
   * WordFlasherSession base type for findFirst actions
   */
  export type WordFlasherSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which WordFlasherSession to fetch.
     */
    where?: WordFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordFlasherSessions to fetch.
     */
    orderBy?: Enumerable<WordFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordFlasherSessions.
     */
    cursor?: WordFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordFlasherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordFlasherSessions.
     */
    distinct?: Enumerable<WordFlasherSessionScalarFieldEnum>
  }

  /**
   * WordFlasherSession findFirst
   */
  export interface WordFlasherSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends WordFlasherSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WordFlasherSession findFirstOrThrow
   */
  export type WordFlasherSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which WordFlasherSession to fetch.
     */
    where?: WordFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordFlasherSessions to fetch.
     */
    orderBy?: Enumerable<WordFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordFlasherSessions.
     */
    cursor?: WordFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordFlasherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordFlasherSessions.
     */
    distinct?: Enumerable<WordFlasherSessionScalarFieldEnum>
  }


  /**
   * WordFlasherSession findMany
   */
  export type WordFlasherSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which WordFlasherSessions to fetch.
     */
    where?: WordFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordFlasherSessions to fetch.
     */
    orderBy?: Enumerable<WordFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordFlasherSessions.
     */
    cursor?: WordFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordFlasherSessions.
     */
    skip?: number
    distinct?: Enumerable<WordFlasherSessionScalarFieldEnum>
  }


  /**
   * WordFlasherSession create
   */
  export type WordFlasherSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a WordFlasherSession.
     */
    data: XOR<WordFlasherSessionCreateInput, WordFlasherSessionUncheckedCreateInput>
  }


  /**
   * WordFlasherSession createMany
   */
  export type WordFlasherSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordFlasherSessions.
     */
    data: Enumerable<WordFlasherSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WordFlasherSession update
   */
  export type WordFlasherSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a WordFlasherSession.
     */
    data: XOR<WordFlasherSessionUpdateInput, WordFlasherSessionUncheckedUpdateInput>
    /**
     * Choose, which WordFlasherSession to update.
     */
    where: WordFlasherSessionWhereUniqueInput
  }


  /**
   * WordFlasherSession updateMany
   */
  export type WordFlasherSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordFlasherSessions.
     */
    data: XOR<WordFlasherSessionUpdateManyMutationInput, WordFlasherSessionUncheckedUpdateManyInput>
    /**
     * Filter which WordFlasherSessions to update
     */
    where?: WordFlasherSessionWhereInput
  }


  /**
   * WordFlasherSession upsert
   */
  export type WordFlasherSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the WordFlasherSession to update in case it exists.
     */
    where: WordFlasherSessionWhereUniqueInput
    /**
     * In case the WordFlasherSession found by the `where` argument doesn't exist, create a new WordFlasherSession with this data.
     */
    create: XOR<WordFlasherSessionCreateInput, WordFlasherSessionUncheckedCreateInput>
    /**
     * In case the WordFlasherSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordFlasherSessionUpdateInput, WordFlasherSessionUncheckedUpdateInput>
  }


  /**
   * WordFlasherSession delete
   */
  export type WordFlasherSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter which WordFlasherSession to delete.
     */
    where: WordFlasherSessionWhereUniqueInput
  }


  /**
   * WordFlasherSession deleteMany
   */
  export type WordFlasherSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordFlasherSessions to delete
     */
    where?: WordFlasherSessionWhereInput
  }


  /**
   * WordFlasherSession without action
   */
  export type WordFlasherSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordFlasherSession
     */
    select?: WordFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordFlasherSessionInclude<ExtArgs> | null
  }



  /**
   * Model BoxFlasherSession
   */


  export type AggregateBoxFlasherSession = {
    _count: BoxFlasherSessionCountAggregateOutputType | null
    _avg: BoxFlasherSessionAvgAggregateOutputType | null
    _sum: BoxFlasherSessionSumAggregateOutputType | null
    _min: BoxFlasherSessionMinAggregateOutputType | null
    _max: BoxFlasherSessionMaxAggregateOutputType | null
  }

  export type BoxFlasherSessionAvgAggregateOutputType = {
    speed: number | null
  }

  export type BoxFlasherSessionSumAggregateOutputType = {
    speed: number | null
  }

  export type BoxFlasherSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    speed: number | null
    date: Date | null
    type: BoxType | null
    platform: string | null
  }

  export type BoxFlasherSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    speed: number | null
    date: Date | null
    type: BoxType | null
    platform: string | null
  }

  export type BoxFlasherSessionCountAggregateOutputType = {
    id: number
    userId: number
    speed: number
    date: number
    type: number
    platform: number
    _all: number
  }


  export type BoxFlasherSessionAvgAggregateInputType = {
    speed?: true
  }

  export type BoxFlasherSessionSumAggregateInputType = {
    speed?: true
  }

  export type BoxFlasherSessionMinAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
  }

  export type BoxFlasherSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
  }

  export type BoxFlasherSessionCountAggregateInputType = {
    id?: true
    userId?: true
    speed?: true
    date?: true
    type?: true
    platform?: true
    _all?: true
  }

  export type BoxFlasherSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoxFlasherSession to aggregate.
     */
    where?: BoxFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxFlasherSessions to fetch.
     */
    orderBy?: Enumerable<BoxFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoxFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxFlasherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoxFlasherSessions
    **/
    _count?: true | BoxFlasherSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoxFlasherSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoxFlasherSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoxFlasherSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoxFlasherSessionMaxAggregateInputType
  }

  export type GetBoxFlasherSessionAggregateType<T extends BoxFlasherSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateBoxFlasherSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoxFlasherSession[P]>
      : GetScalarType<T[P], AggregateBoxFlasherSession[P]>
  }




  export type BoxFlasherSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BoxFlasherSessionWhereInput
    orderBy?: Enumerable<BoxFlasherSessionOrderByWithAggregationInput>
    by: BoxFlasherSessionScalarFieldEnum[]
    having?: BoxFlasherSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoxFlasherSessionCountAggregateInputType | true
    _avg?: BoxFlasherSessionAvgAggregateInputType
    _sum?: BoxFlasherSessionSumAggregateInputType
    _min?: BoxFlasherSessionMinAggregateInputType
    _max?: BoxFlasherSessionMaxAggregateInputType
  }


  export type BoxFlasherSessionGroupByOutputType = {
    id: string
    userId: string
    speed: number
    date: Date
    type: BoxType
    platform: string
    _count: BoxFlasherSessionCountAggregateOutputType | null
    _avg: BoxFlasherSessionAvgAggregateOutputType | null
    _sum: BoxFlasherSessionSumAggregateOutputType | null
    _min: BoxFlasherSessionMinAggregateOutputType | null
    _max: BoxFlasherSessionMaxAggregateOutputType | null
  }

  type GetBoxFlasherSessionGroupByPayload<T extends BoxFlasherSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<BoxFlasherSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoxFlasherSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoxFlasherSessionGroupByOutputType[P]>
            : GetScalarType<T[P], BoxFlasherSessionGroupByOutputType[P]>
        }
      >
    >


  export type BoxFlasherSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    speed?: boolean
    date?: boolean
    type?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["boxFlasherSession"]>

  export type BoxFlasherSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    speed?: boolean
    date?: boolean
    type?: boolean
    platform?: boolean
  }

  export type BoxFlasherSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type BoxFlasherSessionGetPayload<S extends boolean | null | undefined | BoxFlasherSessionArgs> = $Types.GetResult<BoxFlasherSessionPayload, S>

  type BoxFlasherSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BoxFlasherSessionFindManyArgs, 'select' | 'include'> & {
      select?: BoxFlasherSessionCountAggregateInputType | true
    }

  export interface BoxFlasherSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoxFlasherSession'], meta: { name: 'BoxFlasherSession' } }
    /**
     * Find zero or one BoxFlasherSession that matches the filter.
     * @param {BoxFlasherSessionFindUniqueArgs} args - Arguments to find a BoxFlasherSession
     * @example
     * // Get one BoxFlasherSession
     * const boxFlasherSession = await prisma.boxFlasherSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoxFlasherSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoxFlasherSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoxFlasherSession'> extends True ? Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one BoxFlasherSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BoxFlasherSessionFindUniqueOrThrowArgs} args - Arguments to find a BoxFlasherSession
     * @example
     * // Get one BoxFlasherSession
     * const boxFlasherSession = await prisma.boxFlasherSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BoxFlasherSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoxFlasherSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first BoxFlasherSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionFindFirstArgs} args - Arguments to find a BoxFlasherSession
     * @example
     * // Get one BoxFlasherSession
     * const boxFlasherSession = await prisma.boxFlasherSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoxFlasherSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoxFlasherSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoxFlasherSession'> extends True ? Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first BoxFlasherSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionFindFirstOrThrowArgs} args - Arguments to find a BoxFlasherSession
     * @example
     * // Get one BoxFlasherSession
     * const boxFlasherSession = await prisma.boxFlasherSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BoxFlasherSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BoxFlasherSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more BoxFlasherSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoxFlasherSessions
     * const boxFlasherSessions = await prisma.boxFlasherSession.findMany()
     * 
     * // Get first 10 BoxFlasherSessions
     * const boxFlasherSessions = await prisma.boxFlasherSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boxFlasherSessionWithIdOnly = await prisma.boxFlasherSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoxFlasherSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoxFlasherSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a BoxFlasherSession.
     * @param {BoxFlasherSessionCreateArgs} args - Arguments to create a BoxFlasherSession.
     * @example
     * // Create one BoxFlasherSession
     * const BoxFlasherSession = await prisma.boxFlasherSession.create({
     *   data: {
     *     // ... data to create a BoxFlasherSession
     *   }
     * })
     * 
    **/
    create<T extends BoxFlasherSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BoxFlasherSessionCreateArgs<ExtArgs>>
    ): Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many BoxFlasherSessions.
     *     @param {BoxFlasherSessionCreateManyArgs} args - Arguments to create many BoxFlasherSessions.
     *     @example
     *     // Create many BoxFlasherSessions
     *     const boxFlasherSession = await prisma.boxFlasherSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoxFlasherSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoxFlasherSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoxFlasherSession.
     * @param {BoxFlasherSessionDeleteArgs} args - Arguments to delete one BoxFlasherSession.
     * @example
     * // Delete one BoxFlasherSession
     * const BoxFlasherSession = await prisma.boxFlasherSession.delete({
     *   where: {
     *     // ... filter to delete one BoxFlasherSession
     *   }
     * })
     * 
    **/
    delete<T extends BoxFlasherSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BoxFlasherSessionDeleteArgs<ExtArgs>>
    ): Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one BoxFlasherSession.
     * @param {BoxFlasherSessionUpdateArgs} args - Arguments to update one BoxFlasherSession.
     * @example
     * // Update one BoxFlasherSession
     * const boxFlasherSession = await prisma.boxFlasherSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoxFlasherSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BoxFlasherSessionUpdateArgs<ExtArgs>>
    ): Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more BoxFlasherSessions.
     * @param {BoxFlasherSessionDeleteManyArgs} args - Arguments to filter BoxFlasherSessions to delete.
     * @example
     * // Delete a few BoxFlasherSessions
     * const { count } = await prisma.boxFlasherSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoxFlasherSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BoxFlasherSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoxFlasherSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoxFlasherSessions
     * const boxFlasherSession = await prisma.boxFlasherSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoxFlasherSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BoxFlasherSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoxFlasherSession.
     * @param {BoxFlasherSessionUpsertArgs} args - Arguments to update or create a BoxFlasherSession.
     * @example
     * // Update or create a BoxFlasherSession
     * const boxFlasherSession = await prisma.boxFlasherSession.upsert({
     *   create: {
     *     // ... data to create a BoxFlasherSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoxFlasherSession we want to update
     *   }
     * })
    **/
    upsert<T extends BoxFlasherSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BoxFlasherSessionUpsertArgs<ExtArgs>>
    ): Prisma__BoxFlasherSessionClient<$Types.GetResult<BoxFlasherSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of BoxFlasherSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionCountArgs} args - Arguments to filter BoxFlasherSessions to count.
     * @example
     * // Count the number of BoxFlasherSessions
     * const count = await prisma.boxFlasherSession.count({
     *   where: {
     *     // ... the filter for the BoxFlasherSessions we want to count
     *   }
     * })
    **/
    count<T extends BoxFlasherSessionCountArgs>(
      args?: Subset<T, BoxFlasherSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoxFlasherSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoxFlasherSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoxFlasherSessionAggregateArgs>(args: Subset<T, BoxFlasherSessionAggregateArgs>): Prisma.PrismaPromise<GetBoxFlasherSessionAggregateType<T>>

    /**
     * Group by BoxFlasherSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFlasherSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoxFlasherSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoxFlasherSessionGroupByArgs['orderBy'] }
        : { orderBy?: BoxFlasherSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoxFlasherSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoxFlasherSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for BoxFlasherSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoxFlasherSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * BoxFlasherSession base type for findUnique actions
   */
  export type BoxFlasherSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which BoxFlasherSession to fetch.
     */
    where: BoxFlasherSessionWhereUniqueInput
  }

  /**
   * BoxFlasherSession findUnique
   */
  export interface BoxFlasherSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BoxFlasherSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoxFlasherSession findUniqueOrThrow
   */
  export type BoxFlasherSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which BoxFlasherSession to fetch.
     */
    where: BoxFlasherSessionWhereUniqueInput
  }


  /**
   * BoxFlasherSession base type for findFirst actions
   */
  export type BoxFlasherSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which BoxFlasherSession to fetch.
     */
    where?: BoxFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxFlasherSessions to fetch.
     */
    orderBy?: Enumerable<BoxFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoxFlasherSessions.
     */
    cursor?: BoxFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxFlasherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxFlasherSessions.
     */
    distinct?: Enumerable<BoxFlasherSessionScalarFieldEnum>
  }

  /**
   * BoxFlasherSession findFirst
   */
  export interface BoxFlasherSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends BoxFlasherSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * BoxFlasherSession findFirstOrThrow
   */
  export type BoxFlasherSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which BoxFlasherSession to fetch.
     */
    where?: BoxFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxFlasherSessions to fetch.
     */
    orderBy?: Enumerable<BoxFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoxFlasherSessions.
     */
    cursor?: BoxFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxFlasherSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoxFlasherSessions.
     */
    distinct?: Enumerable<BoxFlasherSessionScalarFieldEnum>
  }


  /**
   * BoxFlasherSession findMany
   */
  export type BoxFlasherSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter, which BoxFlasherSessions to fetch.
     */
    where?: BoxFlasherSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoxFlasherSessions to fetch.
     */
    orderBy?: Enumerable<BoxFlasherSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoxFlasherSessions.
     */
    cursor?: BoxFlasherSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoxFlasherSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoxFlasherSessions.
     */
    skip?: number
    distinct?: Enumerable<BoxFlasherSessionScalarFieldEnum>
  }


  /**
   * BoxFlasherSession create
   */
  export type BoxFlasherSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a BoxFlasherSession.
     */
    data: XOR<BoxFlasherSessionCreateInput, BoxFlasherSessionUncheckedCreateInput>
  }


  /**
   * BoxFlasherSession createMany
   */
  export type BoxFlasherSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoxFlasherSessions.
     */
    data: Enumerable<BoxFlasherSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoxFlasherSession update
   */
  export type BoxFlasherSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a BoxFlasherSession.
     */
    data: XOR<BoxFlasherSessionUpdateInput, BoxFlasherSessionUncheckedUpdateInput>
    /**
     * Choose, which BoxFlasherSession to update.
     */
    where: BoxFlasherSessionWhereUniqueInput
  }


  /**
   * BoxFlasherSession updateMany
   */
  export type BoxFlasherSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoxFlasherSessions.
     */
    data: XOR<BoxFlasherSessionUpdateManyMutationInput, BoxFlasherSessionUncheckedUpdateManyInput>
    /**
     * Filter which BoxFlasherSessions to update
     */
    where?: BoxFlasherSessionWhereInput
  }


  /**
   * BoxFlasherSession upsert
   */
  export type BoxFlasherSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the BoxFlasherSession to update in case it exists.
     */
    where: BoxFlasherSessionWhereUniqueInput
    /**
     * In case the BoxFlasherSession found by the `where` argument doesn't exist, create a new BoxFlasherSession with this data.
     */
    create: XOR<BoxFlasherSessionCreateInput, BoxFlasherSessionUncheckedCreateInput>
    /**
     * In case the BoxFlasherSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoxFlasherSessionUpdateInput, BoxFlasherSessionUncheckedUpdateInput>
  }


  /**
   * BoxFlasherSession delete
   */
  export type BoxFlasherSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
    /**
     * Filter which BoxFlasherSession to delete.
     */
    where: BoxFlasherSessionWhereUniqueInput
  }


  /**
   * BoxFlasherSession deleteMany
   */
  export type BoxFlasherSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoxFlasherSessions to delete
     */
    where?: BoxFlasherSessionWhereInput
  }


  /**
   * BoxFlasherSession without action
   */
  export type BoxFlasherSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxFlasherSession
     */
    select?: BoxFlasherSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BoxFlasherSessionInclude<ExtArgs> | null
  }



  /**
   * Model GreenDotSession
   */


  export type AggregateGreenDotSession = {
    _count: GreenDotSessionCountAggregateOutputType | null
    _min: GreenDotSessionMinAggregateOutputType | null
    _max: GreenDotSessionMaxAggregateOutputType | null
  }

  export type GreenDotSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    platform: string | null
  }

  export type GreenDotSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    platform: string | null
  }

  export type GreenDotSessionCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    platform: number
    _all: number
  }


  export type GreenDotSessionMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    platform?: true
  }

  export type GreenDotSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    platform?: true
  }

  export type GreenDotSessionCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    platform?: true
    _all?: true
  }

  export type GreenDotSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GreenDotSession to aggregate.
     */
    where?: GreenDotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GreenDotSessions to fetch.
     */
    orderBy?: Enumerable<GreenDotSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GreenDotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GreenDotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GreenDotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GreenDotSessions
    **/
    _count?: true | GreenDotSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GreenDotSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GreenDotSessionMaxAggregateInputType
  }

  export type GetGreenDotSessionAggregateType<T extends GreenDotSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGreenDotSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGreenDotSession[P]>
      : GetScalarType<T[P], AggregateGreenDotSession[P]>
  }




  export type GreenDotSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GreenDotSessionWhereInput
    orderBy?: Enumerable<GreenDotSessionOrderByWithAggregationInput>
    by: GreenDotSessionScalarFieldEnum[]
    having?: GreenDotSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GreenDotSessionCountAggregateInputType | true
    _min?: GreenDotSessionMinAggregateInputType
    _max?: GreenDotSessionMaxAggregateInputType
  }


  export type GreenDotSessionGroupByOutputType = {
    id: string
    userId: string
    date: Date
    platform: string
    _count: GreenDotSessionCountAggregateOutputType | null
    _min: GreenDotSessionMinAggregateOutputType | null
    _max: GreenDotSessionMaxAggregateOutputType | null
  }

  type GetGreenDotSessionGroupByPayload<T extends GreenDotSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GreenDotSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GreenDotSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GreenDotSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GreenDotSessionGroupByOutputType[P]>
        }
      >
    >


  export type GreenDotSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["greenDotSession"]>

  export type GreenDotSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    platform?: boolean
  }

  export type GreenDotSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type GreenDotSessionGetPayload<S extends boolean | null | undefined | GreenDotSessionArgs> = $Types.GetResult<GreenDotSessionPayload, S>

  type GreenDotSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GreenDotSessionFindManyArgs, 'select' | 'include'> & {
      select?: GreenDotSessionCountAggregateInputType | true
    }

  export interface GreenDotSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GreenDotSession'], meta: { name: 'GreenDotSession' } }
    /**
     * Find zero or one GreenDotSession that matches the filter.
     * @param {GreenDotSessionFindUniqueArgs} args - Arguments to find a GreenDotSession
     * @example
     * // Get one GreenDotSession
     * const greenDotSession = await prisma.greenDotSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GreenDotSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GreenDotSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GreenDotSession'> extends True ? Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one GreenDotSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GreenDotSessionFindUniqueOrThrowArgs} args - Arguments to find a GreenDotSession
     * @example
     * // Get one GreenDotSession
     * const greenDotSession = await prisma.greenDotSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GreenDotSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenDotSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first GreenDotSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionFindFirstArgs} args - Arguments to find a GreenDotSession
     * @example
     * // Get one GreenDotSession
     * const greenDotSession = await prisma.greenDotSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GreenDotSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GreenDotSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GreenDotSession'> extends True ? Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first GreenDotSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionFindFirstOrThrowArgs} args - Arguments to find a GreenDotSession
     * @example
     * // Get one GreenDotSession
     * const greenDotSession = await prisma.greenDotSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GreenDotSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenDotSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more GreenDotSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GreenDotSessions
     * const greenDotSessions = await prisma.greenDotSession.findMany()
     * 
     * // Get first 10 GreenDotSessions
     * const greenDotSessions = await prisma.greenDotSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const greenDotSessionWithIdOnly = await prisma.greenDotSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GreenDotSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenDotSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a GreenDotSession.
     * @param {GreenDotSessionCreateArgs} args - Arguments to create a GreenDotSession.
     * @example
     * // Create one GreenDotSession
     * const GreenDotSession = await prisma.greenDotSession.create({
     *   data: {
     *     // ... data to create a GreenDotSession
     *   }
     * })
     * 
    **/
    create<T extends GreenDotSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GreenDotSessionCreateArgs<ExtArgs>>
    ): Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many GreenDotSessions.
     *     @param {GreenDotSessionCreateManyArgs} args - Arguments to create many GreenDotSessions.
     *     @example
     *     // Create many GreenDotSessions
     *     const greenDotSession = await prisma.greenDotSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GreenDotSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenDotSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GreenDotSession.
     * @param {GreenDotSessionDeleteArgs} args - Arguments to delete one GreenDotSession.
     * @example
     * // Delete one GreenDotSession
     * const GreenDotSession = await prisma.greenDotSession.delete({
     *   where: {
     *     // ... filter to delete one GreenDotSession
     *   }
     * })
     * 
    **/
    delete<T extends GreenDotSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GreenDotSessionDeleteArgs<ExtArgs>>
    ): Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one GreenDotSession.
     * @param {GreenDotSessionUpdateArgs} args - Arguments to update one GreenDotSession.
     * @example
     * // Update one GreenDotSession
     * const greenDotSession = await prisma.greenDotSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GreenDotSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GreenDotSessionUpdateArgs<ExtArgs>>
    ): Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more GreenDotSessions.
     * @param {GreenDotSessionDeleteManyArgs} args - Arguments to filter GreenDotSessions to delete.
     * @example
     * // Delete a few GreenDotSessions
     * const { count } = await prisma.greenDotSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GreenDotSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GreenDotSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GreenDotSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GreenDotSessions
     * const greenDotSession = await prisma.greenDotSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GreenDotSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GreenDotSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GreenDotSession.
     * @param {GreenDotSessionUpsertArgs} args - Arguments to update or create a GreenDotSession.
     * @example
     * // Update or create a GreenDotSession
     * const greenDotSession = await prisma.greenDotSession.upsert({
     *   create: {
     *     // ... data to create a GreenDotSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GreenDotSession we want to update
     *   }
     * })
    **/
    upsert<T extends GreenDotSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GreenDotSessionUpsertArgs<ExtArgs>>
    ): Prisma__GreenDotSessionClient<$Types.GetResult<GreenDotSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of GreenDotSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionCountArgs} args - Arguments to filter GreenDotSessions to count.
     * @example
     * // Count the number of GreenDotSessions
     * const count = await prisma.greenDotSession.count({
     *   where: {
     *     // ... the filter for the GreenDotSessions we want to count
     *   }
     * })
    **/
    count<T extends GreenDotSessionCountArgs>(
      args?: Subset<T, GreenDotSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GreenDotSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GreenDotSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GreenDotSessionAggregateArgs>(args: Subset<T, GreenDotSessionAggregateArgs>): Prisma.PrismaPromise<GetGreenDotSessionAggregateType<T>>

    /**
     * Group by GreenDotSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GreenDotSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GreenDotSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GreenDotSessionGroupByArgs['orderBy'] }
        : { orderBy?: GreenDotSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GreenDotSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGreenDotSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GreenDotSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GreenDotSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GreenDotSession base type for findUnique actions
   */
  export type GreenDotSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * Filter, which GreenDotSession to fetch.
     */
    where: GreenDotSessionWhereUniqueInput
  }

  /**
   * GreenDotSession findUnique
   */
  export interface GreenDotSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GreenDotSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GreenDotSession findUniqueOrThrow
   */
  export type GreenDotSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * Filter, which GreenDotSession to fetch.
     */
    where: GreenDotSessionWhereUniqueInput
  }


  /**
   * GreenDotSession base type for findFirst actions
   */
  export type GreenDotSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * Filter, which GreenDotSession to fetch.
     */
    where?: GreenDotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GreenDotSessions to fetch.
     */
    orderBy?: Enumerable<GreenDotSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GreenDotSessions.
     */
    cursor?: GreenDotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GreenDotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GreenDotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GreenDotSessions.
     */
    distinct?: Enumerable<GreenDotSessionScalarFieldEnum>
  }

  /**
   * GreenDotSession findFirst
   */
  export interface GreenDotSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GreenDotSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GreenDotSession findFirstOrThrow
   */
  export type GreenDotSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * Filter, which GreenDotSession to fetch.
     */
    where?: GreenDotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GreenDotSessions to fetch.
     */
    orderBy?: Enumerable<GreenDotSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GreenDotSessions.
     */
    cursor?: GreenDotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GreenDotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GreenDotSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GreenDotSessions.
     */
    distinct?: Enumerable<GreenDotSessionScalarFieldEnum>
  }


  /**
   * GreenDotSession findMany
   */
  export type GreenDotSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * Filter, which GreenDotSessions to fetch.
     */
    where?: GreenDotSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GreenDotSessions to fetch.
     */
    orderBy?: Enumerable<GreenDotSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GreenDotSessions.
     */
    cursor?: GreenDotSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GreenDotSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GreenDotSessions.
     */
    skip?: number
    distinct?: Enumerable<GreenDotSessionScalarFieldEnum>
  }


  /**
   * GreenDotSession create
   */
  export type GreenDotSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GreenDotSession.
     */
    data: XOR<GreenDotSessionCreateInput, GreenDotSessionUncheckedCreateInput>
  }


  /**
   * GreenDotSession createMany
   */
  export type GreenDotSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GreenDotSessions.
     */
    data: Enumerable<GreenDotSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GreenDotSession update
   */
  export type GreenDotSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GreenDotSession.
     */
    data: XOR<GreenDotSessionUpdateInput, GreenDotSessionUncheckedUpdateInput>
    /**
     * Choose, which GreenDotSession to update.
     */
    where: GreenDotSessionWhereUniqueInput
  }


  /**
   * GreenDotSession updateMany
   */
  export type GreenDotSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GreenDotSessions.
     */
    data: XOR<GreenDotSessionUpdateManyMutationInput, GreenDotSessionUncheckedUpdateManyInput>
    /**
     * Filter which GreenDotSessions to update
     */
    where?: GreenDotSessionWhereInput
  }


  /**
   * GreenDotSession upsert
   */
  export type GreenDotSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GreenDotSession to update in case it exists.
     */
    where: GreenDotSessionWhereUniqueInput
    /**
     * In case the GreenDotSession found by the `where` argument doesn't exist, create a new GreenDotSession with this data.
     */
    create: XOR<GreenDotSessionCreateInput, GreenDotSessionUncheckedCreateInput>
    /**
     * In case the GreenDotSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GreenDotSessionUpdateInput, GreenDotSessionUncheckedUpdateInput>
  }


  /**
   * GreenDotSession delete
   */
  export type GreenDotSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
    /**
     * Filter which GreenDotSession to delete.
     */
    where: GreenDotSessionWhereUniqueInput
  }


  /**
   * GreenDotSession deleteMany
   */
  export type GreenDotSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GreenDotSessions to delete
     */
    where?: GreenDotSessionWhereInput
  }


  /**
   * GreenDotSession without action
   */
  export type GreenDotSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GreenDotSession
     */
    select?: GreenDotSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GreenDotSessionInclude<ExtArgs> | null
  }



  /**
   * Model PairsSession
   */


  export type AggregatePairsSession = {
    _count: PairsSessionCountAggregateOutputType | null
    _avg: PairsSessionAvgAggregateOutputType | null
    _sum: PairsSessionSumAggregateOutputType | null
    _min: PairsSessionMinAggregateOutputType | null
    _max: PairsSessionMaxAggregateOutputType | null
  }

  export type PairsSessionAvgAggregateOutputType = {
    time: number | null
    errorCount: number | null
  }

  export type PairsSessionSumAggregateOutputType = {
    time: number | null
    errorCount: number | null
  }

  export type PairsSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    time: number | null
    errorCount: number | null
    platform: string | null
  }

  export type PairsSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    time: number | null
    errorCount: number | null
    platform: string | null
  }

  export type PairsSessionCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    time: number
    errorCount: number
    platform: number
    _all: number
  }


  export type PairsSessionAvgAggregateInputType = {
    time?: true
    errorCount?: true
  }

  export type PairsSessionSumAggregateInputType = {
    time?: true
    errorCount?: true
  }

  export type PairsSessionMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    time?: true
    errorCount?: true
    platform?: true
  }

  export type PairsSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    time?: true
    errorCount?: true
    platform?: true
  }

  export type PairsSessionCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    time?: true
    errorCount?: true
    platform?: true
    _all?: true
  }

  export type PairsSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairsSession to aggregate.
     */
    where?: PairsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairsSessions to fetch.
     */
    orderBy?: Enumerable<PairsSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PairsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PairsSessions
    **/
    _count?: true | PairsSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PairsSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PairsSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PairsSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PairsSessionMaxAggregateInputType
  }

  export type GetPairsSessionAggregateType<T extends PairsSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePairsSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePairsSession[P]>
      : GetScalarType<T[P], AggregatePairsSession[P]>
  }




  export type PairsSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PairsSessionWhereInput
    orderBy?: Enumerable<PairsSessionOrderByWithAggregationInput>
    by: PairsSessionScalarFieldEnum[]
    having?: PairsSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PairsSessionCountAggregateInputType | true
    _avg?: PairsSessionAvgAggregateInputType
    _sum?: PairsSessionSumAggregateInputType
    _min?: PairsSessionMinAggregateInputType
    _max?: PairsSessionMaxAggregateInputType
  }


  export type PairsSessionGroupByOutputType = {
    id: string
    userId: string
    date: Date
    time: number
    errorCount: number
    platform: string
    _count: PairsSessionCountAggregateOutputType | null
    _avg: PairsSessionAvgAggregateOutputType | null
    _sum: PairsSessionSumAggregateOutputType | null
    _min: PairsSessionMinAggregateOutputType | null
    _max: PairsSessionMaxAggregateOutputType | null
  }

  type GetPairsSessionGroupByPayload<T extends PairsSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PairsSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PairsSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PairsSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PairsSessionGroupByOutputType[P]>
        }
      >
    >


  export type PairsSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    time?: boolean
    errorCount?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["pairsSession"]>

  export type PairsSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    time?: boolean
    errorCount?: boolean
    platform?: boolean
  }

  export type PairsSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type PairsSessionGetPayload<S extends boolean | null | undefined | PairsSessionArgs> = $Types.GetResult<PairsSessionPayload, S>

  type PairsSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PairsSessionFindManyArgs, 'select' | 'include'> & {
      select?: PairsSessionCountAggregateInputType | true
    }

  export interface PairsSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PairsSession'], meta: { name: 'PairsSession' } }
    /**
     * Find zero or one PairsSession that matches the filter.
     * @param {PairsSessionFindUniqueArgs} args - Arguments to find a PairsSession
     * @example
     * // Get one PairsSession
     * const pairsSession = await prisma.pairsSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PairsSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PairsSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PairsSession'> extends True ? Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one PairsSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PairsSessionFindUniqueOrThrowArgs} args - Arguments to find a PairsSession
     * @example
     * // Get one PairsSession
     * const pairsSession = await prisma.pairsSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PairsSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PairsSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first PairsSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionFindFirstArgs} args - Arguments to find a PairsSession
     * @example
     * // Get one PairsSession
     * const pairsSession = await prisma.pairsSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PairsSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PairsSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PairsSession'> extends True ? Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first PairsSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionFindFirstOrThrowArgs} args - Arguments to find a PairsSession
     * @example
     * // Get one PairsSession
     * const pairsSession = await prisma.pairsSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PairsSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PairsSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more PairsSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PairsSessions
     * const pairsSessions = await prisma.pairsSession.findMany()
     * 
     * // Get first 10 PairsSessions
     * const pairsSessions = await prisma.pairsSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pairsSessionWithIdOnly = await prisma.pairsSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PairsSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PairsSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a PairsSession.
     * @param {PairsSessionCreateArgs} args - Arguments to create a PairsSession.
     * @example
     * // Create one PairsSession
     * const PairsSession = await prisma.pairsSession.create({
     *   data: {
     *     // ... data to create a PairsSession
     *   }
     * })
     * 
    **/
    create<T extends PairsSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PairsSessionCreateArgs<ExtArgs>>
    ): Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many PairsSessions.
     *     @param {PairsSessionCreateManyArgs} args - Arguments to create many PairsSessions.
     *     @example
     *     // Create many PairsSessions
     *     const pairsSession = await prisma.pairsSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PairsSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PairsSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PairsSession.
     * @param {PairsSessionDeleteArgs} args - Arguments to delete one PairsSession.
     * @example
     * // Delete one PairsSession
     * const PairsSession = await prisma.pairsSession.delete({
     *   where: {
     *     // ... filter to delete one PairsSession
     *   }
     * })
     * 
    **/
    delete<T extends PairsSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PairsSessionDeleteArgs<ExtArgs>>
    ): Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one PairsSession.
     * @param {PairsSessionUpdateArgs} args - Arguments to update one PairsSession.
     * @example
     * // Update one PairsSession
     * const pairsSession = await prisma.pairsSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PairsSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PairsSessionUpdateArgs<ExtArgs>>
    ): Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more PairsSessions.
     * @param {PairsSessionDeleteManyArgs} args - Arguments to filter PairsSessions to delete.
     * @example
     * // Delete a few PairsSessions
     * const { count } = await prisma.pairsSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PairsSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PairsSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PairsSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PairsSessions
     * const pairsSession = await prisma.pairsSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PairsSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PairsSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PairsSession.
     * @param {PairsSessionUpsertArgs} args - Arguments to update or create a PairsSession.
     * @example
     * // Update or create a PairsSession
     * const pairsSession = await prisma.pairsSession.upsert({
     *   create: {
     *     // ... data to create a PairsSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PairsSession we want to update
     *   }
     * })
    **/
    upsert<T extends PairsSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PairsSessionUpsertArgs<ExtArgs>>
    ): Prisma__PairsSessionClient<$Types.GetResult<PairsSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of PairsSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionCountArgs} args - Arguments to filter PairsSessions to count.
     * @example
     * // Count the number of PairsSessions
     * const count = await prisma.pairsSession.count({
     *   where: {
     *     // ... the filter for the PairsSessions we want to count
     *   }
     * })
    **/
    count<T extends PairsSessionCountArgs>(
      args?: Subset<T, PairsSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PairsSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PairsSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PairsSessionAggregateArgs>(args: Subset<T, PairsSessionAggregateArgs>): Prisma.PrismaPromise<GetPairsSessionAggregateType<T>>

    /**
     * Group by PairsSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PairsSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PairsSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PairsSessionGroupByArgs['orderBy'] }
        : { orderBy?: PairsSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PairsSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPairsSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PairsSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PairsSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PairsSession base type for findUnique actions
   */
  export type PairsSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairsSession to fetch.
     */
    where: PairsSessionWhereUniqueInput
  }

  /**
   * PairsSession findUnique
   */
  export interface PairsSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PairsSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PairsSession findUniqueOrThrow
   */
  export type PairsSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairsSession to fetch.
     */
    where: PairsSessionWhereUniqueInput
  }


  /**
   * PairsSession base type for findFirst actions
   */
  export type PairsSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairsSession to fetch.
     */
    where?: PairsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairsSessions to fetch.
     */
    orderBy?: Enumerable<PairsSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairsSessions.
     */
    cursor?: PairsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairsSessions.
     */
    distinct?: Enumerable<PairsSessionScalarFieldEnum>
  }

  /**
   * PairsSession findFirst
   */
  export interface PairsSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PairsSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PairsSession findFirstOrThrow
   */
  export type PairsSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairsSession to fetch.
     */
    where?: PairsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairsSessions to fetch.
     */
    orderBy?: Enumerable<PairsSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PairsSessions.
     */
    cursor?: PairsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairsSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PairsSessions.
     */
    distinct?: Enumerable<PairsSessionScalarFieldEnum>
  }


  /**
   * PairsSession findMany
   */
  export type PairsSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * Filter, which PairsSessions to fetch.
     */
    where?: PairsSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PairsSessions to fetch.
     */
    orderBy?: Enumerable<PairsSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PairsSessions.
     */
    cursor?: PairsSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PairsSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PairsSessions.
     */
    skip?: number
    distinct?: Enumerable<PairsSessionScalarFieldEnum>
  }


  /**
   * PairsSession create
   */
  export type PairsSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PairsSession.
     */
    data: XOR<PairsSessionCreateInput, PairsSessionUncheckedCreateInput>
  }


  /**
   * PairsSession createMany
   */
  export type PairsSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PairsSessions.
     */
    data: Enumerable<PairsSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PairsSession update
   */
  export type PairsSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PairsSession.
     */
    data: XOR<PairsSessionUpdateInput, PairsSessionUncheckedUpdateInput>
    /**
     * Choose, which PairsSession to update.
     */
    where: PairsSessionWhereUniqueInput
  }


  /**
   * PairsSession updateMany
   */
  export type PairsSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PairsSessions.
     */
    data: XOR<PairsSessionUpdateManyMutationInput, PairsSessionUncheckedUpdateManyInput>
    /**
     * Filter which PairsSessions to update
     */
    where?: PairsSessionWhereInput
  }


  /**
   * PairsSession upsert
   */
  export type PairsSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PairsSession to update in case it exists.
     */
    where: PairsSessionWhereUniqueInput
    /**
     * In case the PairsSession found by the `where` argument doesn't exist, create a new PairsSession with this data.
     */
    create: XOR<PairsSessionCreateInput, PairsSessionUncheckedCreateInput>
    /**
     * In case the PairsSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PairsSessionUpdateInput, PairsSessionUncheckedUpdateInput>
  }


  /**
   * PairsSession delete
   */
  export type PairsSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
    /**
     * Filter which PairsSession to delete.
     */
    where: PairsSessionWhereUniqueInput
  }


  /**
   * PairsSession deleteMany
   */
  export type PairsSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PairsSessions to delete
     */
    where?: PairsSessionWhereInput
  }


  /**
   * PairsSession without action
   */
  export type PairsSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PairsSession
     */
    select?: PairsSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PairsSessionInclude<ExtArgs> | null
  }



  /**
   * Model SpeedTestSession
   */


  export type AggregateSpeedTestSession = {
    _count: SpeedTestSessionCountAggregateOutputType | null
    _avg: SpeedTestSessionAvgAggregateOutputType | null
    _sum: SpeedTestSessionSumAggregateOutputType | null
    _min: SpeedTestSessionMinAggregateOutputType | null
    _max: SpeedTestSessionMaxAggregateOutputType | null
  }

  export type SpeedTestSessionAvgAggregateOutputType = {
    startSpeed: number | null
    endSpeed: number | null
    errorCount: number | null
  }

  export type SpeedTestSessionSumAggregateOutputType = {
    startSpeed: number | null
    endSpeed: number | null
    errorCount: number | null
  }

  export type SpeedTestSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startSpeed: number | null
    endSpeed: number | null
    date: Date | null
    errorCount: number | null
    platform: string | null
  }

  export type SpeedTestSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startSpeed: number | null
    endSpeed: number | null
    date: Date | null
    errorCount: number | null
    platform: string | null
  }

  export type SpeedTestSessionCountAggregateOutputType = {
    id: number
    userId: number
    startSpeed: number
    endSpeed: number
    date: number
    errorCount: number
    platform: number
    _all: number
  }


  export type SpeedTestSessionAvgAggregateInputType = {
    startSpeed?: true
    endSpeed?: true
    errorCount?: true
  }

  export type SpeedTestSessionSumAggregateInputType = {
    startSpeed?: true
    endSpeed?: true
    errorCount?: true
  }

  export type SpeedTestSessionMinAggregateInputType = {
    id?: true
    userId?: true
    startSpeed?: true
    endSpeed?: true
    date?: true
    errorCount?: true
    platform?: true
  }

  export type SpeedTestSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    startSpeed?: true
    endSpeed?: true
    date?: true
    errorCount?: true
    platform?: true
  }

  export type SpeedTestSessionCountAggregateInputType = {
    id?: true
    userId?: true
    startSpeed?: true
    endSpeed?: true
    date?: true
    errorCount?: true
    platform?: true
    _all?: true
  }

  export type SpeedTestSessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeedTestSession to aggregate.
     */
    where?: SpeedTestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTestSessions to fetch.
     */
    orderBy?: Enumerable<SpeedTestSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeedTestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeedTestSessions
    **/
    _count?: true | SpeedTestSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeedTestSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeedTestSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeedTestSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeedTestSessionMaxAggregateInputType
  }

  export type GetSpeedTestSessionAggregateType<T extends SpeedTestSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeedTestSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeedTestSession[P]>
      : GetScalarType<T[P], AggregateSpeedTestSession[P]>
  }




  export type SpeedTestSessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SpeedTestSessionWhereInput
    orderBy?: Enumerable<SpeedTestSessionOrderByWithAggregationInput>
    by: SpeedTestSessionScalarFieldEnum[]
    having?: SpeedTestSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeedTestSessionCountAggregateInputType | true
    _avg?: SpeedTestSessionAvgAggregateInputType
    _sum?: SpeedTestSessionSumAggregateInputType
    _min?: SpeedTestSessionMinAggregateInputType
    _max?: SpeedTestSessionMaxAggregateInputType
  }


  export type SpeedTestSessionGroupByOutputType = {
    id: string
    userId: string
    startSpeed: number
    endSpeed: number
    date: Date
    errorCount: number
    platform: string
    _count: SpeedTestSessionCountAggregateOutputType | null
    _avg: SpeedTestSessionAvgAggregateOutputType | null
    _sum: SpeedTestSessionSumAggregateOutputType | null
    _min: SpeedTestSessionMinAggregateOutputType | null
    _max: SpeedTestSessionMaxAggregateOutputType | null
  }

  type GetSpeedTestSessionGroupByPayload<T extends SpeedTestSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SpeedTestSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeedTestSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeedTestSessionGroupByOutputType[P]>
            : GetScalarType<T[P], SpeedTestSessionGroupByOutputType[P]>
        }
      >
    >


  export type SpeedTestSessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startSpeed?: boolean
    endSpeed?: boolean
    date?: boolean
    errorCount?: boolean
    platform?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["speedTestSession"]>

  export type SpeedTestSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    startSpeed?: boolean
    endSpeed?: boolean
    date?: boolean
    errorCount?: boolean
    platform?: boolean
  }

  export type SpeedTestSessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }


  type SpeedTestSessionGetPayload<S extends boolean | null | undefined | SpeedTestSessionArgs> = $Types.GetResult<SpeedTestSessionPayload, S>

  type SpeedTestSessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SpeedTestSessionFindManyArgs, 'select' | 'include'> & {
      select?: SpeedTestSessionCountAggregateInputType | true
    }

  export interface SpeedTestSessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeedTestSession'], meta: { name: 'SpeedTestSession' } }
    /**
     * Find zero or one SpeedTestSession that matches the filter.
     * @param {SpeedTestSessionFindUniqueArgs} args - Arguments to find a SpeedTestSession
     * @example
     * // Get one SpeedTestSession
     * const speedTestSession = await prisma.speedTestSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpeedTestSessionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpeedTestSessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SpeedTestSession'> extends True ? Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SpeedTestSession that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpeedTestSessionFindUniqueOrThrowArgs} args - Arguments to find a SpeedTestSession
     * @example
     * // Get one SpeedTestSession
     * const speedTestSession = await prisma.speedTestSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpeedTestSessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedTestSessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SpeedTestSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionFindFirstArgs} args - Arguments to find a SpeedTestSession
     * @example
     * // Get one SpeedTestSession
     * const speedTestSession = await prisma.speedTestSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpeedTestSessionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpeedTestSessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SpeedTestSession'> extends True ? Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SpeedTestSession that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionFindFirstOrThrowArgs} args - Arguments to find a SpeedTestSession
     * @example
     * // Get one SpeedTestSession
     * const speedTestSession = await prisma.speedTestSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpeedTestSessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedTestSessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SpeedTestSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeedTestSessions
     * const speedTestSessions = await prisma.speedTestSession.findMany()
     * 
     * // Get first 10 SpeedTestSessions
     * const speedTestSessions = await prisma.speedTestSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speedTestSessionWithIdOnly = await prisma.speedTestSession.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpeedTestSessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedTestSessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SpeedTestSession.
     * @param {SpeedTestSessionCreateArgs} args - Arguments to create a SpeedTestSession.
     * @example
     * // Create one SpeedTestSession
     * const SpeedTestSession = await prisma.speedTestSession.create({
     *   data: {
     *     // ... data to create a SpeedTestSession
     *   }
     * })
     * 
    **/
    create<T extends SpeedTestSessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedTestSessionCreateArgs<ExtArgs>>
    ): Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SpeedTestSessions.
     *     @param {SpeedTestSessionCreateManyArgs} args - Arguments to create many SpeedTestSessions.
     *     @example
     *     // Create many SpeedTestSessions
     *     const speedTestSession = await prisma.speedTestSession.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpeedTestSessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedTestSessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpeedTestSession.
     * @param {SpeedTestSessionDeleteArgs} args - Arguments to delete one SpeedTestSession.
     * @example
     * // Delete one SpeedTestSession
     * const SpeedTestSession = await prisma.speedTestSession.delete({
     *   where: {
     *     // ... filter to delete one SpeedTestSession
     *   }
     * })
     * 
    **/
    delete<T extends SpeedTestSessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedTestSessionDeleteArgs<ExtArgs>>
    ): Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SpeedTestSession.
     * @param {SpeedTestSessionUpdateArgs} args - Arguments to update one SpeedTestSession.
     * @example
     * // Update one SpeedTestSession
     * const speedTestSession = await prisma.speedTestSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpeedTestSessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedTestSessionUpdateArgs<ExtArgs>>
    ): Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SpeedTestSessions.
     * @param {SpeedTestSessionDeleteManyArgs} args - Arguments to filter SpeedTestSessions to delete.
     * @example
     * // Delete a few SpeedTestSessions
     * const { count } = await prisma.speedTestSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpeedTestSessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedTestSessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeedTestSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeedTestSessions
     * const speedTestSession = await prisma.speedTestSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpeedTestSessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedTestSessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpeedTestSession.
     * @param {SpeedTestSessionUpsertArgs} args - Arguments to update or create a SpeedTestSession.
     * @example
     * // Update or create a SpeedTestSession
     * const speedTestSession = await prisma.speedTestSession.upsert({
     *   create: {
     *     // ... data to create a SpeedTestSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeedTestSession we want to update
     *   }
     * })
    **/
    upsert<T extends SpeedTestSessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedTestSessionUpsertArgs<ExtArgs>>
    ): Prisma__SpeedTestSessionClient<$Types.GetResult<SpeedTestSessionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SpeedTestSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionCountArgs} args - Arguments to filter SpeedTestSessions to count.
     * @example
     * // Count the number of SpeedTestSessions
     * const count = await prisma.speedTestSession.count({
     *   where: {
     *     // ... the filter for the SpeedTestSessions we want to count
     *   }
     * })
    **/
    count<T extends SpeedTestSessionCountArgs>(
      args?: Subset<T, SpeedTestSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeedTestSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeedTestSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeedTestSessionAggregateArgs>(args: Subset<T, SpeedTestSessionAggregateArgs>): Prisma.PrismaPromise<GetSpeedTestSessionAggregateType<T>>

    /**
     * Group by SpeedTestSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeedTestSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeedTestSessionGroupByArgs['orderBy'] }
        : { orderBy?: SpeedTestSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeedTestSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeedTestSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeedTestSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpeedTestSessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SpeedTestSession base type for findUnique actions
   */
  export type SpeedTestSessionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeedTestSession to fetch.
     */
    where: SpeedTestSessionWhereUniqueInput
  }

  /**
   * SpeedTestSession findUnique
   */
  export interface SpeedTestSessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SpeedTestSessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpeedTestSession findUniqueOrThrow
   */
  export type SpeedTestSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeedTestSession to fetch.
     */
    where: SpeedTestSessionWhereUniqueInput
  }


  /**
   * SpeedTestSession base type for findFirst actions
   */
  export type SpeedTestSessionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeedTestSession to fetch.
     */
    where?: SpeedTestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTestSessions to fetch.
     */
    orderBy?: Enumerable<SpeedTestSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeedTestSessions.
     */
    cursor?: SpeedTestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeedTestSessions.
     */
    distinct?: Enumerable<SpeedTestSessionScalarFieldEnum>
  }

  /**
   * SpeedTestSession findFirst
   */
  export interface SpeedTestSessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SpeedTestSessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpeedTestSession findFirstOrThrow
   */
  export type SpeedTestSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeedTestSession to fetch.
     */
    where?: SpeedTestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTestSessions to fetch.
     */
    orderBy?: Enumerable<SpeedTestSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeedTestSessions.
     */
    cursor?: SpeedTestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTestSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeedTestSessions.
     */
    distinct?: Enumerable<SpeedTestSessionScalarFieldEnum>
  }


  /**
   * SpeedTestSession findMany
   */
  export type SpeedTestSessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * Filter, which SpeedTestSessions to fetch.
     */
    where?: SpeedTestSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTestSessions to fetch.
     */
    orderBy?: Enumerable<SpeedTestSessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeedTestSessions.
     */
    cursor?: SpeedTestSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTestSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTestSessions.
     */
    skip?: number
    distinct?: Enumerable<SpeedTestSessionScalarFieldEnum>
  }


  /**
   * SpeedTestSession create
   */
  export type SpeedTestSessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a SpeedTestSession.
     */
    data: XOR<SpeedTestSessionCreateInput, SpeedTestSessionUncheckedCreateInput>
  }


  /**
   * SpeedTestSession createMany
   */
  export type SpeedTestSessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeedTestSessions.
     */
    data: Enumerable<SpeedTestSessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SpeedTestSession update
   */
  export type SpeedTestSessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a SpeedTestSession.
     */
    data: XOR<SpeedTestSessionUpdateInput, SpeedTestSessionUncheckedUpdateInput>
    /**
     * Choose, which SpeedTestSession to update.
     */
    where: SpeedTestSessionWhereUniqueInput
  }


  /**
   * SpeedTestSession updateMany
   */
  export type SpeedTestSessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeedTestSessions.
     */
    data: XOR<SpeedTestSessionUpdateManyMutationInput, SpeedTestSessionUncheckedUpdateManyInput>
    /**
     * Filter which SpeedTestSessions to update
     */
    where?: SpeedTestSessionWhereInput
  }


  /**
   * SpeedTestSession upsert
   */
  export type SpeedTestSessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the SpeedTestSession to update in case it exists.
     */
    where: SpeedTestSessionWhereUniqueInput
    /**
     * In case the SpeedTestSession found by the `where` argument doesn't exist, create a new SpeedTestSession with this data.
     */
    create: XOR<SpeedTestSessionCreateInput, SpeedTestSessionUncheckedCreateInput>
    /**
     * In case the SpeedTestSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeedTestSessionUpdateInput, SpeedTestSessionUncheckedUpdateInput>
  }


  /**
   * SpeedTestSession delete
   */
  export type SpeedTestSessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
    /**
     * Filter which SpeedTestSession to delete.
     */
    where: SpeedTestSessionWhereUniqueInput
  }


  /**
   * SpeedTestSession deleteMany
   */
  export type SpeedTestSessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeedTestSessions to delete
     */
    where?: SpeedTestSessionWhereInput
  }


  /**
   * SpeedTestSession without action
   */
  export type SpeedTestSessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTestSession
     */
    select?: SpeedTestSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SpeedTestSessionInclude<ExtArgs> | null
  }



  /**
   * Model SpeedQuestion
   */


  export type AggregateSpeedQuestion = {
    _count: SpeedQuestionCountAggregateOutputType | null
    _avg: SpeedQuestionAvgAggregateOutputType | null
    _sum: SpeedQuestionSumAggregateOutputType | null
    _min: SpeedQuestionMinAggregateOutputType | null
    _max: SpeedQuestionMaxAggregateOutputType | null
  }

  export type SpeedQuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type SpeedQuestionSumAggregateOutputType = {
    id: number | null
  }

  export type SpeedQuestionMinAggregateOutputType = {
    id: number | null
    passage: string | null
    question: string | null
    answerA: string | null
    answerB: string | null
    answerC: string | null
    answerD: string | null
    correctAnswer: string | null
    language: Language | null
  }

  export type SpeedQuestionMaxAggregateOutputType = {
    id: number | null
    passage: string | null
    question: string | null
    answerA: string | null
    answerB: string | null
    answerC: string | null
    answerD: string | null
    correctAnswer: string | null
    language: Language | null
  }

  export type SpeedQuestionCountAggregateOutputType = {
    id: number
    passage: number
    question: number
    answerA: number
    answerB: number
    answerC: number
    answerD: number
    correctAnswer: number
    language: number
    _all: number
  }


  export type SpeedQuestionAvgAggregateInputType = {
    id?: true
  }

  export type SpeedQuestionSumAggregateInputType = {
    id?: true
  }

  export type SpeedQuestionMinAggregateInputType = {
    id?: true
    passage?: true
    question?: true
    answerA?: true
    answerB?: true
    answerC?: true
    answerD?: true
    correctAnswer?: true
    language?: true
  }

  export type SpeedQuestionMaxAggregateInputType = {
    id?: true
    passage?: true
    question?: true
    answerA?: true
    answerB?: true
    answerC?: true
    answerD?: true
    correctAnswer?: true
    language?: true
  }

  export type SpeedQuestionCountAggregateInputType = {
    id?: true
    passage?: true
    question?: true
    answerA?: true
    answerB?: true
    answerC?: true
    answerD?: true
    correctAnswer?: true
    language?: true
    _all?: true
  }

  export type SpeedQuestionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeedQuestion to aggregate.
     */
    where?: SpeedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedQuestions to fetch.
     */
    orderBy?: Enumerable<SpeedQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeedQuestions
    **/
    _count?: true | SpeedQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeedQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeedQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeedQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeedQuestionMaxAggregateInputType
  }

  export type GetSpeedQuestionAggregateType<T extends SpeedQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeedQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeedQuestion[P]>
      : GetScalarType<T[P], AggregateSpeedQuestion[P]>
  }




  export type SpeedQuestionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SpeedQuestionWhereInput
    orderBy?: Enumerable<SpeedQuestionOrderByWithAggregationInput>
    by: SpeedQuestionScalarFieldEnum[]
    having?: SpeedQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeedQuestionCountAggregateInputType | true
    _avg?: SpeedQuestionAvgAggregateInputType
    _sum?: SpeedQuestionSumAggregateInputType
    _min?: SpeedQuestionMinAggregateInputType
    _max?: SpeedQuestionMaxAggregateInputType
  }


  export type SpeedQuestionGroupByOutputType = {
    id: number
    passage: string
    question: string
    answerA: string
    answerB: string
    answerC: string
    answerD: string
    correctAnswer: string
    language: Language
    _count: SpeedQuestionCountAggregateOutputType | null
    _avg: SpeedQuestionAvgAggregateOutputType | null
    _sum: SpeedQuestionSumAggregateOutputType | null
    _min: SpeedQuestionMinAggregateOutputType | null
    _max: SpeedQuestionMaxAggregateOutputType | null
  }

  type GetSpeedQuestionGroupByPayload<T extends SpeedQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SpeedQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeedQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeedQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], SpeedQuestionGroupByOutputType[P]>
        }
      >
    >


  export type SpeedQuestionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passage?: boolean
    question?: boolean
    answerA?: boolean
    answerB?: boolean
    answerC?: boolean
    answerD?: boolean
    correctAnswer?: boolean
    language?: boolean
  }, ExtArgs["result"]["speedQuestion"]>

  export type SpeedQuestionSelectScalar = {
    id?: boolean
    passage?: boolean
    question?: boolean
    answerA?: boolean
    answerB?: boolean
    answerC?: boolean
    answerD?: boolean
    correctAnswer?: boolean
    language?: boolean
  }


  type SpeedQuestionGetPayload<S extends boolean | null | undefined | SpeedQuestionArgs> = $Types.GetResult<SpeedQuestionPayload, S>

  type SpeedQuestionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SpeedQuestionFindManyArgs, 'select' | 'include'> & {
      select?: SpeedQuestionCountAggregateInputType | true
    }

  export interface SpeedQuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeedQuestion'], meta: { name: 'SpeedQuestion' } }
    /**
     * Find zero or one SpeedQuestion that matches the filter.
     * @param {SpeedQuestionFindUniqueArgs} args - Arguments to find a SpeedQuestion
     * @example
     * // Get one SpeedQuestion
     * const speedQuestion = await prisma.speedQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpeedQuestionFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SpeedQuestionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SpeedQuestion'> extends True ? Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one SpeedQuestion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpeedQuestionFindUniqueOrThrowArgs} args - Arguments to find a SpeedQuestion
     * @example
     * // Get one SpeedQuestion
     * const speedQuestion = await prisma.speedQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpeedQuestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedQuestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first SpeedQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionFindFirstArgs} args - Arguments to find a SpeedQuestion
     * @example
     * // Get one SpeedQuestion
     * const speedQuestion = await prisma.speedQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpeedQuestionFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SpeedQuestionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SpeedQuestion'> extends True ? Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first SpeedQuestion that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionFindFirstOrThrowArgs} args - Arguments to find a SpeedQuestion
     * @example
     * // Get one SpeedQuestion
     * const speedQuestion = await prisma.speedQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpeedQuestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedQuestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more SpeedQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeedQuestions
     * const speedQuestions = await prisma.speedQuestion.findMany()
     * 
     * // Get first 10 SpeedQuestions
     * const speedQuestions = await prisma.speedQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speedQuestionWithIdOnly = await prisma.speedQuestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpeedQuestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedQuestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a SpeedQuestion.
     * @param {SpeedQuestionCreateArgs} args - Arguments to create a SpeedQuestion.
     * @example
     * // Create one SpeedQuestion
     * const SpeedQuestion = await prisma.speedQuestion.create({
     *   data: {
     *     // ... data to create a SpeedQuestion
     *   }
     * })
     * 
    **/
    create<T extends SpeedQuestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedQuestionCreateArgs<ExtArgs>>
    ): Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many SpeedQuestions.
     *     @param {SpeedQuestionCreateManyArgs} args - Arguments to create many SpeedQuestions.
     *     @example
     *     // Create many SpeedQuestions
     *     const speedQuestion = await prisma.speedQuestion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpeedQuestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedQuestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpeedQuestion.
     * @param {SpeedQuestionDeleteArgs} args - Arguments to delete one SpeedQuestion.
     * @example
     * // Delete one SpeedQuestion
     * const SpeedQuestion = await prisma.speedQuestion.delete({
     *   where: {
     *     // ... filter to delete one SpeedQuestion
     *   }
     * })
     * 
    **/
    delete<T extends SpeedQuestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedQuestionDeleteArgs<ExtArgs>>
    ): Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one SpeedQuestion.
     * @param {SpeedQuestionUpdateArgs} args - Arguments to update one SpeedQuestion.
     * @example
     * // Update one SpeedQuestion
     * const speedQuestion = await prisma.speedQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpeedQuestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedQuestionUpdateArgs<ExtArgs>>
    ): Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more SpeedQuestions.
     * @param {SpeedQuestionDeleteManyArgs} args - Arguments to filter SpeedQuestions to delete.
     * @example
     * // Delete a few SpeedQuestions
     * const { count } = await prisma.speedQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpeedQuestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpeedQuestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeedQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeedQuestions
     * const speedQuestion = await prisma.speedQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpeedQuestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedQuestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpeedQuestion.
     * @param {SpeedQuestionUpsertArgs} args - Arguments to update or create a SpeedQuestion.
     * @example
     * // Update or create a SpeedQuestion
     * const speedQuestion = await prisma.speedQuestion.upsert({
     *   create: {
     *     // ... data to create a SpeedQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeedQuestion we want to update
     *   }
     * })
    **/
    upsert<T extends SpeedQuestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SpeedQuestionUpsertArgs<ExtArgs>>
    ): Prisma__SpeedQuestionClient<$Types.GetResult<SpeedQuestionPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of SpeedQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionCountArgs} args - Arguments to filter SpeedQuestions to count.
     * @example
     * // Count the number of SpeedQuestions
     * const count = await prisma.speedQuestion.count({
     *   where: {
     *     // ... the filter for the SpeedQuestions we want to count
     *   }
     * })
    **/
    count<T extends SpeedQuestionCountArgs>(
      args?: Subset<T, SpeedQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeedQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeedQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeedQuestionAggregateArgs>(args: Subset<T, SpeedQuestionAggregateArgs>): Prisma.PrismaPromise<GetSpeedQuestionAggregateType<T>>

    /**
     * Group by SpeedQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedQuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeedQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeedQuestionGroupByArgs['orderBy'] }
        : { orderBy?: SpeedQuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeedQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeedQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeedQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SpeedQuestionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SpeedQuestion base type for findUnique actions
   */
  export type SpeedQuestionFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SpeedQuestion to fetch.
     */
    where: SpeedQuestionWhereUniqueInput
  }

  /**
   * SpeedQuestion findUnique
   */
  export interface SpeedQuestionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SpeedQuestionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpeedQuestion findUniqueOrThrow
   */
  export type SpeedQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SpeedQuestion to fetch.
     */
    where: SpeedQuestionWhereUniqueInput
  }


  /**
   * SpeedQuestion base type for findFirst actions
   */
  export type SpeedQuestionFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SpeedQuestion to fetch.
     */
    where?: SpeedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedQuestions to fetch.
     */
    orderBy?: Enumerable<SpeedQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeedQuestions.
     */
    cursor?: SpeedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeedQuestions.
     */
    distinct?: Enumerable<SpeedQuestionScalarFieldEnum>
  }

  /**
   * SpeedQuestion findFirst
   */
  export interface SpeedQuestionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SpeedQuestionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SpeedQuestion findFirstOrThrow
   */
  export type SpeedQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SpeedQuestion to fetch.
     */
    where?: SpeedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedQuestions to fetch.
     */
    orderBy?: Enumerable<SpeedQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeedQuestions.
     */
    cursor?: SpeedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeedQuestions.
     */
    distinct?: Enumerable<SpeedQuestionScalarFieldEnum>
  }


  /**
   * SpeedQuestion findMany
   */
  export type SpeedQuestionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * Filter, which SpeedQuestions to fetch.
     */
    where?: SpeedQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedQuestions to fetch.
     */
    orderBy?: Enumerable<SpeedQuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeedQuestions.
     */
    cursor?: SpeedQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedQuestions.
     */
    skip?: number
    distinct?: Enumerable<SpeedQuestionScalarFieldEnum>
  }


  /**
   * SpeedQuestion create
   */
  export type SpeedQuestionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * The data needed to create a SpeedQuestion.
     */
    data: XOR<SpeedQuestionCreateInput, SpeedQuestionUncheckedCreateInput>
  }


  /**
   * SpeedQuestion createMany
   */
  export type SpeedQuestionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeedQuestions.
     */
    data: Enumerable<SpeedQuestionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SpeedQuestion update
   */
  export type SpeedQuestionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * The data needed to update a SpeedQuestion.
     */
    data: XOR<SpeedQuestionUpdateInput, SpeedQuestionUncheckedUpdateInput>
    /**
     * Choose, which SpeedQuestion to update.
     */
    where: SpeedQuestionWhereUniqueInput
  }


  /**
   * SpeedQuestion updateMany
   */
  export type SpeedQuestionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeedQuestions.
     */
    data: XOR<SpeedQuestionUpdateManyMutationInput, SpeedQuestionUncheckedUpdateManyInput>
    /**
     * Filter which SpeedQuestions to update
     */
    where?: SpeedQuestionWhereInput
  }


  /**
   * SpeedQuestion upsert
   */
  export type SpeedQuestionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * The filter to search for the SpeedQuestion to update in case it exists.
     */
    where: SpeedQuestionWhereUniqueInput
    /**
     * In case the SpeedQuestion found by the `where` argument doesn't exist, create a new SpeedQuestion with this data.
     */
    create: XOR<SpeedQuestionCreateInput, SpeedQuestionUncheckedCreateInput>
    /**
     * In case the SpeedQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeedQuestionUpdateInput, SpeedQuestionUncheckedUpdateInput>
  }


  /**
   * SpeedQuestion delete
   */
  export type SpeedQuestionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
    /**
     * Filter which SpeedQuestion to delete.
     */
    where: SpeedQuestionWhereUniqueInput
  }


  /**
   * SpeedQuestion deleteMany
   */
  export type SpeedQuestionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeedQuestions to delete
     */
    where?: SpeedQuestionWhereInput
  }


  /**
   * SpeedQuestion without action
   */
  export type SpeedQuestionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedQuestion
     */
    select?: SpeedQuestionSelect<ExtArgs> | null
  }



  /**
   * Model WordPair
   */


  export type AggregateWordPair = {
    _count: WordPairCountAggregateOutputType | null
    _avg: WordPairAvgAggregateOutputType | null
    _sum: WordPairSumAggregateOutputType | null
    _min: WordPairMinAggregateOutputType | null
    _max: WordPairMaxAggregateOutputType | null
  }

  export type WordPairAvgAggregateOutputType = {
    id: number | null
  }

  export type WordPairSumAggregateOutputType = {
    id: number | null
  }

  export type WordPairMinAggregateOutputType = {
    id: number | null
    primaryWord: string | null
    secondaryWord: string | null
    language: Language | null
  }

  export type WordPairMaxAggregateOutputType = {
    id: number | null
    primaryWord: string | null
    secondaryWord: string | null
    language: Language | null
  }

  export type WordPairCountAggregateOutputType = {
    id: number
    primaryWord: number
    secondaryWord: number
    language: number
    _all: number
  }


  export type WordPairAvgAggregateInputType = {
    id?: true
  }

  export type WordPairSumAggregateInputType = {
    id?: true
  }

  export type WordPairMinAggregateInputType = {
    id?: true
    primaryWord?: true
    secondaryWord?: true
    language?: true
  }

  export type WordPairMaxAggregateInputType = {
    id?: true
    primaryWord?: true
    secondaryWord?: true
    language?: true
  }

  export type WordPairCountAggregateInputType = {
    id?: true
    primaryWord?: true
    secondaryWord?: true
    language?: true
    _all?: true
  }

  export type WordPairAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordPair to aggregate.
     */
    where?: WordPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordPairs to fetch.
     */
    orderBy?: Enumerable<WordPairOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WordPairs
    **/
    _count?: true | WordPairCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordPairAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordPairSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordPairMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordPairMaxAggregateInputType
  }

  export type GetWordPairAggregateType<T extends WordPairAggregateArgs> = {
        [P in keyof T & keyof AggregateWordPair]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWordPair[P]>
      : GetScalarType<T[P], AggregateWordPair[P]>
  }




  export type WordPairGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: WordPairWhereInput
    orderBy?: Enumerable<WordPairOrderByWithAggregationInput>
    by: WordPairScalarFieldEnum[]
    having?: WordPairScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordPairCountAggregateInputType | true
    _avg?: WordPairAvgAggregateInputType
    _sum?: WordPairSumAggregateInputType
    _min?: WordPairMinAggregateInputType
    _max?: WordPairMaxAggregateInputType
  }


  export type WordPairGroupByOutputType = {
    id: number
    primaryWord: string
    secondaryWord: string
    language: Language
    _count: WordPairCountAggregateOutputType | null
    _avg: WordPairAvgAggregateOutputType | null
    _sum: WordPairSumAggregateOutputType | null
    _min: WordPairMinAggregateOutputType | null
    _max: WordPairMaxAggregateOutputType | null
  }

  type GetWordPairGroupByPayload<T extends WordPairGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WordPairGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordPairGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordPairGroupByOutputType[P]>
            : GetScalarType<T[P], WordPairGroupByOutputType[P]>
        }
      >
    >


  export type WordPairSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    primaryWord?: boolean
    secondaryWord?: boolean
    language?: boolean
  }, ExtArgs["result"]["wordPair"]>

  export type WordPairSelectScalar = {
    id?: boolean
    primaryWord?: boolean
    secondaryWord?: boolean
    language?: boolean
  }


  type WordPairGetPayload<S extends boolean | null | undefined | WordPairArgs> = $Types.GetResult<WordPairPayload, S>

  type WordPairCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<WordPairFindManyArgs, 'select' | 'include'> & {
      select?: WordPairCountAggregateInputType | true
    }

  export interface WordPairDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WordPair'], meta: { name: 'WordPair' } }
    /**
     * Find zero or one WordPair that matches the filter.
     * @param {WordPairFindUniqueArgs} args - Arguments to find a WordPair
     * @example
     * // Get one WordPair
     * const wordPair = await prisma.wordPair.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WordPairFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WordPairFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WordPair'> extends True ? Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one WordPair that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WordPairFindUniqueOrThrowArgs} args - Arguments to find a WordPair
     * @example
     * // Get one WordPair
     * const wordPair = await prisma.wordPair.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WordPairFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordPairFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first WordPair that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairFindFirstArgs} args - Arguments to find a WordPair
     * @example
     * // Get one WordPair
     * const wordPair = await prisma.wordPair.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WordPairFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WordPairFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WordPair'> extends True ? Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first WordPair that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairFindFirstOrThrowArgs} args - Arguments to find a WordPair
     * @example
     * // Get one WordPair
     * const wordPair = await prisma.wordPair.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WordPairFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WordPairFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more WordPairs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WordPairs
     * const wordPairs = await prisma.wordPair.findMany()
     * 
     * // Get first 10 WordPairs
     * const wordPairs = await prisma.wordPair.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordPairWithIdOnly = await prisma.wordPair.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WordPairFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordPairFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a WordPair.
     * @param {WordPairCreateArgs} args - Arguments to create a WordPair.
     * @example
     * // Create one WordPair
     * const WordPair = await prisma.wordPair.create({
     *   data: {
     *     // ... data to create a WordPair
     *   }
     * })
     * 
    **/
    create<T extends WordPairCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WordPairCreateArgs<ExtArgs>>
    ): Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many WordPairs.
     *     @param {WordPairCreateManyArgs} args - Arguments to create many WordPairs.
     *     @example
     *     // Create many WordPairs
     *     const wordPair = await prisma.wordPair.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WordPairCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordPairCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WordPair.
     * @param {WordPairDeleteArgs} args - Arguments to delete one WordPair.
     * @example
     * // Delete one WordPair
     * const WordPair = await prisma.wordPair.delete({
     *   where: {
     *     // ... filter to delete one WordPair
     *   }
     * })
     * 
    **/
    delete<T extends WordPairDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WordPairDeleteArgs<ExtArgs>>
    ): Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one WordPair.
     * @param {WordPairUpdateArgs} args - Arguments to update one WordPair.
     * @example
     * // Update one WordPair
     * const wordPair = await prisma.wordPair.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WordPairUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WordPairUpdateArgs<ExtArgs>>
    ): Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more WordPairs.
     * @param {WordPairDeleteManyArgs} args - Arguments to filter WordPairs to delete.
     * @example
     * // Delete a few WordPairs
     * const { count } = await prisma.wordPair.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WordPairDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WordPairDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WordPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WordPairs
     * const wordPair = await prisma.wordPair.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WordPairUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WordPairUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WordPair.
     * @param {WordPairUpsertArgs} args - Arguments to update or create a WordPair.
     * @example
     * // Update or create a WordPair
     * const wordPair = await prisma.wordPair.upsert({
     *   create: {
     *     // ... data to create a WordPair
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WordPair we want to update
     *   }
     * })
    **/
    upsert<T extends WordPairUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WordPairUpsertArgs<ExtArgs>>
    ): Prisma__WordPairClient<$Types.GetResult<WordPairPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of WordPairs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairCountArgs} args - Arguments to filter WordPairs to count.
     * @example
     * // Count the number of WordPairs
     * const count = await prisma.wordPair.count({
     *   where: {
     *     // ... the filter for the WordPairs we want to count
     *   }
     * })
    **/
    count<T extends WordPairCountArgs>(
      args?: Subset<T, WordPairCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordPairCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WordPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WordPairAggregateArgs>(args: Subset<T, WordPairAggregateArgs>): Prisma.PrismaPromise<GetWordPairAggregateType<T>>

    /**
     * Group by WordPair.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordPairGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WordPairGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordPairGroupByArgs['orderBy'] }
        : { orderBy?: WordPairGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WordPairGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordPairGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WordPair.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WordPairClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WordPair base type for findUnique actions
   */
  export type WordPairFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * Filter, which WordPair to fetch.
     */
    where: WordPairWhereUniqueInput
  }

  /**
   * WordPair findUnique
   */
  export interface WordPairFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends WordPairFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WordPair findUniqueOrThrow
   */
  export type WordPairFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * Filter, which WordPair to fetch.
     */
    where: WordPairWhereUniqueInput
  }


  /**
   * WordPair base type for findFirst actions
   */
  export type WordPairFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * Filter, which WordPair to fetch.
     */
    where?: WordPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordPairs to fetch.
     */
    orderBy?: Enumerable<WordPairOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordPairs.
     */
    cursor?: WordPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordPairs.
     */
    distinct?: Enumerable<WordPairScalarFieldEnum>
  }

  /**
   * WordPair findFirst
   */
  export interface WordPairFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends WordPairFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WordPair findFirstOrThrow
   */
  export type WordPairFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * Filter, which WordPair to fetch.
     */
    where?: WordPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordPairs to fetch.
     */
    orderBy?: Enumerable<WordPairOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WordPairs.
     */
    cursor?: WordPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordPairs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WordPairs.
     */
    distinct?: Enumerable<WordPairScalarFieldEnum>
  }


  /**
   * WordPair findMany
   */
  export type WordPairFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * Filter, which WordPairs to fetch.
     */
    where?: WordPairWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WordPairs to fetch.
     */
    orderBy?: Enumerable<WordPairOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WordPairs.
     */
    cursor?: WordPairWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WordPairs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WordPairs.
     */
    skip?: number
    distinct?: Enumerable<WordPairScalarFieldEnum>
  }


  /**
   * WordPair create
   */
  export type WordPairCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * The data needed to create a WordPair.
     */
    data: XOR<WordPairCreateInput, WordPairUncheckedCreateInput>
  }


  /**
   * WordPair createMany
   */
  export type WordPairCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WordPairs.
     */
    data: Enumerable<WordPairCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WordPair update
   */
  export type WordPairUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * The data needed to update a WordPair.
     */
    data: XOR<WordPairUpdateInput, WordPairUncheckedUpdateInput>
    /**
     * Choose, which WordPair to update.
     */
    where: WordPairWhereUniqueInput
  }


  /**
   * WordPair updateMany
   */
  export type WordPairUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WordPairs.
     */
    data: XOR<WordPairUpdateManyMutationInput, WordPairUncheckedUpdateManyInput>
    /**
     * Filter which WordPairs to update
     */
    where?: WordPairWhereInput
  }


  /**
   * WordPair upsert
   */
  export type WordPairUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * The filter to search for the WordPair to update in case it exists.
     */
    where: WordPairWhereUniqueInput
    /**
     * In case the WordPair found by the `where` argument doesn't exist, create a new WordPair with this data.
     */
    create: XOR<WordPairCreateInput, WordPairUncheckedCreateInput>
    /**
     * In case the WordPair was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordPairUpdateInput, WordPairUncheckedUpdateInput>
  }


  /**
   * WordPair delete
   */
  export type WordPairDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
    /**
     * Filter which WordPair to delete.
     */
    where: WordPairWhereUniqueInput
  }


  /**
   * WordPair deleteMany
   */
  export type WordPairDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which WordPairs to delete
     */
    where?: WordPairWhereInput
  }


  /**
   * WordPair without action
   */
  export type WordPairArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordPair
     */
    select?: WordPairSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TimeTestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sessionId: 'sessionId',
    CreatedAt: 'CreatedAt',
    highScore: 'highScore',
    lowScore: 'lowScore',
    accuracy: 'accuracy'
  };

  export type TimeTestScalarFieldEnum = (typeof TimeTestScalarFieldEnum)[keyof typeof TimeTestScalarFieldEnum]


  export const SchulteSessionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    time: 'time',
    errorCount: 'errorCount',
    userId: 'userId',
    date: 'date',
    platform: 'platform'
  };

  export type SchulteSessionScalarFieldEnum = (typeof SchulteSessionScalarFieldEnum)[keyof typeof SchulteSessionScalarFieldEnum]


  export const EvenNumberSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    errorCount: 'errorCount',
    time: 'time',
    date: 'date',
    platform: 'platform'
  };

  export type EvenNumberSessionScalarFieldEnum = (typeof EvenNumberSessionScalarFieldEnum)[keyof typeof EvenNumberSessionScalarFieldEnum]


  export const HighlightSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    speed: 'speed',
    date: 'date',
    type: 'type',
    platform: 'platform'
  };

  export type HighlightSessionScalarFieldEnum = (typeof HighlightSessionScalarFieldEnum)[keyof typeof HighlightSessionScalarFieldEnum]


  export const NumberGuesserSessionScalarFieldEnum: {
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

  export type NumberGuesserSessionScalarFieldEnum = (typeof NumberGuesserSessionScalarFieldEnum)[keyof typeof NumberGuesserSessionScalarFieldEnum]


  export const LetterMatcherSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    numberCorrect: 'numberCorrect',
    numberWrong: 'numberWrong',
    date: 'date',
    platform: 'platform'
  };

  export type LetterMatcherSessionScalarFieldEnum = (typeof LetterMatcherSessionScalarFieldEnum)[keyof typeof LetterMatcherSessionScalarFieldEnum]


  export const WordFlasherSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    speed: 'speed',
    date: 'date',
    type: 'type',
    platform: 'platform'
  };

  export type WordFlasherSessionScalarFieldEnum = (typeof WordFlasherSessionScalarFieldEnum)[keyof typeof WordFlasherSessionScalarFieldEnum]


  export const BoxFlasherSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    speed: 'speed',
    date: 'date',
    type: 'type',
    platform: 'platform'
  };

  export type BoxFlasherSessionScalarFieldEnum = (typeof BoxFlasherSessionScalarFieldEnum)[keyof typeof BoxFlasherSessionScalarFieldEnum]


  export const GreenDotSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    platform: 'platform'
  };

  export type GreenDotSessionScalarFieldEnum = (typeof GreenDotSessionScalarFieldEnum)[keyof typeof GreenDotSessionScalarFieldEnum]


  export const PairsSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    time: 'time',
    errorCount: 'errorCount',
    platform: 'platform'
  };

  export type PairsSessionScalarFieldEnum = (typeof PairsSessionScalarFieldEnum)[keyof typeof PairsSessionScalarFieldEnum]


  export const SpeedTestSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startSpeed: 'startSpeed',
    endSpeed: 'endSpeed',
    date: 'date',
    errorCount: 'errorCount',
    platform: 'platform'
  };

  export type SpeedTestSessionScalarFieldEnum = (typeof SpeedTestSessionScalarFieldEnum)[keyof typeof SpeedTestSessionScalarFieldEnum]


  export const SpeedQuestionScalarFieldEnum: {
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

  export type SpeedQuestionScalarFieldEnum = (typeof SpeedQuestionScalarFieldEnum)[keyof typeof SpeedQuestionScalarFieldEnum]


  export const WordPairScalarFieldEnum: {
    id: 'id',
    primaryWord: 'primaryWord',
    secondaryWord: 'secondaryWord',
    language: 'language'
  };

  export type WordPairScalarFieldEnum = (typeof WordPairScalarFieldEnum)[keyof typeof WordPairScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    maxWpm?: IntFilter | number
    testSpeed?: IntFilter | number
    currentWpm?: IntFilter | number
    highlightColor?: EnumOverlayFilter | Overlay
    lastSchulte?: StringFilter | string
    lastSpeedTest?: StringFilter | string
    lastFourByOne?: StringFilter | string
    lastOneByTwo?: StringFilter | string
    lastTwoByTwo?: StringFilter | string
    lastOneByOne?: StringFilter | string
    lastTwoByOne?: StringFilter | string
    lastEvenNumbers?: StringFilter | string
    lastCubeByTwo?: StringFilter | string
    lastCubeByThree?: StringFilter | string
    lastNumberGuesser?: StringFilter | string
    lastLetterMatcher?: StringFilter | string
    lastWordPairs?: StringFilter | string
    lastGreenDot?: StringFilter | string
    numberGuesserFigures?: IntFilter | number
    font?: EnumFontFilter | Font
    isUsingChecklist?: BoolFilter | boolean
    isAdmin?: BoolFilter | boolean
    isStudySubject?: BoolFilter | boolean
    schulteLevel?: EnumSchulteTypeFilter | SchulteType
    schulteAdvanceCount?: IntFilter | number
    language?: EnumLanguageFilter | Language
    tested?: BoolFilter | boolean
    timeTests?: TimeTestListRelationFilter
    shulteSessions?: SchulteSessionListRelationFilter
    evenNumberSessions?: EvenNumberSessionListRelationFilter
    wordGridFlasherSessions?: HighlightSessionListRelationFilter
    wordFlasherSessions?: WordFlasherSessionListRelationFilter
    LetterMatcherSessions?: LetterMatcherSessionListRelationFilter
    GreenDotSessions?: GreenDotSessionListRelationFilter
    NumberGuesserSession?: NumberGuesserSessionListRelationFilter
    BoxFlasherSession?: BoxFlasherSessionListRelationFilter
    PairsSession?: PairsSessionListRelationFilter
    SpeedTestSessions?: SpeedTestSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    highlightColor?: SortOrder
    lastSchulte?: SortOrder
    lastSpeedTest?: SortOrder
    lastFourByOne?: SortOrder
    lastOneByTwo?: SortOrder
    lastTwoByTwo?: SortOrder
    lastOneByOne?: SortOrder
    lastTwoByOne?: SortOrder
    lastEvenNumbers?: SortOrder
    lastCubeByTwo?: SortOrder
    lastCubeByThree?: SortOrder
    lastNumberGuesser?: SortOrder
    lastLetterMatcher?: SortOrder
    lastWordPairs?: SortOrder
    lastGreenDot?: SortOrder
    numberGuesserFigures?: SortOrder
    font?: SortOrder
    isUsingChecklist?: SortOrder
    isAdmin?: SortOrder
    isStudySubject?: SortOrder
    schulteLevel?: SortOrder
    schulteAdvanceCount?: SortOrder
    language?: SortOrder
    tested?: SortOrder
    timeTests?: TimeTestOrderByRelationAggregateInput
    shulteSessions?: SchulteSessionOrderByRelationAggregateInput
    evenNumberSessions?: EvenNumberSessionOrderByRelationAggregateInput
    wordGridFlasherSessions?: HighlightSessionOrderByRelationAggregateInput
    wordFlasherSessions?: WordFlasherSessionOrderByRelationAggregateInput
    LetterMatcherSessions?: LetterMatcherSessionOrderByRelationAggregateInput
    GreenDotSessions?: GreenDotSessionOrderByRelationAggregateInput
    NumberGuesserSession?: NumberGuesserSessionOrderByRelationAggregateInput
    BoxFlasherSession?: BoxFlasherSessionOrderByRelationAggregateInput
    PairsSession?: PairsSessionOrderByRelationAggregateInput
    SpeedTestSessions?: SpeedTestSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    highlightColor?: SortOrder
    lastSchulte?: SortOrder
    lastSpeedTest?: SortOrder
    lastFourByOne?: SortOrder
    lastOneByTwo?: SortOrder
    lastTwoByTwo?: SortOrder
    lastOneByOne?: SortOrder
    lastTwoByOne?: SortOrder
    lastEvenNumbers?: SortOrder
    lastCubeByTwo?: SortOrder
    lastCubeByThree?: SortOrder
    lastNumberGuesser?: SortOrder
    lastLetterMatcher?: SortOrder
    lastWordPairs?: SortOrder
    lastGreenDot?: SortOrder
    numberGuesserFigures?: SortOrder
    font?: SortOrder
    isUsingChecklist?: SortOrder
    isAdmin?: SortOrder
    isStudySubject?: SortOrder
    schulteLevel?: SortOrder
    schulteAdvanceCount?: SortOrder
    language?: SortOrder
    tested?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    maxWpm?: IntWithAggregatesFilter | number
    testSpeed?: IntWithAggregatesFilter | number
    currentWpm?: IntWithAggregatesFilter | number
    highlightColor?: EnumOverlayWithAggregatesFilter | Overlay
    lastSchulte?: StringWithAggregatesFilter | string
    lastSpeedTest?: StringWithAggregatesFilter | string
    lastFourByOne?: StringWithAggregatesFilter | string
    lastOneByTwo?: StringWithAggregatesFilter | string
    lastTwoByTwo?: StringWithAggregatesFilter | string
    lastOneByOne?: StringWithAggregatesFilter | string
    lastTwoByOne?: StringWithAggregatesFilter | string
    lastEvenNumbers?: StringWithAggregatesFilter | string
    lastCubeByTwo?: StringWithAggregatesFilter | string
    lastCubeByThree?: StringWithAggregatesFilter | string
    lastNumberGuesser?: StringWithAggregatesFilter | string
    lastLetterMatcher?: StringWithAggregatesFilter | string
    lastWordPairs?: StringWithAggregatesFilter | string
    lastGreenDot?: StringWithAggregatesFilter | string
    numberGuesserFigures?: IntWithAggregatesFilter | number
    font?: EnumFontWithAggregatesFilter | Font
    isUsingChecklist?: BoolWithAggregatesFilter | boolean
    isAdmin?: BoolWithAggregatesFilter | boolean
    isStudySubject?: BoolWithAggregatesFilter | boolean
    schulteLevel?: EnumSchulteTypeWithAggregatesFilter | SchulteType
    schulteAdvanceCount?: IntWithAggregatesFilter | number
    language?: EnumLanguageWithAggregatesFilter | Language
    tested?: BoolWithAggregatesFilter | boolean
  }

  export type TimeTestWhereInput = {
    AND?: Enumerable<TimeTestWhereInput>
    OR?: Enumerable<TimeTestWhereInput>
    NOT?: Enumerable<TimeTestWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    sessionId?: StringFilter | string
    CreatedAt?: DateTimeFilter | Date | string
    highScore?: IntFilter | number
    lowScore?: IntFilter | number
    accuracy?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TimeTestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    CreatedAt?: SortOrder
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeTestWhereUniqueInput = {
    id?: string
    sessionId?: string
  }

  export type TimeTestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    CreatedAt?: SortOrder
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
    _count?: TimeTestCountOrderByAggregateInput
    _avg?: TimeTestAvgOrderByAggregateInput
    _max?: TimeTestMaxOrderByAggregateInput
    _min?: TimeTestMinOrderByAggregateInput
    _sum?: TimeTestSumOrderByAggregateInput
  }

  export type TimeTestScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TimeTestScalarWhereWithAggregatesInput>
    OR?: Enumerable<TimeTestScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TimeTestScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    sessionId?: StringWithAggregatesFilter | string
    CreatedAt?: DateTimeWithAggregatesFilter | Date | string
    highScore?: IntWithAggregatesFilter | number
    lowScore?: IntWithAggregatesFilter | number
    accuracy?: IntWithAggregatesFilter | number
  }

  export type SchulteSessionWhereInput = {
    AND?: Enumerable<SchulteSessionWhereInput>
    OR?: Enumerable<SchulteSessionWhereInput>
    NOT?: Enumerable<SchulteSessionWhereInput>
    id?: StringFilter | string
    type?: EnumSchulteTypeFilter | SchulteType
    time?: IntFilter | number
    errorCount?: IntFilter | number
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SchulteSessionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SchulteSessionWhereUniqueInput = {
    id?: string
  }

  export type SchulteSessionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    _count?: SchulteSessionCountOrderByAggregateInput
    _avg?: SchulteSessionAvgOrderByAggregateInput
    _max?: SchulteSessionMaxOrderByAggregateInput
    _min?: SchulteSessionMinOrderByAggregateInput
    _sum?: SchulteSessionSumOrderByAggregateInput
  }

  export type SchulteSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SchulteSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SchulteSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SchulteSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    type?: EnumSchulteTypeWithAggregatesFilter | SchulteType
    time?: IntWithAggregatesFilter | number
    errorCount?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    platform?: StringWithAggregatesFilter | string
  }

  export type EvenNumberSessionWhereInput = {
    AND?: Enumerable<EvenNumberSessionWhereInput>
    OR?: Enumerable<EvenNumberSessionWhereInput>
    NOT?: Enumerable<EvenNumberSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    errorCount?: IntFilter | number
    time?: IntFilter | number
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EvenNumberSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    errorCount?: SortOrder
    time?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EvenNumberSessionWhereUniqueInput = {
    id?: string
  }

  export type EvenNumberSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    errorCount?: SortOrder
    time?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    _count?: EvenNumberSessionCountOrderByAggregateInput
    _avg?: EvenNumberSessionAvgOrderByAggregateInput
    _max?: EvenNumberSessionMaxOrderByAggregateInput
    _min?: EvenNumberSessionMinOrderByAggregateInput
    _sum?: EvenNumberSessionSumOrderByAggregateInput
  }

  export type EvenNumberSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EvenNumberSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<EvenNumberSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EvenNumberSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    errorCount?: IntWithAggregatesFilter | number
    time?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    platform?: StringWithAggregatesFilter | string
  }

  export type HighlightSessionWhereInput = {
    AND?: Enumerable<HighlightSessionWhereInput>
    OR?: Enumerable<HighlightSessionWhereInput>
    NOT?: Enumerable<HighlightSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    speed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    type?: EnumHighlightTypeFilter | HighlightType
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type HighlightSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HighlightSessionWhereUniqueInput = {
    id?: string
  }

  export type HighlightSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
    _count?: HighlightSessionCountOrderByAggregateInput
    _avg?: HighlightSessionAvgOrderByAggregateInput
    _max?: HighlightSessionMaxOrderByAggregateInput
    _min?: HighlightSessionMinOrderByAggregateInput
    _sum?: HighlightSessionSumOrderByAggregateInput
  }

  export type HighlightSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HighlightSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<HighlightSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HighlightSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    speed?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    type?: EnumHighlightTypeWithAggregatesFilter | HighlightType
    platform?: StringWithAggregatesFilter | string
  }

  export type NumberGuesserSessionWhereInput = {
    AND?: Enumerable<NumberGuesserSessionWhereInput>
    OR?: Enumerable<NumberGuesserSessionWhereInput>
    NOT?: Enumerable<NumberGuesserSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    numberCorrect?: IntFilter | number
    numberWrong?: IntFilter | number
    longestStreak?: IntFilter | number
    figuresAtStart?: IntFilter | number
    figuresAtEnd?: IntFilter | number
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NumberGuesserSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NumberGuesserSessionWhereUniqueInput = {
    id?: string
  }

  export type NumberGuesserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    _count?: NumberGuesserSessionCountOrderByAggregateInput
    _avg?: NumberGuesserSessionAvgOrderByAggregateInput
    _max?: NumberGuesserSessionMaxOrderByAggregateInput
    _min?: NumberGuesserSessionMinOrderByAggregateInput
    _sum?: NumberGuesserSessionSumOrderByAggregateInput
  }

  export type NumberGuesserSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NumberGuesserSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<NumberGuesserSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NumberGuesserSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    numberCorrect?: IntWithAggregatesFilter | number
    numberWrong?: IntWithAggregatesFilter | number
    longestStreak?: IntWithAggregatesFilter | number
    figuresAtStart?: IntWithAggregatesFilter | number
    figuresAtEnd?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    platform?: StringWithAggregatesFilter | string
  }

  export type LetterMatcherSessionWhereInput = {
    AND?: Enumerable<LetterMatcherSessionWhereInput>
    OR?: Enumerable<LetterMatcherSessionWhereInput>
    NOT?: Enumerable<LetterMatcherSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    numberCorrect?: IntFilter | number
    numberWrong?: IntFilter | number
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type LetterMatcherSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LetterMatcherSessionWhereUniqueInput = {
    id?: string
  }

  export type LetterMatcherSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    _count?: LetterMatcherSessionCountOrderByAggregateInput
    _avg?: LetterMatcherSessionAvgOrderByAggregateInput
    _max?: LetterMatcherSessionMaxOrderByAggregateInput
    _min?: LetterMatcherSessionMinOrderByAggregateInput
    _sum?: LetterMatcherSessionSumOrderByAggregateInput
  }

  export type LetterMatcherSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LetterMatcherSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<LetterMatcherSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LetterMatcherSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    numberCorrect?: IntWithAggregatesFilter | number
    numberWrong?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    platform?: StringWithAggregatesFilter | string
  }

  export type WordFlasherSessionWhereInput = {
    AND?: Enumerable<WordFlasherSessionWhereInput>
    OR?: Enumerable<WordFlasherSessionWhereInput>
    NOT?: Enumerable<WordFlasherSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    speed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    type?: StringFilter | string
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WordFlasherSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WordFlasherSessionWhereUniqueInput = {
    id?: string
  }

  export type WordFlasherSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
    _count?: WordFlasherSessionCountOrderByAggregateInput
    _avg?: WordFlasherSessionAvgOrderByAggregateInput
    _max?: WordFlasherSessionMaxOrderByAggregateInput
    _min?: WordFlasherSessionMinOrderByAggregateInput
    _sum?: WordFlasherSessionSumOrderByAggregateInput
  }

  export type WordFlasherSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WordFlasherSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<WordFlasherSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WordFlasherSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    speed?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    type?: StringWithAggregatesFilter | string
    platform?: StringWithAggregatesFilter | string
  }

  export type BoxFlasherSessionWhereInput = {
    AND?: Enumerable<BoxFlasherSessionWhereInput>
    OR?: Enumerable<BoxFlasherSessionWhereInput>
    NOT?: Enumerable<BoxFlasherSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    speed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    type?: EnumBoxTypeFilter | BoxType
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BoxFlasherSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BoxFlasherSessionWhereUniqueInput = {
    id?: string
  }

  export type BoxFlasherSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
    _count?: BoxFlasherSessionCountOrderByAggregateInput
    _avg?: BoxFlasherSessionAvgOrderByAggregateInput
    _max?: BoxFlasherSessionMaxOrderByAggregateInput
    _min?: BoxFlasherSessionMinOrderByAggregateInput
    _sum?: BoxFlasherSessionSumOrderByAggregateInput
  }

  export type BoxFlasherSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoxFlasherSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoxFlasherSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoxFlasherSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    speed?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    type?: EnumBoxTypeWithAggregatesFilter | BoxType
    platform?: StringWithAggregatesFilter | string
  }

  export type GreenDotSessionWhereInput = {
    AND?: Enumerable<GreenDotSessionWhereInput>
    OR?: Enumerable<GreenDotSessionWhereInput>
    NOT?: Enumerable<GreenDotSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GreenDotSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GreenDotSessionWhereUniqueInput = {
    id?: string
  }

  export type GreenDotSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
    _count?: GreenDotSessionCountOrderByAggregateInput
    _max?: GreenDotSessionMaxOrderByAggregateInput
    _min?: GreenDotSessionMinOrderByAggregateInput
  }

  export type GreenDotSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GreenDotSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<GreenDotSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GreenDotSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    platform?: StringWithAggregatesFilter | string
  }

  export type PairsSessionWhereInput = {
    AND?: Enumerable<PairsSessionWhereInput>
    OR?: Enumerable<PairsSessionWhereInput>
    NOT?: Enumerable<PairsSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    time?: IntFilter | number
    errorCount?: IntFilter | number
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PairsSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PairsSessionWhereUniqueInput = {
    id?: string
  }

  export type PairsSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
    _count?: PairsSessionCountOrderByAggregateInput
    _avg?: PairsSessionAvgOrderByAggregateInput
    _max?: PairsSessionMaxOrderByAggregateInput
    _min?: PairsSessionMinOrderByAggregateInput
    _sum?: PairsSessionSumOrderByAggregateInput
  }

  export type PairsSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PairsSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<PairsSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PairsSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    date?: DateTimeWithAggregatesFilter | Date | string
    time?: IntWithAggregatesFilter | number
    errorCount?: IntWithAggregatesFilter | number
    platform?: StringWithAggregatesFilter | string
  }

  export type SpeedTestSessionWhereInput = {
    AND?: Enumerable<SpeedTestSessionWhereInput>
    OR?: Enumerable<SpeedTestSessionWhereInput>
    NOT?: Enumerable<SpeedTestSessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    startSpeed?: IntFilter | number
    endSpeed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    errorCount?: IntFilter | number
    platform?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SpeedTestSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    date?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SpeedTestSessionWhereUniqueInput = {
    id?: string
  }

  export type SpeedTestSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    date?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
    _count?: SpeedTestSessionCountOrderByAggregateInput
    _avg?: SpeedTestSessionAvgOrderByAggregateInput
    _max?: SpeedTestSessionMaxOrderByAggregateInput
    _min?: SpeedTestSessionMinOrderByAggregateInput
    _sum?: SpeedTestSessionSumOrderByAggregateInput
  }

  export type SpeedTestSessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpeedTestSessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpeedTestSessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpeedTestSessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    startSpeed?: IntWithAggregatesFilter | number
    endSpeed?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    errorCount?: IntWithAggregatesFilter | number
    platform?: StringWithAggregatesFilter | string
  }

  export type SpeedQuestionWhereInput = {
    AND?: Enumerable<SpeedQuestionWhereInput>
    OR?: Enumerable<SpeedQuestionWhereInput>
    NOT?: Enumerable<SpeedQuestionWhereInput>
    id?: IntFilter | number
    passage?: StringFilter | string
    question?: StringFilter | string
    answerA?: StringFilter | string
    answerB?: StringFilter | string
    answerC?: StringFilter | string
    answerD?: StringFilter | string
    correctAnswer?: StringFilter | string
    language?: EnumLanguageFilter | Language
  }

  export type SpeedQuestionOrderByWithRelationInput = {
    id?: SortOrder
    passage?: SortOrder
    question?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    correctAnswer?: SortOrder
    language?: SortOrder
  }

  export type SpeedQuestionWhereUniqueInput = {
    id?: number
  }

  export type SpeedQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    passage?: SortOrder
    question?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    correctAnswer?: SortOrder
    language?: SortOrder
    _count?: SpeedQuestionCountOrderByAggregateInput
    _avg?: SpeedQuestionAvgOrderByAggregateInput
    _max?: SpeedQuestionMaxOrderByAggregateInput
    _min?: SpeedQuestionMinOrderByAggregateInput
    _sum?: SpeedQuestionSumOrderByAggregateInput
  }

  export type SpeedQuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SpeedQuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SpeedQuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SpeedQuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    passage?: StringWithAggregatesFilter | string
    question?: StringWithAggregatesFilter | string
    answerA?: StringWithAggregatesFilter | string
    answerB?: StringWithAggregatesFilter | string
    answerC?: StringWithAggregatesFilter | string
    answerD?: StringWithAggregatesFilter | string
    correctAnswer?: StringWithAggregatesFilter | string
    language?: EnumLanguageWithAggregatesFilter | Language
  }

  export type WordPairWhereInput = {
    AND?: Enumerable<WordPairWhereInput>
    OR?: Enumerable<WordPairWhereInput>
    NOT?: Enumerable<WordPairWhereInput>
    id?: IntFilter | number
    primaryWord?: StringFilter | string
    secondaryWord?: StringFilter | string
    language?: EnumLanguageFilter | Language
  }

  export type WordPairOrderByWithRelationInput = {
    id?: SortOrder
    primaryWord?: SortOrder
    secondaryWord?: SortOrder
    language?: SortOrder
  }

  export type WordPairWhereUniqueInput = {
    id?: number
  }

  export type WordPairOrderByWithAggregationInput = {
    id?: SortOrder
    primaryWord?: SortOrder
    secondaryWord?: SortOrder
    language?: SortOrder
    _count?: WordPairCountOrderByAggregateInput
    _avg?: WordPairAvgOrderByAggregateInput
    _max?: WordPairMaxOrderByAggregateInput
    _min?: WordPairMinOrderByAggregateInput
    _sum?: WordPairSumOrderByAggregateInput
  }

  export type WordPairScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WordPairScalarWhereWithAggregatesInput>
    OR?: Enumerable<WordPairScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WordPairScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    primaryWord?: StringWithAggregatesFilter | string
    secondaryWord?: StringWithAggregatesFilter | string
    language?: EnumLanguageWithAggregatesFilter | Language
  }

  export type UserCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TimeTestCreateInput = {
    id: string
    sessionId?: string
    CreatedAt: Date | string
    highScore: number
    lowScore: number
    accuracy: number
    user: UserCreateNestedOneWithoutTimeTestsInput
  }

  export type TimeTestUncheckedCreateInput = {
    id: string
    userId: string
    sessionId?: string
    CreatedAt: Date | string
    highScore: number
    lowScore: number
    accuracy: number
  }

  export type TimeTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTimeTestsNestedInput
  }

  export type TimeTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
  }

  export type TimeTestCreateManyInput = {
    id: string
    userId: string
    sessionId?: string
    CreatedAt: Date | string
    highScore: number
    lowScore: number
    accuracy: number
  }

  export type TimeTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
  }

  export type TimeTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
  }

  export type SchulteSessionCreateInput = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    date: Date | string
    platform?: string
    user: UserCreateNestedOneWithoutShulteSessionsInput
  }

  export type SchulteSessionUncheckedCreateInput = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    userId: string
    date: Date | string
    platform?: string
  }

  export type SchulteSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutShulteSessionsNestedInput
  }

  export type SchulteSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SchulteSessionCreateManyInput = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    userId: string
    date: Date | string
    platform?: string
  }

  export type SchulteSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SchulteSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EvenNumberSessionCreateInput = {
    id: string
    errorCount: number
    time: number
    date: Date | string
    platform?: string
    user: UserCreateNestedOneWithoutEvenNumberSessionsInput
  }

  export type EvenNumberSessionUncheckedCreateInput = {
    id: string
    userId: string
    errorCount: number
    time: number
    date: Date | string
    platform?: string
  }

  export type EvenNumberSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutEvenNumberSessionsNestedInput
  }

  export type EvenNumberSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EvenNumberSessionCreateManyInput = {
    id: string
    userId: string
    errorCount: number
    time: number
    date: Date | string
    platform?: string
  }

  export type EvenNumberSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EvenNumberSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightSessionCreateInput = {
    id: string
    speed: number
    date: Date | string
    type: HighlightType
    platform?: string
    user: UserCreateNestedOneWithoutWordGridFlasherSessionsInput
  }

  export type HighlightSessionUncheckedCreateInput = {
    id: string
    userId: string
    speed: number
    date: Date | string
    type: HighlightType
    platform?: string
  }

  export type HighlightSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWordGridFlasherSessionsNestedInput
  }

  export type HighlightSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightSessionCreateManyInput = {
    id: string
    userId: string
    speed: number
    date: Date | string
    type: HighlightType
    platform?: string
  }

  export type HighlightSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type NumberGuesserSessionCreateInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date | string
    platform?: string
    user: UserCreateNestedOneWithoutNumberGuesserSessionInput
  }

  export type NumberGuesserSessionUncheckedCreateInput = {
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date | string
    platform?: string
  }

  export type NumberGuesserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutNumberGuesserSessionNestedInput
  }

  export type NumberGuesserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type NumberGuesserSessionCreateManyInput = {
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date | string
    platform?: string
  }

  export type NumberGuesserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type NumberGuesserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LetterMatcherSessionCreateInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    date: Date | string
    platform?: string
    user: UserCreateNestedOneWithoutLetterMatcherSessionsInput
  }

  export type LetterMatcherSessionUncheckedCreateInput = {
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    date: Date | string
    platform?: string
  }

  export type LetterMatcherSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLetterMatcherSessionsNestedInput
  }

  export type LetterMatcherSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LetterMatcherSessionCreateManyInput = {
    id: string
    userId: string
    numberCorrect: number
    numberWrong: number
    date: Date | string
    platform?: string
  }

  export type LetterMatcherSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LetterMatcherSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type WordFlasherSessionCreateInput = {
    id: string
    speed: number
    date: Date | string
    type: string
    platform?: string
    user: UserCreateNestedOneWithoutWordFlasherSessionsInput
  }

  export type WordFlasherSessionUncheckedCreateInput = {
    id: string
    userId: string
    speed: number
    date: Date | string
    type: string
    platform?: string
  }

  export type WordFlasherSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutWordFlasherSessionsNestedInput
  }

  export type WordFlasherSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type WordFlasherSessionCreateManyInput = {
    id: string
    userId: string
    speed: number
    date: Date | string
    type: string
    platform?: string
  }

  export type WordFlasherSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type WordFlasherSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type BoxFlasherSessionCreateInput = {
    id: string
    speed: number
    date: Date | string
    type: BoxType
    platform?: string
    user: UserCreateNestedOneWithoutBoxFlasherSessionInput
  }

  export type BoxFlasherSessionUncheckedCreateInput = {
    id: string
    userId: string
    speed: number
    date: Date | string
    type: BoxType
    platform?: string
  }

  export type BoxFlasherSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBoxFlasherSessionNestedInput
  }

  export type BoxFlasherSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type BoxFlasherSessionCreateManyInput = {
    id: string
    userId: string
    speed: number
    date: Date | string
    type: BoxType
    platform?: string
  }

  export type BoxFlasherSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type BoxFlasherSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type GreenDotSessionCreateInput = {
    id: string
    date: Date | string
    platform?: string
    user: UserCreateNestedOneWithoutGreenDotSessionsInput
  }

  export type GreenDotSessionUncheckedCreateInput = {
    id: string
    userId: string
    date: Date | string
    platform?: string
  }

  export type GreenDotSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGreenDotSessionsNestedInput
  }

  export type GreenDotSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type GreenDotSessionCreateManyInput = {
    id: string
    userId: string
    date: Date | string
    platform?: string
  }

  export type GreenDotSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type GreenDotSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PairsSessionCreateInput = {
    id: string
    date: Date | string
    time: number
    errorCount: number
    platform?: string
    user: UserCreateNestedOneWithoutPairsSessionInput
  }

  export type PairsSessionUncheckedCreateInput = {
    id: string
    userId: string
    date: Date | string
    time: number
    errorCount: number
    platform?: string
  }

  export type PairsSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutPairsSessionNestedInput
  }

  export type PairsSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PairsSessionCreateManyInput = {
    id: string
    userId: string
    date: Date | string
    time: number
    errorCount: number
    platform?: string
  }

  export type PairsSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PairsSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedTestSessionCreateInput = {
    id: string
    startSpeed: number
    endSpeed: number
    date: Date | string
    errorCount: number
    platform?: string
    user: UserCreateNestedOneWithoutSpeedTestSessionsInput
  }

  export type SpeedTestSessionUncheckedCreateInput = {
    id: string
    userId: string
    startSpeed: number
    endSpeed: number
    date: Date | string
    errorCount: number
    platform?: string
  }

  export type SpeedTestSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutSpeedTestSessionsNestedInput
  }

  export type SpeedTestSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedTestSessionCreateManyInput = {
    id: string
    userId: string
    startSpeed: number
    endSpeed: number
    date: Date | string
    errorCount: number
    platform?: string
  }

  export type SpeedTestSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedTestSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedQuestionCreateInput = {
    id: number
    passage: string
    question: string
    answerA: string
    answerB: string
    answerC: string
    answerD: string
    correctAnswer: string
    language?: Language
  }

  export type SpeedQuestionUncheckedCreateInput = {
    id: number
    passage: string
    question: string
    answerA: string
    answerB: string
    answerC: string
    answerD: string
    correctAnswer: string
    language?: Language
  }

  export type SpeedQuestionUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passage?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: StringFieldUpdateOperationsInput | string
    answerD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type SpeedQuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passage?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: StringFieldUpdateOperationsInput | string
    answerD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type SpeedQuestionCreateManyInput = {
    id: number
    passage: string
    question: string
    answerA: string
    answerB: string
    answerC: string
    answerD: string
    correctAnswer: string
    language?: Language
  }

  export type SpeedQuestionUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    passage?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: StringFieldUpdateOperationsInput | string
    answerD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type SpeedQuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passage?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answerA?: StringFieldUpdateOperationsInput | string
    answerB?: StringFieldUpdateOperationsInput | string
    answerC?: StringFieldUpdateOperationsInput | string
    answerD?: StringFieldUpdateOperationsInput | string
    correctAnswer?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type WordPairCreateInput = {
    primaryWord: string
    secondaryWord: string
    language?: Language
  }

  export type WordPairUncheckedCreateInput = {
    id?: number
    primaryWord: string
    secondaryWord: string
    language?: Language
  }

  export type WordPairUpdateInput = {
    primaryWord?: StringFieldUpdateOperationsInput | string
    secondaryWord?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type WordPairUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryWord?: StringFieldUpdateOperationsInput | string
    secondaryWord?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type WordPairCreateManyInput = {
    id?: number
    primaryWord: string
    secondaryWord: string
    language?: Language
  }

  export type WordPairUpdateManyMutationInput = {
    primaryWord?: StringFieldUpdateOperationsInput | string
    secondaryWord?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type WordPairUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    primaryWord?: StringFieldUpdateOperationsInput | string
    secondaryWord?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | Language
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumOverlayFilter = {
    equals?: Overlay
    in?: Enumerable<Overlay>
    notIn?: Enumerable<Overlay>
    not?: NestedEnumOverlayFilter | Overlay
  }

  export type EnumFontFilter = {
    equals?: Font
    in?: Enumerable<Font>
    notIn?: Enumerable<Font>
    not?: NestedEnumFontFilter | Font
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumSchulteTypeFilter = {
    equals?: SchulteType
    in?: Enumerable<SchulteType>
    notIn?: Enumerable<SchulteType>
    not?: NestedEnumSchulteTypeFilter | SchulteType
  }

  export type EnumLanguageFilter = {
    equals?: Language
    in?: Enumerable<Language>
    notIn?: Enumerable<Language>
    not?: NestedEnumLanguageFilter | Language
  }

  export type TimeTestListRelationFilter = {
    every?: TimeTestWhereInput
    some?: TimeTestWhereInput
    none?: TimeTestWhereInput
  }

  export type SchulteSessionListRelationFilter = {
    every?: SchulteSessionWhereInput
    some?: SchulteSessionWhereInput
    none?: SchulteSessionWhereInput
  }

  export type EvenNumberSessionListRelationFilter = {
    every?: EvenNumberSessionWhereInput
    some?: EvenNumberSessionWhereInput
    none?: EvenNumberSessionWhereInput
  }

  export type HighlightSessionListRelationFilter = {
    every?: HighlightSessionWhereInput
    some?: HighlightSessionWhereInput
    none?: HighlightSessionWhereInput
  }

  export type WordFlasherSessionListRelationFilter = {
    every?: WordFlasherSessionWhereInput
    some?: WordFlasherSessionWhereInput
    none?: WordFlasherSessionWhereInput
  }

  export type LetterMatcherSessionListRelationFilter = {
    every?: LetterMatcherSessionWhereInput
    some?: LetterMatcherSessionWhereInput
    none?: LetterMatcherSessionWhereInput
  }

  export type GreenDotSessionListRelationFilter = {
    every?: GreenDotSessionWhereInput
    some?: GreenDotSessionWhereInput
    none?: GreenDotSessionWhereInput
  }

  export type NumberGuesserSessionListRelationFilter = {
    every?: NumberGuesserSessionWhereInput
    some?: NumberGuesserSessionWhereInput
    none?: NumberGuesserSessionWhereInput
  }

  export type BoxFlasherSessionListRelationFilter = {
    every?: BoxFlasherSessionWhereInput
    some?: BoxFlasherSessionWhereInput
    none?: BoxFlasherSessionWhereInput
  }

  export type PairsSessionListRelationFilter = {
    every?: PairsSessionWhereInput
    some?: PairsSessionWhereInput
    none?: PairsSessionWhereInput
  }

  export type SpeedTestSessionListRelationFilter = {
    every?: SpeedTestSessionWhereInput
    some?: SpeedTestSessionWhereInput
    none?: SpeedTestSessionWhereInput
  }

  export type TimeTestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchulteSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvenNumberSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HighlightSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordFlasherSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LetterMatcherSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GreenDotSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NumberGuesserSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoxFlasherSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PairsSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpeedTestSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    highlightColor?: SortOrder
    lastSchulte?: SortOrder
    lastSpeedTest?: SortOrder
    lastFourByOne?: SortOrder
    lastOneByTwo?: SortOrder
    lastTwoByTwo?: SortOrder
    lastOneByOne?: SortOrder
    lastTwoByOne?: SortOrder
    lastEvenNumbers?: SortOrder
    lastCubeByTwo?: SortOrder
    lastCubeByThree?: SortOrder
    lastNumberGuesser?: SortOrder
    lastLetterMatcher?: SortOrder
    lastWordPairs?: SortOrder
    lastGreenDot?: SortOrder
    numberGuesserFigures?: SortOrder
    font?: SortOrder
    isUsingChecklist?: SortOrder
    isAdmin?: SortOrder
    isStudySubject?: SortOrder
    schulteLevel?: SortOrder
    schulteAdvanceCount?: SortOrder
    language?: SortOrder
    tested?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    numberGuesserFigures?: SortOrder
    schulteAdvanceCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    highlightColor?: SortOrder
    lastSchulte?: SortOrder
    lastSpeedTest?: SortOrder
    lastFourByOne?: SortOrder
    lastOneByTwo?: SortOrder
    lastTwoByTwo?: SortOrder
    lastOneByOne?: SortOrder
    lastTwoByOne?: SortOrder
    lastEvenNumbers?: SortOrder
    lastCubeByTwo?: SortOrder
    lastCubeByThree?: SortOrder
    lastNumberGuesser?: SortOrder
    lastLetterMatcher?: SortOrder
    lastWordPairs?: SortOrder
    lastGreenDot?: SortOrder
    numberGuesserFigures?: SortOrder
    font?: SortOrder
    isUsingChecklist?: SortOrder
    isAdmin?: SortOrder
    isStudySubject?: SortOrder
    schulteLevel?: SortOrder
    schulteAdvanceCount?: SortOrder
    language?: SortOrder
    tested?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    highlightColor?: SortOrder
    lastSchulte?: SortOrder
    lastSpeedTest?: SortOrder
    lastFourByOne?: SortOrder
    lastOneByTwo?: SortOrder
    lastTwoByTwo?: SortOrder
    lastOneByOne?: SortOrder
    lastTwoByOne?: SortOrder
    lastEvenNumbers?: SortOrder
    lastCubeByTwo?: SortOrder
    lastCubeByThree?: SortOrder
    lastNumberGuesser?: SortOrder
    lastLetterMatcher?: SortOrder
    lastWordPairs?: SortOrder
    lastGreenDot?: SortOrder
    numberGuesserFigures?: SortOrder
    font?: SortOrder
    isUsingChecklist?: SortOrder
    isAdmin?: SortOrder
    isStudySubject?: SortOrder
    schulteLevel?: SortOrder
    schulteAdvanceCount?: SortOrder
    language?: SortOrder
    tested?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    maxWpm?: SortOrder
    testSpeed?: SortOrder
    currentWpm?: SortOrder
    numberGuesserFigures?: SortOrder
    schulteAdvanceCount?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumOverlayWithAggregatesFilter = {
    equals?: Overlay
    in?: Enumerable<Overlay>
    notIn?: Enumerable<Overlay>
    not?: NestedEnumOverlayWithAggregatesFilter | Overlay
    _count?: NestedIntFilter
    _min?: NestedEnumOverlayFilter
    _max?: NestedEnumOverlayFilter
  }

  export type EnumFontWithAggregatesFilter = {
    equals?: Font
    in?: Enumerable<Font>
    notIn?: Enumerable<Font>
    not?: NestedEnumFontWithAggregatesFilter | Font
    _count?: NestedIntFilter
    _min?: NestedEnumFontFilter
    _max?: NestedEnumFontFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumSchulteTypeWithAggregatesFilter = {
    equals?: SchulteType
    in?: Enumerable<SchulteType>
    notIn?: Enumerable<SchulteType>
    not?: NestedEnumSchulteTypeWithAggregatesFilter | SchulteType
    _count?: NestedIntFilter
    _min?: NestedEnumSchulteTypeFilter
    _max?: NestedEnumSchulteTypeFilter
  }

  export type EnumLanguageWithAggregatesFilter = {
    equals?: Language
    in?: Enumerable<Language>
    notIn?: Enumerable<Language>
    not?: NestedEnumLanguageWithAggregatesFilter | Language
    _count?: NestedIntFilter
    _min?: NestedEnumLanguageFilter
    _max?: NestedEnumLanguageFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TimeTestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    CreatedAt?: SortOrder
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
  }

  export type TimeTestAvgOrderByAggregateInput = {
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
  }

  export type TimeTestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    CreatedAt?: SortOrder
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
  }

  export type TimeTestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sessionId?: SortOrder
    CreatedAt?: SortOrder
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
  }

  export type TimeTestSumOrderByAggregateInput = {
    highScore?: SortOrder
    lowScore?: SortOrder
    accuracy?: SortOrder
  }

  export type SchulteSessionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type SchulteSessionAvgOrderByAggregateInput = {
    time?: SortOrder
    errorCount?: SortOrder
  }

  export type SchulteSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type SchulteSessionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type SchulteSessionSumOrderByAggregateInput = {
    time?: SortOrder
    errorCount?: SortOrder
  }

  export type EvenNumberSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    errorCount?: SortOrder
    time?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type EvenNumberSessionAvgOrderByAggregateInput = {
    errorCount?: SortOrder
    time?: SortOrder
  }

  export type EvenNumberSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    errorCount?: SortOrder
    time?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type EvenNumberSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    errorCount?: SortOrder
    time?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type EvenNumberSessionSumOrderByAggregateInput = {
    errorCount?: SortOrder
    time?: SortOrder
  }

  export type EnumHighlightTypeFilter = {
    equals?: HighlightType
    in?: Enumerable<HighlightType>
    notIn?: Enumerable<HighlightType>
    not?: NestedEnumHighlightTypeFilter | HighlightType
  }

  export type HighlightSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type HighlightSessionAvgOrderByAggregateInput = {
    speed?: SortOrder
  }

  export type HighlightSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type HighlightSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type HighlightSessionSumOrderByAggregateInput = {
    speed?: SortOrder
  }

  export type EnumHighlightTypeWithAggregatesFilter = {
    equals?: HighlightType
    in?: Enumerable<HighlightType>
    notIn?: Enumerable<HighlightType>
    not?: NestedEnumHighlightTypeWithAggregatesFilter | HighlightType
    _count?: NestedIntFilter
    _min?: NestedEnumHighlightTypeFilter
    _max?: NestedEnumHighlightTypeFilter
  }

  export type NumberGuesserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type NumberGuesserSessionAvgOrderByAggregateInput = {
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
  }

  export type NumberGuesserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type NumberGuesserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type NumberGuesserSessionSumOrderByAggregateInput = {
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    longestStreak?: SortOrder
    figuresAtStart?: SortOrder
    figuresAtEnd?: SortOrder
  }

  export type LetterMatcherSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type LetterMatcherSessionAvgOrderByAggregateInput = {
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
  }

  export type LetterMatcherSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type LetterMatcherSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type LetterMatcherSessionSumOrderByAggregateInput = {
    numberCorrect?: SortOrder
    numberWrong?: SortOrder
  }

  export type WordFlasherSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type WordFlasherSessionAvgOrderByAggregateInput = {
    speed?: SortOrder
  }

  export type WordFlasherSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type WordFlasherSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type WordFlasherSessionSumOrderByAggregateInput = {
    speed?: SortOrder
  }

  export type EnumBoxTypeFilter = {
    equals?: BoxType
    in?: Enumerable<BoxType>
    notIn?: Enumerable<BoxType>
    not?: NestedEnumBoxTypeFilter | BoxType
  }

  export type BoxFlasherSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type BoxFlasherSessionAvgOrderByAggregateInput = {
    speed?: SortOrder
  }

  export type BoxFlasherSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type BoxFlasherSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    speed?: SortOrder
    date?: SortOrder
    type?: SortOrder
    platform?: SortOrder
  }

  export type BoxFlasherSessionSumOrderByAggregateInput = {
    speed?: SortOrder
  }

  export type EnumBoxTypeWithAggregatesFilter = {
    equals?: BoxType
    in?: Enumerable<BoxType>
    notIn?: Enumerable<BoxType>
    not?: NestedEnumBoxTypeWithAggregatesFilter | BoxType
    _count?: NestedIntFilter
    _min?: NestedEnumBoxTypeFilter
    _max?: NestedEnumBoxTypeFilter
  }

  export type GreenDotSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type GreenDotSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type GreenDotSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    platform?: SortOrder
  }

  export type PairsSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
  }

  export type PairsSessionAvgOrderByAggregateInput = {
    time?: SortOrder
    errorCount?: SortOrder
  }

  export type PairsSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
  }

  export type PairsSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
  }

  export type PairsSessionSumOrderByAggregateInput = {
    time?: SortOrder
    errorCount?: SortOrder
  }

  export type SpeedTestSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    date?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
  }

  export type SpeedTestSessionAvgOrderByAggregateInput = {
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    errorCount?: SortOrder
  }

  export type SpeedTestSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    date?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
  }

  export type SpeedTestSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    date?: SortOrder
    errorCount?: SortOrder
    platform?: SortOrder
  }

  export type SpeedTestSessionSumOrderByAggregateInput = {
    startSpeed?: SortOrder
    endSpeed?: SortOrder
    errorCount?: SortOrder
  }

  export type SpeedQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    passage?: SortOrder
    question?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    correctAnswer?: SortOrder
    language?: SortOrder
  }

  export type SpeedQuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpeedQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    passage?: SortOrder
    question?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    correctAnswer?: SortOrder
    language?: SortOrder
  }

  export type SpeedQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    passage?: SortOrder
    question?: SortOrder
    answerA?: SortOrder
    answerB?: SortOrder
    answerC?: SortOrder
    answerD?: SortOrder
    correctAnswer?: SortOrder
    language?: SortOrder
  }

  export type SpeedQuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordPairCountOrderByAggregateInput = {
    id?: SortOrder
    primaryWord?: SortOrder
    secondaryWord?: SortOrder
    language?: SortOrder
  }

  export type WordPairAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordPairMaxOrderByAggregateInput = {
    id?: SortOrder
    primaryWord?: SortOrder
    secondaryWord?: SortOrder
    language?: SortOrder
  }

  export type WordPairMinOrderByAggregateInput = {
    id?: SortOrder
    primaryWord?: SortOrder
    secondaryWord?: SortOrder
    language?: SortOrder
  }

  export type WordPairSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TimeTestCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TimeTestCreateWithoutUserInput>, Enumerable<TimeTestUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TimeTestCreateOrConnectWithoutUserInput>
    createMany?: TimeTestCreateManyUserInputEnvelope
    connect?: Enumerable<TimeTestWhereUniqueInput>
  }

  export type SchulteSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SchulteSessionCreateWithoutUserInput>, Enumerable<SchulteSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SchulteSessionCreateOrConnectWithoutUserInput>
    createMany?: SchulteSessionCreateManyUserInputEnvelope
    connect?: Enumerable<SchulteSessionWhereUniqueInput>
  }

  export type EvenNumberSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EvenNumberSessionCreateWithoutUserInput>, Enumerable<EvenNumberSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EvenNumberSessionCreateOrConnectWithoutUserInput>
    createMany?: EvenNumberSessionCreateManyUserInputEnvelope
    connect?: Enumerable<EvenNumberSessionWhereUniqueInput>
  }

  export type HighlightSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<HighlightSessionCreateWithoutUserInput>, Enumerable<HighlightSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<HighlightSessionCreateOrConnectWithoutUserInput>
    createMany?: HighlightSessionCreateManyUserInputEnvelope
    connect?: Enumerable<HighlightSessionWhereUniqueInput>
  }

  export type WordFlasherSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WordFlasherSessionCreateWithoutUserInput>, Enumerable<WordFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WordFlasherSessionCreateOrConnectWithoutUserInput>
    createMany?: WordFlasherSessionCreateManyUserInputEnvelope
    connect?: Enumerable<WordFlasherSessionWhereUniqueInput>
  }

  export type LetterMatcherSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LetterMatcherSessionCreateWithoutUserInput>, Enumerable<LetterMatcherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterMatcherSessionCreateOrConnectWithoutUserInput>
    createMany?: LetterMatcherSessionCreateManyUserInputEnvelope
    connect?: Enumerable<LetterMatcherSessionWhereUniqueInput>
  }

  export type GreenDotSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GreenDotSessionCreateWithoutUserInput>, Enumerable<GreenDotSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GreenDotSessionCreateOrConnectWithoutUserInput>
    createMany?: GreenDotSessionCreateManyUserInputEnvelope
    connect?: Enumerable<GreenDotSessionWhereUniqueInput>
  }

  export type NumberGuesserSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NumberGuesserSessionCreateWithoutUserInput>, Enumerable<NumberGuesserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NumberGuesserSessionCreateOrConnectWithoutUserInput>
    createMany?: NumberGuesserSessionCreateManyUserInputEnvelope
    connect?: Enumerable<NumberGuesserSessionWhereUniqueInput>
  }

  export type BoxFlasherSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoxFlasherSessionCreateWithoutUserInput>, Enumerable<BoxFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoxFlasherSessionCreateOrConnectWithoutUserInput>
    createMany?: BoxFlasherSessionCreateManyUserInputEnvelope
    connect?: Enumerable<BoxFlasherSessionWhereUniqueInput>
  }

  export type PairsSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PairsSessionCreateWithoutUserInput>, Enumerable<PairsSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PairsSessionCreateOrConnectWithoutUserInput>
    createMany?: PairsSessionCreateManyUserInputEnvelope
    connect?: Enumerable<PairsSessionWhereUniqueInput>
  }

  export type SpeedTestSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SpeedTestSessionCreateWithoutUserInput>, Enumerable<SpeedTestSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SpeedTestSessionCreateOrConnectWithoutUserInput>
    createMany?: SpeedTestSessionCreateManyUserInputEnvelope
    connect?: Enumerable<SpeedTestSessionWhereUniqueInput>
  }

  export type TimeTestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<TimeTestCreateWithoutUserInput>, Enumerable<TimeTestUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TimeTestCreateOrConnectWithoutUserInput>
    createMany?: TimeTestCreateManyUserInputEnvelope
    connect?: Enumerable<TimeTestWhereUniqueInput>
  }

  export type SchulteSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SchulteSessionCreateWithoutUserInput>, Enumerable<SchulteSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SchulteSessionCreateOrConnectWithoutUserInput>
    createMany?: SchulteSessionCreateManyUserInputEnvelope
    connect?: Enumerable<SchulteSessionWhereUniqueInput>
  }

  export type EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<EvenNumberSessionCreateWithoutUserInput>, Enumerable<EvenNumberSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EvenNumberSessionCreateOrConnectWithoutUserInput>
    createMany?: EvenNumberSessionCreateManyUserInputEnvelope
    connect?: Enumerable<EvenNumberSessionWhereUniqueInput>
  }

  export type HighlightSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<HighlightSessionCreateWithoutUserInput>, Enumerable<HighlightSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<HighlightSessionCreateOrConnectWithoutUserInput>
    createMany?: HighlightSessionCreateManyUserInputEnvelope
    connect?: Enumerable<HighlightSessionWhereUniqueInput>
  }

  export type WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<WordFlasherSessionCreateWithoutUserInput>, Enumerable<WordFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WordFlasherSessionCreateOrConnectWithoutUserInput>
    createMany?: WordFlasherSessionCreateManyUserInputEnvelope
    connect?: Enumerable<WordFlasherSessionWhereUniqueInput>
  }

  export type LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<LetterMatcherSessionCreateWithoutUserInput>, Enumerable<LetterMatcherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterMatcherSessionCreateOrConnectWithoutUserInput>
    createMany?: LetterMatcherSessionCreateManyUserInputEnvelope
    connect?: Enumerable<LetterMatcherSessionWhereUniqueInput>
  }

  export type GreenDotSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GreenDotSessionCreateWithoutUserInput>, Enumerable<GreenDotSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GreenDotSessionCreateOrConnectWithoutUserInput>
    createMany?: GreenDotSessionCreateManyUserInputEnvelope
    connect?: Enumerable<GreenDotSessionWhereUniqueInput>
  }

  export type NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NumberGuesserSessionCreateWithoutUserInput>, Enumerable<NumberGuesserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NumberGuesserSessionCreateOrConnectWithoutUserInput>
    createMany?: NumberGuesserSessionCreateManyUserInputEnvelope
    connect?: Enumerable<NumberGuesserSessionWhereUniqueInput>
  }

  export type BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoxFlasherSessionCreateWithoutUserInput>, Enumerable<BoxFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoxFlasherSessionCreateOrConnectWithoutUserInput>
    createMany?: BoxFlasherSessionCreateManyUserInputEnvelope
    connect?: Enumerable<BoxFlasherSessionWhereUniqueInput>
  }

  export type PairsSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PairsSessionCreateWithoutUserInput>, Enumerable<PairsSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PairsSessionCreateOrConnectWithoutUserInput>
    createMany?: PairsSessionCreateManyUserInputEnvelope
    connect?: Enumerable<PairsSessionWhereUniqueInput>
  }

  export type SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SpeedTestSessionCreateWithoutUserInput>, Enumerable<SpeedTestSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SpeedTestSessionCreateOrConnectWithoutUserInput>
    createMany?: SpeedTestSessionCreateManyUserInputEnvelope
    connect?: Enumerable<SpeedTestSessionWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOverlayFieldUpdateOperationsInput = {
    set?: Overlay
  }

  export type EnumFontFieldUpdateOperationsInput = {
    set?: Font
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSchulteTypeFieldUpdateOperationsInput = {
    set?: SchulteType
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: Language
  }

  export type TimeTestUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TimeTestCreateWithoutUserInput>, Enumerable<TimeTestUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TimeTestCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TimeTestUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TimeTestCreateManyUserInputEnvelope
    set?: Enumerable<TimeTestWhereUniqueInput>
    disconnect?: Enumerable<TimeTestWhereUniqueInput>
    delete?: Enumerable<TimeTestWhereUniqueInput>
    connect?: Enumerable<TimeTestWhereUniqueInput>
    update?: Enumerable<TimeTestUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TimeTestUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TimeTestScalarWhereInput>
  }

  export type SchulteSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SchulteSessionCreateWithoutUserInput>, Enumerable<SchulteSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SchulteSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SchulteSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SchulteSessionCreateManyUserInputEnvelope
    set?: Enumerable<SchulteSessionWhereUniqueInput>
    disconnect?: Enumerable<SchulteSessionWhereUniqueInput>
    delete?: Enumerable<SchulteSessionWhereUniqueInput>
    connect?: Enumerable<SchulteSessionWhereUniqueInput>
    update?: Enumerable<SchulteSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SchulteSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SchulteSessionScalarWhereInput>
  }

  export type EvenNumberSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EvenNumberSessionCreateWithoutUserInput>, Enumerable<EvenNumberSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EvenNumberSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EvenNumberSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EvenNumberSessionCreateManyUserInputEnvelope
    set?: Enumerable<EvenNumberSessionWhereUniqueInput>
    disconnect?: Enumerable<EvenNumberSessionWhereUniqueInput>
    delete?: Enumerable<EvenNumberSessionWhereUniqueInput>
    connect?: Enumerable<EvenNumberSessionWhereUniqueInput>
    update?: Enumerable<EvenNumberSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EvenNumberSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EvenNumberSessionScalarWhereInput>
  }

  export type HighlightSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<HighlightSessionCreateWithoutUserInput>, Enumerable<HighlightSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<HighlightSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<HighlightSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: HighlightSessionCreateManyUserInputEnvelope
    set?: Enumerable<HighlightSessionWhereUniqueInput>
    disconnect?: Enumerable<HighlightSessionWhereUniqueInput>
    delete?: Enumerable<HighlightSessionWhereUniqueInput>
    connect?: Enumerable<HighlightSessionWhereUniqueInput>
    update?: Enumerable<HighlightSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<HighlightSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<HighlightSessionScalarWhereInput>
  }

  export type WordFlasherSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WordFlasherSessionCreateWithoutUserInput>, Enumerable<WordFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WordFlasherSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WordFlasherSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WordFlasherSessionCreateManyUserInputEnvelope
    set?: Enumerable<WordFlasherSessionWhereUniqueInput>
    disconnect?: Enumerable<WordFlasherSessionWhereUniqueInput>
    delete?: Enumerable<WordFlasherSessionWhereUniqueInput>
    connect?: Enumerable<WordFlasherSessionWhereUniqueInput>
    update?: Enumerable<WordFlasherSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WordFlasherSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WordFlasherSessionScalarWhereInput>
  }

  export type LetterMatcherSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LetterMatcherSessionCreateWithoutUserInput>, Enumerable<LetterMatcherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterMatcherSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LetterMatcherSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LetterMatcherSessionCreateManyUserInputEnvelope
    set?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    disconnect?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    delete?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    connect?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    update?: Enumerable<LetterMatcherSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LetterMatcherSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LetterMatcherSessionScalarWhereInput>
  }

  export type GreenDotSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<GreenDotSessionCreateWithoutUserInput>, Enumerable<GreenDotSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GreenDotSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GreenDotSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GreenDotSessionCreateManyUserInputEnvelope
    set?: Enumerable<GreenDotSessionWhereUniqueInput>
    disconnect?: Enumerable<GreenDotSessionWhereUniqueInput>
    delete?: Enumerable<GreenDotSessionWhereUniqueInput>
    connect?: Enumerable<GreenDotSessionWhereUniqueInput>
    update?: Enumerable<GreenDotSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GreenDotSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GreenDotSessionScalarWhereInput>
  }

  export type NumberGuesserSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NumberGuesserSessionCreateWithoutUserInput>, Enumerable<NumberGuesserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NumberGuesserSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NumberGuesserSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NumberGuesserSessionCreateManyUserInputEnvelope
    set?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    disconnect?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    delete?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    connect?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    update?: Enumerable<NumberGuesserSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NumberGuesserSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NumberGuesserSessionScalarWhereInput>
  }

  export type BoxFlasherSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoxFlasherSessionCreateWithoutUserInput>, Enumerable<BoxFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoxFlasherSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoxFlasherSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoxFlasherSessionCreateManyUserInputEnvelope
    set?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    disconnect?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    delete?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    connect?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    update?: Enumerable<BoxFlasherSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoxFlasherSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoxFlasherSessionScalarWhereInput>
  }

  export type PairsSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PairsSessionCreateWithoutUserInput>, Enumerable<PairsSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PairsSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PairsSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PairsSessionCreateManyUserInputEnvelope
    set?: Enumerable<PairsSessionWhereUniqueInput>
    disconnect?: Enumerable<PairsSessionWhereUniqueInput>
    delete?: Enumerable<PairsSessionWhereUniqueInput>
    connect?: Enumerable<PairsSessionWhereUniqueInput>
    update?: Enumerable<PairsSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PairsSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PairsSessionScalarWhereInput>
  }

  export type SpeedTestSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SpeedTestSessionCreateWithoutUserInput>, Enumerable<SpeedTestSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SpeedTestSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SpeedTestSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SpeedTestSessionCreateManyUserInputEnvelope
    set?: Enumerable<SpeedTestSessionWhereUniqueInput>
    disconnect?: Enumerable<SpeedTestSessionWhereUniqueInput>
    delete?: Enumerable<SpeedTestSessionWhereUniqueInput>
    connect?: Enumerable<SpeedTestSessionWhereUniqueInput>
    update?: Enumerable<SpeedTestSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SpeedTestSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SpeedTestSessionScalarWhereInput>
  }

  export type TimeTestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<TimeTestCreateWithoutUserInput>, Enumerable<TimeTestUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<TimeTestCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<TimeTestUpsertWithWhereUniqueWithoutUserInput>
    createMany?: TimeTestCreateManyUserInputEnvelope
    set?: Enumerable<TimeTestWhereUniqueInput>
    disconnect?: Enumerable<TimeTestWhereUniqueInput>
    delete?: Enumerable<TimeTestWhereUniqueInput>
    connect?: Enumerable<TimeTestWhereUniqueInput>
    update?: Enumerable<TimeTestUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<TimeTestUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<TimeTestScalarWhereInput>
  }

  export type SchulteSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SchulteSessionCreateWithoutUserInput>, Enumerable<SchulteSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SchulteSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SchulteSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SchulteSessionCreateManyUserInputEnvelope
    set?: Enumerable<SchulteSessionWhereUniqueInput>
    disconnect?: Enumerable<SchulteSessionWhereUniqueInput>
    delete?: Enumerable<SchulteSessionWhereUniqueInput>
    connect?: Enumerable<SchulteSessionWhereUniqueInput>
    update?: Enumerable<SchulteSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SchulteSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SchulteSessionScalarWhereInput>
  }

  export type EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<EvenNumberSessionCreateWithoutUserInput>, Enumerable<EvenNumberSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<EvenNumberSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<EvenNumberSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: EvenNumberSessionCreateManyUserInputEnvelope
    set?: Enumerable<EvenNumberSessionWhereUniqueInput>
    disconnect?: Enumerable<EvenNumberSessionWhereUniqueInput>
    delete?: Enumerable<EvenNumberSessionWhereUniqueInput>
    connect?: Enumerable<EvenNumberSessionWhereUniqueInput>
    update?: Enumerable<EvenNumberSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<EvenNumberSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<EvenNumberSessionScalarWhereInput>
  }

  export type HighlightSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<HighlightSessionCreateWithoutUserInput>, Enumerable<HighlightSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<HighlightSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<HighlightSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: HighlightSessionCreateManyUserInputEnvelope
    set?: Enumerable<HighlightSessionWhereUniqueInput>
    disconnect?: Enumerable<HighlightSessionWhereUniqueInput>
    delete?: Enumerable<HighlightSessionWhereUniqueInput>
    connect?: Enumerable<HighlightSessionWhereUniqueInput>
    update?: Enumerable<HighlightSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<HighlightSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<HighlightSessionScalarWhereInput>
  }

  export type WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<WordFlasherSessionCreateWithoutUserInput>, Enumerable<WordFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<WordFlasherSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<WordFlasherSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: WordFlasherSessionCreateManyUserInputEnvelope
    set?: Enumerable<WordFlasherSessionWhereUniqueInput>
    disconnect?: Enumerable<WordFlasherSessionWhereUniqueInput>
    delete?: Enumerable<WordFlasherSessionWhereUniqueInput>
    connect?: Enumerable<WordFlasherSessionWhereUniqueInput>
    update?: Enumerable<WordFlasherSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<WordFlasherSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<WordFlasherSessionScalarWhereInput>
  }

  export type LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<LetterMatcherSessionCreateWithoutUserInput>, Enumerable<LetterMatcherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<LetterMatcherSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<LetterMatcherSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: LetterMatcherSessionCreateManyUserInputEnvelope
    set?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    disconnect?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    delete?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    connect?: Enumerable<LetterMatcherSessionWhereUniqueInput>
    update?: Enumerable<LetterMatcherSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<LetterMatcherSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<LetterMatcherSessionScalarWhereInput>
  }

  export type GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<GreenDotSessionCreateWithoutUserInput>, Enumerable<GreenDotSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GreenDotSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GreenDotSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GreenDotSessionCreateManyUserInputEnvelope
    set?: Enumerable<GreenDotSessionWhereUniqueInput>
    disconnect?: Enumerable<GreenDotSessionWhereUniqueInput>
    delete?: Enumerable<GreenDotSessionWhereUniqueInput>
    connect?: Enumerable<GreenDotSessionWhereUniqueInput>
    update?: Enumerable<GreenDotSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GreenDotSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GreenDotSessionScalarWhereInput>
  }

  export type NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<NumberGuesserSessionCreateWithoutUserInput>, Enumerable<NumberGuesserSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NumberGuesserSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NumberGuesserSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NumberGuesserSessionCreateManyUserInputEnvelope
    set?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    disconnect?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    delete?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    connect?: Enumerable<NumberGuesserSessionWhereUniqueInput>
    update?: Enumerable<NumberGuesserSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NumberGuesserSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NumberGuesserSessionScalarWhereInput>
  }

  export type BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<BoxFlasherSessionCreateWithoutUserInput>, Enumerable<BoxFlasherSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoxFlasherSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoxFlasherSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoxFlasherSessionCreateManyUserInputEnvelope
    set?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    disconnect?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    delete?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    connect?: Enumerable<BoxFlasherSessionWhereUniqueInput>
    update?: Enumerable<BoxFlasherSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoxFlasherSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoxFlasherSessionScalarWhereInput>
  }

  export type PairsSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PairsSessionCreateWithoutUserInput>, Enumerable<PairsSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PairsSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PairsSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PairsSessionCreateManyUserInputEnvelope
    set?: Enumerable<PairsSessionWhereUniqueInput>
    disconnect?: Enumerable<PairsSessionWhereUniqueInput>
    delete?: Enumerable<PairsSessionWhereUniqueInput>
    connect?: Enumerable<PairsSessionWhereUniqueInput>
    update?: Enumerable<PairsSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PairsSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PairsSessionScalarWhereInput>
  }

  export type SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SpeedTestSessionCreateWithoutUserInput>, Enumerable<SpeedTestSessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SpeedTestSessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SpeedTestSessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SpeedTestSessionCreateManyUserInputEnvelope
    set?: Enumerable<SpeedTestSessionWhereUniqueInput>
    disconnect?: Enumerable<SpeedTestSessionWhereUniqueInput>
    delete?: Enumerable<SpeedTestSessionWhereUniqueInput>
    connect?: Enumerable<SpeedTestSessionWhereUniqueInput>
    update?: Enumerable<SpeedTestSessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SpeedTestSessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SpeedTestSessionScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTimeTestsInput = {
    create?: XOR<UserCreateWithoutTimeTestsInput, UserUncheckedCreateWithoutTimeTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeTestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTimeTestsNestedInput = {
    create?: XOR<UserCreateWithoutTimeTestsInput, UserUncheckedCreateWithoutTimeTestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimeTestsInput
    upsert?: UserUpsertWithoutTimeTestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTimeTestsInput, UserUncheckedUpdateWithoutTimeTestsInput>
  }

  export type UserCreateNestedOneWithoutShulteSessionsInput = {
    create?: XOR<UserCreateWithoutShulteSessionsInput, UserUncheckedCreateWithoutShulteSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShulteSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutShulteSessionsNestedInput = {
    create?: XOR<UserCreateWithoutShulteSessionsInput, UserUncheckedCreateWithoutShulteSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShulteSessionsInput
    upsert?: UserUpsertWithoutShulteSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutShulteSessionsInput, UserUncheckedUpdateWithoutShulteSessionsInput>
  }

  export type UserCreateNestedOneWithoutEvenNumberSessionsInput = {
    create?: XOR<UserCreateWithoutEvenNumberSessionsInput, UserUncheckedCreateWithoutEvenNumberSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvenNumberSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEvenNumberSessionsNestedInput = {
    create?: XOR<UserCreateWithoutEvenNumberSessionsInput, UserUncheckedCreateWithoutEvenNumberSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvenNumberSessionsInput
    upsert?: UserUpsertWithoutEvenNumberSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutEvenNumberSessionsInput, UserUncheckedUpdateWithoutEvenNumberSessionsInput>
  }

  export type UserCreateNestedOneWithoutWordGridFlasherSessionsInput = {
    create?: XOR<UserCreateWithoutWordGridFlasherSessionsInput, UserUncheckedCreateWithoutWordGridFlasherSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordGridFlasherSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHighlightTypeFieldUpdateOperationsInput = {
    set?: HighlightType
  }

  export type UserUpdateOneRequiredWithoutWordGridFlasherSessionsNestedInput = {
    create?: XOR<UserCreateWithoutWordGridFlasherSessionsInput, UserUncheckedCreateWithoutWordGridFlasherSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordGridFlasherSessionsInput
    upsert?: UserUpsertWithoutWordGridFlasherSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWordGridFlasherSessionsInput, UserUncheckedUpdateWithoutWordGridFlasherSessionsInput>
  }

  export type UserCreateNestedOneWithoutNumberGuesserSessionInput = {
    create?: XOR<UserCreateWithoutNumberGuesserSessionInput, UserUncheckedCreateWithoutNumberGuesserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNumberGuesserSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNumberGuesserSessionNestedInput = {
    create?: XOR<UserCreateWithoutNumberGuesserSessionInput, UserUncheckedCreateWithoutNumberGuesserSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNumberGuesserSessionInput
    upsert?: UserUpsertWithoutNumberGuesserSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNumberGuesserSessionInput, UserUncheckedUpdateWithoutNumberGuesserSessionInput>
  }

  export type UserCreateNestedOneWithoutLetterMatcherSessionsInput = {
    create?: XOR<UserCreateWithoutLetterMatcherSessionsInput, UserUncheckedCreateWithoutLetterMatcherSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLetterMatcherSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLetterMatcherSessionsNestedInput = {
    create?: XOR<UserCreateWithoutLetterMatcherSessionsInput, UserUncheckedCreateWithoutLetterMatcherSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLetterMatcherSessionsInput
    upsert?: UserUpsertWithoutLetterMatcherSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutLetterMatcherSessionsInput, UserUncheckedUpdateWithoutLetterMatcherSessionsInput>
  }

  export type UserCreateNestedOneWithoutWordFlasherSessionsInput = {
    create?: XOR<UserCreateWithoutWordFlasherSessionsInput, UserUncheckedCreateWithoutWordFlasherSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordFlasherSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWordFlasherSessionsNestedInput = {
    create?: XOR<UserCreateWithoutWordFlasherSessionsInput, UserUncheckedCreateWithoutWordFlasherSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWordFlasherSessionsInput
    upsert?: UserUpsertWithoutWordFlasherSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutWordFlasherSessionsInput, UserUncheckedUpdateWithoutWordFlasherSessionsInput>
  }

  export type UserCreateNestedOneWithoutBoxFlasherSessionInput = {
    create?: XOR<UserCreateWithoutBoxFlasherSessionInput, UserUncheckedCreateWithoutBoxFlasherSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoxFlasherSessionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBoxTypeFieldUpdateOperationsInput = {
    set?: BoxType
  }

  export type UserUpdateOneRequiredWithoutBoxFlasherSessionNestedInput = {
    create?: XOR<UserCreateWithoutBoxFlasherSessionInput, UserUncheckedCreateWithoutBoxFlasherSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoxFlasherSessionInput
    upsert?: UserUpsertWithoutBoxFlasherSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoxFlasherSessionInput, UserUncheckedUpdateWithoutBoxFlasherSessionInput>
  }

  export type UserCreateNestedOneWithoutGreenDotSessionsInput = {
    create?: XOR<UserCreateWithoutGreenDotSessionsInput, UserUncheckedCreateWithoutGreenDotSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGreenDotSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGreenDotSessionsNestedInput = {
    create?: XOR<UserCreateWithoutGreenDotSessionsInput, UserUncheckedCreateWithoutGreenDotSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGreenDotSessionsInput
    upsert?: UserUpsertWithoutGreenDotSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGreenDotSessionsInput, UserUncheckedUpdateWithoutGreenDotSessionsInput>
  }

  export type UserCreateNestedOneWithoutPairsSessionInput = {
    create?: XOR<UserCreateWithoutPairsSessionInput, UserUncheckedCreateWithoutPairsSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPairsSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPairsSessionNestedInput = {
    create?: XOR<UserCreateWithoutPairsSessionInput, UserUncheckedCreateWithoutPairsSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutPairsSessionInput
    upsert?: UserUpsertWithoutPairsSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPairsSessionInput, UserUncheckedUpdateWithoutPairsSessionInput>
  }

  export type UserCreateNestedOneWithoutSpeedTestSessionsInput = {
    create?: XOR<UserCreateWithoutSpeedTestSessionsInput, UserUncheckedCreateWithoutSpeedTestSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpeedTestSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSpeedTestSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSpeedTestSessionsInput, UserUncheckedCreateWithoutSpeedTestSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpeedTestSessionsInput
    upsert?: UserUpsertWithoutSpeedTestSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSpeedTestSessionsInput, UserUncheckedUpdateWithoutSpeedTestSessionsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumOverlayFilter = {
    equals?: Overlay
    in?: Enumerable<Overlay>
    notIn?: Enumerable<Overlay>
    not?: NestedEnumOverlayFilter | Overlay
  }

  export type NestedEnumFontFilter = {
    equals?: Font
    in?: Enumerable<Font>
    notIn?: Enumerable<Font>
    not?: NestedEnumFontFilter | Font
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumSchulteTypeFilter = {
    equals?: SchulteType
    in?: Enumerable<SchulteType>
    notIn?: Enumerable<SchulteType>
    not?: NestedEnumSchulteTypeFilter | SchulteType
  }

  export type NestedEnumLanguageFilter = {
    equals?: Language
    in?: Enumerable<Language>
    notIn?: Enumerable<Language>
    not?: NestedEnumLanguageFilter | Language
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumOverlayWithAggregatesFilter = {
    equals?: Overlay
    in?: Enumerable<Overlay>
    notIn?: Enumerable<Overlay>
    not?: NestedEnumOverlayWithAggregatesFilter | Overlay
    _count?: NestedIntFilter
    _min?: NestedEnumOverlayFilter
    _max?: NestedEnumOverlayFilter
  }

  export type NestedEnumFontWithAggregatesFilter = {
    equals?: Font
    in?: Enumerable<Font>
    notIn?: Enumerable<Font>
    not?: NestedEnumFontWithAggregatesFilter | Font
    _count?: NestedIntFilter
    _min?: NestedEnumFontFilter
    _max?: NestedEnumFontFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumSchulteTypeWithAggregatesFilter = {
    equals?: SchulteType
    in?: Enumerable<SchulteType>
    notIn?: Enumerable<SchulteType>
    not?: NestedEnumSchulteTypeWithAggregatesFilter | SchulteType
    _count?: NestedIntFilter
    _min?: NestedEnumSchulteTypeFilter
    _max?: NestedEnumSchulteTypeFilter
  }

  export type NestedEnumLanguageWithAggregatesFilter = {
    equals?: Language
    in?: Enumerable<Language>
    notIn?: Enumerable<Language>
    not?: NestedEnumLanguageWithAggregatesFilter | Language
    _count?: NestedIntFilter
    _min?: NestedEnumLanguageFilter
    _max?: NestedEnumLanguageFilter
  }

  export type NestedEnumHighlightTypeFilter = {
    equals?: HighlightType
    in?: Enumerable<HighlightType>
    notIn?: Enumerable<HighlightType>
    not?: NestedEnumHighlightTypeFilter | HighlightType
  }

  export type NestedEnumHighlightTypeWithAggregatesFilter = {
    equals?: HighlightType
    in?: Enumerable<HighlightType>
    notIn?: Enumerable<HighlightType>
    not?: NestedEnumHighlightTypeWithAggregatesFilter | HighlightType
    _count?: NestedIntFilter
    _min?: NestedEnumHighlightTypeFilter
    _max?: NestedEnumHighlightTypeFilter
  }

  export type NestedEnumBoxTypeFilter = {
    equals?: BoxType
    in?: Enumerable<BoxType>
    notIn?: Enumerable<BoxType>
    not?: NestedEnumBoxTypeFilter | BoxType
  }

  export type NestedEnumBoxTypeWithAggregatesFilter = {
    equals?: BoxType
    in?: Enumerable<BoxType>
    notIn?: Enumerable<BoxType>
    not?: NestedEnumBoxTypeWithAggregatesFilter | BoxType
    _count?: NestedIntFilter
    _min?: NestedEnumBoxTypeFilter
    _max?: NestedEnumBoxTypeFilter
  }

  export type TimeTestCreateWithoutUserInput = {
    id: string
    sessionId?: string
    CreatedAt: Date | string
    highScore: number
    lowScore: number
    accuracy: number
  }

  export type TimeTestUncheckedCreateWithoutUserInput = {
    id: string
    sessionId?: string
    CreatedAt: Date | string
    highScore: number
    lowScore: number
    accuracy: number
  }

  export type TimeTestCreateOrConnectWithoutUserInput = {
    where: TimeTestWhereUniqueInput
    create: XOR<TimeTestCreateWithoutUserInput, TimeTestUncheckedCreateWithoutUserInput>
  }

  export type TimeTestCreateManyUserInputEnvelope = {
    data: Enumerable<TimeTestCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SchulteSessionCreateWithoutUserInput = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    date: Date | string
    platform?: string
  }

  export type SchulteSessionUncheckedCreateWithoutUserInput = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    date: Date | string
    platform?: string
  }

  export type SchulteSessionCreateOrConnectWithoutUserInput = {
    where: SchulteSessionWhereUniqueInput
    create: XOR<SchulteSessionCreateWithoutUserInput, SchulteSessionUncheckedCreateWithoutUserInput>
  }

  export type SchulteSessionCreateManyUserInputEnvelope = {
    data: Enumerable<SchulteSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type EvenNumberSessionCreateWithoutUserInput = {
    id: string
    errorCount: number
    time: number
    date: Date | string
    platform?: string
  }

  export type EvenNumberSessionUncheckedCreateWithoutUserInput = {
    id: string
    errorCount: number
    time: number
    date: Date | string
    platform?: string
  }

  export type EvenNumberSessionCreateOrConnectWithoutUserInput = {
    where: EvenNumberSessionWhereUniqueInput
    create: XOR<EvenNumberSessionCreateWithoutUserInput, EvenNumberSessionUncheckedCreateWithoutUserInput>
  }

  export type EvenNumberSessionCreateManyUserInputEnvelope = {
    data: Enumerable<EvenNumberSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type HighlightSessionCreateWithoutUserInput = {
    id: string
    speed: number
    date: Date | string
    type: HighlightType
    platform?: string
  }

  export type HighlightSessionUncheckedCreateWithoutUserInput = {
    id: string
    speed: number
    date: Date | string
    type: HighlightType
    platform?: string
  }

  export type HighlightSessionCreateOrConnectWithoutUserInput = {
    where: HighlightSessionWhereUniqueInput
    create: XOR<HighlightSessionCreateWithoutUserInput, HighlightSessionUncheckedCreateWithoutUserInput>
  }

  export type HighlightSessionCreateManyUserInputEnvelope = {
    data: Enumerable<HighlightSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type WordFlasherSessionCreateWithoutUserInput = {
    id: string
    speed: number
    date: Date | string
    type: string
    platform?: string
  }

  export type WordFlasherSessionUncheckedCreateWithoutUserInput = {
    id: string
    speed: number
    date: Date | string
    type: string
    platform?: string
  }

  export type WordFlasherSessionCreateOrConnectWithoutUserInput = {
    where: WordFlasherSessionWhereUniqueInput
    create: XOR<WordFlasherSessionCreateWithoutUserInput, WordFlasherSessionUncheckedCreateWithoutUserInput>
  }

  export type WordFlasherSessionCreateManyUserInputEnvelope = {
    data: Enumerable<WordFlasherSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type LetterMatcherSessionCreateWithoutUserInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    date: Date | string
    platform?: string
  }

  export type LetterMatcherSessionUncheckedCreateWithoutUserInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    date: Date | string
    platform?: string
  }

  export type LetterMatcherSessionCreateOrConnectWithoutUserInput = {
    where: LetterMatcherSessionWhereUniqueInput
    create: XOR<LetterMatcherSessionCreateWithoutUserInput, LetterMatcherSessionUncheckedCreateWithoutUserInput>
  }

  export type LetterMatcherSessionCreateManyUserInputEnvelope = {
    data: Enumerable<LetterMatcherSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GreenDotSessionCreateWithoutUserInput = {
    id: string
    date: Date | string
    platform?: string
  }

  export type GreenDotSessionUncheckedCreateWithoutUserInput = {
    id: string
    date: Date | string
    platform?: string
  }

  export type GreenDotSessionCreateOrConnectWithoutUserInput = {
    where: GreenDotSessionWhereUniqueInput
    create: XOR<GreenDotSessionCreateWithoutUserInput, GreenDotSessionUncheckedCreateWithoutUserInput>
  }

  export type GreenDotSessionCreateManyUserInputEnvelope = {
    data: Enumerable<GreenDotSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NumberGuesserSessionCreateWithoutUserInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date | string
    platform?: string
  }

  export type NumberGuesserSessionUncheckedCreateWithoutUserInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date | string
    platform?: string
  }

  export type NumberGuesserSessionCreateOrConnectWithoutUserInput = {
    where: NumberGuesserSessionWhereUniqueInput
    create: XOR<NumberGuesserSessionCreateWithoutUserInput, NumberGuesserSessionUncheckedCreateWithoutUserInput>
  }

  export type NumberGuesserSessionCreateManyUserInputEnvelope = {
    data: Enumerable<NumberGuesserSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoxFlasherSessionCreateWithoutUserInput = {
    id: string
    speed: number
    date: Date | string
    type: BoxType
    platform?: string
  }

  export type BoxFlasherSessionUncheckedCreateWithoutUserInput = {
    id: string
    speed: number
    date: Date | string
    type: BoxType
    platform?: string
  }

  export type BoxFlasherSessionCreateOrConnectWithoutUserInput = {
    where: BoxFlasherSessionWhereUniqueInput
    create: XOR<BoxFlasherSessionCreateWithoutUserInput, BoxFlasherSessionUncheckedCreateWithoutUserInput>
  }

  export type BoxFlasherSessionCreateManyUserInputEnvelope = {
    data: Enumerable<BoxFlasherSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PairsSessionCreateWithoutUserInput = {
    id: string
    date: Date | string
    time: number
    errorCount: number
    platform?: string
  }

  export type PairsSessionUncheckedCreateWithoutUserInput = {
    id: string
    date: Date | string
    time: number
    errorCount: number
    platform?: string
  }

  export type PairsSessionCreateOrConnectWithoutUserInput = {
    where: PairsSessionWhereUniqueInput
    create: XOR<PairsSessionCreateWithoutUserInput, PairsSessionUncheckedCreateWithoutUserInput>
  }

  export type PairsSessionCreateManyUserInputEnvelope = {
    data: Enumerable<PairsSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SpeedTestSessionCreateWithoutUserInput = {
    id: string
    startSpeed: number
    endSpeed: number
    date: Date | string
    errorCount: number
    platform?: string
  }

  export type SpeedTestSessionUncheckedCreateWithoutUserInput = {
    id: string
    startSpeed: number
    endSpeed: number
    date: Date | string
    errorCount: number
    platform?: string
  }

  export type SpeedTestSessionCreateOrConnectWithoutUserInput = {
    where: SpeedTestSessionWhereUniqueInput
    create: XOR<SpeedTestSessionCreateWithoutUserInput, SpeedTestSessionUncheckedCreateWithoutUserInput>
  }

  export type SpeedTestSessionCreateManyUserInputEnvelope = {
    data: Enumerable<SpeedTestSessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TimeTestUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeTestWhereUniqueInput
    update: XOR<TimeTestUpdateWithoutUserInput, TimeTestUncheckedUpdateWithoutUserInput>
    create: XOR<TimeTestCreateWithoutUserInput, TimeTestUncheckedCreateWithoutUserInput>
  }

  export type TimeTestUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeTestWhereUniqueInput
    data: XOR<TimeTestUpdateWithoutUserInput, TimeTestUncheckedUpdateWithoutUserInput>
  }

  export type TimeTestUpdateManyWithWhereWithoutUserInput = {
    where: TimeTestScalarWhereInput
    data: XOR<TimeTestUpdateManyMutationInput, TimeTestUncheckedUpdateManyWithoutTimeTestsInput>
  }

  export type TimeTestScalarWhereInput = {
    AND?: Enumerable<TimeTestScalarWhereInput>
    OR?: Enumerable<TimeTestScalarWhereInput>
    NOT?: Enumerable<TimeTestScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    sessionId?: StringFilter | string
    CreatedAt?: DateTimeFilter | Date | string
    highScore?: IntFilter | number
    lowScore?: IntFilter | number
    accuracy?: IntFilter | number
  }

  export type SchulteSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SchulteSessionWhereUniqueInput
    update: XOR<SchulteSessionUpdateWithoutUserInput, SchulteSessionUncheckedUpdateWithoutUserInput>
    create: XOR<SchulteSessionCreateWithoutUserInput, SchulteSessionUncheckedCreateWithoutUserInput>
  }

  export type SchulteSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SchulteSessionWhereUniqueInput
    data: XOR<SchulteSessionUpdateWithoutUserInput, SchulteSessionUncheckedUpdateWithoutUserInput>
  }

  export type SchulteSessionUpdateManyWithWhereWithoutUserInput = {
    where: SchulteSessionScalarWhereInput
    data: XOR<SchulteSessionUpdateManyMutationInput, SchulteSessionUncheckedUpdateManyWithoutShulteSessionsInput>
  }

  export type SchulteSessionScalarWhereInput = {
    AND?: Enumerable<SchulteSessionScalarWhereInput>
    OR?: Enumerable<SchulteSessionScalarWhereInput>
    NOT?: Enumerable<SchulteSessionScalarWhereInput>
    id?: StringFilter | string
    type?: EnumSchulteTypeFilter | SchulteType
    time?: IntFilter | number
    errorCount?: IntFilter | number
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
  }

  export type EvenNumberSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: EvenNumberSessionWhereUniqueInput
    update: XOR<EvenNumberSessionUpdateWithoutUserInput, EvenNumberSessionUncheckedUpdateWithoutUserInput>
    create: XOR<EvenNumberSessionCreateWithoutUserInput, EvenNumberSessionUncheckedCreateWithoutUserInput>
  }

  export type EvenNumberSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: EvenNumberSessionWhereUniqueInput
    data: XOR<EvenNumberSessionUpdateWithoutUserInput, EvenNumberSessionUncheckedUpdateWithoutUserInput>
  }

  export type EvenNumberSessionUpdateManyWithWhereWithoutUserInput = {
    where: EvenNumberSessionScalarWhereInput
    data: XOR<EvenNumberSessionUpdateManyMutationInput, EvenNumberSessionUncheckedUpdateManyWithoutEvenNumberSessionsInput>
  }

  export type EvenNumberSessionScalarWhereInput = {
    AND?: Enumerable<EvenNumberSessionScalarWhereInput>
    OR?: Enumerable<EvenNumberSessionScalarWhereInput>
    NOT?: Enumerable<EvenNumberSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    errorCount?: IntFilter | number
    time?: IntFilter | number
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
  }

  export type HighlightSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: HighlightSessionWhereUniqueInput
    update: XOR<HighlightSessionUpdateWithoutUserInput, HighlightSessionUncheckedUpdateWithoutUserInput>
    create: XOR<HighlightSessionCreateWithoutUserInput, HighlightSessionUncheckedCreateWithoutUserInput>
  }

  export type HighlightSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: HighlightSessionWhereUniqueInput
    data: XOR<HighlightSessionUpdateWithoutUserInput, HighlightSessionUncheckedUpdateWithoutUserInput>
  }

  export type HighlightSessionUpdateManyWithWhereWithoutUserInput = {
    where: HighlightSessionScalarWhereInput
    data: XOR<HighlightSessionUpdateManyMutationInput, HighlightSessionUncheckedUpdateManyWithoutWordGridFlasherSessionsInput>
  }

  export type HighlightSessionScalarWhereInput = {
    AND?: Enumerable<HighlightSessionScalarWhereInput>
    OR?: Enumerable<HighlightSessionScalarWhereInput>
    NOT?: Enumerable<HighlightSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    speed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    type?: EnumHighlightTypeFilter | HighlightType
    platform?: StringFilter | string
  }

  export type WordFlasherSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: WordFlasherSessionWhereUniqueInput
    update: XOR<WordFlasherSessionUpdateWithoutUserInput, WordFlasherSessionUncheckedUpdateWithoutUserInput>
    create: XOR<WordFlasherSessionCreateWithoutUserInput, WordFlasherSessionUncheckedCreateWithoutUserInput>
  }

  export type WordFlasherSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: WordFlasherSessionWhereUniqueInput
    data: XOR<WordFlasherSessionUpdateWithoutUserInput, WordFlasherSessionUncheckedUpdateWithoutUserInput>
  }

  export type WordFlasherSessionUpdateManyWithWhereWithoutUserInput = {
    where: WordFlasherSessionScalarWhereInput
    data: XOR<WordFlasherSessionUpdateManyMutationInput, WordFlasherSessionUncheckedUpdateManyWithoutWordFlasherSessionsInput>
  }

  export type WordFlasherSessionScalarWhereInput = {
    AND?: Enumerable<WordFlasherSessionScalarWhereInput>
    OR?: Enumerable<WordFlasherSessionScalarWhereInput>
    NOT?: Enumerable<WordFlasherSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    speed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    type?: StringFilter | string
    platform?: StringFilter | string
  }

  export type LetterMatcherSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: LetterMatcherSessionWhereUniqueInput
    update: XOR<LetterMatcherSessionUpdateWithoutUserInput, LetterMatcherSessionUncheckedUpdateWithoutUserInput>
    create: XOR<LetterMatcherSessionCreateWithoutUserInput, LetterMatcherSessionUncheckedCreateWithoutUserInput>
  }

  export type LetterMatcherSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: LetterMatcherSessionWhereUniqueInput
    data: XOR<LetterMatcherSessionUpdateWithoutUserInput, LetterMatcherSessionUncheckedUpdateWithoutUserInput>
  }

  export type LetterMatcherSessionUpdateManyWithWhereWithoutUserInput = {
    where: LetterMatcherSessionScalarWhereInput
    data: XOR<LetterMatcherSessionUpdateManyMutationInput, LetterMatcherSessionUncheckedUpdateManyWithoutLetterMatcherSessionsInput>
  }

  export type LetterMatcherSessionScalarWhereInput = {
    AND?: Enumerable<LetterMatcherSessionScalarWhereInput>
    OR?: Enumerable<LetterMatcherSessionScalarWhereInput>
    NOT?: Enumerable<LetterMatcherSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    numberCorrect?: IntFilter | number
    numberWrong?: IntFilter | number
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
  }

  export type GreenDotSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: GreenDotSessionWhereUniqueInput
    update: XOR<GreenDotSessionUpdateWithoutUserInput, GreenDotSessionUncheckedUpdateWithoutUserInput>
    create: XOR<GreenDotSessionCreateWithoutUserInput, GreenDotSessionUncheckedCreateWithoutUserInput>
  }

  export type GreenDotSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: GreenDotSessionWhereUniqueInput
    data: XOR<GreenDotSessionUpdateWithoutUserInput, GreenDotSessionUncheckedUpdateWithoutUserInput>
  }

  export type GreenDotSessionUpdateManyWithWhereWithoutUserInput = {
    where: GreenDotSessionScalarWhereInput
    data: XOR<GreenDotSessionUpdateManyMutationInput, GreenDotSessionUncheckedUpdateManyWithoutGreenDotSessionsInput>
  }

  export type GreenDotSessionScalarWhereInput = {
    AND?: Enumerable<GreenDotSessionScalarWhereInput>
    OR?: Enumerable<GreenDotSessionScalarWhereInput>
    NOT?: Enumerable<GreenDotSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
  }

  export type NumberGuesserSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: NumberGuesserSessionWhereUniqueInput
    update: XOR<NumberGuesserSessionUpdateWithoutUserInput, NumberGuesserSessionUncheckedUpdateWithoutUserInput>
    create: XOR<NumberGuesserSessionCreateWithoutUserInput, NumberGuesserSessionUncheckedCreateWithoutUserInput>
  }

  export type NumberGuesserSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: NumberGuesserSessionWhereUniqueInput
    data: XOR<NumberGuesserSessionUpdateWithoutUserInput, NumberGuesserSessionUncheckedUpdateWithoutUserInput>
  }

  export type NumberGuesserSessionUpdateManyWithWhereWithoutUserInput = {
    where: NumberGuesserSessionScalarWhereInput
    data: XOR<NumberGuesserSessionUpdateManyMutationInput, NumberGuesserSessionUncheckedUpdateManyWithoutNumberGuesserSessionInput>
  }

  export type NumberGuesserSessionScalarWhereInput = {
    AND?: Enumerable<NumberGuesserSessionScalarWhereInput>
    OR?: Enumerable<NumberGuesserSessionScalarWhereInput>
    NOT?: Enumerable<NumberGuesserSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    numberCorrect?: IntFilter | number
    numberWrong?: IntFilter | number
    longestStreak?: IntFilter | number
    figuresAtStart?: IntFilter | number
    figuresAtEnd?: IntFilter | number
    date?: DateTimeFilter | Date | string
    platform?: StringFilter | string
  }

  export type BoxFlasherSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: BoxFlasherSessionWhereUniqueInput
    update: XOR<BoxFlasherSessionUpdateWithoutUserInput, BoxFlasherSessionUncheckedUpdateWithoutUserInput>
    create: XOR<BoxFlasherSessionCreateWithoutUserInput, BoxFlasherSessionUncheckedCreateWithoutUserInput>
  }

  export type BoxFlasherSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: BoxFlasherSessionWhereUniqueInput
    data: XOR<BoxFlasherSessionUpdateWithoutUserInput, BoxFlasherSessionUncheckedUpdateWithoutUserInput>
  }

  export type BoxFlasherSessionUpdateManyWithWhereWithoutUserInput = {
    where: BoxFlasherSessionScalarWhereInput
    data: XOR<BoxFlasherSessionUpdateManyMutationInput, BoxFlasherSessionUncheckedUpdateManyWithoutBoxFlasherSessionInput>
  }

  export type BoxFlasherSessionScalarWhereInput = {
    AND?: Enumerable<BoxFlasherSessionScalarWhereInput>
    OR?: Enumerable<BoxFlasherSessionScalarWhereInput>
    NOT?: Enumerable<BoxFlasherSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    speed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    type?: EnumBoxTypeFilter | BoxType
    platform?: StringFilter | string
  }

  export type PairsSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: PairsSessionWhereUniqueInput
    update: XOR<PairsSessionUpdateWithoutUserInput, PairsSessionUncheckedUpdateWithoutUserInput>
    create: XOR<PairsSessionCreateWithoutUserInput, PairsSessionUncheckedCreateWithoutUserInput>
  }

  export type PairsSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: PairsSessionWhereUniqueInput
    data: XOR<PairsSessionUpdateWithoutUserInput, PairsSessionUncheckedUpdateWithoutUserInput>
  }

  export type PairsSessionUpdateManyWithWhereWithoutUserInput = {
    where: PairsSessionScalarWhereInput
    data: XOR<PairsSessionUpdateManyMutationInput, PairsSessionUncheckedUpdateManyWithoutPairsSessionInput>
  }

  export type PairsSessionScalarWhereInput = {
    AND?: Enumerable<PairsSessionScalarWhereInput>
    OR?: Enumerable<PairsSessionScalarWhereInput>
    NOT?: Enumerable<PairsSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    date?: DateTimeFilter | Date | string
    time?: IntFilter | number
    errorCount?: IntFilter | number
    platform?: StringFilter | string
  }

  export type SpeedTestSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SpeedTestSessionWhereUniqueInput
    update: XOR<SpeedTestSessionUpdateWithoutUserInput, SpeedTestSessionUncheckedUpdateWithoutUserInput>
    create: XOR<SpeedTestSessionCreateWithoutUserInput, SpeedTestSessionUncheckedCreateWithoutUserInput>
  }

  export type SpeedTestSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SpeedTestSessionWhereUniqueInput
    data: XOR<SpeedTestSessionUpdateWithoutUserInput, SpeedTestSessionUncheckedUpdateWithoutUserInput>
  }

  export type SpeedTestSessionUpdateManyWithWhereWithoutUserInput = {
    where: SpeedTestSessionScalarWhereInput
    data: XOR<SpeedTestSessionUpdateManyMutationInput, SpeedTestSessionUncheckedUpdateManyWithoutSpeedTestSessionsInput>
  }

  export type SpeedTestSessionScalarWhereInput = {
    AND?: Enumerable<SpeedTestSessionScalarWhereInput>
    OR?: Enumerable<SpeedTestSessionScalarWhereInput>
    NOT?: Enumerable<SpeedTestSessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    startSpeed?: IntFilter | number
    endSpeed?: IntFilter | number
    date?: DateTimeFilter | Date | string
    errorCount?: IntFilter | number
    platform?: StringFilter | string
  }

  export type UserCreateWithoutTimeTestsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimeTestsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimeTestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimeTestsInput, UserUncheckedCreateWithoutTimeTestsInput>
  }

  export type UserUpsertWithoutTimeTestsInput = {
    update: XOR<UserUpdateWithoutTimeTestsInput, UserUncheckedUpdateWithoutTimeTestsInput>
    create: XOR<UserCreateWithoutTimeTestsInput, UserUncheckedCreateWithoutTimeTestsInput>
  }

  export type UserUpdateWithoutTimeTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimeTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutShulteSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShulteSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShulteSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShulteSessionsInput, UserUncheckedCreateWithoutShulteSessionsInput>
  }

  export type UserUpsertWithoutShulteSessionsInput = {
    update: XOR<UserUpdateWithoutShulteSessionsInput, UserUncheckedUpdateWithoutShulteSessionsInput>
    create: XOR<UserCreateWithoutShulteSessionsInput, UserUncheckedCreateWithoutShulteSessionsInput>
  }

  export type UserUpdateWithoutShulteSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShulteSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEvenNumberSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvenNumberSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvenNumberSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvenNumberSessionsInput, UserUncheckedCreateWithoutEvenNumberSessionsInput>
  }

  export type UserUpsertWithoutEvenNumberSessionsInput = {
    update: XOR<UserUpdateWithoutEvenNumberSessionsInput, UserUncheckedUpdateWithoutEvenNumberSessionsInput>
    create: XOR<UserCreateWithoutEvenNumberSessionsInput, UserUncheckedCreateWithoutEvenNumberSessionsInput>
  }

  export type UserUpdateWithoutEvenNumberSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvenNumberSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWordGridFlasherSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWordGridFlasherSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWordGridFlasherSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWordGridFlasherSessionsInput, UserUncheckedCreateWithoutWordGridFlasherSessionsInput>
  }

  export type UserUpsertWithoutWordGridFlasherSessionsInput = {
    update: XOR<UserUpdateWithoutWordGridFlasherSessionsInput, UserUncheckedUpdateWithoutWordGridFlasherSessionsInput>
    create: XOR<UserCreateWithoutWordGridFlasherSessionsInput, UserUncheckedCreateWithoutWordGridFlasherSessionsInput>
  }

  export type UserUpdateWithoutWordGridFlasherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWordGridFlasherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNumberGuesserSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNumberGuesserSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNumberGuesserSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNumberGuesserSessionInput, UserUncheckedCreateWithoutNumberGuesserSessionInput>
  }

  export type UserUpsertWithoutNumberGuesserSessionInput = {
    update: XOR<UserUpdateWithoutNumberGuesserSessionInput, UserUncheckedUpdateWithoutNumberGuesserSessionInput>
    create: XOR<UserCreateWithoutNumberGuesserSessionInput, UserUncheckedCreateWithoutNumberGuesserSessionInput>
  }

  export type UserUpdateWithoutNumberGuesserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNumberGuesserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLetterMatcherSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLetterMatcherSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLetterMatcherSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLetterMatcherSessionsInput, UserUncheckedCreateWithoutLetterMatcherSessionsInput>
  }

  export type UserUpsertWithoutLetterMatcherSessionsInput = {
    update: XOR<UserUpdateWithoutLetterMatcherSessionsInput, UserUncheckedUpdateWithoutLetterMatcherSessionsInput>
    create: XOR<UserCreateWithoutLetterMatcherSessionsInput, UserUncheckedCreateWithoutLetterMatcherSessionsInput>
  }

  export type UserUpdateWithoutLetterMatcherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLetterMatcherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWordFlasherSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWordFlasherSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWordFlasherSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWordFlasherSessionsInput, UserUncheckedCreateWithoutWordFlasherSessionsInput>
  }

  export type UserUpsertWithoutWordFlasherSessionsInput = {
    update: XOR<UserUpdateWithoutWordFlasherSessionsInput, UserUncheckedUpdateWithoutWordFlasherSessionsInput>
    create: XOR<UserCreateWithoutWordFlasherSessionsInput, UserUncheckedCreateWithoutWordFlasherSessionsInput>
  }

  export type UserUpdateWithoutWordFlasherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWordFlasherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBoxFlasherSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoxFlasherSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoxFlasherSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoxFlasherSessionInput, UserUncheckedCreateWithoutBoxFlasherSessionInput>
  }

  export type UserUpsertWithoutBoxFlasherSessionInput = {
    update: XOR<UserUpdateWithoutBoxFlasherSessionInput, UserUncheckedUpdateWithoutBoxFlasherSessionInput>
    create: XOR<UserCreateWithoutBoxFlasherSessionInput, UserUncheckedCreateWithoutBoxFlasherSessionInput>
  }

  export type UserUpdateWithoutBoxFlasherSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBoxFlasherSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGreenDotSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGreenDotSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGreenDotSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGreenDotSessionsInput, UserUncheckedCreateWithoutGreenDotSessionsInput>
  }

  export type UserUpsertWithoutGreenDotSessionsInput = {
    update: XOR<UserUpdateWithoutGreenDotSessionsInput, UserUncheckedUpdateWithoutGreenDotSessionsInput>
    create: XOR<UserCreateWithoutGreenDotSessionsInput, UserUncheckedCreateWithoutGreenDotSessionsInput>
  }

  export type UserUpdateWithoutGreenDotSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGreenDotSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPairsSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPairsSessionInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    SpeedTestSessions?: SpeedTestSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPairsSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPairsSessionInput, UserUncheckedCreateWithoutPairsSessionInput>
  }

  export type UserUpsertWithoutPairsSessionInput = {
    update: XOR<UserUpdateWithoutPairsSessionInput, UserUncheckedUpdateWithoutPairsSessionInput>
    create: XOR<UserCreateWithoutPairsSessionInput, UserUncheckedCreateWithoutPairsSessionInput>
  }

  export type UserUpdateWithoutPairsSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPairsSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    SpeedTestSessions?: SpeedTestSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSpeedTestSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSpeedTestSessionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    firstName?: string
    lastName?: string
    maxWpm?: number
    testSpeed?: number
    currentWpm?: number
    highlightColor?: Overlay
    lastSchulte?: string
    lastSpeedTest?: string
    lastFourByOne?: string
    lastOneByTwo?: string
    lastTwoByTwo?: string
    lastOneByOne?: string
    lastTwoByOne?: string
    lastEvenNumbers?: string
    lastCubeByTwo?: string
    lastCubeByThree?: string
    lastNumberGuesser?: string
    lastLetterMatcher?: string
    lastWordPairs?: string
    lastGreenDot?: string
    numberGuesserFigures?: number
    font?: Font
    isUsingChecklist?: boolean
    isAdmin?: boolean
    isStudySubject?: boolean
    schulteLevel?: SchulteType
    schulteAdvanceCount?: number
    language?: Language
    tested?: boolean
    timeTests?: TimeTestUncheckedCreateNestedManyWithoutUserInput
    shulteSessions?: SchulteSessionUncheckedCreateNestedManyWithoutUserInput
    evenNumberSessions?: EvenNumberSessionUncheckedCreateNestedManyWithoutUserInput
    wordGridFlasherSessions?: HighlightSessionUncheckedCreateNestedManyWithoutUserInput
    wordFlasherSessions?: WordFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedCreateNestedManyWithoutUserInput
    GreenDotSessions?: GreenDotSessionUncheckedCreateNestedManyWithoutUserInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedCreateNestedManyWithoutUserInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedCreateNestedManyWithoutUserInput
    PairsSession?: PairsSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSpeedTestSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpeedTestSessionsInput, UserUncheckedCreateWithoutSpeedTestSessionsInput>
  }

  export type UserUpsertWithoutSpeedTestSessionsInput = {
    update: XOR<UserUpdateWithoutSpeedTestSessionsInput, UserUncheckedUpdateWithoutSpeedTestSessionsInput>
    create: XOR<UserCreateWithoutSpeedTestSessionsInput, UserUncheckedCreateWithoutSpeedTestSessionsInput>
  }

  export type UserUpdateWithoutSpeedTestSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSpeedTestSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    maxWpm?: IntFieldUpdateOperationsInput | number
    testSpeed?: IntFieldUpdateOperationsInput | number
    currentWpm?: IntFieldUpdateOperationsInput | number
    highlightColor?: EnumOverlayFieldUpdateOperationsInput | Overlay
    lastSchulte?: StringFieldUpdateOperationsInput | string
    lastSpeedTest?: StringFieldUpdateOperationsInput | string
    lastFourByOne?: StringFieldUpdateOperationsInput | string
    lastOneByTwo?: StringFieldUpdateOperationsInput | string
    lastTwoByTwo?: StringFieldUpdateOperationsInput | string
    lastOneByOne?: StringFieldUpdateOperationsInput | string
    lastTwoByOne?: StringFieldUpdateOperationsInput | string
    lastEvenNumbers?: StringFieldUpdateOperationsInput | string
    lastCubeByTwo?: StringFieldUpdateOperationsInput | string
    lastCubeByThree?: StringFieldUpdateOperationsInput | string
    lastNumberGuesser?: StringFieldUpdateOperationsInput | string
    lastLetterMatcher?: StringFieldUpdateOperationsInput | string
    lastWordPairs?: StringFieldUpdateOperationsInput | string
    lastGreenDot?: StringFieldUpdateOperationsInput | string
    numberGuesserFigures?: IntFieldUpdateOperationsInput | number
    font?: EnumFontFieldUpdateOperationsInput | Font
    isUsingChecklist?: BoolFieldUpdateOperationsInput | boolean
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    isStudySubject?: BoolFieldUpdateOperationsInput | boolean
    schulteLevel?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    schulteAdvanceCount?: IntFieldUpdateOperationsInput | number
    language?: EnumLanguageFieldUpdateOperationsInput | Language
    tested?: BoolFieldUpdateOperationsInput | boolean
    timeTests?: TimeTestUncheckedUpdateManyWithoutUserNestedInput
    shulteSessions?: SchulteSessionUncheckedUpdateManyWithoutUserNestedInput
    evenNumberSessions?: EvenNumberSessionUncheckedUpdateManyWithoutUserNestedInput
    wordGridFlasherSessions?: HighlightSessionUncheckedUpdateManyWithoutUserNestedInput
    wordFlasherSessions?: WordFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    LetterMatcherSessions?: LetterMatcherSessionUncheckedUpdateManyWithoutUserNestedInput
    GreenDotSessions?: GreenDotSessionUncheckedUpdateManyWithoutUserNestedInput
    NumberGuesserSession?: NumberGuesserSessionUncheckedUpdateManyWithoutUserNestedInput
    BoxFlasherSession?: BoxFlasherSessionUncheckedUpdateManyWithoutUserNestedInput
    PairsSession?: PairsSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TimeTestCreateManyUserInput = {
    id: string
    sessionId?: string
    CreatedAt: Date | string
    highScore: number
    lowScore: number
    accuracy: number
  }

  export type SchulteSessionCreateManyUserInput = {
    id: string
    type: SchulteType
    time: number
    errorCount: number
    date: Date | string
    platform?: string
  }

  export type EvenNumberSessionCreateManyUserInput = {
    id: string
    errorCount: number
    time: number
    date: Date | string
    platform?: string
  }

  export type HighlightSessionCreateManyUserInput = {
    id: string
    speed: number
    date: Date | string
    type: HighlightType
    platform?: string
  }

  export type WordFlasherSessionCreateManyUserInput = {
    id: string
    speed: number
    date: Date | string
    type: string
    platform?: string
  }

  export type LetterMatcherSessionCreateManyUserInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    date: Date | string
    platform?: string
  }

  export type GreenDotSessionCreateManyUserInput = {
    id: string
    date: Date | string
    platform?: string
  }

  export type NumberGuesserSessionCreateManyUserInput = {
    id: string
    numberCorrect: number
    numberWrong: number
    longestStreak: number
    figuresAtStart: number
    figuresAtEnd: number
    date: Date | string
    platform?: string
  }

  export type BoxFlasherSessionCreateManyUserInput = {
    id: string
    speed: number
    date: Date | string
    type: BoxType
    platform?: string
  }

  export type PairsSessionCreateManyUserInput = {
    id: string
    date: Date | string
    time: number
    errorCount: number
    platform?: string
  }

  export type SpeedTestSessionCreateManyUserInput = {
    id: string
    startSpeed: number
    endSpeed: number
    date: Date | string
    errorCount: number
    platform?: string
  }

  export type TimeTestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
  }

  export type TimeTestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
  }

  export type TimeTestUncheckedUpdateManyWithoutTimeTestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    highScore?: IntFieldUpdateOperationsInput | number
    lowScore?: IntFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
  }

  export type SchulteSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SchulteSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SchulteSessionUncheckedUpdateManyWithoutShulteSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumSchulteTypeFieldUpdateOperationsInput | SchulteType
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EvenNumberSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EvenNumberSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EvenNumberSessionUncheckedUpdateManyWithoutEvenNumberSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorCount?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type HighlightSessionUncheckedUpdateManyWithoutWordGridFlasherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumHighlightTypeFieldUpdateOperationsInput | HighlightType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type WordFlasherSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type WordFlasherSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type WordFlasherSessionUncheckedUpdateManyWithoutWordFlasherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LetterMatcherSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LetterMatcherSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type LetterMatcherSessionUncheckedUpdateManyWithoutLetterMatcherSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type GreenDotSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type GreenDotSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type GreenDotSessionUncheckedUpdateManyWithoutGreenDotSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type NumberGuesserSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type NumberGuesserSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type NumberGuesserSessionUncheckedUpdateManyWithoutNumberGuesserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    numberCorrect?: IntFieldUpdateOperationsInput | number
    numberWrong?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    figuresAtStart?: IntFieldUpdateOperationsInput | number
    figuresAtEnd?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type BoxFlasherSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type BoxFlasherSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type BoxFlasherSessionUncheckedUpdateManyWithoutBoxFlasherSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    speed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumBoxTypeFieldUpdateOperationsInput | BoxType
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PairsSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PairsSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type PairsSessionUncheckedUpdateManyWithoutPairsSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: IntFieldUpdateOperationsInput | number
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedTestSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedTestSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type SpeedTestSessionUncheckedUpdateManyWithoutSpeedTestSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startSpeed?: IntFieldUpdateOperationsInput | number
    endSpeed?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    errorCount?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}