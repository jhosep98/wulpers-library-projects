import React from 'react';
import { v4 } from 'uuid';
import { Icon } from '@iconify/react';
import { Global } from '@emotion/react';
import {
  // AvatarV2,
  HeaderOneColumn,
  LayoutMenuContent,
  Menu,
  Avatar as WSAvatar,
  // MenuSettings,
} from '@wulperstudio/cms';
import {
  Avatar,
  Box,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { consts } from 'helpers/consts';
import { ICONS_NAME } from 'helpers/icons';
import { CardMenuItem, WrapperText } from 'components';
import { SectionChilds, SectionLabels } from './helpers/settings';
import { GroupPanel, HeaderIconTextIcon, Panel } from './components';
import { DrawerProject, RootAddProject, RootContent } from './styled';

const items = [
  {
    icon: <Icon icon="ant-design:home-outlined" width="24" height="24" />,
    text: 'Index',
    active: true,
  },
  {
    icon: <Icon icon="bi:person" width="24" height="24" />,
    text: 'Propiedades',
  },
  {
    icon: <Icon icon="carbon:settings" width="24" height="24" />,
    text: 'Settings',
  },
  {
    icon: <Icon icon="uit:blogger-alt" width="24" height="24" />,
    text: 'Blog',
  },
];

export const SettingsPage: React.FC = () => {
  const theme = useTheme();
  const stepLabels = SectionLabels();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawerMenu, setOpenDrawerMenu] = React.useState(true);

  const [onboardingStep, setOnboardingStep] = React.useState<number>(1);

  const stepElements = () => SectionChilds();

  const handleOpenDrawer = () => setOpenDrawerMenu((prev) => !prev);

  return (
    <RootAddProject>
      <Global
        styles={{
          '#root > .sheldon-grid-app': {
            padding: 0,
          },
        }}
      />

      <LayoutMenuContent
        menu={
          !isMqMd && (
            <Menu
              menu="float"
              display="flex"
              icons={items}
              logoUrl={consts.avatarImg}
              order={2}
              spacing={3}
              spacingIcons={2}
            />
          )
        }
        content={(
          <>
            <RootContent>
              {!isMqMd && (
                <Box
                  component="aside"
                  sx={{
                    width: '100%',
                    height: '100%',
                    overflowY: 'auto',
                  }}
                >
                  <Stack rowGap="2rem" sx={{margin: '0 auto', maxWidth: '15rem', py: '75px'}}>
                    <WSAvatar
                      urlImg={consts.avatarImg}
                      isImage
                      invisibleBadge
                      minHeight="75px"
                      minWidth="75px"
                    />

                    <Stack>
                      {stepLabels.map((label, i) => (
                        <Box
                          key={v4()}
                          onClick={() => setOnboardingStep(i + 1)}
                          sx={{
                            padding: '10px',
                            '&:hover': {
                              cursor: 'pointer',
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: '10px',
                            },
                            '& > a': {
                              textDecoration: 'none',
                            },
                          }}
                        >
                          <WrapperText
                            text={label}
                            variant="body2"
                            component="h3"
                          />
                        </Box>
                      ))}
                    </Stack>
                  </Stack>

                  {/* <MenuSettings
                    urlAvatar={consts.avatarImg}
                    AvatarProps={{
                      minHeight: '90px',
                      minWidth: '90px',
                    }}
                    boxProps={{
                      sx: {
                        backgroundColor: 'orangered',
                        width: '100%',
                        maxWidth: 400,
                        py: '70px',
                      },
                    }}
                    options={stepLabels.map((label, i) => ({
                      item: (
                        <Box
                          key={v4()}
                          onClick={() => setOnboardingStep(i + 1)}
                          sx={{
                            padding: '10px',
                            '&:hover': {
                              cursor: 'pointer',
                              backgroundColor: theme.palette.primary.light,
                              borderRadius: '10px',
                            },
                            '& > a': {
                              textDecoration: 'none',
                            },
                          }}
                        >
                          <WrapperText
                            text={label}
                            variant="body1"
                            component="h3"
                          />
                        </Box>
                      ),
                    }))}
                  /> */}
                </Box>
              )}

              <GroupPanel>
                <HeaderOneColumn
                  componentProps={{
                    headerProps: {
                      sx: {
                        backgroundColor: theme.palette.background.default,
                        position: 'fixed',
                        width: '100%',
                        top: 0,
                        zIndex: 10,
                      },
                    },
                    bodyProps: {
                      sx: {
                        paddingTop: '75px',
                      },
                    },
                  }}
                  header={
                    isMqMd && (
                      <HeaderIconTextIcon onClick={() => handleOpenDrawer()} />
                    )
                  }
                  first={stepElements().map((el, idx) => (
                    <Panel
                      value={idx + 1}
                      index={onboardingStep}
                      key={stepLabels[idx]}
                    >
                      {el}
                    </Panel>
                  ))}
                />
              </GroupPanel>
            </RootContent>

            {isMqMd && (
              <DrawerProject
                anchor="left"
                open={openDrawerMenu}
                elevation={0}
                PaperProps={{
                  sx: {
                    width: '100%',
                    height: '100%',
                    background: theme.palette.background.default,
                  },
                }}
              >
                <HeaderOneColumn
                  componentProps={{
                    headerProps: {
                      sx: {
                        backgroundColor: theme.palette.background.default,
                        position: 'fixed',
                        width: '100%',
                        top: 0,
                        zIndex: 10,
                      },
                    },
                    bodyProps: {
                      sx: {
                        paddingTop: '105px',
                      },
                    },
                  }}
                  header={<HeaderIconTextIcon />}
                  first={(
                    <Stack alignItems="center">
                      <Avatar
                        sx={{
                          width: 100,
                          height: 100,
                          backgroundColor: theme.palette.background.default,
                          color: theme.palette.primary.main,
                          mb: 2.5,
                        }}
                      >
                        <Icon
                          icon={ICONS_NAME.person}
                          width={60}
                          height={60}
                          color="inherit"
                        />
                      </Avatar>

                      <Container>
                        <Stack rowGap="15px" padding="15px 0px">
                          {stepLabels.map((label, i) => (
                            <CardMenuItem
                              key={label}
                              title={label}
                              onClickFunction={() => {
                                setOnboardingStep(i + 1);
                                handleOpenDrawer();
                              }}
                            />
                          ))}
                        </Stack>
                      </Container>
                    </Stack>
                  )}
                />
              </DrawerProject>
            )}
          </>
        )}
      />
    </RootAddProject>
  );
};
