import { ComponentProps } from 'react';


export interface IconButtonProps extends ComponentProps<'button'> {
  color?:  'primary' | 'secondary' | 'error'
  size?: 'medium' | 'small'
  edge?:  'end' | 'start'
}
