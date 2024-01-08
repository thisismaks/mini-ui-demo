import React, { useMemo, forwardRef } from 'react';

import { OutlinedInputProps } from './types';
import { getOutlinedInputClassName } from './utils';
import { combineClasses } from '../../utils';


export const OutlinedInput = forwardRef<HTMLLabelElement, OutlinedInputProps>(({
  color = 'primary',
  disabled,
  fullWidth,
  className,
  startAdornment,
  endAdornment,
  value,
  defaultValue,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onChange,
  inputRef,
  inputProps,
  ...rest
}, forwardedRef) => {
  const clsRoot = useMemo(
    () => getOutlinedInputClassName({ color, disabled, fullWidth }),
    [color, disabled, fullWidth],
  );

  return (
    <label
      ref={forwardedRef}
      className={combineClasses(clsRoot, className)}
      {...rest}
    >
      {startAdornment}
      <input
        type="text"
        ref={inputRef}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {endAdornment}
    </label>
  );
});

OutlinedInput.displayName = 'OutlinedInput';
