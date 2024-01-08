import { cloneElement, useRef } from 'react';

import { FadeInProps } from './types';


export const FadeIn = ({
  transition = 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', // todo.. to theme
  children,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  null === ref.current && requestAnimationFrame(
    () => ref.current && ref.current.style.setProperty('opacity', '1'),
  );

  return cloneElement(children, {
    ref,
    style: {
      opacity: 0,
      transition,
      ...children.props.style,
    },
  });
};
