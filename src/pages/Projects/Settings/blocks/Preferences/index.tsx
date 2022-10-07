import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme, Stack, Typography, Box } from '@mui/material';
import {
  TabsDrawer,
  InputBoxGroup,
  InputBoxColor,
  AttachFileDrop,
} from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';
import fontPoppins from 'assets/svg/poppins.svg';
import { SectionSettingsTemplate } from 'templates';
import { WrapperButton, WrapperText } from 'components';
import { CardBoostOrganization } from '../../components';

const THEMES = [
  {
    id: 'light',
    name: 'light',
    onClick: () => {},
    icon: <Icon icon={ICONS_NAME.themeLight} color="inherit" width="24" />,
  },
  {
    id: 'dark',
    name: 'dark',
    onClick: () => {},
    icon: <Icon icon={ICONS_NAME.themeDark} color="inherit" width="24" />,
  },
];

const LAYOUTS = [
  {
    id: 'float',
    name: 'float',
    onClick: () => {},
    icon: <Icon icon={ICONS_NAME.layoutFloat} color="inherit" width="24" />,
  },
  {
    id: 'divider',
    name: 'divider',
    onClick: () => {},
    icon: <Icon icon={ICONS_NAME.layoutDivider} color="inherit" width="24" />,
  },
];

export const Preferences: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <Box sx={{ width: '100%' }}>
            <WrapperText text="Preferences" fontSize="35px" fontWeight="700" />

            <WrapperText
              fontSize="18px"
              fontWeight="400"
              color={theme.palette.text.secondary}
              text="We are looking for the document you wre issued when your company
              was formed in the US."
            />
          </Box>

          <Stack sx={{ width: '100%' }}>
            <TabsDrawer
              backgroundColor="transparent"
              borderRadius="10px"
              backGroundColorSelected={theme.palette.primary.main}
              componentProps={{
                header: {
                  padding: '15px 0px',
                },
                panel: {
                  padding: '0px',
                },
              }}
              colorSelected="white"
              tabs={[
                {
                  label: 'Appeareance CMS',
                  items: (
                    <>
                      <Box>
                        <InputBoxGroup
                          values={LAYOUTS}
                          label="Layout"
                          backgroundColor="transparent"
                          variant="floatBox"
                          sizeElement="large"
                          onChange={(data) => data.onClick && data.onClick()}
                        >
                          {(value: any) => <>{value.icon}</>}
                        </InputBoxGroup>
                      </Box>

                      <Box>
                        <InputBoxGroup
                          values={THEMES}
                          label="Tema"
                          backgroundColor="transparent"
                          variant="floatBox"
                          sizeElement="large"
                          onChange={(data) => data.onClick && data.onClick()}
                        >
                          {(value: any) => <>{value.icon}</>}
                        </InputBoxGroup>
                      </Box>

                      <div>
                        <WrapperText
                          text="Primary color"
                          fontWeight="400"
                          fontSize="14px"
                          color={theme.palette.text.secondary}
                          sx={{
                            margin: '21px 0px 0px 0px',
                          }}
                        />
                      </div>

                      <Box>
                        <InputBoxColor
                          label="Primary color"
                          colorDefault={theme.palette.primary.main}
                          colorSelected={() => {}}
                        />
                      </Box>

                      <div>
                        <WrapperText
                          text="Secondary colour"
                          fontWeight="400"
                          fontSize="14px"
                          color={theme.palette.text.secondary}
                          sx={{
                            margin: '21px 0px 0px 0px',
                          }}
                        />
                      </div>

                      <Box>
                        <InputBoxColor
                          label="Secondary colour"
                          colorDefault={theme.palette.text.secondary}
                          colorSelected={() => {}}
                        />
                      </Box>
                    </>
                  ),
                },
                {
                  label: 'Appeareance Webs',
                  items: (
                    <>
                      <Box>
                        <InputBoxGroup
                          values={[
                            {
                              id: 'light',
                              name: 'light',
                              icon: (
                                <div
                                  style={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <Icon
                                    icon="ic:outline-light-mode"
                                    color="inherit"
                                    width="24"
                                  />
                                  <Typography
                                    color={theme.palette.text.primary}
                                    fontSize="14px"
                                  >
                                    Light
                                  </Typography>
                                </div>
                              ),
                            },
                            {
                              id: 'dark',
                              name: 'dark',
                              icon: (
                                <div
                                  style={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <Icon
                                    icon="ic:outline-dark-mode"
                                    color="inherit"
                                    width="24"
                                  />
                                  <Typography
                                    color={theme.palette.text.primary}
                                    fontSize="14px"
                                  >
                                    Dark
                                  </Typography>
                                </div>
                              ),
                            },
                          ]}
                          label="Tema"
                          backgroundColor="transparent"
                          variant="floatBox"
                          sizeElement="large"
                        >
                          {(value: any) => <>{value.icon}</>}
                        </InputBoxGroup>
                      </Box>

                      <div>
                        <WrapperText
                          text="Assets"
                          fontWeight="400"
                          fontSize="14px"
                          color={theme.palette.text.secondary}
                          sx={{
                            margin: '21px 0px 0px 0px',
                          }}
                        />
                      </div>

                      <Box>
                        <AttachFileDrop
                          name="image"
                          variantShape="circular"
                          onDropElement={(_files) => null}
                          onDelete={() => {}}
                          accept="image/png, image/gif, image/jpeg"
                          variant="outlined"
                        />
                      </Box>

                      <Box>
                        <InputBoxGroup
                          values={[
                            {
                              id: 'roboto',
                              name: 'Roboto',
                              icon: (
                                <div
                                  style={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <Icon
                                    icon="lucide:layout-template"
                                    color="inherit"
                                    width="24"
                                  />
                                  <Typography
                                    color={theme.palette.text.primary}
                                    fontSize="14px"
                                  >
                                    Roboto
                                  </Typography>
                                </div>
                              ),
                            },
                            {
                              id: 'poppins',
                              name: 'Poppins',
                              icon: (
                                <div
                                  style={{
                                    textAlign: 'center',
                                  }}
                                >
                                  <img src={fontPoppins} alt="font poppins" />
                                  <Typography
                                    color={theme.palette.text.primary}
                                    fontSize="14px"
                                  >
                                    Poppins
                                  </Typography>
                                </div>
                              ),
                            },
                          ]}
                          label="Typography"
                          sizeElement="large"
                          backgroundColor="transparent"
                          variant="floatBox"
                          onChange={() => {}}
                        >
                          {(value: any) => <>{value.icon}</>}
                        </InputBoxGroup>
                      </Box>

                      <div>
                        <WrapperText
                          text="Primary color"
                          fontWeight="400"
                          fontSize="14px"
                          color={theme.palette.text.secondary}
                          sx={{
                            margin: '21px 0px 0px 0px',
                          }}
                        />
                      </div>

                      <Box>
                        <InputBoxColor
                          label="Primary color"
                          colorDefault={theme.palette.text.secondary}
                          colorSelected={() => {}}
                        />
                      </Box>

                      <div>
                        <WrapperText
                          text="Secondary color"
                          fontWeight="400"
                          fontSize="14px"
                          color={theme.palette.text.secondary}
                          sx={{
                            margin: '21px 0px 0px 0px',
                          }}
                        />
                      </div>

                      <Box>
                        <InputBoxColor
                          label="Secondary color"
                          colorDefault={theme.palette.text.secondary}
                          colorSelected={() => {}}
                        />
                      </Box>
                    </>
                  ),
                },
              ]}
            />
          </Stack>

          <Box sx={{ width: '100%' }}>
            <InputBoxGroup
              values={[
                {
                  id: 'en',
                  name: 'English',
                  icon: (
                    <Icon
                      icon="twemoji:flag-united-kingdom"
                      color="inherit"
                      width="24"
                    />
                  ),
                },
                {
                  id: 'es',
                  name: 'Spanish',
                  icon: (
                    <Icon
                      icon="fxemoji:spanishflag"
                      color="inherit"
                      width="24"
                    />
                  ),
                },
              ]}
              label="Language"
              sizeElement="large"
              backgroundColor="transparent"
              variant="floatBox"
              defaultValue="es"
            >
              {(value: any) => <>{value.icon}</>}
            </InputBoxGroup>
          </Box>

          <Box sx={{ width: '100%' }}>
            <CardBoostOrganization
              title="Integrate Sheldon to your site"
              description="Let our system know about your company and it will help you to get investors, partners and boost your sales."
              textButton="Go to investo"
            />
          </Box>
        </>
      )}
      footer={(
        <WrapperButton fullWidth sizeVariant="large">
          Save Changes
        </WrapperButton>
      )}
    />
  );
};
