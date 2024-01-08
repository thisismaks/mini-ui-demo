import { ComponentProps, FunctionComponent } from 'react';

import { FadeInProps } from '../FadeIn/types';


export interface BackdropProps extends ComponentProps<'div'> {
  open?: boolean
  TransitionComponent?: FunctionComponent<FadeInProps>
}
