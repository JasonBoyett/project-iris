import React from 'react'
import { cva } from 'class-variance-authority';
import type { VariantProps } from "class-variance-authority"

export const highlightButton = cva([
  'rounded-full', 
  'text-white', 
  'flex',
  'justify-center',
  'items-center',
  'w-12',
  'h-12',
  'p-4',
], {
  variants: {
    intent: {
      blue: [
        `bg-[#96adfc]/80`,
        'hover:bg-[#96adfc]/100',
      ], 
      blueGrey: [
        'bg-[#dbe1f1]/80',
        'hover:bg-[#dbe1f1]/100',
      ], 
      green: [
        'bg-[#a8f29a]/80',
        'hover:bg-[#a8f29a]/100',
      ], 
      grey: [
        'bg-[#d8d3d6]/80',
        'hover:bg-[#d8d3d6]/100',
      ], 
      orange: [
        'bg-[#eddd6e]/80',
        'hover:bg-[#eddd6e]/100',
      ], 
      peach: [
        'bg-[#edd1b0]/80',
        'hover:bg-[#edd1b0]/100',
      ], 
      purple: [
        'bg-[#b987dc]/80',
        'hover:bg-[#b987dc]/100',
      ], 
      red: [
        'bg-[#e0a6aa]/80',
        'hover:bg-[#e0a6aa]/100',
      ], 
      turquoise: [
        'bg-[#a5f7e1]/80',
        'hover:bg-[#a5f7e1]/100',
      ], 
      yellow: [
        'bg-[#F8fd89]/80',
        'hover:bg-[#F8fd89]/100',
      ], 

    }
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof highlightButton> {}

export const HighlightButton: React.FC<ButtonProps> = ({
  className,
  intent,
  ...props
}) => <button className={highlightButton({ intent, className })} {...props} />
  
