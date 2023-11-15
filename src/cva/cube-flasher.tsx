import React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

export const cornersCell = cva(
  [
    'flex',
    'relative',
    'text-black',
    'text-2xl',
    'p-8',
    'gap-2',
    'h-52',
    'w-96',
  ],
  {
    variants: {
      intent: {
        noFlash: 'bg-invsible invsible',
        flash: 'rounded-lg gap-1 bg-white',
      },
    },
    compoundVariants: [{ intent: 'noFlash' }],
    defaultVariants: {
      intent: 'noFlash',
    },
  },
)

export interface FlasherProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cornersCell> {}

export const StyledCube: React.FC<FlasherProps> = ({
  className,
  intent,
  ...props
}) => (
  <div
    className={cornersCell({ intent, className })}
    {...props}
  />
)
