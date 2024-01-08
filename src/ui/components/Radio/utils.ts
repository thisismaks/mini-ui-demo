import styles from './styles.scss';
import { RadioProps } from './types';


export type GetRadioClassNamePayload = {
  size: Required<RadioProps>['size']
  color?: RadioProps['color']
  disabled?: boolean
};

export const getRadioClassName = (prefix: string, { size, color, disabled }: GetRadioClassNamePayload) => {
  const keys = [prefix] as string[];
  if (size) {
    keys.push(size);
  }
  if (color) {
    keys.push(color);
  }
  const baseClassName = styles[keys.join('_')];
  return disabled ? `${baseClassName} ${styles.disabled}` : baseClassName;
};
