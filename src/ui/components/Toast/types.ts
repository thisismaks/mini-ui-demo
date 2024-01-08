import { ReactNode } from 'react';


export interface ToastProps {
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left'
  disablePortal?: boolean
}

export type ToastElement = ReactNode | (() => ReactNode);

export interface ToastStackItem {
  id: number,
  value: ToastElement,
}

export interface ToastContextType {
  stack: ToastStackItem[],
  addToast: (toast: ToastElement, hideTimeout?: number) => number,
  delToast: (toastId: number) => void,
}

export interface ToastContextProviderProps {
  children: ReactNode
}
