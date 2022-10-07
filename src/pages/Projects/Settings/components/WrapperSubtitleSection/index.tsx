import React from 'react';
import { WrapperText } from 'components';

interface WrapperSubtitleSectionModel {
  text: React.ReactNode;
}

export const WrapperSubtitleSection: React.FC<WrapperSubtitleSectionModel> = ({
  text,
}) => (
  <WrapperText
    color="primary.main"
    text={text}
    variant="subtitle1"
  />
);
