import { motion } from 'framer-motion';
import Backdrop from '../backdrop'; 
import { useState } from 'react';

export type instructionsPageProps ={
  handleClose: () => void;
  children?: React.ReactNode;
  isOpen: boolean;
}

const dropin = {
  hiden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration : 0.1,
      type: 'spring',
      stiffness: 500,
      damping: 100,
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
  }
}

const InstructionsPage = ({ handleClose, children, isOpen }: instructionsPageProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='flex-grid grid-cols-1 text-3xl text-white'
        variants={dropin}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        {children}
        <button onClick={handleClose} className='text-3xl text-white border-white border-2 rounded-lg'>
          Close
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default InstructionsPage;
