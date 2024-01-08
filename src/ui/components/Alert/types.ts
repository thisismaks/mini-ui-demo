import { ComponentProps } from 'react';


export interface AlertProps extends ComponentProps<'div'> {
  severity?: 'success' | 'info' | 'warning' | 'error'
  onClose?: () => void
}
