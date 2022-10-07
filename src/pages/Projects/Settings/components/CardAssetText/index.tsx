import React from 'react';
import { v4 } from 'uuid';
import { CardFlexible } from '@wulperstudio/cms';
import { Box, List, useTheme } from '@mui/material';

import { consts } from 'helpers/consts';
import { ListItem } from '../ListItem';

interface ItemModel {
  item: React.ReactNode;
  icon?: string;
}

interface CardAssetTextModel {
  list: Array<ItemModel>;
}

export const CardAssetText: React.FC<CardAssetTextModel> = ({ list }) => {
  const theme = useTheme();

  return (
    <CardFlexible
      disabledHover
      shadow="none"
      padding="0px"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '15px',
        height: 'auto',
      }}
    >
      <Box
        component="article"
        sx={{
          height: '100%',
          width: '100%',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
          }}
        >
          <Box
            component="iframe"
            src={consts.iframeVideo}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Box>

      <List
        component="ol"
        sx={{
          listStyleType: 'decimal',
          [theme.breakpoints.down('md')]: {
            px: '5px',
          },
        }}
      >
        <ListItem
          key={v4()}
          items={list.map(({ item, icon }) => ({ item, icon }))}
        />
      </List>
    </CardFlexible>
  );
};
