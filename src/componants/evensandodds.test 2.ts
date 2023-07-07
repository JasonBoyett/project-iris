import { expect, test, describe } from 'vitest'
import { generateNumbers } from './evensandodds'

type EvenOddProps = {
    segFigs: number
    evens: number
    cols: number
    rows: number
}

describe('generates an array of random numbers with a given number of significant figures and with a given number of even numbers', () => {
    test('generates a single array of 10 numbers with 5 even numbers and 3 significant figures', () => {
        const props = { segFigs: 3, evens: 5, cols: 1, rows: 10 }
        const testArray = generateNumbers(props)
        let evenCount = 0
        let overs = 0
        let unders = 0
        testArray.forEach((num) => {
            if (num % 2 === 0) {
                evenCount++
            }
            if (num > Math.pow(10, props.segFigs)) {
                overs++
            }
            if (num < Math.pow(10, props.segFigs - 1)) {
                unders++
            }
        })
        expect(testArray.length).toBe(props.cols * props.rows)
        expect(evenCount).toBe(props.evens)
        expect(overs).toBe(0)
        expect(unders).toBe(0)
    })

    test('generates a single array of 40 numbers with 6 even numbers and 4 significant figures', () => {
        const props = { segFigs: 4, evens: 6, cols: 5, rows: 8 }
        const testArray = generateNumbers(props)
        let evenCount = 0
        let overs = 0
        let unders = 0
        testArray.forEach((num) => {
            if (num % 2 === 0) {
                evenCount++
            }
            if (num > Math.pow(10, props.segFigs)) {
                overs++
            }
            if (num < Math.pow(10, props.segFigs - 1)) {
                unders++
            }
        })
        expect(testArray.length).toBe(props.cols * props.rows)
        expect(evenCount).toBe(props.evens)
        expect(overs).toBe(0)
        expect(unders).toBe(0)
    })

    test('generates a million arrays of 40 numbers with 6 even numbers and 4 significant figures', () => {
        const ITERS = 1000000
        const props = { segFigs: 4, evens: 6, cols: 5, rows: 8 }
        const holder = []
        let evenCount = 0
        let overs = 0
        let unders = 0

        for (let i = 0; i < ITERS; i++) {
            holder.push(generateNumbers(props))
        }
        holder.forEach((testArray) => {
            testArray.forEach((num) => {
                if (num % 2 === 0) {
                    evenCount++
                }
                if (num > Math.pow(10, props.segFigs)) {
                    overs++
                }
                if (num < Math.pow(10, props.segFigs - 1)) {
                    unders++
                }
            })
            expect(testArray.length).toBe(props.cols * props.rows)
        })
        expect(evenCount).toBe(props.evens * ITERS)
        expect(overs).toBe(0)
        expect(unders).toBe(0)
    })
})
