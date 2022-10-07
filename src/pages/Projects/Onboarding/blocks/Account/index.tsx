import React from 'react';
import {
  useTheme,
  Stack,
  Container,
  NativeSelect,
  InputLabel,
} from '@mui/material';

import { WrapperButton } from 'components';
import { LayoutForm, TextFieldV5LabelOut } from '@wulperstudio/cms';

interface AccountModel {
  isBackground?: boolean;
}

export const Account: React.FC<AccountModel> = () => {
  const theme = useTheme();

  return (
    <>
      <LayoutForm
        componentsProps={{
          FooterProps: {
            sx: {
              position: {
                xs: 'fixed',
                md: 'static',
                left: 0,
              },
              bottom: {
                xs: '0px',
                md: 'unset',
              },
            },
          },
          BodyProps: {
            sx: {
              pb: '95px',
            },
          },
        }}
        body={(
          <Stack
            rowGap="15px"
            sx={{
              height: '100%',
              overflowY: 'auto',
              [theme.breakpoints.down('md')]: {
                paddingTop: '0px',
              },
            }}
          >
            <TextFieldV5LabelOut
              label="EMAIL"
              placeholder="Correo electrónico"
              type="email"
            />

            <WrapperButton
              variant="text"
              color="error"
              sx={{
                maxWidth: 'fit-content',
                borderRadius: '30px',
                px: '1.5rem',
                color: theme.palette.error.main,
              }}
            >
              Change password
            </WrapperButton>

            <Stack rowGap="10px">
              <TextFieldV5LabelOut
                label="TELEFONO"
                placeholder="Ingresa tu telefono"
                type="tel"
              />

              <TextFieldV5LabelOut
                label="NOMBRE COMPLETO"
                placeholder="Nombre y Apellido"
              />

              <TextFieldV5LabelOut label="ALIAS" placeholder="Nickname" />

              <Stack rowGap="5px" width="100%">
                <InputLabel
                  sx={{
                    pl: '4px',
                    fontSize: '14px',
                    lineHeight: '18px',
                    fontWeight: 400,
                    marginBottom: 0,
                    marginTop: '5px',
                  }}
                  htmlFor="RELACION"
                >
                  RELACION
                </InputLabel>

                <NativeSelect id="relacion">
                  <option value="" disabled selected>
                    Elige una option
                  </option>
                  <option value="amigo">amigo</option>
                  <option value="familiar">familiar</option>
                  <option value="esposa">esposa</option>
                </NativeSelect>
              </Stack>
            </Stack>

            <WrapperButton
              variant="text"
              color="error"
              sx={{
                maxWidth: 'fit-content',
                px: '1.5rem',
                color: theme.palette.error.main,
              }}
            >
              Log Out
            </WrapperButton>
          </Stack>
        )}
        footer={(
          <Container
            sx={{
              py: '1rem',
              backgroundColor: theme.palette.background.default,
            }}
          >
            <WrapperButton fullWidth>Save Changes</WrapperButton>
          </Container>
        )}
      />
    </>
  );
};
