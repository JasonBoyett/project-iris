import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import FlashingGrid from "src/componants/flashingcell";
import { GridProps } from "src/componants/flashingcell";

const Page: NextPage = () => {
  const [words, setWords]: [string[], Function] = useState([
    "This",
    "is",
    "a",
    "test",
  ]);

  const buildProps = {
    words: ["this", "is", "a", "test", "of", "the", "flashing", "cells"],
    cols: 1,
    rows: 4,
    flashTime: 500,
  } as GridProps;
  const grid = FlashingGrid(buildProps);
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        {grid}
      </div>
    </>
  );
};
export default Page;
