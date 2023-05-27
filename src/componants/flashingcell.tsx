import React, { 
  useState, 
  useEffect 
} from 'react';

import axios from 'axios';
import { api } from '~/utils/api';

//props for the Grid
type GridProps = {
  wordCount: number;
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

const partitionWords = (words: string[], indexes: number, sections: number) => {
  const partitionedWords: string[][] = [];
  for (let i = 0; i < sections; i++) {
    partitionedWords.push(words.slice(i * indexes, (i + 1) * indexes));
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
  return Math.ceil(props.wordCount / perSection); 
};

const flashingGrid = (props: GridProps) => {
  const [words, setWords] = useState<string[][]>([[]]);
  const [section, setSection] = useState<number>(0);
  const [index, setIndex]: [number, Function] = useState<number>(0);
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

  let loading: React.ReactElement | null = <div>Loading...</div> 
  const done = <div>Done</div>
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

  const handlePress = () => {
    try{
      if(index === cellCount && section === gridCount){
        console.log(index, section);
        return;
      }
      if(!index){
        setGrid(grid, grid[index] = toggleFlash(grid[index]!));
        setIndex(index + 1);
      }
      else if(index < cellCount){
        setGrid(
          grid, 
          grid[index] = toggleFlash(grid[index]!), 
          grid[index - 1] = toggleFlash(grid[index - 1]!)
        );
        setIndex(index + 1);
      }
      else{
        setSection(section + 1);
        setIndex(0);
      }
      console.log(index, section);
    }
    catch(Exception){
      return;
    }
  }

  useEffect(() => {
    const getWordsAndBuildGrid = async () => {
      const holder = await getWords(gridCount * cellCount);
      setWords(partitionWords(holder, cellCount, gridCount));
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
      loading = null;
    }
  }, [words, section]);

  try{
    return (
      <>
        <button onClick={handlePress}>Press</button>
        <div className={returnClass}>
          {grid??loading??done}
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
