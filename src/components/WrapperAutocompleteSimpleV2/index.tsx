import React from 'react';
import { AutocompleteSimpleV2 } from '@wulperstudio/cms';

type AutocompleteSimpleV2Model = React.ComponentProps<
  typeof AutocompleteSimpleV2
>;

export const WrapperAutocompleteSimpleV2 = (
  props: AutocompleteSimpleV2Model,
) => {
  const {
    label,
    placeholder = 'placeholder',
    size = 'large',
    variant = 'unfilled',
    ...res
  } = props;

  return (
    <AutocompleteSimpleV2
      label={label}
      size={size}
      variant={variant}
      placeholder={placeholder}
      {...res}
    />
  );
};
