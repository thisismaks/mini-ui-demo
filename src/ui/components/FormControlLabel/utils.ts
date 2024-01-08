import styles from './styles.scss';
import { FormControlLabelProps } from './types';


export type GetFormControlLabelClassNamePayload = {
  labelPlacement: Required<FormControlLabelProps>['labelPlacement']
  disabled?: boolean
};

export const getFormControlLabelClassName = ({ labelPlacement, disabled }: GetFormControlLabelClassNamePayload) => {
  const baseClassName = styles[`root_${labelPlacement}`];
  return disabled ? `${baseClassName} ${styles.disabled}` : baseClassName;
};
