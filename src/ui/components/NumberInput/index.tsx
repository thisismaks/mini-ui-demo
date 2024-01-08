import React, { useMemo,  useRef,  forwardRef } from 'react';

import theme from '../../theme/theme.scss';
import styles from './styles.scss';
import { NumberInputProps } from './types';
import { getNumberInputClassName } from './utils';
import { useForkRef } from '../../hooks';
import { ArrowDownIcon, ArrowUpIcon } from '../../icons';
import { combineClasses } from '../../utils';
import { IconButton } from '../IconButton';


const textSecondary = theme.text_secondary;

export const NumberInput = forwardRef<HTMLLabelElement, NumberInputProps>(({
  color = 'primary',
  disabled,
  className,
  label,
  value,
  defaultValue,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onChange,
  max,
  min,
  step,
  inputRef: propRef,
  inputProps,
  ...rest
}, forwardedRef) => {
  const baseRef = useRef<HTMLInputElement>(null);
  const inputRef = useForkRef(propRef, baseRef);

  const clsRoot = useMemo(
    () => getNumberInputClassName({ color, disabled }),
    [color, disabled],
  );

  const upClickHandler = () => {
    const { current } = baseRef;
    if (current) {
      current.stepUp();
      const event = new Event('input', { bubbles: true });
      current.dispatchEvent(event);
    }
  };

  const downClickHandler = () => {
    const { current } = baseRef;
    if (current) {
      current.stepDown();
      const event = new Event('input', { bubbles: true });
      current.dispatchEvent(event);
    }
  };

  return (
    <label
      ref={forwardedRef}
      className={combineClasses(clsRoot, className)}
      {...rest}
    >
      <input
        type="number"
        ref={inputRef}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        defaultValue={defaultValue}
        max={max}
        min={min}
        step={step}
        {...inputProps}
      />
      {label}
      <div className={styles.buttons}>
        <IconButton
          color={color}
          disabled={disabled}
          className={styles.buttonUp}
          onClick={upClickHandler}
        >
          <ArrowUpIcon color={textSecondary} />
        </IconButton>
        <IconButton
          color={color}
          disabled={disabled}
          className={styles.buttonDown}
          onClick={downClickHandler}
        >
          <ArrowDownIcon color={textSecondary} />
        </IconButton>
      </div>
    </label>
  );
});

NumberInput.displayName = 'NumberInput';
