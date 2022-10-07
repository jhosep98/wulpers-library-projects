import { styled } from '@mui/material';

type RootSelectorProps = {
  active?: boolean;
  value: number;
  index: number;
};

export const RootSelector = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'value' && prop !== 'index',
})<RootSelectorProps>(({ value, index, active, theme }) => ({
  display: 'flex',
  padding: '8px 0px 8px 24px',
  position: 'relative',
  cursor: 'pointer',

  '&::after': {
    content: "''",
    position: 'absolute',
    height: '100%',
    width: 4,
    backgroundColor: '#E9E9F7',
    left: 0,
    top: 0,

    ...((active || index >= value) && {
      backgroundColor: theme.palette.primary.main,
    }),
  },

  '&:first-of-type': {
    '&::after': {
      borderTopLeftRadius: '48px',
      borderTopRightRadius: '48px',
    },
  },

  '&:last-of-type': {
    '&::after': {
      borderBottomLeftRadius: '48px',
      borderBottomRightRadius: '48px',
    },
  },

}));
