/* eslint-disable no-nested-ternary */
import React from 'react';
import { ContentRowBlock, ContentRowBlockModel } from '@wulperstudio/cms';
import { useMediaQuery, useTheme } from '@mui/material';

interface ContentRowTemplateModel extends ContentRowBlockModel {
  flexDirection?: string;
  widthFirstBox?: string | number;
  widthSecondBox?: string | number;
  alignItems?: string;
  isMt?: boolean;
  flexDirectionMobile?: string;
}

export const ContentRowTemplate: React.FC<ContentRowTemplateModel> = ({
  flexDirection = 'row',
  widthFirstBox,
  widthSecondBox,
  alignItems = 'center',
  flexDirectionMobile = 'column',
  isMt = true,
  ...props
}) => {
  const theme = useTheme();
  const isMqMd = useMediaQuery(theme.breakpoints.down('md'));
  const { firstBox, secondBox, ...rest } = props;

  return (
    <ContentRowBlock
      maxWidth="xl"
      firstBox={firstBox}
      secondBox={secondBox}
      firstBoxProps={{
        sx: {
          maxWidth: widthSecondBox || 600,
          height: 'auto',
          [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            minWidth: '100%',
            padding: '0px',
          },
        },
      }}
      secondBoxProps={{
        sx: {
          maxWidth: widthFirstBox || 600,
          height: 'auto',
          minWidth: widthFirstBox || 600,
          [theme.breakpoints.down('md')]: {
            maxWidth: '100%',
            minWidth: '100%',
            padding: '0px 0px 20px 0px',
          },
        },
      }}
      sx={{
        display: 'flex',
        flexDirection,
        justifyContent: 'space-evenly ',
        alignItems,
        width: '100%',
        gap: '10px',
        position: 'relative',
        py: '70px',
        mt: isMqMd ? 0 : isMt ? '90px' : 0,

        [theme.breakpoints.down('md')]: {
          flexDirection: flexDirectionMobile,
          rowGap: '20px',
          py: 0,
        },
      }}
      {...rest}
    />
  );
};
