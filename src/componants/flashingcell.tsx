import React, { 
  useState, 
  useEffect, 
  useRef,
} from 'react';
import useInterval from '~/hooks/useInterval.tsx';
import axios from 'axios';
import { api } from '~/utils/api';

//props for the Grid
type GridProps = {
  wordsPerCell: number;
  wpm: number;
  width: number;
  height: number;
}

//tailwind class constants
const FLASH = "flex text-white text-2xl justify-center p-4 bg-gray-500 rounded-md gap-1";
const NO_FLASH = "flex text-white text-2xl justify-center p-4";

//helper functions
const getWords = async (number: number)  => {
  const response = await axios.get(`https://random-word-api.vercel.app/api?words=${number}`);
  return response.data as string[];
}

const partitionWords = (words: string[], indexes: number, sections: number, wordsPerCell: number) => {
  const partitionedWords: string[][] = [];
  const wordJoiner: string[] = [];
  for (let i = 0; i < words.length/wordsPerCell; i += wordsPerCell){
    wordJoiner.push(words.slice(i, i + wordsPerCell).join(" "));
  }
  for (let i = 0; i < sections; i++) {
    partitionedWords.push(wordJoiner.slice(i));
  }
  return partitionedWords;
}

const wordToComponent = (word: string, id: string) => {
  return (
    React.createElement(
      "div", {className: NO_FLASH, key: id}, word
    )
  );
}

const toggleFlash = (element: React.ReactElement) => {
  const currentClass = element.props.className;
  const newClassName = currentClass !== FLASH ? FLASH : NO_FLASH;
  const newProps = {...element.props, className: newClassName};
  const newElm = React.cloneElement(element, newProps, element.props.children);
  return newElm;
}

const calculateSectionNumber = (props: GridProps) => {
  const perSection = props.width * props.height;
  return Math.ceil(props.wpm / perSection); 
};

const flashingGrid = (props: GridProps) => {
  const [words, setWords] = useState<string[][]>([[]]);
  const [section, setSection] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const [grid, setGrid]: [React.ReactElement[], Function] = useState([]);
  const [gridCount, setGridCount]: [number, Function] = useState<number>(
    calculateSectionNumber(props)
  );
  const [returnClass, setReturnClass]: [string, Function] = useState<string>(
    `grid grid-cols-${props.width} gap-2`
  );
  const [cellCount, setCellCount]: [number, Function] = useState<number>(
    props.width * props.height
  );

  const done = <div className="flex text-4xl text-white justify-center items-center">Done!</div>
  const error = <div>Error</div>

  const buildGrid = () => {
    let newGrid: React.ReactElement[] = [];
    for (let i = 0; i < cellCount; i++) {
      newGrid.push(
        wordToComponent(words[section]?.[i]!, 
        i.toString() + ", "+ section.toString())
      );
    };
    setGrid(newGrid);
  }

  const step = () => {
    try{
      if(index === cellCount && section === gridCount){
        return false;
      }
      if(!index){
        setGrid(grid, grid[index] = toggleFlash(grid[index]!));
        setIndex(previous => previous + 1);
      }
      else if(index < cellCount){
        setGrid(
          grid, 
          grid[index] = toggleFlash(grid[index]!), 
          grid[index - 1] = toggleFlash(grid[index - 1]!)
        );
        setIndex(previous => previous + 1);
      }
      else{
        setSection(previous => previous + 1);
        setIndex(0);
      }
      return true;
    }
    catch(Exception){
      return false;
    }
  }

  useInterval(() => {
    step();
  }, 60000 / props.wpm);

  useEffect(() => {
    const getWordsAndBuildGrid = async () => {
      const holder = await getWords(gridCount * cellCount * props.wordsPerCell);
      setWords(partitionWords(holder, cellCount, gridCount, props.wordsPerCell));
      buildGrid();
    }
    getWordsAndBuildGrid();
  }, []);

  useEffect(() => {
    if(section < gridCount){
    buildGrid();
    }
    else{
      setGrid(null);
    }
  }, [words, section]);

  try{
    return (
      <>
        <div className={returnClass}>
          {grid??done}
        </div>
      </>
    );
  }
  catch(Exception){
    return error;
  }

}

export default flashingGrid;
export type { GridProps };
