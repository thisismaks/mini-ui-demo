import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

import { ToastStackItem, ToastContextProviderProps, ToastContextType, ToastElement } from './types';


const Context = createContext<ToastContextType | undefined>(undefined);

export const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [stack, setStack] = useState<ToastStackItem[]>([]);
  const count = useRef(0);

  const delToast = useCallback((id: number) => {
    setStack(currStack => currStack.filter(item => item.id !== id));
  }, []);
  
  const addToast = useCallback((value: ToastElement, timeout = 3000) => {
    const id = count.current;
    count.current++;
    setStack(currStack => [...currStack, { id, value }]);
    timeout > 0 && setTimeout(() => delToast(id), timeout);
    return id;
  }, [delToast]);

  return (
    <Context.Provider value={{ stack, addToast, delToast }}>
      {children}
    </Context.Provider>
  );
};

export const useToastContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useToastContext must be used within ToastContext');
  }
  return context;
};