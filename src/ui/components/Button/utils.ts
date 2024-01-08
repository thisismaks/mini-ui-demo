import { MouseEventHandler } from 'react';

import styles from './styles.scss';
import { ButtonProps } from './types';


const rippleDuration = parseInt(styles.ripple_duration);

export type GetButtonClassNamePayload = {
  color: Required<ButtonProps>['color']
  variant: Required<ButtonProps>['variant']
  fullWidth: ButtonProps['fullWidth']
  disabled?: boolean
};

export const getButtonClassName = ({ variant, color, disabled, fullWidth }: GetButtonClassNamePayload) => {
  const keys = [variant, color] as string[];
  disabled && keys.push('disabled');
  const baseClassName =  styles[keys.join('_')];
  return fullWidth ? `${baseClassName} ${styles.fullWidth}` : baseClassName;
};

export const makeRipple: MouseEventHandler<HTMLButtonElement> = (event) => {
  const button = event.currentTarget;

  const { x, y } = button.getBoundingClientRect();

  const circle = document.createElement('ripple-tag');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - x - radius}px`;
  circle.style.top = `${event.clientY - y - radius}px`;

  button.appendChild(circle);

  setTimeout(() => circle.remove(), rippleDuration);
};
