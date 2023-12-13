import { w } from 'drizzle-orm/query-promise.d-0dd411fc'
import { useRouter, type SingletonRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { uuid } from 'uuidv4'
import { FontProviderButton } from '~/cva/fontProvider'
import { useStopWatch } from '~/hooks/useStopWatch'
import useUserStore from '~/stores/userStore'
import { api } from '~/utils/api'
import { Font, User, WordPair } from '~/utils/types'

type PairsProps = {
	diffCount: number
}

export default function WordPairs({ diffCount }: PairsProps) {
	const totalCells = 16

	const pairs = api.getExcerciseProps.getWordPairs.useQuery(
		{
			language: "english",
			count: diffCount
		})
	const random = api.getExcerciseProps.getRandomWords.useQuery(
		{
			number: totalCells - diffCount,
			language: "english",
			max: 7
		})

	const [pairs2, setPairs2] = useState<WordPair[]>([])
	const [random2, setRandom2] = useState<string[]>([])
	const [grid, setGrid] = useState<JSX.Element[]>([])

	function GenerateGrid(pairs: WordPair[], random: string[]) {
		const cells = []
		for (let i = 0; i < diffCount; i++) {
			cells.push(generateSame(pairs))
		}
		for (let i = 0; i < totalCells - diffCount; i++) {
			cells.push(generateDifferent(random))
		}
		return cells.sort(() => Math.random() - 0.5)
	}

	function generateSame(list: WordPair[]) {
		const pair = list.pop()
		return <Cell
			different = {true}
			word1={pair?.primaryWord ?? ""}
			word2={pair?.secondaryWord ?? ""}
			id={uuid()}
		/>
	}
	function generateDifferent(list: string[]) {
		const randoword = list.pop() ?? ""
		return <Cell
			different = {false}
			word1={randoword}
			word2={randoword}
			id={uuid()}
		/>
	}


	useEffect(() => {
		if (!pairs.data) return
		if (!random.data) return
		setPairs2(() => pairs.data as WordPair[])
		setRandom2(() => random.data as string[])
		const pairs3 = [...pairs2]
		const random3 = [...random2]
		setGrid(GenerateGrid(pairs3, random3))
	}, [pairs.data, random.data])

	return (
		<div
			className="grid grid-cols-4 gap-2"
		>
			{grid}
		</div>
	)
}

//
type CellProps = {
	font?: Font
	different: boolean
	word1: string
	word2: string
	id?: string
}

function Cell({ font,different, word1, word2, id }: CellProps) {
	const [cellColor, setCellColor] = useState("bg-lime-500")
	function handleClick() {
		if (different)  {
			setCellColor("bg-red-500")
		} else {
		}
	}
	useEffect(() => {
		if (!id) {
			id = "0"
		}
		if (!font) {
			font = 'sans'
		}
	}, [font, id])
	// todo: delete w and h later
	return (
		<FontProviderButton
			font={font}
			key={id}
			onClick={() => handleClick()}
			id={id?.toString() ?? '0'}
			className={cellColor + " items-center grid grid-cols-1 w-32 h-24 rounded-lg"}
		>
			<div>
				{word1}
			</div>
			<div>
				{word2}
			</div>
		</FontProviderButton>
	)
}
