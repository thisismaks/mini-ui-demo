import { MouseEvent } from 'react';

import styles from './styles.scss';
import { IconButtonProps } from './types';
import { combineClasses } from '../../utils';


const rippleDuration = parseInt(styles.ripple_duration);

export type GetIconButtonClassNamePayload = {
  size: Required<IconButtonProps>['size']
  color: Required<IconButtonProps>['color']
  edge?: IconButtonProps['edge']
};

export const getIconButtonClassName = ({ size, color, edge }: GetIconButtonClassNamePayload) => {
  const classNames = [styles[`${size}_${color}`]];

  if (edge) {
    classNames.push(styles[edge]);
  }

  return combineClasses(...classNames);
};

export const makeRipple = (event: MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;

  const circle = document.createElement('ripple-tag');
  const diameter = Math.max(button.clientWidth, button.clientHeight);

  circle.style.width = circle.style.height = `${diameter}px`;
  button.appendChild(circle);

  setTimeout(() => circle.remove(), rippleDuration);
};
