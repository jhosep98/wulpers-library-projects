import React from 'react';
import { useTheme } from '@mui/material';
import { Avatar, CardFlexible, TextForLinesOutput } from '@wulperstudio/cms';

import { consts } from 'helpers/consts';
import { WrapperButton } from 'components';
import { Container } from './styled';

interface CardBoostModel {
  title: string;
  description: string;
  textButton: string;
}

export const CardBoostOrganization: React.FC<CardBoostModel> = ({
  title,
  description,
  textButton,
}) => {
  const theme = useTheme();

  return (
    <CardFlexible
      padding="20px 30px"
      border={`1px solid ${theme.palette.background.paper}`}
    >
      <Container>
        <Avatar
          urlImg={consts.backgroundImageRandom}
          isImage
          invisibleBadge
          minHeight="120px"
          minWidth="120px"
        />
        <TextForLinesOutput
          clines={1}
          text={title}
          fontSize="20px"
          fontWeight="600"
        />
        <TextForLinesOutput
          clines={3}
          text={description}
          color={theme.palette.text.secondary}
          fontSize="16px"
          fontWeight="400"
        />
        <WrapperButton type="button" variant="outlined">
          {textButton}
        </WrapperButton>
      </Container>
    </CardFlexible>
  );
};
