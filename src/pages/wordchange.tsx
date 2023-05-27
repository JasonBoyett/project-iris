import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import WordChanger from "src/componants/wordchangecomp";
import { ChangerProps } from "src/componants/wordchangecomp";

const words = ["this", "is", "a", "test", "of", "the", "word", "changer"];

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>

      <div className="flex-grid flex h-screen items-center justify-center text-3xl">
        <WordChanger words={words} rate={60000/200} />
      </div>
    </>
  );
};
export default Page;
