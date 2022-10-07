import React from 'react';
import { v4 } from 'uuid';
import { Icon } from '@iconify/react';
import { MenuItem, Stack, useTheme } from '@mui/material';
import {
  AutocompleteCheckboxMultiple,
  BoxIcon,
  DropdownMenu,
  MenuFilter,
  TestModel,
} from '@wulperstudio/cms';

import { ICONS_NAME } from 'helpers/icons';
import { useHandleMenu } from 'hooks/useHandleMenu';
import {
  WrapperAutocompleteSimpleV2,
  WrapperHeader,
  WrapperIconButton,
  WrapperText,
  WrapperTextField,
} from 'components';

const data2: TestModel[] = [
  {
    id: 'test-1',
    name: 'first word',
  },
  {
    id: 'test-2',
    name: 'second word',
  },
  {
    id: 'test-3',
    name: 'third word',
  },
  {
    id: 'test-4',
    name: 'fourth word',
  },
  {
    id: 'test-5',
    name: 'five word',
  },
  {
    id: 'test-6',
    name: 'six word',
  },
];

interface HeaderProjectsModel {
  sticky?: boolean;
  scrolled?: boolean;
  top?: number;
}

export const HeaderProjects: React.FC<HeaderProjectsModel> = ({
  scrolled,
  sticky,
  top,
}) => {
  const theme = useTheme();
  const [defaultValue, setDefaultValue] = React.useState([]);
  const { anchorEl, handleOpen, handleClose } = useHandleMenu();
  const {
    anchorEl: anchorEl2,
    handleOpen: handleOpen2,
    handleClose: handleClose2,
  } = useHandleMenu();

  return (
    <WrapperHeader maxWidth="xl" top={top} sticky={sticky} scrolled={scrolled}>
      <MenuFilter
        elementsCount={3}
        padding="0px"
        contentRight={(
          <Stack
            direction="row"
            alignItems="center"
            columnGap="1rem"
            height="100%"
          >
            <DropdownMenu
              anchorEl={anchorEl}
              handleClose={handleClose}
              listItem={[
                <MenuItem
                  key={v4()}
                  onClick={handleClose}
                  sx={{
                    padding: '.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '1rem',
                    '&:hover': {
                      borderRadius: '10px',
                    },
                  }}
                >
                  <BoxIcon
                    icon={ICONS_NAME.arrowRight}
                    color={theme.palette.text.primary}
                  />

                  <WrapperText variant="body2" text="Sort 1" />
                </MenuItem>,

                <MenuItem
                  key={v4()}
                  onClick={handleClose}
                  sx={{
                    padding: '.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '1rem',
                    '&:hover': {
                      borderRadius: '10px',
                    },
                  }}
                >
                  <BoxIcon
                    icon={ICONS_NAME.alert}
                    color={theme.palette.text.primary}
                  />
                  <WrapperText variant="body2" text="Sort 2" />
                </MenuItem>,
              ]}
            >
              <WrapperIconButton
                iconProps={{
                  onClick: (e) => handleOpen(e),
                  sx: {
                    border: `1px solid ${theme.palette.background.paper}`,
                    borderRadius: '15px',
                  },
                }}
              >
                <Icon
                  icon={ICONS_NAME.sortDesc}
                  color={theme.palette.text.primary}
                />
              </WrapperIconButton>
            </DropdownMenu>

            <DropdownMenu
              anchorEl={anchorEl2}
              handleClose={handleClose2}
              listItem={[
                <MenuItem
                  key={v4()}
                  onClick={handleClose2}
                  sx={{
                    padding: '.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '1rem',
                    '&:hover': {
                      borderRadius: '10px',
                    },
                  }}
                >
                  <BoxIcon
                    icon={ICONS_NAME.arrowRight}
                    color={theme.palette.text.primary}
                  />

                  <WrapperText variant="body2" text="Sort 1" />
                </MenuItem>,

                <MenuItem
                  key={v4()}
                  onClick={handleClose2}
                  sx={{
                    padding: '.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '1rem',
                    '&:hover': {
                      borderRadius: '10px',
                    },
                  }}
                >
                  <BoxIcon
                    icon={ICONS_NAME.alert}
                    color={theme.palette.text.primary}
                  />
                  <WrapperText variant="body2" text="Sort 2" />
                </MenuItem>,
              ]}
            >
              <WrapperIconButton
                iconProps={{
                  onClick: (e) => handleOpen2(e),
                  sx: {
                    border: `1px solid ${theme.palette.background.paper}`,
                    borderRadius: '15px',
                  },
                }}
              >
                <Icon
                  icon={ICONS_NAME.navbarExpanded}
                  color={theme.palette.text.primary}
                />
              </WrapperIconButton>
            </DropdownMenu>
          </Stack>
        )}
      >
        <Stack
          sx={{
            width: '100%',
            overflowX: 'auto',
          }}
          direction="row"
          alignItems="center"
          gap="15px"
        >
          <WrapperTextField
            variant="outlined"
            placeholder="Buscar"
            disabledHoverVariantOutAndFlo
            size="medium"
            sx={{
              maxWidth: 170,
              minWidth: 170,
            }}
            InputProps={{
              endAdornment: (
                <WrapperIconButton>
                  <Icon icon={ICONS_NAME.search} />
                </WrapperIconButton>
              ),
            }}
          />

          <WrapperAutocompleteSimpleV2
            options={data2}
            variant="outlined"
            size="medium"
            textFieldProps={{
              placeholder: 'Location',
            }}
            sx={{
              maxWidth: 170,
              minWidth: 170,
            }}
          />

          <AutocompleteCheckboxMultiple
            variant="outlined"
            options={data2}
            size="medium"
            limitTags={1}
            sx={{
              '&.MuiAutocomplete-listbox .MuiAutocomplete-optionr': {
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '22px',
              },
            }}
            textFieldProps={{
              id: 'label',
              placeholder: 'placeholder',
              fullWidth: true,
              sx: {
                height: '100%',
                '&.MuiAutocomplete-listbox .MuiAutocomplete-option': {
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '22px',
                },
              },
            }}
            variantRenderTag="total"
            value={defaultValue}
            onChange={(_, value2: any) => {
              setDefaultValue(value2);
            }}
            boxProps={{
              sx: {
                maxWidth: 170,
                minWidth: 170,
              },
            }}
            disabledHoverVariantOutAndFlo
          />

          <WrapperTextField
            variant="outlined"
            disabledHoverVariantOutAndFlo
            size="medium"
            type="date"
            sx={{
              maxWidth: 170,
              minWidth: 170,
            }}
          />
        </Stack>
      </MenuFilter>
    </WrapperHeader>
  );
};
