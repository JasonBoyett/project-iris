import { warn } from "console";
import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  createContext,
} from "react";
import { api } from "~/utils/api";

type CellProps = {
  content: string;
  flashTime: number;
  id: number;
};

type GridProps = {
  words: string[];
  cols: number;
  rows: number;
  flashTime: number;
};

let flashNumberContext = createContext(0);

const Cell = (props: CellProps) => {
  const [state, setState]: [CellProps, Function] = useState(props);
  const flashNumber = useContext(flashNumberContext);
  const flashString =
    "flex text-white text-2xl justify-center p-2 bg-blue-500 rounded-md";
  const noFlashString =
    "flex text-white text-2xl justify-center p-2 bg-gray-500 rounded-md";
  const [className, setClassName]: [string, Function] = useState(noFlashString);

  useEffect(() => {
    if (flashNumber === state.id) {
      setClassName(flashString);
    } else {
      setClassName(noFlashString);
    }
  }, [flashNumber]);

  useEffect(() => {
    if (flashNumber === state.id) {
      setClassName(flashString);
    } else {
      setClassName(noFlashString);
    }
  }, []);

  return (
    <>
      <div className={className}>{state.content}</div>
    </>
  );
};

const FlashingGrid = (props: GridProps) => {
  const [state, setState] = useState(props);
  let [shownWords, setShownWords] = useState(
    state.words.slice(0, props.cols * props.rows)
  );
  const [flashNumber, setFlashNumber] = useState(0);
  const [section, setSection] = useState(0);
  const [grid, setGrid]: [JSX.Element[], Function] = useState([]);

  const reset = () => {
    let tempArray: string[] = [];
    setSection(prev => prev + 1);
    const trueSection = section + 1;
    console.log(section, trueSection);
    tempArray = state.words.slice(
      trueSection * state.cols * state.rows,
      (trueSection + 1) * state.cols * state.rows
    );
    setSection(trueSection);
    console.log(section);
    console.log(tempArray);
    tempArray = tempArray.filter((element: any) => {
      return element !== undefined;
    });
    return tempArray;
  };

  const makeGrid = () => {
    if (shownWords === undefined) throw new Error("No words to show");
    const size = shownWords.length;
    let tempGrid: JSX.Element[] = [];
    for (let i = 0; i < size; i++) {
      tempGrid.push(
        <Cell
          content={shownWords[i] as string}
          id={i}
          flashTime={state.flashTime}
          key={i}
        />
      );
    }
    setGrid(tempGrid);
    console.log(tempGrid);
  };

  const cycle = () => {
    if (flashNumber < state.cols * state.rows) {
      setFlashNumber((prev) => prev + 1);
    } else {
      // setShownWords(reset());
      shownWords = reset();
      console.log(shownWords);
      setFlashNumber(0);
      makeGrid();
      console.log("in use effect",grid.toString());
    }
  };

  useEffect(() => {
    console.log("useEffect ran");
    console.log("in use effect", section);
    if (section > 0) {
      console.log("in use effect made the grid");
      makeGrid();
    }
  }, [shownWords]);

  useEffect(() => {
    makeGrid();
    // console.log(grid);
  }, []);

  // useEffect(() => {
  //   makeGrid();
  // }, [flashNumber]);
  //
  return (
    <>
      <flashNumberContext.Provider value={flashNumber}>
        <button onClick={cycle}>Flash</button>
        <div className={`flex grid grid-cols-1 gap-1`}>{grid}</div>
      </flashNumberContext.Provider>
    </>
  );
};

export default FlashingGrid;
export type { CellProps, GridProps };
