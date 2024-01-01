import { mysqlTable, mysqlSchema, AnyMySqlColumn, index, unique, varchar, int, datetime, mysqlEnum, smallint, char, primaryKey, text, tinyint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const boxFlasherSession = mysqlTable("BoxFlasherSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	speed: int("speed").notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
	type: mysqlEnum("type", ['two','three']).notNull(),
},
(table) => {
	return {
		idIdx: index("BoxFlasherSession_id_idx").on(table.id),
		boxFlasherSessionIdKey: unique("BoxFlasherSession_id_key").on(table.id),
	}
});

export const evenNumberSession = mysqlTable("EvenNumberSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	errorCount: smallint("errorCount").notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
	time: int("time").notNull(),
},
(table) => {
	return {
		idIdx: index("EvenNumberSession_id_idx").on(table.id),
		evenNumberSessionIdKey: unique("EvenNumberSession_id_key").on(table.id),
	}
});

export const greenDotSession = mysqlTable("GreenDotSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
},
(table) => {
	return {
		idIdx: index("GreenDotSession_id_idx").on(table.id),
		greenDotSessionIdKey: unique("GreenDotSession_id_key").on(table.id),
	}
});

export const highlightSession = mysqlTable("HighlightSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	speed: smallint("speed").notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
	type: mysqlEnum("type", ['fourByOne','oneByTwo','twoByTwo','oneByOne','twoByOne']).notNull(),
},
(table) => {
	return {
		idIdx: index("HighlightSession_id_idx").on(table.id),
		highlightSessionIdKey: unique("HighlightSession_id_key").on(table.id),
	}
});

export const letterMatcherSession = mysqlTable("LetterMatcherSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	numberCorrect: int("numberCorrect").notNull(),
	numberWrong: int("numberWrong").notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
},
(table) => {
	return {
		idIdx: index("LetterMatcherSession_id_idx").on(table.id),
		letterMatcherSessionIdKey: unique("LetterMatcherSession_id_key").on(table.id),
	}
});

export const numberGuesserSession = mysqlTable("NumberGuesserSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	longestStreak: int("longestStreak").notNull(),
	figuresAtStart: int("figuresAtStart").notNull(),
	figuresAtEnd: int("figuresAtEnd").notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
	numberCorrect: int("numberCorrect").notNull(),
	numberWrong: int("numberWrong").notNull(),
},
(table) => {
	return {
		idIdx: index("NumberGuesserSession_id_idx").on(table.id),
		numberGuesserSessionIdKey: unique("NumberGuesserSession_id_key").on(table.id),
	}
});

export const pairsSession = mysqlTable("PairsSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
	time: int("time").notNull(),
	errorCount: int("errorCount").notNull(),
},
(table) => {
	return {
		idIdx: index("PairsSession_id_idx").on(table.id),
		pairsSessionIdKey: unique("PairsSession_id_key").on(table.id),
	}
});

export const satPassage = mysqlTable("SatPassage", {
	id: varchar("id", { length: 191 }).notNull(),
	passageText: varchar("passageText", { length: 191 }).notNull(),
},
(table) => {
	return {
		idIdx: index("SatPassage_id_idx").on(table.id),
		satPassageIdKey: unique("SatPassage_id_key").on(table.id),
	}
});

export const satQuestion = mysqlTable("SatQuestion", {
	id: varchar("id", { length: 191 }).notNull(),
	passageId: varchar("passageId", { length: 191 }).notNull(),
	question: varchar("question", { length: 191 }).notNull(),
	answerA: varchar("answerA", { length: 255 }).notNull(),
	answerB: varchar("answerB", { length: 255 }).notNull(),
	answerC: varchar("answerC", { length: 255 }).notNull(),
	answerD: varchar("answerD", { length: 255 }).notNull(),
	correctAnswer: char("correctAnswer", { length: 1 }).notNull(),
},
(table) => {
	return {
		idIdx: index("SatQuestion_id_idx").on(table.id),
		satQuestionIdKey: unique("SatQuestion_id_key").on(table.id),
	}
});

export const schulteSession = mysqlTable("SchulteSession", {
	id: varchar("id", { length: 191 }).notNull(),
	type: mysqlEnum("type", ['three','five','seven']).notNull(),
	errorCount: smallint("errorCount").notNull(),
	userId: varchar("userId", { length: 255 }).notNull(),
	time: int("time").notNull(),
},
(table) => {
	return {
		idIdx: index("SchulteSession_id_idx").on(table.id),
		schulteSessionIdKey: unique("SchulteSession_id_key").on(table.id),
	}
});

export const speedQuestion = mysqlTable("SpeedQuestion", {
	id: int("id").notNull(),
	passage: text("passage").notNull(),
	question: text("question").notNull(),
	answerA: varchar("answerA", { length: 191 }).notNull(),
	answerB: varchar("answerB", { length: 191 }).notNull(),
	answerC: varchar("answerC", { length: 191 }).notNull(),
	answerD: varchar("answerD", { length: 191 }).notNull(),
	correctAnswer: varchar("correctAnswer", { length: 191 }).notNull(),
	language: mysqlEnum("language", ['english','spanish','italian','german']).default('english').notNull(),
},
(table) => {
	return {
		idIdx: index("SpeedQuestion_id_idx").on(table.id),
		speedQuestionId: primaryKey({ columns: [table.id], name: "SpeedQuestion_id"}),
		speedQuestionIdKey: unique("SpeedQuestion_id_key").on(table.id),
	}
});

