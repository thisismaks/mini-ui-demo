import styles from './styles.scss';
import { OutlinedInputProps } from './types';
import { combineClasses } from '../../utils';


export type GetOutlinedInputClassNamePayload = {
  color: Required<OutlinedInputProps>['color']
  disabled?: boolean
  fullWidth?: boolean
};

export const getOutlinedInputClassName = ({ color, disabled, fullWidth }: GetOutlinedInputClassNamePayload) => {
  const classNames = [styles[color]];

  if (fullWidth) {
    classNames.push(styles.fullWidth);
  }
  if (disabled) {
    classNames.push(styles.disabled);
  }

  return combineClasses(...classNames);
};