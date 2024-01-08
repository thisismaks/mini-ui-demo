import React from 'react';
import { render } from 'react-dom';

import { ToastContextProvider } from 'ui/components/Toast/сontext';
import { Toast } from 'ui/components/Toast';
import { ComponentsDemo } from 'demo';


export const AppDemo = () => (
  <ToastContextProvider>
    <ComponentsDemo />
    <Toast position='top-right' />
  </ToastContextProvider>
);

const mountNode = document.getElementById('app');
render(<AppDemo />,  mountNode);
