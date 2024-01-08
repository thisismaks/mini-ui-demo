import React, { forwardRef, useMemo } from 'react';

import { SkeletonProps } from './types';
import { getSkeletonClassName } from './utils';
import { combineClasses } from '../../utils';


export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({
  variant = 'rounded',
  animate = 'pulse',
  className,
  width,
  height,
  style,
  ...rest
}, ref) => {
  const clsRoot = useMemo(
    () => getSkeletonClassName({ variant, animate }),
    [variant, animate],
  );

  return (
    <div
      ref={ref}
      style={{ width, height, ...style }}
      className={combineClasses(clsRoot, className)}
      {...rest}
    />
  );
});

Skeleton.displayName = 'Skeleton';
