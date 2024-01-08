import React, { forwardRef, useMemo } from 'react';

import { AlertProps } from './types';
import { getAlertClassName } from './utils';
import { CloseIcon } from '../../icons';
import { combineClasses } from '../../utils';
import { IconButton } from '../IconButton';


export const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  severity = 'error',
  onClose,
  children,
  className,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getAlertClassName({ severity }),
    [severity],
  );

  return (
    <div
      ref={ref}
      className={combineClasses(clsRoot, className)}
      {...rest}
    >
      {children}
      {onClose && (
        <IconButton onClick={onClose} edge="end">
          <CloseIcon />
        </IconButton>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';
