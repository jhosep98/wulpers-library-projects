import React from 'react';
import { Icon } from '@iconify/react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import {
  CardFlexible,
  TabsDrawer,
  InstructionsOutput,
  TextForLinesOutput,
  BoxContainer,
} from '@wulperstudio/cms';
import { WrapperButton } from 'components';
import { Accordions } from '../Accordion';

interface CardPricesModel {
  border?: string;
}

const CardFlexPrices: React.FC<CardPricesModel> = ({ border }) => {
  const theme = useTheme();

  return (
    <CardFlexible
      backgroundColor={theme.palette.background.default}
      padding="10px"
      shadow="none"
      border={border}
    >
      <Stack direction="row" justifyContent="space-between">
        <div>
          <TextForLinesOutput
            clines={1}
            text="Sheldon's power"
            fontSize="16px"
            fontWeight="600"
          />
        </div>
        <div>
          <TextForLinesOutput
            clines={1}
            text="$2.500"
            fontSize="16px"
            fontWeight="600"
          />
        </div>
      </Stack>
    </CardFlexible>
  );
};

export const CardPlanFinance: React.FC = () => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardFlexible padding={isMqMd ? '15px' : '20px 30px'}>
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
            label: 'Billed monthly',
            items: <h3>Sheldon&apos;s power</h3>,
          },
          {
            label: 'Billed annualy',
            items: (
              <BoxContainer
                sx={{
                  width: '100%',
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '10px',
                }}
              >
                <Accordions
                  data={[
                    {
                      header: (
                        <CardFlexPrices
                          border={`1px solid ${theme.palette.background.paper}`}
                        />
                      ),
                      body: (
                        <Stack>
                          <div>
                            <InstructionsOutput
                              title="Plan Benefits"
                              type="custom"
                              iconCustom={(
                                <Icon
                                  icon="bi:check-lg"
                                  color={theme.palette.success.main}
                                />
                              )}
                              instructions={[
                                'Download sheet template',
                                'Import completed sheet',
                                'Fix all errors',
                                'Start using it’s power',
                              ]}
                            />
                          </div>
                        </Stack>
                      ),
                    },
                    {
                      header: (
                        <CardFlexPrices
                          border={`1px solid ${theme.palette.background.paper}`}
                        />
                      ),
                      body: (
                        <Stack>
                          <div>
                            <InstructionsOutput
                              title="Plan Benefits"
                              type="custom"
                              iconCustom={(
                                <Icon
                                  icon="bi:check-lg"
                                  color={theme.palette.success.main}
                                />
                              )}
                              instructions={[
                                'Download sheet template',
                                'Import completed sheet',
                                'Fix all errors',
                                'Start using it’s power',
                              ]}
                            />
                          </div>
                        </Stack>
                      ),
                    },
                    {
                      header: (
                        <CardFlexPrices
                          border={`1px solid ${theme.palette.background.paper}`}
                        />
                      ),
                      body: (
                        <Stack>
                          <div>
                            <InstructionsOutput
                              title="Plan Benefits"
                              type="custom"
                              iconCustom={(
                                <Icon
                                  icon="bi:check-lg"
                                  color={theme.palette.success.main}
                                />
                              )}
                              instructions={[
                                'Download sheet template',
                                'Import completed sheet',
                                'Fix all errors',
                                'Start using it’s power',
                              ]}
                            />
                          </div>
                        </Stack>
                      ),
                    },
                  ]}
                />
                <Stack direction="row" justifyContent="center">
                  <WrapperButton
                    color="primary"
                    type="button"
                    variant="outlined"
                  >
                    Setup plan
                  </WrapperButton>
                </Stack>
              </BoxContainer>
            ),
          },
        ]}
      />
    </CardFlexible>
  );
};
