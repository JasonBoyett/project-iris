import React from 'react';
import { MotionStyle, motion } from 'framer-motion'; 

const backdropStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '#0000000e1',
  alignItems: "center",
  justifyContent: "center"
} satisfies MotionStyle;

export type BackdropProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const BackDrop = ({ onClick, children }: BackdropProps) => {
  return (
    <motion.div
      onClick={onClick}
      style={backdropStyles}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default BackDrop;
