import { ComponentProps, ReactNode } from 'react';


export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'outlined' | 'contained'
  color?: 'standard' | 'primary' | 'secondary' | 'error'
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
}
