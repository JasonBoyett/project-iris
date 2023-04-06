
import { type NextPage } from "next";
import {h, Fragment} from "preact"; 
import {useState, useEffect} from "react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";

const Page: NextPage = () => {
  const tempClick = () => {
    window.open('/', '_self');
  }
  return(
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <main className="flex min-h-screen flex-col grid grid-col-2 items-center justify-center">
        <div onClick={tempClick}>
          <p className='text-5xl text-white'>Sign up coming soon</p>
        </div>
      </main>
    </>
  );
};

export default Page;
