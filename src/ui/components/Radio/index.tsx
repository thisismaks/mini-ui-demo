import React, { useMemo, forwardRef } from 'react';

import styles from './styles.scss';
import { RadioProps } from './types';
import { getRadioClassName } from './utils';
import { RadioIcon, RadioCheckIcon } from '../../icons';
import { combineClasses } from '../../utils';


export const Radio = forwardRef<HTMLSpanElement, RadioProps>(({
  size = 'small',
  color = 'primary',
  className,
  disabled,
  inputRef,
  inputProps,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onChange,
  checked, 
  value,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getRadioClassName('root', { size, color, disabled }),
    [size, color, disabled],
  );

  const { svg1, svg2 } = useMemo(
    () => ({
      svg1: getRadioClassName('svg1', { size }),
      svg2: getRadioClassName('svg2', { size }),
    }),
    [size],
  );

  return (
    <span
      ref={ref}
      className={combineClasses(clsRoot, className)}
      {...rest}
    >
      <input
        ref={inputRef}
        type='checkbox'
        className={styles.input}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        disabled={disabled}
        value={value}
        checked={checked}
        {...inputProps}
      />
      <span className={styles.icon}>
        <RadioIcon className={svg1} focusable="false" aria-hidden="true" />
        <RadioCheckIcon className={svg2} focusable="false" aria-hidden="true" />
      </span>
    </span>
  );
});

Radio.displayName = 'Radio';
