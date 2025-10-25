import React, { Key } from 'react'
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
    'md:w-96',
    'w-80',
  ],
  {
    variants: {
      intent: {
        noFlash: 'bg-invsible invsible',
        flash: 'rounded-lg border-black border-2 gap-1 bg-white',
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

export const StyledCube = ({
  className,
  intent,
  children,
  ...props
}: FlasherProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cornersCell({ intent, className })}
      // eslint-disable-next-line
      children
    />
  )
}
