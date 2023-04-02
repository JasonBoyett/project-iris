import { type NextPage } from "next";
import {h, Fragment} from "preact"; 
import {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Page: NextPage = () => {
    
    const [sideLength, setSideLength] = useState(9);

    function shuffledNumbers(last: number): number[] {
    const arr: number[] | undefined[] = [];
    for (let i = 1; i <= last; i++) {
        arr.push(i as never);
    }
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i] , arr[j]] = [arr[j], arr[i]];
    }
    return arr as number[];
    }

    const [numbers, changeNumbers] = useState(shuffledNumbers(sideLength * sideLength));

    const Cell = (content: number | string): JSX.Element => {
        return(
            <button className='h-20 w-20 flex items-center justify-center border border-zinc-800 border-2 rounded hover:bg-gray-900'>
                <div className="text-center text-2xl text-white">{content}</div>
            </button>
        );
    };

    const generateCells = (): JSX.Element[] => {
        const cells: JSX.Element[] = numbers.map( n => {
            return Cell(n);
        });
        return cells;
    };

    const generateTable = (): JSX.Element => {
        return(
            <div className={`flex grid grid-cols-${sideLength} gap-1`}>
                {generateCells()}
            </div>
        );
    };
    const [table, setTable] = useState(generateTable());
    useEffect(() => { setTable(table); }, [table]);

    return(
        <>
            <Head>
                <title>Schulte Table</title>
                <meta name="Schulte Table" content="A speed reading game called Schulte Table" />
            </Head>
            <div className="flex justify-center h-screen items-center">
                {table}
            </div>
        </>
    );
};
export default Page;