import { ComponentProps, MouseEvent } from 'react';


export interface ToggleButtonGroupProps extends Omit<ComponentProps<'div'>, 'onChange'> {
  value?: any
  disabled?: boolean
  exclusive?: boolean
  fullWidth?: boolean
  color?: 'standard' | 'primary' | 'secondary'
  onChange?: (event: MouseEvent<HTMLElement>, value: any) => void  // todo.. mouseEvent?
}
