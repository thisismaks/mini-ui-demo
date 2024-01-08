import React from 'react';

import { AlertDemo } from './AlertDemo';
import { ButtonDemo } from './ButtonDemo';
import { DetailsDemo } from './DetailsDemo';
import { FormControlDemo } from './FormControlLabelDemo';
import { IconButtonDemo } from './IconButtonDemo';
import { ModalAndBackdropDemo } from './ModalAndBackdropDemo';
import { NumberInputDemo } from './NumberInputDemo';
import { OutlinedInputDemo } from './OutlinedInputDemo';
import { RadioDemo } from './RadioDemo';
import { RadioGroupDemo } from './RadioGroupDemo';
import { StackDemo } from './StackDemo';
import { StyledRadioGroupDemo } from './StyledRadioGroupDemo';
import { SwitchDemo } from './SwitchDemo';
import { ToastDemo } from './ToastDemo';
import { ToggleButtonGroupDemo } from './ToggleButtonDemo';
import { TypographyDemo } from './TypographyDemo';
import { Stack } from '../ui/components';
import styles from './styles.scss';


export const ComponentsDemo = () => (
  <Stack gap={2} className={styles.root}>
    <ModalAndBackdropDemo />
    <StackDemo />
    <AlertDemo />
    <ToastDemo />
    <ButtonDemo />
    <SwitchDemo />
    <ToggleButtonGroupDemo />
    <RadioDemo />
    <FormControlDemo />
    <RadioGroupDemo />
    <StyledRadioGroupDemo />
    <OutlinedInputDemo />
    <IconButtonDemo />
    <DetailsDemo />
    <NumberInputDemo />
    <TypographyDemo />
  </Stack>
);
