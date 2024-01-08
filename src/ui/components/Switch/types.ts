import { WrappedInputProps } from '../../types';


export interface SwitchProps extends WrappedInputProps<'label'> {
  size?: 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'error'
  checked?: boolean
}