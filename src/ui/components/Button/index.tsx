import React, { useMemo, forwardRef } from 'react';

import styles from './styles.scss';
import { ButtonProps } from './types';
import { getButtonClassName, makeRipple } from './utils';
import { combineClasses, handleEvents } from '../../utils';


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'outlined',
  color = 'primary',
  className,
  children,
  disabled,
  startIcon,
  endIcon,
  fullWidth,
  onMouseDown,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getButtonClassName({ variant, color, disabled, fullWidth }),
    [variant, color, disabled, fullWidth],
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
      {startIcon && <span className={styles.start_icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.end_icon}>{startIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';
