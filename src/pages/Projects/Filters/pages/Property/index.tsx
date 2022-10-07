import React from 'react';
import { v4 } from 'uuid';
import { Box, useTheme } from '@mui/material';
import { GridCards } from '@wulperstudio/cms';

import { HeroBlock } from 'blocks';
import { useFetch } from 'hooks/useFetch';
import { WrapperText } from 'components';
import { ContainerTemplate } from 'templates';
import { FAKE_IMAGES_API_URL } from 'helpers/consts';
import { Image } from '../../interfaces';
import { CardMasonry, HeaderProjects } from '../../components';

export const PropertyPage: React.FC = () => {
  const theme = useTheme();
  const { data, error } = useFetch<Image>(FAKE_IMAGES_API_URL);

  if (error) return <p>There is an error.</p>;

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <HeroBlock />

      <ContainerTemplate>
        <WrapperText
          text="Based on your location"
          variant="h2"
          component="h2"
          gutterBottom
        />

        <WrapperText
          text="lorem ipsum dolorem ingraten."
          variant="body1"
          component="p"
          color="text.secondary"
        />
      </ContainerTemplate>

      <Box>
        <HeaderProjects sticky top={0} />

        <ContainerTemplate sx={{}}>
          <GridCards
            gridColumns="repeat(auto-fill, minmax(18rem, 1fr))"
            sx={{
              p: '1.5rem 2rem',
              gap: '25px',
              [theme.breakpoints.down('md')]: {
                p: 0,
              },
            }}
          >
            {data.map(({ id, title, url }) => (
              <CardMasonry
                key={v4()}
                height="fit-content"
                title={title}
                description={`lorem ipsum dolor sit amet, consectetur adipis id> ${id}`}
                image={url}
              />
            ))}
          </GridCards>
        </ContainerTemplate>
      </Box>
    </>
  );
};
