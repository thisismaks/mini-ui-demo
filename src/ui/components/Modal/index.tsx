import React, {
  KeyboardEvent,
  forwardRef, 
  useRef,
  useLayoutEffect,
} from 'react';

import styles from './styles.scss';
import { ModalProps } from './types';
import { Backdrop, Portal } from '..';
import { combineClasses } from '../../utils';


const BODY_STYLE = 'padding-right: 15px; overflow: hidden;';

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  open,
  className,
  BackdropComponent = Backdrop,
  BackdropProps = {},
  disablePortal,
  children,
  onClose,
  ...rest
}, ref) => {
  const focusAnchorRef = useRef<HTMLDivElement>(null);
  const prevBodyStyle = useRef(document.body.style.cssText);

  // todo.. ideally it should merge with "body.style" and then restore initial "body.style"
  useLayoutEffect(() => {
    if (open) {
      focusAnchorRef?.current?.focus();
      prevBodyStyle.current = document.body.style.cssText;
      document.body.style.cssText = BODY_STYLE;
    }
    return () => {
      // todo.. should we restore focus here?
      document.body.style.cssText = prevBodyStyle.current;
    };
  }, [open]);


  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    if ('Escape' === e.key) {
      onClose(e, 'escapeKeyDown');
    }
  };

  if (!open) {
    return null;
  }
  
  const { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: backdropRef, // todo.. check type
    className: backdropClassName,
    ...restBackdropProps 
  } = BackdropProps;
  
  return (
    <Portal disablePortal={disablePortal}>
      <div
        ref={ref}
        role='presentation'
        onKeyDown={onKeyDownHandler} // todo.. handleEvents?
        className={styles.root}
        {...rest}
      >
        <BackdropComponent
          open
          className={combineClasses(styles.z_index, backdropClassName)}
          onClick={(e) => onClose(e, 'backdropClick')}
          {...restBackdropProps}
        />

        <div ref={focusAnchorRef} tabIndex={0} />

        <div tabIndex={-1} className={combineClasses(styles.content, className)}>
          {children}
        </div>

        <div tabIndex={0} onFocus={() => focusAnchorRef?.current?.focus()} />
      </div>
    </Portal>
  );
});

Modal.displayName = 'Modal';
