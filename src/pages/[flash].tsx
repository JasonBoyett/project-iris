import { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";
import FlashingGrid from "src/componants/flashingcell";
import { GridProps } from "src/componants/flashingcell";

interface PageProps {
  grid?: JSX.Element;
}

const buildProps: GridProps = {
  width: 2,
  wordCount: 60,
  height: 5
};

const Page: NextPage<PageProps> = () => {
  const loading = (
    <div className="flex flex-col items-center justify-center">
      Loading...
    </div>
  );

  const grid = FlashingGrid(buildProps);

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center grid-cols-2 py-2 gap-4">
        {grid ?? loading}
      </div>
    </>
  );
};

export default Page;
