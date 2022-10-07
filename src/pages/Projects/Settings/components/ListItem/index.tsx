import React from 'react';
import { v4 } from 'uuid';
import { Icon } from '@iconify/react';
import {
  Box,
  List,
  ListItem as MUIListItem,
  ListItemIcon,
  useTheme,
} from '@mui/material';

interface ItemModel {
  item: React.ReactNode;
  icon?: string;
}

interface ListItemModel {
  items: Array<ItemModel>;
}

export const ListItem: React.FC<ListItemModel> = ({ items }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }}>
      <Box component="nav" sx={{ width: '100%' }}>
        <List sx={{ width: '100%' }}>
          {items.map(({ icon, item }) => (
            <MUIListItem
              key={v4()}
              disablePadding
              sx={{ py: '.5rem', alignItems: 'flex-start', width: '100%' }}
            >
              {icon && (
                <ListItemIcon sx={{ minWidth: 40 }}>
                  <Icon
                    icon={icon}
                    height={24}
                    width={24}
                    color={theme.palette.primary.main}
                  />
                </ListItemIcon>
              )}

              {item}
            </MUIListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
