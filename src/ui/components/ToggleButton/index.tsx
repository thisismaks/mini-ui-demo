import React, { useMemo, forwardRef, MouseEvent } from 'react';

import { combineClasses } from 'ui/utils';

import { ToggleButtonProps } from './types';
import { getToggleButtonClassName } from './utils';


export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(({
  color = 'standard',
  className,
  children,
  value,
  disabled,
  selected,
  fullWidth,
  onChange,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getToggleButtonClassName({ color, selected, disabled, fullWidth }),
    [color, selected, disabled, fullWidth],
  );

  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    if (onChange) {
      onChange(event, value);
    }
  };

  return (
    <button
      ref={ref}
      type='button'
      value={value}
      disabled={Boolean(disabled)} // todo.. css
      aria-pressed={Boolean(selected)}
      className={combineClasses(clsRoot, className)}
      onClick={handleChange}
      {...rest}
    >
      {children}
    </button>
  );
});

ToggleButton.displayName = 'ToggleButton';
