import styles from './styles.scss';
import { TypographyProps } from './types';
import { combineClasses } from '../../utils';


export type GetTypographyClassNamePayload = {
  align: TypographyProps['align']
  noWrap: TypographyProps['noWrap']
  gutterBottom: TypographyProps['gutterBottom']
  variant: Required<TypographyProps>['variant']
  fontWeight: TypographyProps['fontWeight']
};

export const getTypographyClassName = ({
  variant,
  align,
  noWrap,
  gutterBottom,
  fontWeight,
}: GetTypographyClassNamePayload) => {
  const classNames = [styles[variant]];

  if (noWrap) {
    classNames.push(styles.noWrap);
  }
  if (gutterBottom) {
    classNames.push(styles.gutterBottom);
  }
  if (align) {
    classNames.push(styles[align]);
  }

  if (fontWeight) {
    classNames.push(styles[fontWeight]);
  }

  return combineClasses(...classNames);
};
