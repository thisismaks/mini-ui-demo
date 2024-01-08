import React, { useMemo,  forwardRef } from 'react';

import { SwitchProps } from './types';
import { getSwitchClassName } from './utils';
import { combineClasses } from '../../utils';


export const Switch = forwardRef<HTMLLabelElement, SwitchProps>(({
  size = 'small',
  color = 'primary',
  className,
  disabled,
  checked,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onChange,
  inputRef,
  inputProps,
  ...rest
}, ref) => {
  const { clsSwitch, clsSlider } = useMemo(
    () => ({
      clsSwitch: getSwitchClassName('switch', { size, color }),
      clsSlider: getSwitchClassName('slider', { size, color }),
    }),
    [size, color],
  );

  return (
    <label
      ref={ref}
      className={combineClasses(clsSwitch, className)}
      {...rest}
    >
      <input
        ref={inputRef}
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        {...inputProps}
      />
      <span className={clsSlider} />
    </label>
  );
});

Switch.displayName = 'Switch';
