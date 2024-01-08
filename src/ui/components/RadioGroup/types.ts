import { ChangeEvent, ComponentProps } from 'react';


export interface RadioGroupProps extends Omit<ComponentProps<'div'>, 'onChange'> {
  value?: any
  disabled?: boolean
  exclusive?: boolean
  fullWidth?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: any) => void
}
