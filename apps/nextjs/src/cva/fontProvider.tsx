import React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

export const fontProvider = cva([], {
  variants: {
    font: {
      sans: 'font-sans',
      mono: 'font-mono',
      serif: 'font-serif',
      robotoMono: 'font-robotoMono',
      rem: 'font-rem',
      kanit: 'font-kanit',
      preahvihear: 'font-preahvihear',
      bebasNeue: 'font-bebasNeue',
      chakraPetch: 'font-chakraPetch',
      ibmPlexMono: 'font-ibmPlexMono',
    },
  },
})

export interface ProviderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fontProvider> {}

export const FontProvider: React.FC<ProviderProps> = ({
  className,
  font,
  ...props
}) => (
  <div
    className={fontProvider({ font, className })}
    {...props}
  />
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fontProvider> {}

export const FontProviderButton: React.FC<ButtonProps> = ({
  className,
  font,
  ...props
}) => (
  <button
    className={fontProvider({ font, className })}
    {...props}
  />
)
