import React, { Children, isValidElement, cloneElement, useMemo, forwardRef, MouseEvent } from 'react';

import { ToggleButtonGroupProps } from './types';
import { getToggleButtonGroupClassName } from './utils';
import { combineClasses, isValueSelected } from '../../utils';
import { ToggleButtonProps } from '../ToggleButton/types';


export const ToggleButtonGroup = forwardRef<HTMLDivElement, ToggleButtonGroupProps>(({
  color = 'standard',
  className,
  children,
  exclusive,
  value,
  disabled,
  fullWidth,
  onChange,
}, ref) => {
  const clsRoot = useMemo(
    () => getToggleButtonGroupClassName({ color, disabled, fullWidth }),
    [color, disabled, fullWidth],
  );

  const handleChange = (e: MouseEvent<HTMLElement>, val: any) => {
    if (!onChange) {
      return;
    }

    const index = value && value.indexOf(val);
    let newValue;

    if (value && index >= 0) {
      newValue = value.slice();
      newValue.splice(index, 1);
    } else {
      newValue = value ? value.concat(val) : [val];
    }

    onChange(e, newValue);
  };

  const handleExclusiveChange = (e: MouseEvent<HTMLElement>, val: any) => {
    if (!onChange) {
      return;
    }
    onChange(e, value === val ? null : val);
  };

  return (
    <div
      ref={ref}
      role='group'
      className={combineClasses(clsRoot, className)}
    >
      {Children.map(children, (child) => {
        if (!isValidElement<ToggleButtonProps>(child)) {
          return null;
        }

        return cloneElement(child, {
          fullWidth,
          color: child.props.color || color,
          disabled: child.props.disabled || disabled,
          onChange: exclusive ? handleExclusiveChange : handleChange,
          selected: child.props.selected === undefined
            ? isValueSelected(child.props.value, value)
            : child.props.selected,
        });
      })}
    </div>
  );
});

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
