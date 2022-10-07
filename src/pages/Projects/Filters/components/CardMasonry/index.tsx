/* eslint-disable no-nested-ternary */
import React from 'react';
import { Icon } from '@iconify/react';
import { CardFlexible, Chip, IconText } from '@wulperstudio/cms';
import { Box, Divider, Stack, useMediaQuery, useTheme } from '@mui/material';

import { consts } from 'helpers/consts';
import { ICONS_NAME } from 'helpers/icons';
import { WrapperText, WrapperIconButton } from 'components';

interface CardMasonryModel {
  height?: string | number;
  title: string;
  description: string;
  image?: string;
}

export const CardMasonry: React.FC<CardMasonryModel> = ({
  description,
  height,
  image,
  title,
}) => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <CardFlexible
      disabledHover
      padding="0px"
      border={`1px solid ${theme.palette.divider}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'none',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        minHeight: height || 500,
        borderRadius: '20px',
        minWidth: '18rem',
        '&:hover': {
          boxShadow: isMqMd ? 'none' : theme.shadows[3],
          zIndex: 10,
        },
        [theme.breakpoints.down('xs')]: {
          '&:hover': {
            zIndex: 0,
            borderRadius: 0,
          },
        },
      }}
    >
      <Box
        sx={{
          background: `url(${image || consts.backgroundImageRandom}) center center no-repeat`,
          backgroundSize: 'cover',
          borderRadius: '20px',
          minHeight: '14rem',
          maxHeight: '16rem',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          columnGap={2}
          flexWrap="wrap"
          sx={{
            p: '1rem',
          }}
        >
          <Chip
            label="New deal"
            size="medium"
            chipProps={{
              sx: {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.main,
              },
            }}
          />

          <Stack direction="row" alignItems="center" columnGap="10px">
            <WrapperIconButton
              iconProps={{
                sx: {
                  position: 'relative',
                  backgroundColor: 'rgba(247, 247, 247, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(247, 247, 247, 0.4)',
                  },
                },
              }}
            >
              <Icon
                icon={ICONS_NAME.document}
                color={theme.palette.background.default}
                style={{
                  zIndex: 2,
                }}
              />
            </WrapperIconButton>

            <WrapperIconButton
              iconProps={{
                sx: {
                  position: 'relative',
                  backgroundColor: 'rgba(247, 247, 247, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(247, 247, 247, 0.4)',
                  },
                },
              }}
            >
              <Icon
                icon={ICONS_NAME.edit}
                color={theme.palette.background.default}
                style={{
                  zIndex: 2,
                }}
              />
            </WrapperIconButton>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{
            p: '0px 15px',
            marginBottom: '-15px',
            zIndex: 3,
          }}
        >
          <WrapperIconButton
            iconProps={{
              sx: {
                boxShadow: theme.shadows[1],
                '&:hover': {
                  backgroundColor: theme.palette.background.default,
                },
              },
            }}
          >
            <Icon icon={ICONS_NAME.alert} color={theme.palette.primary.main} />
          </WrapperIconButton>
        </Stack>
      </Box>

      <Stack rowGap="15px" sx={{flexGrow: 1}}>
        <Box
          sx={{
            p: '1rem 1rem 0 1rem',
          }}
        >
          <WrapperText
            variant="body2"
            color="text.secondary"
            gutterBottom
            text={(
              <>
                <Box
                  component="span"
                  color="primary.main"
                  sx={{ fontWeight: 700, fontSize: '18px' }}
                >
                  $2,095
                </Box>
                /month
              </>
            )}
          />

          <WrapperText
            text={title}
            variant="subtitle1"
            component="h4"
            gutterBottom
          />

          <WrapperText
            text={description}
            color="text.secondary"
            variant="body2"
          />
        </Box>

        <Divider variant="middle" sx={{ borderColor: theme.palette.divider }} />

        <Stack
          sx={{
            p: '0px 1rem 1rem 1rem',
          }}
          direction="row"
          justifyContent="flex-start"
          gap={1}
          flexWrap="wrap"
        >
          <IconText
            isOpenTooltip
            nameIcon={ICONS_NAME.users}
            text="120"
            colorIcon={theme.palette.text.secondary}
            typographyProps={{
              variant: 'body2',
            }}
          />

          <IconText
            isOpenTooltip
            nameIcon={ICONS_NAME.person_add}
            text="4.2"
            colorIcon={theme.palette.text.secondary}
            typographyProps={{
              variant: 'body2',
            }}
          />

          <IconText
            nameIcon={ICONS_NAME.starCardHelper}
            text="5.0"
            colorIcon={theme.palette.text.secondary}
            typographyProps={{
              variant: 'body2',
            }}
          />
        </Stack>
      </Stack>
    </CardFlexible>
  );
};
