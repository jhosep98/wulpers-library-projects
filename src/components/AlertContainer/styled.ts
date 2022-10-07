import { styled } from '@mui/material';

interface ContainerIconModel {
  background?: string;
}

export const ContainerIcon = styled('div')<ContainerIconModel>(
  ({ ...props }) => ({
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: `${props.background}.main`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
);
