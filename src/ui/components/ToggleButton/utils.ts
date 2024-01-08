import styles from './styles.scss';
import { ToggleButtonProps } from './types';


export type GetToggleButtonClassNamePayload = {
  color: Required<ToggleButtonProps>['color']
  selected?: boolean
  disabled?: boolean
  fullWidth?: boolean
};

export const getToggleButtonClassName = ({ color, selected, disabled, fullWidth }: GetToggleButtonClassNamePayload) => {
  const keys = [color] as string[];
  if (selected) {
    keys.push('selected');
  }
  if (disabled) {
    keys.push('disabled');
  }
  const baseClassName = styles[keys.join('_')];
  return fullWidth ? `${baseClassName} ${styles.fullWidth}` : baseClassName;
};