import { styled } from '@mui/material';

export const CustomGrid = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, auto)',
  gridTemplateRows: '1fr auto',
}));
