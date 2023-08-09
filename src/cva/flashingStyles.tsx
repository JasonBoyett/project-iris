import React from 'react'
import { cva } from 'class-variance-authority';
import type { VariantProps } from "class-variance-authority"

export const cell = cva(['flex', 'text-black', 'text-xl', 'p-8', 'justify-center'], {
  variants: {
    intent: {
      noFlash: '',
      flash: 'rounded-lg gap-1',
    },
    flashColor: {
      none: '',
      blue: 'bg-[#96adfc]',
      blueGrey: 'bg-[#dbe1f1]',
      green: 'bg-[#a8f29]',
      grey: 'bg-[#d8d3d6]',
      orange: 'bg-[#eddd6e]',
      peach: 'bg-[#edd1b0]',
      purple: 'bg-[#b987dc]',
      red: 'bg-[#e0a6aa]',
      turquoise: 'bg-[#a5f7e1]',
      yellow: 'bg-[#F8fd89]',
    },
  },
  compoundVariants: [{ intent: 'noFlash', flashColor: 'none' }],
  defaultVariants: {
    intent: 'noFlash',
    flashColor: 'none',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cell> { }

export const StyledCell: React.FC<ButtonProps> = ({
  className,
  intent,
  flashColor,
  ...props
}) => <div className={cell({ intent, flashColor, className })} {...props} />

