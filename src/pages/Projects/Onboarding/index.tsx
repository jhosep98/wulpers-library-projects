import React from 'react';
import { Icon } from '@iconify/react';
import { Global } from '@emotion/react';
import {
  HeaderFlex,
  HeaderOneColumn,
  IconButtonComponent,
} from '@wulperstudio/cms';
import {
  Avatar,
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { ICONS_NAME } from 'helpers/icons';
import { CardMenuItem } from 'components';
import { SectionChilds, SectionLabels } from './helpers/settings';
import {
  GroupPanel,
  GroupSelector,
  HeaderIconTextIcon,
  Panel,
  Selector,
} from './components';
import { DrawerProject, RootAddProject, RootContent } from './styled';

export const OnboardingPage: React.FC = () => {
  const theme = useTheme();
  const stepLabels = SectionLabels();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawerMenu, setOpenDrawerMenu] = React.useState(true);

  const [onboardingStep, setOnboardingStep] = React.useState<number>(1);

  const stepElements = () => SectionChilds();

  return (
    <RootAddProject>
      <Global
        styles={{
          '#root > .sheldon-grid-app': {
            padding: 0,
          },
        }}
      />

      <HeaderOneColumn
        header={(
          <HeaderFlex>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButtonComponent
                iconProps={{
                  onClick: () => {
                    if (isMqMd) setOpenDrawerMenu(true);
                  },
                  sx: {
                    p: 0,
                  },
                }}
              >
                <Icon
                  icon={ICONS_NAME.back_chevron}
                  color={theme.palette.text.primary}
                />
              </IconButtonComponent>

              <Typography>Module</Typography>

              <Box
                sx={{
                  width: 40,
                }}
              />
            </Stack>
          </HeaderFlex>
        )}
        first={(
          <RootContent>
            {!isMqMd && (
              <GroupSelector
                title="Onboarding"
                sx={{
                  height: 'fit-content',
                  minWidth: {
                    lg: '280px',
                    xs: '260px',
                  },
                  position: 'sticky',
                  top: 60,
                }}
              >
                {stepLabels.map((label, i) => (
                  <Selector
                    key={label}
                    value={i + 1}
                    index={onboardingStep}
                    onClick={() => {
                      setOnboardingStep(i + 1);
                    }}
                  >
                    {label}
                  </Selector>
                ))}
              </GroupSelector>
            )}

            <GroupPanel
              sx={{
                pt: {
                  md: 6,
                  xs: 1,
                },
              }}
            >
              <Container>
                {stepElements().map((el, idx) => (
                  <Panel
                    value={idx + 1}
                    index={onboardingStep}
                    key={stepLabels[idx]}
                  >
                    {el}
                  </Panel>
                ))}
              </Container>
            </GroupPanel>
          </RootContent>
        )}
      />

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
                          setOpenDrawerMenu(false);
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
    </RootAddProject>
  );
};
