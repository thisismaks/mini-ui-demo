import { ComponentProps, ReactElement, SyntheticEvent, FunctionComponent } from 'react';

import { BackdropProps } from '../Backdrop/types';


export interface ModalProps extends ComponentProps<'div'> {
  open?: boolean
  BackdropComponent?: FunctionComponent<BackdropProps>
  BackdropProps?: BackdropProps;
  children?: ReactElement
  disablePortal?: boolean
  onClose: (event: SyntheticEvent, reason: string) => void
}
