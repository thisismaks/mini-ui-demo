import styles from './styles.scss';
import { ToastProps } from './types';


export type GetToastClassNamePayload = {
  position: Required<ToastProps>['position']
};

export const getToastClassName = ({ position }: GetToastClassNamePayload) => {
  return styles[position];
};
