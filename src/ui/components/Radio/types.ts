import { WrappedInputProps } from '../../types';


export interface RadioProps extends WrappedInputProps<'span'> {
  size?: 'medium' | 'small'
  color?: 'primary' | 'secondary' | 'error'
  disabled?: boolean
  checked?: boolean
  value?: any
}
