import { ComponentProps } from 'react';


export interface StackProps extends ComponentProps<'div'> {
  gap?: 0 | 0.5 | 1 | 2 | 3 | 4 | 8 | 12
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  flexWrap?: boolean,
}