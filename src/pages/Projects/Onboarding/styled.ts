import { Drawer, styled } from '@mui/material';

export const RootAddProject = styled('div')({
  width: '100%',
  height: '100vh',
  overflow: 'auto',
});

export const RootContent = styled('div')(({ theme }) => ({
  display: 'grid',
  height: 'auto',
  gap: '0px 15px',
  maxWidth: 910,
  margin: '0 auto',
  paddingLeft: '0px',
  gridTemplateColumns: '1fr',

  [theme.breakpoints.up('md')]: {
    paddingLeft: '10px',
    justifyContent: 'unset',
    gridTemplateColumns: 'auto 1fr',
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
