import React from 'react'
import { cva } from 'class-variance-authority';
import type { VariantProps } from "class-variance-authority"

export const fontProvider = cva([
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
    font: {
        primary: 'font-primary', 
        sans: 'font-sans',
        mono: 'font-mono',
        serif: 'font-serif',
    }
  },
})

export interface ButtonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fontProvider> {}

export const FontProvider: React.FC<ButtonProps> = ({
  className,
  font,
  ...props
}) => <div className={fontProvider({ font, className })} {...props} />
  
