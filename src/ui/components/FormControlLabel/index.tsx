import React, { cloneElement, useMemo, forwardRef } from 'react';

import styles from './styles.scss';
import { FormControlLabelProps } from './types';
import { getFormControlLabelClassName } from './utils';
import { combineClasses } from '../../utils';


export const FormControlLabel = forwardRef<HTMLLabelElement, FormControlLabelProps>(({
  labelPlacement = 'end',
  className,
  disabled,
  checked,
  control,
  label,
  onChange,
}, ref) => {
  const clsRoot = useMemo(
    () => getFormControlLabelClassName({ labelPlacement, disabled }),
    [labelPlacement, disabled],
  );

  const controlProps = {
    disabled: control.props.disabled ?? disabled,
    checked,
    onChange,
  };

  return (
    <label
      ref={ref}
      className={combineClasses(clsRoot, className)}
    >
      {cloneElement(control, controlProps)}
      <span className={styles.label}>{label}</span>
    </label>
  );
});

FormControlLabel.displayName = 'FormControlLabel';
