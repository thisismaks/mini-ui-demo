import styles from './styles.scss';
import { NumberInputProps } from './types';
import { combineClasses } from '../../utils';


export type GetNumberInputClassNamePayload = {
  color: Required<NumberInputProps>['color']
  disabled?: boolean
};

export const getNumberInputClassName = ({ color, disabled }: GetNumberInputClassNamePayload) => {
  const classNames = [styles[color]];

  if (disabled) {
    classNames.push(styles.disabled);
  }

  return combineClasses(...classNames);
};