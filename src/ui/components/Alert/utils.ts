import styles from './styles.scss';
import { AlertProps } from './types';
import { combineClasses } from '../../utils';


type GetAlertClassNamePayload = {
  severity: Required<AlertProps>['severity'],
};

export const getAlertClassName = ({ severity }: GetAlertClassNamePayload) => {
  const classNames = [styles.base, styles[severity]];
  return combineClasses(...classNames);
};
