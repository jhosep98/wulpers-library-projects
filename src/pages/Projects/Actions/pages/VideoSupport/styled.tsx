import { Box, styled, SxProps, Theme } from '@mui/material';

import { WrapperButton } from 'components';

export const videoCustom = (): SxProps<Theme> => ({
  cursor: 'pointer',
  height: '100%',
  left: '49.9%',
  minHeight: '102%',
  minWidth: '101%',
  objectFit: 'cover',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  opacity: '1',
  background: 'transparent',
  borderRadius: '1rem',
});

export const ContainerFab = styled(Box)(() => ({
  position: 'fixed',
  right: 50,
  bottom: 50,
}));

export const VideoModalWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(3),
  bottom: theme.spacing(3),
  boxShadow: theme.shadows[1],
  boxSizing: 'border-box',
  height: '630px',
  left: 'initial',
  position: 'fixed',
  right: theme.spacing(3),
  top: 'initial',
  width: '360px',
  zIndex: theme.zIndex.modal,
  [theme.breakpoints.down('md')]: {
    position: 'fixed',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    borderRadius: 0,
    bottom: 0,
    height: '100%',
  },
}));

export const VideoEmbed = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  borderRadius: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    borderRadius: 0,
  },
}));

export const Iframe = styled(({ ...props }) => (
  <Box
    component="iframe"
    title="videoAsk"
    className="videoask-embed__modal_iframe--TmOse"
    src="https://www.videoask.com/fmc9oo33r?autoplay=true&amp;embed_type=videoask_embed"
    allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
    {...props}
  />
))(({ theme }) => ({
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  borderRadius: theme.spacing(3),
  border: 'none',
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down('md')]: {
    borderRadius: 0,
  },
}));

export const ContainerVideo = styled(Box)(() => ({
  position: 'relative',
  background: 'black',
  height: '100%',
  overflow: 'hidden',
  userSelect: 'none',
  width: '100%',
  borderRadius: '1rem',
}));

export const ContainerText = styled(Box)(() => ({
  padding: '50px 24px 24px',
  position: 'absolute',
  margin: '0px',
  left: '0px',
  top: '0px',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  background: 'rgba(0, 0, 0, 0.2)',
  fontWeight: 700,
}));

export const ContainerForm = styled(Box)(() => ({
  alignItems: 'center',
  bottom: '0px',
  display: 'flex',
  flexDirection: 'column',
  height: '380px',
  justifyContent: 'flex-end',
  left: '0px',
  padding: '0px 16px',
  pointerEvents: 'none',
  position: 'absolute',
  transition: 'all 0.3s ease-out 0s',
  width: '100%',
}));

export const Form = styled(Box)(() => ({
  maxHeight: '228px',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out 0s',
  width: '100%',
}));

export const ContainerButtonForm = styled(WrapperButton)(({ theme }) => ({
  alignItems: 'center',
  border: 'none',
  borderRadius: '30px',
  cursor: 'pointer',
  display: 'flex',
  flexGrow: '2',
  fontSize: '18px',
  fontWeight: '500',
  height: 'auto',
  justifyContent: 'flex-start',
  lineHeight: '20px',
  marginBottom: '16px',
  outline: 'none',
  padding: '0px 24px 0px 25px',
  position: 'relative',
  transition: 'background-color 0.4s ease 0s',
  pointerEvents: 'initial',
  width: '100%',
  margin: '8px auto',
  color: theme.palette.background.default,
  background: 'rgba(0, 0, 0, 0.45)',
}));

export const BoxForm = styled(Box)(() => ({
  bottom: '0px',
  left: '0px',
  pointerEvents: 'none',
  position: 'absolute',
  right: '0px',
}));
