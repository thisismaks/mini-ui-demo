import React from 'react';

import { ToastProps } from './types';
import { getToastClassName } from './utils';
import { useToastContext } from './сontext';
import { Portal } from '..';


export const Toast = ({ 
  position = 'top-right',
  disablePortal,
}: ToastProps) => {
  const { stack } = useToastContext();
  const clsRoot = getToastClassName({ position });
  
  if (!stack.length) {
    return null;
  }
  
  return (
    <Portal disablePortal={disablePortal}>
      <div className={clsRoot}>
        {stack.map(({ id, value }) => (
          <div key={id} className='item'>
            {'function' === typeof value ? value() : value}
          </div>
        ))}
      </div>
    </Portal>
  );
};
