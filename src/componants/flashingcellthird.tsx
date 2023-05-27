import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { api } from '~/utils/api';

type CellProps = {
  content: string;
  id: number;
}

type GridProps = {
  cols: number;
  rows: number;
  wpm: number;
}
const FLASH_STRING = "flex text-white text-2xl justify-center p-2 bg-blue-500 rounded-md";
const NO_FLASH_STRING = "flex text-white text-2xl justify-center p-2 bg-gray-500 rounded-md";


const getWords = async (number: number) =>{
  try{
    const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${number}`);
    console.log(response.data);
    return response.data;
  }
  catch(error){
    return [];
  }
}

const cell = (props: CellProps): JSX.Element => {

  return(
    <div className={NO_FLASH_STRING} id={props.id.toString()}>
      {props.content}
    </div>
  );

}

const buildGrid = async (props: GridProps) => {
  const words = await getWords(props.cols * props.rows);
  const cells: JSX.Element[][] = [];
  let wordIndx = 0;
  for(let i = 0; i < props.rows; i++){
    let holder: JSX.Element[] = [];
    for (let j = 0; j < props.cols; j++){
      holder.push(cell({content: words[wordIndx], id: wordIndx}));
      wordIndx++;
    }
    cells.push(holder);
  }
  console.log("ran", cells);
  return cells;
};

const calculateCellNumber = (GridProps: GridProps) => {
  return Math.ceil((GridProps.cols * GridProps.rows) / GridProps.wpm) * GridProps.wpm; 
};

const calculateSectionTotal = (GridProps: GridProps) => {
  return Math.ceil((GridProps.cols * GridProps.rows) / GridProps.wpm);
};

const calculateFlashTime = (GridProps: GridProps) => {
  return 60000 / GridProps.wpm;
};

const FashingGrid = (props: GridProps) => {
  //state variables
  const [grid, setGrid]: [JSX.Element[][], Function] = useState([]);
  const [index, setIndex]: [number, Function] = useState(0);
  const [section, setSection]: [number, Function] = useState(0);
  const [content, setContent]: [JSX.Element[], Function] = useState([]);
  //state constants
  const totalCells = calculateCellNumber(props);
  const totalSections = calculateSectionTotal(props);
  const flashTime = calculateFlashTime(props);
  //helper functions
  const cycleForward = () =>{
    if(index === 0){
      grid[section]![index] = React.cloneElement((grid[section]?.[index] as JSX.Element), {className: FLASH_STRING});
      setIndex(index+1);
    }
    else{
      grid[section]![index-1] = React.cloneElement((grid[section]?.[index] as JSX.Element), {className: NO_FLASH_STRING});
      grid[section]![index] = React.cloneElement((grid[section]?.[index] as JSX.Element), {className: FLASH_STRING});
      setIndex(index+1);
    }
  }
  const cycleBack = () => {
    //TODO build me
  }
  const cycle = () => {
    if(index < props.rows){
      cycleForward();
    }
    else cycleBack();
  }

  useEffect(() =>{
    const build = async () => {
      const builtGrid = await buildGrid(props);
      setGrid(builtGrid);
    }
    build();
    console.log(content);
  }, []);

  useEffect(() =>{
    setContent(grid[section]);
  }, [section]);

  return(
  <>
  <div className="flex grid grid-cols-1 gap-1">{content}</div>
  <div>hello</div>
  </>
  );

}

export default FashingGrid;
export type { GridProps };



