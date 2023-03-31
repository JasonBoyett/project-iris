import { type NextPage } from "next";
import { useEffect, useState } from "react";
import {h, Fragment} from "preact"; 
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

interface Props{
    divs: Array<JSX.Element>
}

function shuffle(arr: Array<any>) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const Cell = (content: number) => {
    return(
        <div className='h-20 w-20 flex items-center justify-center text-center text-lg border border-white-100'>{content.toString()}
        </div>
    );
};

const ShulteTable = (sideLength: number) => {
    let cells = () => {
        let cells = [];
        for (let i = 0; i < sideLength; i++) {
            for (let j = 0; j < sideLength; j++) {
                cells.push(Cell((i * sideLength + j)+1));
            }
        }
    return shuffle(cells);
};
    let render = ({ divs }: Props) => {
        return(
            <div className={`grid grid-cols-${sideLength}`}>
                {divs.map((div) => (
                  <Fragment key={div.key}>{div}</Fragment>
                ))}
            </div>
        );
    }
    return(
        <div>
            {render({divs: cells()})}
        </div>
    );
};



const Page: NextPage = () => {
    return (
    <>
        <Head>
            <title>Shulte Table</title>
        </Head>
        <main>
            <div className="flex justify-center items-center h-screen">
                {ShulteTable(7)}
            </div>
        </main>
    </>
    );
};

export default Page;
