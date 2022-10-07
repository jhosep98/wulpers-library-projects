import React from 'react';
import { Divider, Stack, useTheme } from '@mui/material';
import {
  AttachFileDrop,
  BoxContainer,
  InputTrueFalse,
} from '@wulperstudio/cms';

import { consts } from 'helpers/consts';
import { SectionSettingsTemplate } from 'templates';
import {
  WrapperAutocompleteSimpleV2,
  WrapperButton,
  WrapperText,
  WrapperTextField,
} from 'components';
import { Accordions } from '../../components';

export const Payments: React.FC = () => {
  const theme = useTheme();
  const [bankTransferChecked, setBankTransferChecked] = React.useState(false);
  const [creditCardChecked, setCreditChecked] = React.useState(false);
  const [cryptoChecked, setCryptoChecked] = React.useState(false);
  const [paypalChecked, setPaypalChecked] = React.useState(false);
  const [productChecked, setProductChecked] = React.useState(false);

  return (
    <SectionSettingsTemplate
      body={(
        <>
          <WrapperText text="Payments" fontSize="35px" fontWeight="700" />

          <WrapperText
            fontSize="18px"
            fontWeight="400"
            color={theme.palette.text.secondary}
            text="We are looking for the document you wre issued when your company
              was formed in the US."
          />

          <Divider
            variant="fullWidth"
            sx={{
              borderColor: theme.palette.background.paper,
            }}
          />

          <BoxContainer
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              width: '100%',
            }}
          >
            <BoxContainer
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                boxShadow: consts.boxShadowStyle,
                borderRadius: '10px',
                width: '100%',
                padding: '15px',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Accordions
                paddingPanel="16px 0px"
                expanded={cryptoChecked}
                data={[
                  {
                    header: (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          width: '100%',
                        }}
                      >
                        <BoxContainer>
                          <WrapperText
                            text="Crypto"
                            color={theme.palette.primary.main}
                            fontWeight="600"
                            fontSize="16px"
                          />
                        </BoxContainer>

                        <BoxContainer>
                          <InputTrueFalse
                            switchProps={{
                              checked: cryptoChecked,
                              onChange: (e) => setCryptoChecked(e.target.checked),
                            }}
                          />
                        </BoxContainer>
                      </Stack>
                    ),
                    body: (
                      <Stack rowGap="15px">
                        <AttachFileDrop
                          name="avatar"
                          variant="outlined"
                          variantShape="circular"
                        />
                        <WrapperAutocompleteSimpleV2
                          label="Exchange"
                          variant="outlined"
                          options={['Binance', 'Crypto.com']}
                          value="Binance"
                          onChange={(data) => data}
                        />
                        <WrapperAutocompleteSimpleV2
                          label="Currency"
                          variant="outlined"
                          options={['USDT', 'Bitcoin']}
                          value="USDT"
                          onChange={(data) => data}
                        />
                        <WrapperTextField
                          label="Address"
                          variant="outlined"
                          placeholder="x9419jagnvas9481941hfasf145122"
                        />
                        <WrapperAutocompleteSimpleV2
                          label="Protocol"
                          variant="outlined"
                          options={['Binance Smart Chain']}
                          value="Binance Smart Chain"
                          onChange={(data) => data}
                        />
                        <WrapperTextField
                          label="Note"
                          variant="outlined"
                          placeholder="Insert on description: Your ID proportioned"
                          disabled
                        />
                      </Stack>
                    ),
                  },
                ]}
              />
            </BoxContainer>

            <BoxContainer
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                boxShadow: consts.boxShadowStyle,
                borderRadius: '10px',
                width: '100%',
                padding: '15px',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Accordions
                paddingPanel="16px 0px"
                expanded={creditCardChecked}
                data={[
                  {
                    header: (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          width: '100%',
                        }}
                      >
                        <BoxContainer>
                          <WrapperText
                            text="Credit card processor"
                            color={theme.palette.primary.main}
                            fontWeight="600"
                            fontSize="16px"
                          />
                        </BoxContainer>

                        <BoxContainer>
                          <InputTrueFalse
                            switchProps={{
                              checked: creditCardChecked,
                              onChange: (e) => setCreditChecked(e.target.checked),
                            }}
                          />
                        </BoxContainer>
                      </Stack>
                    ),
                    body: <Stack rowGap="15px">Credit</Stack>,
                  },
                ]}
              />
            </BoxContainer>

            <BoxContainer
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                boxShadow: consts.boxShadowStyle,
                borderRadius: '10px',
                width: '100%',
                padding: '15px',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Accordions
                expanded={paypalChecked}
                paddingPanel="16px 0px"
                data={[
                  {
                    header: (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          width: '100%',
                        }}
                      >
                        <BoxContainer>
                          <WrapperText
                            text="Paypal"
                            color={theme.palette.primary.main}
                            fontWeight="600"
                            fontSize="16px"
                          />
                        </BoxContainer>

                        <BoxContainer>
                          <InputTrueFalse
                            switchProps={{
                              checked: paypalChecked,
                              onChange: (e) => setPaypalChecked(e.target.checked),
                            }}
                          />
                        </BoxContainer>
                      </Stack>
                    ),
                    body: <Stack rowGap="15px">Paypal</Stack>,
                  },
                ]}
              />
            </BoxContainer>

            <BoxContainer
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                boxShadow: consts.boxShadowStyle,
                borderRadius: '10px',
                width: '100%',
                padding: '15px',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Accordions
                expanded={bankTransferChecked}
                paddingPanel="16px 0px"
                data={[
                  {
                    header: (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          width: '100%',
                        }}
                      >
                        <BoxContainer>
                          <WrapperText
                            text="Bank transfer"
                            color={theme.palette.primary.main}
                            fontWeight="600"
                            fontSize="16px"
                          />
                        </BoxContainer>
                        <BoxContainer>
                          <InputTrueFalse
                            switchProps={{
                              checked: bankTransferChecked,
                              onChange: (e) => setBankTransferChecked(e.target.checked),
                            }}
                          />
                        </BoxContainer>
                      </Stack>
                    ),
                    body: <Stack rowGap="15px">Bank transfer</Stack>,
                  },
                ]}
              />
            </BoxContainer>

            <BoxContainer
              sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '10px',
                boxShadow: consts.boxShadowStyle,
                borderRadius: '10px',
                width: '100%',
                padding: '15px',
                backgroundColor: theme.palette.background.default,
              }}
            >
              <Accordions
                expanded={productChecked}
                paddingPanel="16px 0px"
                data={[
                  {
                    header: (
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          width: '100%',
                        }}
                      >
                        <BoxContainer>
                          <WrapperText
                            text="Product & services"
                            color={theme.palette.primary.main}
                            fontWeight="600"
                            fontSize="16px"
                          />
                        </BoxContainer>
                        <BoxContainer>
                          <InputTrueFalse
                            switchProps={{
                              checked: productChecked,
                              onChange: (e) => setProductChecked(e.target.checked),
                            }}
                          />
                        </BoxContainer>
                      </Stack>
                    ),
                    body: <Stack rowGap="15px">Product & services</Stack>,
                  },
                ]}
              />
            </BoxContainer>
          </BoxContainer>
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
