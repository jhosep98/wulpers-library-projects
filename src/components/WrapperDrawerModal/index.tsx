import React from 'react';
import { DrawerModal } from '@wulperstudio/cms';

interface WrapperDrawerModalModel {
  open: boolean;
  handleClose: () => void;
  children?: React.ReactNode;
}

export const WrapperDrawerModal: React.FC<WrapperDrawerModalModel> = ({
  children,
  handleClose,
  open,
}) => (
  <DrawerModal
    padding="10px"
    open={open}
    handleCloseAndReset={handleClose}
  >
    {children}
  </DrawerModal>
);
