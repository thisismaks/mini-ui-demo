import React, {
  ChangeEvent,
  Children,
  isValidElement,
  cloneElement,
  forwardRef,
} from 'react';

import { RadioGroupProps } from './types';
import { isValueSelected } from '../../utils';
import { FormControlLabelProps } from '../FormControlLabel/types';


export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(({
  className,
  children,
  exclusive,
  onChange,
  value,
  disabled,
}, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const index = value && value.indexOf(e.target.value);
      let newValue;

      if (value && index >= 0) {
        newValue = value.slice();
        newValue.splice(index, 1);
      } else {
        newValue = value ? value.concat(e.target.value) : [e.target.value];
      }

      onChange(e, newValue);
    }
  };

  const handleExclusiveChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e, value === e.target.value ? null : e.target.value);
    }
  };

  return (
    <div
      ref={ref}
      role='group'
      className={className}
    >
      {Children.map(children, (child) => {
        if (!isValidElement<FormControlLabelProps>(child)) {
          return null;
        }

        return cloneElement(child, {
          control: cloneElement(child.props.control, { value: child.props.value }),
          disabled: child.props.disabled || disabled,
          onChange: exclusive ? handleExclusiveChange : handleChange,
          checked: child.props.checked === undefined
            ? isValueSelected(child.props.value, value)
            : child.props.checked,
        });
      })}
    </div>
  );
});

RadioGroup.displayName = 'RadioGroup';
