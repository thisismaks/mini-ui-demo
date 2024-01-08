import React, { Children, forwardRef } from 'react';

import styles from './styles.scss';
import { DetailsProps } from './types';
import { combineClasses } from '../../utils';


export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(({
  children,
  className,
  expandIcon,
  expanded,
  onToggle,
  defaultExpanded = false,
  ...restProps
}, ref) => {
  const [summary, ...restChildren] = Children.toArray(children);

  const controlProps = (onToggle && expanded !== undefined)
    ? { open: expanded, onToggle }
    : { open: !!defaultExpanded };

  return (
    <details
      ref={ref}
      className={combineClasses(styles.details, className)}
      {...controlProps}
      {...restProps}
    >
      <summary>
        {summary}
        {expandIcon}
      </summary>
      {restChildren}
    </details>
  );
});

Details.displayName = 'Details';
