import React, {
  useEffect,
  useState,
  useContext,
  createContext,
} from 'react';
import axios from 'axios';
import { api } from '~/utils/api';

type CellProps = {
  content: string;
  id: number;
};

type GridProps = {
  cols: number;
  rows: number;
  wpm: number;
}


const getWords = async (number: number) => {
  try{
    const response = await axios.get(`https://random-word-api.herokuapp.com/word?number=${number}`);
    console.log(response.data);
    return response.data;
  }
  catch(error){
    return [];
  }
}

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

const generateGrid = async (size: number, sections: number, flashTime: number) => {
  try{
    const grid: any[][] = [];
    for(let i=0; i<sections; i++){
      const section = [];
      const words = await getWords(size);
      for(let j=0; j<size; j++){
        section.push(Cell({content: words[j], id: j}));
      }
      grid.push(section);
    }
    console.log("From genorateGrid");
    console.log(grid);
    return grid;
  }
  catch(error){
    return [];
  }
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

const FlashingGrid = (props: GridProps) => {

  //the grid itself
  const [grid, setGrid]: [JSX.Element[][], Function] = useState([[]]);

  //stateful variables
  const [flashNumber, setFlashNumber]: [number, Function]= useState(0);
  const [section, setSection] = useState(0);
  const [done, setDone] = useState(false);

  //non state constants
  const totalCells = calculateCellNumber(props); 
  const flashTime = calculateFlashTime(props);
  const sectionTotal = calculateSectionTotal(props);
  const doneElm =
    <div className="flex text-white text-2xl justify-center p-2 bg-blue-500 rounded-md">
      Done!
    </div>;

  const flash = (num: number) => {
    setFlashNumber(num);
  }

  const shiftSection = () => {
    setSection(section + 1);
    setFlashNumber(0);
  }


  const cycle = () => {
    //quick check to make sure the grid is defined at the current section
    if(grid[section] === undefined) throw new Error("section out of bounds");
    //on to the actual logic
    if(flashNumber < (grid[section] as JSX.Element[]).length){
      flash(flashNumber + 1);
      setFlashNumber(flashNumber + 1);
    }
    else{
      section < sectionTotal ? shiftSection() : setDone(true);
    }
  }

  useEffect(() => {
    const fetchGrid = async () => {
      try{
        const gridData: JSX.Element[][] = await generateGrid(
          totalCells,
          sectionTotal, 
          flashTime);
        console.log("From useEffect");
        console.log(totalCells);
        console.log(sectionTotal);
        console.log(flashTime);
        console.log(gridData);
        setGrid(gridData);
      }
      catch(error){
        setGrid([]);
      }
    }
    fetchGrid();
  }, []);

  useEffect(() =>{
    cycle();
  }, [flashNumber]);

  return(
    <>
      <flashNumberContext.Provider value={flashNumber}>
        <button onClick={cycle}>Flash</button>
        <div className={`flex grid grid-cols-1 gap-1`}>{done ? doneElm: grid[section]}</div>
      </flashNumberContext.Provider>
    </>
  );


}
export default FlashingGrid;
export type { GridProps };
