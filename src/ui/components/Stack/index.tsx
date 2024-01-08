import React, { forwardRef, useMemo } from 'react';

import { StackProps } from './types';
import { getStackClassName } from './utils';
import { combineClasses } from '../../utils';


export const Stack = forwardRef<HTMLDivElement, StackProps>(({
  direction,
  gap,
  alignItems,
  justifyContent,
  children,
  className,
  flexWrap,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getStackClassName({ direction, gap, alignItems, justifyContent, flexWrap }),
    [direction, gap, alignItems, justifyContent, flexWrap],
  );
  
  return (
    <div
      ref={ref}
      className={combineClasses(clsRoot, className)}
      {...rest}
    >
      {children}
    </div>
  );
});

Stack.displayName = 'Stack';
