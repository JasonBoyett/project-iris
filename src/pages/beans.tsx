import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { useEffect, useState } from "react";

const Page: NextPage = () => {
  const [wantBeans, setWantBeans]: [JSX.Element[], Function] = useState([<div>I want beans</div>]);

  const handleBeans = () => {
    setWantBeans((prev: JSX.Element[]) => [...prev, <div>beans</div>]);
  };
 
  const refry = () => {
    setWantBeans([<div>no mo beans</div>])
  }

  useEffect(() => {console.log(wantBeans)}, [wantBeans]);

  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <div className="flex grid justify-center items-center text-3xl">
        <button className="bg-green-400" onClick={handleBeans}>
         beans
        </button>
        <div>
          {wantBeans}
        </div>
        <button className="bg-yellow-400" onClick={refry}>
          Refry beans
        </button>
      </div>
    </>
  );
};
export default Page;
