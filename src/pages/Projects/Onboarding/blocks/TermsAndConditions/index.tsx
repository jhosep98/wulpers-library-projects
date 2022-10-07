import React from 'react';
import { LayoutForm } from '@wulperstudio/cms';
import { Stack, Typography } from '@mui/material';

export const TermsAndConditions: React.FC = () => (
  <LayoutForm
    componentsProps={{
      BodyProps: {
        sx: {
          px: '20px',
        },
      },
    }}
    body={(
      <Stack
        sx={{
          height: '100%',
          overflowY: 'auto',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc
          sed velit dignissim sodales ut eu. Ultrices mi tempus imperdiet nulla.
          Mauris cursus mattis molestie a iaculis at erat pellentesque
          adipiscing. Sit amet porttitor eget dolor. Etiam dignissim diam quis
          enim. Ultricies mi eget mauris pharetra et. Aliquet nec ullamcorper
          sit amet risus nullam eget. Consectetur libero id faucibus nisl
          tincidunt eget nullam non. Ante in nibh mauris cursus mattis molestie
          a iaculis. Venenatis a condimentum vitae sapien pellentesque habitant
          morbi tristique senectus. Cursus euismod quis viverra nibh cras.
          Facilisi cras fermentum odio eu feugiat pretium. In nulla posuere
          sollicitudin aliquam ultrices. Curabitur vitae nunc sed velit
          dignissim sodales ut eu. Platea dictumst quisque sagittis purus sit
          amet volutpat consequat. Vivamus arcu felis bibendum ut. Posuere ac ut
          consequat semper viverra nam libero justo. Nisl pretium fusce id
          velit. Malesuada pellentesque elit eget gravida cum sociis natoque
          penatibus et. Tellus elementum sagittis vitae et leo duis ut diam
          quam. Mauris in aliquam sem fringilla ut morbi. Amet est placerat in
          egestas erat imperdiet sed. Ullamcorper sit amet risus nullam eget
          felis eget nunc. Sollicitudin nibh sit amet commodo nulla facilisi.
        </Typography>
      </Stack>
    )}
  />
);
