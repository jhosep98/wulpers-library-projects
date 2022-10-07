import React from 'react';
import { useTheme, Box, Typography } from '@mui/material';
import { CardFlexible, OutputTableList } from '@wulperstudio/cms';

import { SectionSettingsTemplate } from 'templates';
import { WrapperButton, WrapperText } from 'components';
import {
  CardBillingFinance,
  CardBoostOrganization,
  CardPlanFinance,
  WrapperSubtitleSection,
} from '../../components';

export const Finance: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <Box>
            <WrapperText text="Finance" fontSize="35px" fontWeight="700" />

            <WrapperText
              fontSize="18px"
              fontWeight="400"
              color={theme.palette.text.secondary}
              text="We are looking for the document you wre issued when your company
              was formed in the US."
            />
          </Box>

          <WrapperSubtitleSection text="Plan" />

          <Box sx={{ width: '100%' }}>
            <CardPlanFinance />
          </Box>

          <Box sx={{ width: '100%' }}>
            <CardFlexible padding="20px 30px">
              <OutputTableList
                data={{
                  bottomTextPrimary: 'Total per month',
                  bottomTextSecondary: '$670',
                  information: [
                    {
                      textPrimary: '10 primes user',
                      textSecondary: '$650',
                    },
                    {
                      textPrimary: '1 twitter add-on',
                      textSecondary: '$20',
                    },
                  ],
                }}
              />
            </CardFlexible>
          </Box>

          <WrapperSubtitleSection text="Billing" />

          <Box sx={{ width: '100%' }}>
            <CardBillingFinance />
          </Box>

          <WrapperSubtitleSection text="Payment method" />

          <Box sx={{ width: '100%' }}>
            <CardFlexible padding="20px 30px">
              <div>
                <WrapperText
                  text="My payment methods"
                  fontWeight="400"
                  fontSize="14px"
                  color={theme.palette.text.secondary}
                  sx={{
                    margin: '21px 0px 10px 0px',
                  }}
                />
              </div>
            </CardFlexible>
          </Box>

          <Box sx={{ width: '100%' }}>
            <CardFlexible padding="20px 30px">
              <WrapperSubtitleSection text="Billing Address" />

              <div>
                <Typography
                  color={theme.palette.text.primary}
                  fontWeight="600"
                  fontSize="16px"
                >
                  Rosario, Santa Fe, Argentina
                  <br />
                  Cordoba 2479, Piso 4
                  <br />
                  Cod. 2000
                </Typography>
              </div>
            </CardFlexible>
          </Box>

          <Box>
            <CardBoostOrganization
              title="Add a payment method"
              description="Define an updated payment method to pay this system services. Charges will be automatically take out."
              textButton="Setup payment method"
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
