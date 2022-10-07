import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import { WrapperText } from 'components';
import { ICONS_NAME } from 'helpers/icons';
import { SectionSettingsTemplate } from 'templates';
import { CardQrLarge } from '../../components/CardQrLarge';
import { CardAssetText, WrapperSubtitleSection } from '../../components';

export const InstallApp: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <Box>
            <WrapperText
              text="Download our App"
              fontSize="35px"
              fontWeight="700"
            />

            <WrapperText
              color={theme.palette.text.secondary}
              text="You can have our App as a WAPP one click away. Check how to do it in these simple tutorials."
              variant="body1"
            />
          </Box>

          <WrapperSubtitleSection text="If you are using Chrome in MacOS" />

          <CardAssetText
            list={[
              {
                item: 'Get in “domain” (QR tooltip)',
                icon: ICONS_NAME.collection,
              },
              {
                item: 'Tap the menu icon (3 dots in upper right-right corner)',
                icon: ICONS_NAME.collection,
              },
              {
                item: 'Choose “More tools” and select “Create direct access”',
                icon: ICONS_NAME.collection,
              },
              {
                item: 'The app will automatically open in your computer then you can create a direct access in your computer toolbar and auto-login after turn on computer.',
                icon: ICONS_NAME.collection,
              },
            ]}
          />

          <WrapperSubtitleSection text="If you are using Chrome in Windows" />

          <CardAssetText
            list={[
              {
                item: 'Get in “domain” (QR tooltip)',
              },
              {
                item: 'Tap the menu icon (3 dots in upper right-right corner)',
              },
              {
                item: 'Choose “More tools” and select “Create direct access”',
              },
              {
                item: 'The app will automatically open in your computer then you can create a direct access in your computer toolbar and auto-login after turn on computer.',
              },
            ]}
          />

          {!isMqMd && (
            <>
              <WrapperSubtitleSection text="Get on mobile" />
              <CardQrLarge />
            </>
          )}
        </>
      )}
    />
  );
};
