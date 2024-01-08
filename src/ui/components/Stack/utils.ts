import styles from './styles.scss';
import { StackProps } from './types';
import { combineClasses } from '../../utils';


export type GetStackClassNamePayload = StackProps;

export const getStackClassName = ({ 
  direction,
  gap,
  alignItems,
  justifyContent,
  flexWrap,
}: GetStackClassNamePayload) => {
  const classNames = [styles.base];

  direction && classNames.push(styles[direction]);
  alignItems && classNames.push(styles[`align-items-${alignItems}`]);
  justifyContent && classNames.push(styles[`justify-content-${justifyContent}`]);
  flexWrap && classNames.push(styles['flex-wrap']);
  gap && classNames.push(0.5 === gap ? styles['gap-05'] : styles[`gap-${gap}`]); // todo.. map

  return combineClasses(...classNames);
};
