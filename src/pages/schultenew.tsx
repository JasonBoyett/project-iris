import HomeButton from "~/componants/homebutton";
import SchulteTable from "~/componants/schultetable 2";
import type { SchulteTableProps } from "~/componants/schultetable 2";
import { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return(
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <HomeButton />
      <div className="flex flex-col items-center justify-center">
        <SchulteTable length={5} width={5}/>
      </div>
    </>
  )
}

export default Page
