import { motion } from "framer-motion";
import { useEffect } from "react";

type Block = {
  props: {x: string, y: string}[]
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.25;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const drawLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "tween", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const DrawBlock = ({ x, y }: { x: string, y: string }) => {
  return (
    <motion.rect
      width="70"
      height="70"
      x= {x} 
      y= {y}
      rx="20"
      stroke="#000000"
      variants={draw}
      custom={3}
    />
  )
}

const DrawSchulte = ({path}: {path: string}) => {
  const blocks: Block = {
    props: [
      //row 1
      { x: '20', y: '30' },
      { x: '110', y: '30' },
      { x: '200', y: '30' },
      { x: '290', y: '30' },
      { x: '380', y: '30' },
      //row 2
      { x: '20',  y: '120' },
      { x: '110',  y: '120' },
      { x: '200',  y: '120' },
      { x: '290',  y: '120' },
      { x: '380',  y: '120' },
      //row 3
      { x: '20',   y: '210' },
      { x: '110',   y: '210' },
      { x: '200',   y: '210' },
      { x: '290',   y: '210' },
      { x: '380',   y: '210' },
      //row 4
      { x: '20',    y: '300' },
      { x: '110',    y: '300' },
      { x: '200',    y: '300' },
      { x: '290',    y: '300' },
      { x: '380',    y: '300' },
      //row 5
      { x: '20',     y: '390' },
      { x: '110',     y: '390' },
      { x: '200',     y: '390' },
      { x: '290',     y: '390' },
      { x: '380',     y: '390' },
    ]
  }


  return (
    <motion.svg
      width="390"
      height="390"
      viewBox="-10 0 490 490"
      initial="hidden"
      animate="visible"
    >
      {
        blocks.props.map((block, i) => {
          return <DrawBlock 
            key={i} 
            x={block.x}
            y={block.y}
          />
        })
      }
      <motion.path
        d={path}
        stroke="#00cc88"
        variants={drawLine}
        custom={2.5}
      />
    </motion.svg>
  );
}


const Beginner = () => {
  const path = "M 230 250 l 100 100 l -100 -50 l 40 100 L 210 100 l 50 120 L 50 250 L 250 250 L 400 250 l -300 200 L 400 50"
  return(
    <DrawSchulte path={path} />
  )
}

const Intermediate = () => {
  const path = "M 250 250 l 70 70 l -100 -20 L 370 250 l -230 -10 l 100 100 l -20 -200 l -70 200 l 200 -200 L 230 200 l -100 -20 L 200 250" 
  return(
    <DrawSchulte path={path} />
  )
}

const Ideal = () => {
  const path = "M 250 250 l 30 30 l -10 -50 l -70 30 l 30 -50 l 10 80 l 20 -90 l -60 90 l 0 -70 L 250 255" 
  return(
    <DrawSchulte path={path} />
  )
}

export { Beginner, Intermediate, Ideal}
