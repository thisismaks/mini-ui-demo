import { ChangeEvent, ComponentProps, ReactElement, ReactNode } from 'react';


export interface FormControlLabelProps extends Omit<ComponentProps<'label'>, 'onChange'> {
  value?: any
  label: ReactNode
  checked?: boolean
  disabled?: boolean
  control: ReactElement
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
  onChange?: (event: ChangeEvent<HTMLInputElement>, value: any) => void
}
