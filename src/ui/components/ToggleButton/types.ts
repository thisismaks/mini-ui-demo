import { ComponentProps, MouseEvent } from 'react';


export interface ToggleButtonProps extends Omit<ComponentProps<'button'>, 'onChange'> {
  value: any
  selected?: boolean
  fullWidth?: boolean
  color?: 'standard' | 'primary' | 'secondary'
  onChange?: (event: MouseEvent<HTMLElement>, value: any) => void
}