import styles from './styles.scss';
import {  SwitchProps } from './types';


export type GetSwitchClassNamePayload = {
  size: Required<SwitchProps>['size']
  color: Required<SwitchProps>['color']
};

export const getSwitchClassName = (prefix: string, { size, color }: GetSwitchClassNamePayload) => {
  return styles[`${prefix}_${size}_${color}`];
};