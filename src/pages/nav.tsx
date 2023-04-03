
import { type NextPage } from "next";
import {h, Fragment} from "preact"; 
import {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Page: NextPage = () => {
  const schulteOpen = () => {
    window.open("/schulte", "_self"); 
  };
  return(
    <>
      <Head>
        <title>Select a game</title>
      </Head>
      <main className="flex min-h-screen flex-col grid grid-col-2 items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <button className="border text-white bg-black border-2 rounded-lg p-2 hover:border-3 hover:bg-gray-500" onClick={schulteOpen}>
            Schulte Table
          </button>
        </div>
      </main>
    </>
  );
};
export default Page;
