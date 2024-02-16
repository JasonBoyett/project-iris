import React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { 
  TouchableOpacity, 
  type TouchableOpacityProps,
  View,
  type ViewProps,
} from 'react-native'

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
  extends ViewProps,
  VariantProps<typeof fontProvider> {}

export const FontProvider: React.FC<ProviderProps> = ({
  className,
  font,
  ...props
}) => (
  <View
    className={fontProvider({ font, className })}
    {...props}
  />
)

export const FontButton: React.FC<ProviderProps & TouchableOpacityProps> = ({
  className,
  font,
  ...props
}) => (
  <TouchableOpacity
    className={fontProvider({ font, className })}
    {...props}
  />
)

