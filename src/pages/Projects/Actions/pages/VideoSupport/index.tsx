/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Icon } from '@iconify/react';
import { ICONS_NAME } from 'helpers/icons';
import { BlockIframeMedia, LayoutDrawer } from '@wulperstudio/cms';
import {
  Box,
  Fab,
  List,
  ListItem,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import useScroll from 'hooks/useScroll';
import { consts } from 'helpers/consts';
import { useDrawer } from 'hooks/useDrawer';
import { HeroMobileTemplate } from 'templates';
import { BlockVideo, ContentHeroManager } from 'blocks';
import {
  HeaderMobile,
  WrapperButton,
  WrapperHeader,
  WrapperIconButton,
  WrapperText,
} from 'components';
import {
  BoxForm,
  ContainerButtonForm,
  ContainerFab,
  ContainerForm,
  ContainerText,
  ContainerVideo,
  Form,
  videoCustom,
  VideoEmbed,
  VideoModalWrapper,
} from './styled';

export const VideoSupportPage: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const { scrolled } = useScroll();
  const { showDrawer, handleCloseDrawer, handleOpenDrawer } = useDrawer<
    'drawerResponsive' | 'videoModal'
  >(['drawerResponsive', 'videoModal']);

  const { drawerResponsive, videoModal } = showDrawer;

  return (
    <>
      <HeroMobileTemplate
        widthFirstBox={1000}
        widthSecondBox={1100}
        header={
          isMqMd ? (
            <HeaderMobile
              openMenu={drawerResponsive}
              handleMenuOpen={
                drawerResponsive
                  ? () => handleCloseDrawer('drawerResponsive')
                  : () => handleOpenDrawer('drawerResponsive')
              }
            >
              <LayoutDrawer
                padding="25px"
                header={(
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                  >
                    <WrapperIconButton
                      iconProps={{
                        onClick: () => handleCloseDrawer('drawerResponsive'),
                      }}
                    >
                      <Icon
                        icon={ICONS_NAME.close}
                        color={theme.palette.text.primary}
                      />
                    </WrapperIconButton>
                  </Stack>
                )}
                body={<>Content</>}
              />
            </HeaderMobile>
          ) : (
            <WrapperHeader
              position="fixed"
              scrolled={scrolled}
              backgroundColor={
                scrolled ? theme.palette.background.default : 'transparent'
              }
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                minHeight="fit-content"
              >
                <Box
                  component="img"
                  alt="logo"
                  height={60}
                  src={consts.logoHeader}
                  width={180}
                  sx={{ objectFit: 'cover' }}
                />

                <Stack
                  component="nav"
                  alignItems="center"
                  justifyContent="center"
                >
                  <List
                    disablePadding
                    sx={{
                      display: 'flex',
                      color: 'text.primary',
                    }}
                  >
                    <ListItem disablePadding>
                      <WrapperButton variant="text" color="inherit">
                        Pricing
                      </WrapperButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <WrapperButton variant="text" color="inherit">
                        Resources
                      </WrapperButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <WrapperButton variant="text" color="inherit">
                        FAQ
                      </WrapperButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <WrapperButton variant="text" color="inherit">
                        About
                      </WrapperButton>
                    </ListItem>
                  </List>
                </Stack>

                <Stack direction="row" alignItems="center">
                  <WrapperButton
                    sizeVariant="small"
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.background.default,
                      color: theme.palette.primary.main,
                      borderRadius: '50px',
                      '&:hover': {
                        backgroundColor: theme.palette.background.default,
                      },
                    }}
                  >
                    Get started
                  </WrapperButton>
                </Stack>
              </Stack>
            </WrapperHeader>
          )
        }
        firstBox={(
          <ContentHeroManager
            title="Create your site as a PRO with startup budget"
            description="Create or refactor your actual site thinking in all the necesary things to get a real useful web to convert and be a window to."
          />
        )}
        secondBox={(
          <BlockVideo>
            <BlockIframeMedia src={consts.iframeVideo} />
          </BlockVideo>
        )}
      />

      <ContainerFab>
        <Fab
          size="large"
          color="primary"
          aria-label="add"
          onClick={() => handleOpenDrawer('videoModal')}
        >
          <Icon
            icon={ICONS_NAME.add}
            color={theme.palette.background.default}
            height="28"
            width="28"
          />
        </Fab>
      </ContainerFab>

      {videoModal && (
        <VideoModalWrapper>
          <VideoEmbed>
            <ContainerVideo>
              <Box
                component="video"
                sx={videoCustom()}
                autoPlay
                id="player"
                loop
                playsInline
                preload="auto"
                src="https://media.videoask.com/transcoded/cbf9a27a-b7f1-4914-9ee7-5472512171de/video.mp4?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJtZWRpYV9pZCI6ImNiZjlhMjdhLWI3ZjEtNDkxNC05ZWU3LTU0NzI1MTIxNzFkZSIsImV4cCI6MTY2NTI0NjgxMn0.CB3cIszrLMf0j0VvilY2zDFHKYHVO-4mLubp5uaIFMm6OPp45rNkhI0V7cGblVolyPhDC7OdPPyRm8AvtG39ZTwGiVLuHAOm0XqCcpSpRNEfQ6-SBHUSRUodKl802Vrixas3v0gFtuuCnhl-aBybkbbB1xbJMZxMqX1O8FCGZPqxBRHvENYNVfstBcjrbBFg1WN_zRAo9W70GLxRJn8jnawd-aEIkNms5yxu8o2iMLvgaMfH2Bvw3dX0s2ggiG7EFmFgBpjQOeHo5-00nJyQ5fLafnzWPbzd35GxzuX_F6ZUU6SQMI43d_d1NMDVRp0vcuPefyWvWOs4pHFDjgudR8h-FW2ddrJ4UzwYHNIiiiCA4-gm5i6imoInDrbz16CMZeSDnSgGfWf9sx_nKpmP1zOHnq-C02sEYC9DxZ6pZwXwM6ecNWpJWEzfisfwV-5XrQp_WmrbmZ5bHN2ScDMz6StHvvHbkYCgefCQSi_AoqaN9LXKIoUfFV3WRXX-jL0FJ1Gf4OpWc_knU4J6P3kJkN6IK-hDqQQDZHBp8TlSg85VejlFFNlFrSlvg2km-5GSjcrspntMvZtlpQtt4qu773K2uJ49EOZW9iCndGbByQfMK9FJ2PG93acPkk2v98dyWTL8isT6ZGzk6puS3q9e4KsZJBU2VS8KzaRuOJ7UJ_Q"
              />

              <WrapperIconButton
                iconProps={{
                  'aria-label': 'play',
                  sx: {
                    backgroundColor: theme.palette.background.default,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease 0.3s',
                    width: '70px',
                    height: '70px',
                    border: 'none',
                    outline: 'none',
                    opacity: '1',
                    '&:hover': {
                      backgroundColor: theme.palette.background.default,
                    },
                  },
                }}
              >
                <Icon icon={ICONS_NAME.play} />
              </WrapperIconButton>

              <ContainerText>
                <WrapperText
                  component="h2"
                  text="Welcome to <company> we just need your <email> to create an operation."
                  variant="body2"
                  color={theme.palette.background.default}
                  fontWeight="500"
                />
              </ContainerText>

              <BoxForm>
                <Box sx={{ position: 'relative', zIndex: 999 }}>
                  <ContainerForm>
                    <Form component="form">
                      <Box
                        sx={{
                          padding: '1px 6px',
                        }}
                      >
                        <ContainerButtonForm>
                          I would like a meeting.
                        </ContainerButtonForm>

                        <ContainerButtonForm>
                          I want to see a demo.
                        </ContainerButtonForm>

                        <ContainerButtonForm>
                          I have a few doubts.
                        </ContainerButtonForm>

                        <ContainerButtonForm>
                          I want to chat with sales.
                        </ContainerButtonForm>
                      </Box>
                    </Form>
                  </ContainerForm>
                </Box>
              </BoxForm>
            </ContainerVideo>
          </VideoEmbed>

          <WrapperIconButton
            iconProps={{
              'aria-label': 'close',
              onClick: () => handleCloseDrawer('videoModal'),
              sx: {
                position: 'absolute',
                width: theme.spacing(4),
                height: theme.spacing(4),
                top: '-12px',
                right: '-12px',
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#000',
                },
                [theme.breakpoints.down('md')]: {
                  top: 12,
                  right: 12,
                },
              },
            }}
          >
            <Icon
              icon={ICONS_NAME.close}
              color={theme.palette.background.default}
            />
          </WrapperIconButton>
        </VideoModalWrapper>
      )}
    </>
  );
};
