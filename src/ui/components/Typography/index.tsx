import { useMemo, createElement, forwardRef } from 'react';

import { TypographyProps } from './types';
import { getTypographyClassName } from './utils';
import { combineClasses } from '../../utils';


const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  button: 'span',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(({
  variant = 'body1',
  className,
  align,
  gutterBottom,
  noWrap,
  fontWeight,
  children,
}, ref) => {
  const clsRoot = useMemo(
    () => getTypographyClassName({ variant, align, gutterBottom, noWrap, fontWeight }),
    [variant, align, gutterBottom, noWrap, fontWeight],
  );

  return createElement(
    variantMapping[variant] || 'span', 
    { ref, className: combineClasses(clsRoot, className) }, 
    children,
  );
});

Typography.displayName = 'Typography';
