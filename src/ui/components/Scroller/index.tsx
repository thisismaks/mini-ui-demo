import React, { cloneElement, forwardRef, useLayoutEffect, useRef, useState } from 'react';

import styles from './styles.scss';
import { ScrollerProps } from './types';
import { combineClasses } from '../../utils';
import { useForkRef } from '../../hooks';


const scroll_margin = parseInt(styles.scroll_margin);
const in_pace = parseInt(styles.in_pace);
const out_pace = parseInt(styles.out_pace);

export const Scroller = forwardRef<HTMLDivElement, ScrollerProps>(({
  style,
  children,
  className,
  ...rest
}, forwardedRef) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const scrollOffset = useRef<number>(0);
  
  const ref = useForkRef(forwardedRef, parentRef);

  const [phase, setPhase] = useState<'render' | 'measure'>('render');
  const [hover, setHover] = useState(false);
  
  useLayoutEffect(
    () => {
      if ('measure' === phase) {
        const parentWidth = parentRef.current!.offsetWidth;
        const childWidth = childRef.current!.offsetWidth;
        scrollOffset.current = parentWidth < childWidth
          ? childWidth - parentWidth + scroll_margin
          : 0;
        setPhase('render');
      }
    },
    [phase],
  );

  const handleMouseEnter = () => {
    setPhase('measure');
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };
 
  const scrollStyle = hover 
    ? {
      textIndent: `-${scrollOffset.current}px`,
      transition: `all ${scrollOffset.current * in_pace}ms linear`,
    } : {
      transition: `all ${scrollOffset.current * out_pace}ms linear`,
    };

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={combineClasses(styles.parent, className)}
      style={{ ...scrollStyle, ...style }}
      {...rest}
    >
      {cloneElement(children, { ref: childRef, className: styles[phase] })}
    </div>
  );
});

Scroller.displayName = 'Scroller';
