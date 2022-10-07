import React from 'react';
import { GridCards } from '@wulperstudio/cms';

import useScroll from 'hooks/useScroll';
import { WrapperHeader, WrapperText } from 'components';
import { ContainerTemplate } from 'templates/Container';

interface HomeTemplateModel {
  children: React.ReactNode | React.ReactNode[];
}

export const HomeTemplate: React.FC<HomeTemplateModel> = ({ children }) => {
  const { scrolled } = useScroll();

  return (
    <>
      <WrapperHeader isBorder scrolled={scrolled} sticky>
        <WrapperText text="Projects" />
      </WrapperHeader>

      <ContainerTemplate maxWidth="xxl" sx={{ pt: 0 }}>
        <GridCards gridColumns="repeat(4,1fr)" sx={{ p: '2.5rem 1rem' }}>
          {children}
        </GridCards>
      </ContainerTemplate>
    </>
  );
};
