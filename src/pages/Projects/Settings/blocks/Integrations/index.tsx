import React from 'react';
import { Box, Stack, useTheme } from '@mui/material';
import { TabsDrawer } from '@wulperstudio/cms';

import { SectionSettingsTemplate } from 'templates';
import { WrapperButton, WrapperText, WrapperTextField } from 'components';
import { CardScript, WrapperSubtitleSection } from '../../components';

export const Integrations: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <Box>
            <WrapperText text="Integrations" fontSize="35px" fontWeight="700" />

            <WrapperText
              color={theme.palette.text.secondary}
              text="We are looking for the document you wre issued when your company was formed in the US."
              variant="body1"
            />
          </Box>

          <WrapperSubtitleSection text="My kanbans" />

          <TabsDrawer
            backgroundColor="transparent"
            borderRadius="100px"
            backGroundColorSelected={theme.palette.primary.main}
            componentProps={{
              header: {
                padding: '15px 0px',
              },
              panel: {
                padding: '0px',
              },
            }}
            colorSelected="#fff"
            tabs={[
              {
                label: 'New kanban',
                items: (
                  <Stack rowGap="15px">
                    <WrapperSubtitleSection text="My kanbans" />

                    <WrapperTextField
                      label="kanban name & slug"
                      placeholder="Revendedores mexico"
                      type="text"
                      variant="outlined"
                    />

                    <CardScript />

                    <WrapperText
                      component="span"
                      color="text.secondary"
                      variant="body2"
                      text={(
                        <>
                          *Paste this Script on your
                          {' '}
                          {'<'}
                          Body
                          {'>'}
                          {' '}
                          site. If you need help please
                          {' '}
                          <Box component="span" color="primary.main">
                            contact us
                          </Box>
                        </>
                      )}
                    />

                    <WrapperSubtitleSection text="Banner" />
                  </Stack>
                ),
              },
              {
                label: 'Leads kanban',
                items: <>Leads kanban</>,
              },
            ]}
          />
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