export const timeTest = mysqlTable("TimeTest", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	sessionId: varchar("sessionId", { length: 191 }).notNull(),
	createdAt: datetime("CreatedAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
	highScore: smallint("highScore").notNull(),
	lowScore: smallint("lowScore").notNull(),
	accuracy: smallint("accuracy").notNull(),
},
(table) => {
	return {
		idIdx: index("TimeTest_id_idx").on(table.id),
		timeTestSessionId: primaryKey({ columns: [table.sessionId], name: "TimeTest_sessionId"}),
		timeTestIdKey: unique("TimeTest_id_key").on(table.id),
	}
});

export const user = mysqlTable("User", {
	id: varchar("id", { length: 191 }).notNull(),
	createdAt: datetime("createdAt", { mode: 'string', fsp: 3 }).default(sql`CURRENT_TIMESTAMP(3)`).notNull(),
	updatedAt: datetime("updatedAt", { mode: 'string', fsp: 3 }).notNull(),
	firstName: varchar("firstName", { length: 255 }).default('Defaul').notNull(),
	lastName: varchar("lastName", { length: 255 }).default('User').notNull(),
	maxWpm: smallint("maxWpm").default(250).notNull(),
	currentWpm: smallint("currentWpm").default(230).notNull(),
	highlightColor: mysqlEnum("highlightColor", ['BLUE','BLUE_GREY','GREEN','GREY','ORANGE','PEACH','PURPLE','RED','TURQUOISE','YELLOW']).default('GREY').notNull(),
	lastSpeedTest: varchar("lastSpeedTest", { length: 191 }).default(' ').notNull(),
	lastFourByOne: varchar("lastFourByOne", { length: 191 }).default(' ').notNull(),
	lastOneByTwo: varchar("lastOneByTwo", { length: 191 }).default(' ').notNull(),
	lastTwoByTwo: varchar("lastTwoByTwo", { length: 191 }).default(' ').notNull(),
	lastOneByOne: varchar("lastOneByOne", { length: 191 }).default(' ').notNull(),
	lastTwoByOne: varchar("lastTwoByOne", { length: 191 }).default(' ').notNull(),
	lastEvenNumbers: varchar("lastEvenNumbers", { length: 191 }).default(' ').notNull(),
	lastCubeByTwo: varchar("lastCubeByTwo", { length: 191 }).default(' ').notNull(),
	lastCubeByThree: varchar("lastCubeByThree", { length: 191 }).default(' ').notNull(),
	font: mysqlEnum("font", ['sans','serif','mono','robotoMono','rem','kanit','preahvihear','bebasNeue','chakraPetch','ibmPlexMono']).default('sans').notNull(),
	isAdmin: tinyint("isAdmin").default(0).notNull(),
	language: mysqlEnum("language", ['english','spanish','italian','german']).default('english').notNull(),
	tested: tinyint("tested").default(0).notNull(),
	lastNumberGuesser: varchar("lastNumberGuesser", { length: 191 }).default(' ').notNull(),
	numberGuesserFigures: int("numberGuesserFigures").default(4).notNull(),
	testSpeed: smallint("testSpeed").default(230).notNull(),
	isStudySubject: tinyint("isStudySubject").default(0).notNull(),
	lastLetterMatcher: varchar("lastLetterMatcher", { length: 191 }).default(' ').notNull(),
	isUsingChecklist: tinyint("isUsingChecklist").default(1).notNull(),
	lastGreenDot: varchar("lastGreenDot", { length: 191 }).default(' ').notNull(),
	schulteLevel: mysqlEnum("schulteLevel", ['three','five','seven']).default('three').notNull(),
	schulteAdvanceCount: int("schulteAdvanceCount").default(0).notNull(),
	lastSchulte: varchar("lastSchulte", { length: 191 }).default(' ').notNull(),
	lastWordPairs: varchar("lastWordPairs", { length: 191 }).default(' ').notNull(),
},
(table) => {
	return {
		idIdx: index("User_id_idx").on(table.id),
		userId: primaryKey({ columns: [table.id], name: "User_id"}),
		userIdKey: unique("User_id_key").on(table.id),
	}
});

export const wordFlasherSession = mysqlTable("WordFlasherSession", {
	id: varchar("id", { length: 191 }).notNull(),
	userId: varchar("userId", { length: 191 }).notNull(),
	speed: smallint("speed").notNull(),
	date: datetime("date", { mode: 'string'}).notNull(),
	type: varchar("type", { length: 255 }).notNull(),
},
(table) => {
	return {
		idIdx: index("WordFlasherSession_id_idx").on(table.id),
		wordFlasherSessionIdKey: unique("WordFlasherSession_id_key").on(table.id),
	}
});

export const wordPair = mysqlTable("WordPair", {
	primaryWord: varchar("primaryWord", { length: 191 }).notNull(),
	secondaryWord: varchar("secondaryWord", { length: 191 }).notNull(),
	language: mysqlEnum("language", ['english','spanish','italian','german']).default('english').notNull(),
},
(table) => {
	return {
		primaryWordIdx: index("WordPair_primaryWord_idx").on(table.primaryWord),
		wordPairPrimaryWord: primaryKey({ columns: [table.primaryWord], name: "WordPair_primaryWord"}),
		wordPairPrimaryWordKey: unique("WordPair_primaryWord_key").on(table.primaryWord),
	}
});
