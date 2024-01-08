import styles from './styles.scss';
import { ToggleButtonGroupProps } from './types';


export type GetToggleButtonGroupClassNamePayload = {
  color: Required<ToggleButtonGroupProps>['color']
  disabled?: boolean
  fullWidth?: boolean
};

export const getToggleButtonGroupClassName = ({ color, disabled, fullWidth }: GetToggleButtonGroupClassNamePayload) => {
  let baseClassName = styles[color];

  if (fullWidth) {
    baseClassName = `${baseClassName  } ${styles.fullWidth}`;
  }
  if (disabled) {
    baseClassName = `${baseClassName  } ${styles.disabled}`;
  }
  return baseClassName;
};
