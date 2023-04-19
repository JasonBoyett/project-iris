import { warn } from "console";
import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  createContext,
} from "react";
import { api } from "~/utils/api";

type ChangerProps = {
  words: string[];
  rate: number;
};

const WordChanger = (props: ChangerProps) => {
  const [state, setState]: [ChangerProps, Function] = useState(props);
  const counter = useRef(0);
  const [content, setContent]: [string, Function] = useState(() => {
    if (!state.words[counter.current]) throw new Error("No words to display");
    return state.words[counter.current] as string;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      counter.current++;
      if (state.words[counter.current]) {
        setContent(state.words[counter.current]);
      } else {
        return () => clearTimeout(timer);
      }
    }, state.rate);
  }, [content]);

  return (
    <>
      <div className="flex h-20 w-60 items-center justify-center rounded border border-2 border-white">
        {content}
      </div>
    </>
  );
};

export default WordChanger;
export type { ChangerProps };
