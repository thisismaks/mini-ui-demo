import React, { useMemo, forwardRef } from 'react';

import { IconButtonProps } from './types';
import { getIconButtonClassName, makeRipple } from './utils';
import { combineClasses, handleEvents } from '../../utils';


export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  color = 'primary',
  size = 'small',
  className,
  disabled,
  children,
  edge,
  onMouseDown,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getIconButtonClassName({ size, color, edge }),
    [size, color, edge],
  );

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      onMouseDown={handleEvents(makeRipple, onMouseDown)}
      className={combineClasses(clsRoot, className)}
      {...rest}
    >
      {children}
    </button>
  );
});

IconButton.displayName = 'IconButton';
