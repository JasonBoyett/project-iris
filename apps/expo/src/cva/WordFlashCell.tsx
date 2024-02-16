import React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { View, type ViewProps } from 'react-native'
import type { User } from '@acme/types'

export const cell = cva(
  ['flex', 'text-black', 'md:text-xl', 'text-l', 'p-2', 'justify-center'],
  {
    variants: {
      intent: {
        noFlash: 'bg-white',
        flash: 'rounded-lg',
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
  },
)

const colorSelector = (user: User) => {
  switch (user.highlightColor) {
    case 'BLUE':
      return 'blue'
    case 'BLUE_GREY':
      return 'blueGrey'
    case 'GREEN':
      return 'green'
    case 'GREY':
      return 'grey'
    case 'ORANGE':
      return 'orange'
    case 'PEACH':
      return 'peach'
    case 'PURPLE':
      return 'purple'
    case 'RED':
      return 'red'
    case 'TURQUOISE':
      return 'turquoise'
    case 'YELLOW':
      return 'yellow'
  }
  return 'none'
}

export interface CellProps
  extends ViewProps, 
    VariantProps<typeof cell> {
    user: User
    intent: 'noFlash' | 'flash'
  }

export const StyledCell: React.FC<Omit<CellProps, 'flashColor'>> = ({
  className,
  user,
  intent,
  ...props
}) => (
  <View
    className={cell({ 
        intent, 
        flashColor: colorSelector(user), 
        className 
      })}
    {...props}
  />
)
