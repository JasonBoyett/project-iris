import { type NextPage } from "next";
import {h, Fragment} from "preact"; 
import {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Page: NextPage = () => {
    const [currentNumber, setCurrentNumber] = useState(1);
    let localNumber: number = currentNumber;  
    const [doneString, setDoneString] = useState(' ');
    const [sideLength, setSideLength] = useState(5);
    const [currentErrors, setCurrentErrors] = useState(0);
    

    const shuffledNumbers = (last: number): number[] => {
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
    
    const handleClick = (content: number) => { 
        if (content === localNumber || content === currentNumber){
            setCurrentNumber(prevNumber => prevNumber + 1);
            if(localNumber < sideLength*sideLength){
                localNumber++;
            }
        }
        else{
            setCurrentErrors(prevErrors => prevErrors + 1);
        }
    };

    const Cell = (content: number): JSX.Element => {
        const className = 'h-16 w-16 lg:h-22 lg:w-22 flex items-center justify-center hover:border hover:border-white hover:border-2 rounded bg-gray-900 sm:h-20 sm:w-20';
    return(
            <button className={className} onClick={() => handleClick(content)}>
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
            <div className={`flex grid grid-cols-5 gap-1`}>
                {generateCells()}
            </div>
        );
    };
    const [table, setTable] = useState(generateTable());
    useEffect(() => { setTable(table); }, [table]);
    useEffect(() => {
        if(localNumber < sideLength*sideLength + 1){
            setCurrentNumber(localNumber)
        }
        else{
            setCurrentNumber(0);
            setDoneString('Done!');
        }
    }, 
    [currentNumber, currentErrors, localNumber, doneString]);

    return(
        <>
            <Head>
                <title>Schulte Table</title>
                <meta name="Schulte Table" content="A speed reading game called Schulte Table" />
            </Head>
            <button className='h-20 w-60 flex bg-gradient-to-bl from-black to-bleu-200 text-white items-center justify-center border border-white hover:border-2 rounded hover:bg-gray-800'>
              Instructions
            </button>
            <div className="flex justify-center items-center flex-col">
                <div className="flex flex-col justify-center h-screen items-start">
                    <div>
                        <p className='text-green-500 text-7xl text-center'>{doneString}</p>
                    </div>
                        {table}
                    <div className='text-3xl text-white justify-left'>
                        <p>Errors: {currentErrors}</p>
                        <p>Number: {currentNumber}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Page;
