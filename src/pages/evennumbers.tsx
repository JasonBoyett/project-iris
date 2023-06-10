import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import EvensAndOdds from "src/componants/evensandodds";
import { EvenOddProps } from "src/componants/evensandodds";


const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>

      <div className="flex-grid flex h-screen  text-white items-center justify-center text-3xl">
        <EvensAndOdds numToFind={6} width={5} height={8} segFigs={4} />
      </div>
    </>
  );
};
export default Page;
