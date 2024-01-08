import React, { Fragment, useState, useReducer, useEffect } from 'react';

import { Backdrop, Button, Typography, Stack, Modal } from 'ui/components';

import styles from './styles.scss';


export const ModalAndBackdropDemo = () => {
  const [isBackdrop, setIsBackdrop] = useState(false);
  const [isModal, setIsModal] = useState(false);

  // todo.. it needs to check Modal behavior when the parent is rendering
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(() => {
    const interval = setInterval(() => forceUpdate(), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <Stack gap={2} className={styles.paper}>
        <Typography variant='h5'>ModalAndBackdrop</Typography>
        <Stack gap={1} direction='row'>
          <Button onClick={() => setIsModal(true)}>Modal</Button>
          <Button onClick={() => setIsBackdrop(true)}>Backdrop</Button>
        </Stack>
      </Stack>

      {isModal && (
        <Modal
          open
          onClose={() => {}}
          className={styles.modalContent}
          BackdropProps={{
            onClick: () => setIsModal(false),
          }}
        >
          <Stack className={styles.content}>
            123
          </Stack>
        </Modal>
      )}
        
      <Backdrop open={isBackdrop} onClick={() => setIsBackdrop(false)} />
    </Fragment>
  );
};
