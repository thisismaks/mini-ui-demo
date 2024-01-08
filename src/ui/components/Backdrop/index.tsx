import React, { forwardRef } from 'react';

import { BackdropProps } from './types';
import { combineClasses } from '../../utils';
import styles from './styles.scss';
import { FadeIn } from '../FadeIn';


export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(({
  open,
  className,
  TransitionComponent = FadeIn,
  ...rest
}, ref) => {
  if (!open) {
    return null;
  }
  
  return (
    <TransitionComponent>
      <div
        ref={ref}
        className={combineClasses(styles.base, className)}
        {...rest}
      />
    </TransitionComponent>
  );
});

Backdrop.displayName = 'Backdrop';
