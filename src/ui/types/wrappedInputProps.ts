import {
  Ref,
  ComponentProps,
  InputHTMLAttributes,
} from 'react';


type InputProps =
    | 'children'
    | 'onBlur'
    | 'onFocus'
    | 'onKeyDown'
    | 'onKeyUp'
    | 'onChange'
    | 'disabled'
    | 'value'
    | 'defaultValue'
    | 'max'
    | 'min'
    | 'step';

type RaisedInputProps = Partial<Pick<InputHTMLAttributes<HTMLInputElement>, InputProps>>;

interface ExtendedInputProps extends RaisedInputProps {
  inputRef?: Ref<HTMLInputElement>
  inputProps?: InputHTMLAttributes<HTMLInputElement>,
}

// eslint-disable-next-line max-len
export type WrappedInputProps<T extends 'div' | 'label' | 'span'> = Omit<ComponentProps<T>, InputProps> & ExtendedInputProps;
