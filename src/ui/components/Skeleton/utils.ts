import styles from './styles.scss';
import { SkeletonProps } from './types';
import { combineClasses } from '../../utils';


type GetSkeletonClassNamePayload = {
  variant: Required<SkeletonProps>['variant'],
  animate: Required<SkeletonProps>['animate'],
};

export const getSkeletonClassName = ({ variant, animate }: GetSkeletonClassNamePayload) => {
  const classNames = [styles.base, styles[variant]];
  animate && classNames.push(styles[animate]);
  return combineClasses(...classNames);
};
