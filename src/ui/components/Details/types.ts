import { ComponentProps, ReactElement } from 'react';


export interface DetailsProps extends ComponentProps<'details'> {
  expandIcon?: ReactElement
  expanded?: boolean
  defaultExpanded?: boolean
}
