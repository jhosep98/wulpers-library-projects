import React from 'react';
import { useTheme, Box } from '@mui/material';
import { AttachFileDrop } from '@wulperstudio/cms';

import { SectionSettingsTemplate } from 'templates';
import { WrapperButton, WrapperText, WrapperTextField } from 'components';
import { WrapperSubtitleSection } from '../../components';

interface AccountModel {
  isBackground?: boolean;
}

export const Account: React.FC<AccountModel> = () => {
  const theme = useTheme();

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <Box>
            <WrapperText
              text="Account"
              fontSize="35px"
              fontWeight="700"
              variant="h2"
            />

            <WrapperText
              variant="body1"
              fontWeight="400"
              color={theme.palette.text.secondary}
              text="We are looking for the document you wre issued when your company was formed in the US."
            />
          </Box>

          <WrapperSubtitleSection text="Account information" />

          <WrapperTextField
            disabled
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant="outlined"
          />

          <WrapperButton variant="text" color="error" sx={{ px: 0 }}>
            Change password
          </WrapperButton>

          <WrapperSubtitleSection text="Profile information" />

          <AttachFileDrop
            accept="image/png, image/gif, image/jpeg"
            disabled={false}
            name="image"
            onDropElement={(_files) => null}
            variant="outlined"
            variantShape="circular"
          />

          <WrapperTextField
            label="First Name"
            name="firstname"
            placeholder="Enter your name"
            variant="outlined"
          />

          <WrapperTextField
            label="Last Name"
            name="lastname"
            placeholder="Enter your last name"
            variant="outlined"
          />

          <WrapperTextField
            label="Phone"
            name="phone"
            placeholder="Enter your phone"
            type="phone"
            variant="outlined"
          />

          <WrapperButton variant="text" color="error" sx={{ px: 0 }}>
            Log Out
          </WrapperButton>
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
