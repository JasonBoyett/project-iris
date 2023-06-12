import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { useEffect, useState, useContext } from "react";
import EvensAndOdds from "src/componants/evensandodds";
import { EvenOddProps } from "src/componants/evensandodds";
import { useSwitcher } from "~/hooks/useSwitcher";
import { unknown } from "zod";
const MINUTE_TO_MILLIS = 60_000;

export type framesContextType = {
  framesCleared: number;
  setFramesCleared: React.Dispatch<React.SetStateAction<number>>;
}
export const framesContext = React.createContext<framesContextType>({
  framesCleared: 0,
  setFramesCleared: () => {/*empty on purpose*/ },
});

const Page: NextPage = () => {
  const [framesCleared, setFramesCleared] = useState<number>(0);
  const display = useSwitcher(
    <framesContext.Provider value={{ framesCleared, setFramesCleared }}>
      <EvensAndOdds numToFind={6} rows={8} cols={5} segFigs={4} />
    </framesContext.Provider>,
    <>
      <div className="flex-grid grid-cols-1">
        <div className="text-white text-3xl">
          Done!
        </div>
        <div className="text-white text-3xl">
          You cleared {framesCleared} frames
        </div>
      </div>
    </>,
    MINUTE_TO_MILLIS);
  return (
    <>
      <Head>
        <title>Speed Read</title>
      </Head>

      <div className="flex-grid flex h-screen  text-white items-center justify-center text-3xl">
        {display}
      </div>
    </>
  );
};
export default Page;
