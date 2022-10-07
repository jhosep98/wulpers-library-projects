import React from 'react';
import { Icon } from '@iconify/react';
import { CardActionArea, Grid, useTheme } from '@mui/material';
import { CardFlexible, IconButtonComponent } from '@wulperstudio/cms';

import { WrapperText } from 'components';
import { ICONS_NAME } from 'helpers/icons';

interface CardItemModel {
  title: string;
  onClickFunction?: () => void;
}

export const CardMenuItem: React.FC<CardItemModel> = ({
  onClickFunction,
  title,
}) => {
  const theme = useTheme();

  return (
    <CardFlexible
      shadow="none"
      padding="0px"
      border={`1px solid ${theme.palette.background.paper}`}
      sx={{
        backgroundColor: theme.palette.background.default,
      }}
      onClick={() => {
        if (onClickFunction) onClickFunction();
      }}
    >
      <CardActionArea
        component="div"
        sx={{
          p: '15px',
        }}
      >
        <Grid
          container
          direction="row"
          columnGap="10px"
          flexWrap="nowrap"
          alignItems="center"
        >
          <Grid item>
            <IconButtonComponent>
              <Icon icon={ICONS_NAME.briefcase} />
            </IconButtonComponent>
          </Grid>

          <Grid item xs>
            <WrapperText fontWeight={500} text={title} />
          </Grid>

          <Grid item>
            <IconButtonComponent
              iconProps={{
                onClick: onClickFunction,
              }}
            >
              <Icon
                icon={ICONS_NAME.navigateNext}
                color={theme.palette.text.primary}
              />
            </IconButtonComponent>
          </Grid>
        </Grid>
      </CardActionArea>
    </CardFlexible>
  );
};
