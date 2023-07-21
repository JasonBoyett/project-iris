import HomeButton from "~/componants/homebutton";
import SchulteTable from "~/componants/schultetable";
import { NextPage } from "next";
import Head from "next/head";
import SettingsButton from "~/componants/settingsbutton";

const Page: NextPage = () => {
  return(
    <>
      <Head>
        <title>Speed Read</title>
      </Head>
      <HomeButton />
      <SettingsButton />
      <div className="flex flex-col items-center justify-center">
        <SchulteTable length={5} width={5}/>
      </div>
    </>
  )
}

export default Page
