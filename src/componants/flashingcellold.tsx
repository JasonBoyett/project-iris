import { warn } from "console";
import React, { useEffect, useState, useRef } from "react";
import { api } from "~/utils/api";

type CellProps = {
  content: string | undefined;
  isFlashing?: boolean;
  flashTime: number;
  id: number;
};

type GridProps ={
  words: string[];
  columns: number;
  flashTime: number;
  grid?: Array<NonNullable<JSX.Element>>;
}

const FlashingCell = (props: CellProps): JSX.Element => {
  const [state, setState]: [CellProps, Function] = useState(props);
  const flashString = "flex text-white text-2xl justify-center p-2 bg-blue-500 rounded-md";
  const noFlashString = "flex text-white text-2xl justify-center p-2 bg-slate-500 rounded-md";
  const [classString, setClassString]: [string, Function]= useState(noFlashString);

  useEffect(() => {
    if (state.isFlashing) {
      setClassString(flashString);
      setTimeout(() => {
        setState({...state, isFlashing: false});
      }, state.flashTime);
    }
    else{
      setClassString(noFlashString);
    }
  }, []);

  useEffect(() => {
    if (state.isFlashing) {
      setClassString(flashString);
      setTimeout(() => {
        setState({...state, isFlashing: false});
      }, state.flashTime);
    }
    else{
      setClassString(noFlashString);
    }
  }, [state.isFlashing]);

  return(
    <>
      <div className={classString}>
        {state.content}
      </div>
    </>
  )
}

const FlashingGrid = (props: GridProps) => {
  const [state, setState] = useState<GridProps>(props);
  const tempGrid: JSX.Element[] = new Array(state.words.length) as JSX.Element[];

  useEffect(() => {
    for (let i = 0; i < state.words.length; i++) {
      console.log("i: " + i);
      tempGrid.push(
        <FlashingCell
          content={state.words[i]}
          flashTime={state.flashTime}
          isFlashing={false}
          id={i}
          key={`cell${i}`}
        />
      );
    }
    console.log("tempGrid: " + JSON.stringify(tempGrid));
    setState((prevState) => ({ ...prevState, grid: tempGrid }));
    console.log("state.grid: " + JSON.stringify(state.grid));

    if(!state.grid) {console.log("grid is undefined"); throw new Error("Grid is undefined 1");}
    tempGrid[0] = React.cloneElement(state.grid[0] as JSX.Element, { isFlashing: true });
    if(!state.grid) throw new Error("Grid is undefined 2");
    for (let i = 1; i < state.grid.length; i++) {
      setTimeout(() => {
        if(!state.grid || !state.grid[i - 1]) throw new Error("Grid is undefined 3");
        tempGrid[i - 1] = React.cloneElement(state.grid[i - 1] as JSX.Element, { isFlashing: false });
        setState((prevState) => ({ ...prevState, tempGrid }));
        tempGrid[i] = React.cloneElement(state.grid[i] as JSX.Element, { isFlashing: true });
        setState((prevState) => ({ ...prevState, tempGrid }));
      }, state.flashTime);
    }
    setState((prevState) => ({ ...prevState, tempGrid }));
  }, []);

  return (
    <>
      <div className={`grid grid-cols-${state.columns} gap-4`}>
        {state.grid}
      </div>
    </>
  );
};

export {FlashingGrid, FlashingCell};
export type {CellProps, GridProps};
