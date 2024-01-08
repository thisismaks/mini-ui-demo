import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './types';


export const Portal = ({ children, disablePortal }: PortalProps) => (
  <Fragment>
    {disablePortal ? children : createPortal(children, document.body)}
  </Fragment>
);
