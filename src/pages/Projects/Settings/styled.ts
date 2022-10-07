import { Drawer, styled } from '@mui/material';

export const RootAddProject = styled('div')({
  width: '100%',
  maxHeight: '100vh',
  overflow: 'auto',
});

export const RootContent = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '0px 15px',
  margin: '0 auto',
  paddingLeft: '0px',
  gridTemplateColumns: '1fr',
  height: 'auto',

  [theme.breakpoints.up('md')]: {
    justifyContent: 'unset',
    gridTemplateColumns: '30% 1fr',
    height: '100%',
    gap: 0,
    overflowY: 'auto',
  },
}));

export const DrawerProject = styled(Drawer)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const WrapperSwitch = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px',
  borderRadius: '15px',
}));
