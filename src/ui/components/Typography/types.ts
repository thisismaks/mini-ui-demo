import { ComponentProps } from 'react';


export interface TypographyProps extends ComponentProps<'span'> {
  gutterBottom?: boolean
  noWrap?: boolean
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  // eslint-disable-next-line max-len
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button'
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold'
}
