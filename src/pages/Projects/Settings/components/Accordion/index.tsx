import React from 'react';
import { v4 } from 'uuid';
import { useTheme } from '@mui/material';
import { BoxContainer } from '@wulperstudio/cms';

import { Accordion, AccordionDetails, AccordionSummary } from './styled';

interface DataModel {
  header: React.ReactNode;
  body: React.ReactNode;
}
interface AccordionsModel {
  data: Array<DataModel>;
  paddingPanel?: string;
  expanded?: boolean;
  setExpanded?: (value: boolean) => void;
}

export const Accordions: React.FC<AccordionsModel> = ({
  data,
  paddingPanel,
  expanded,
  setExpanded,
}) => {
  const theme = useTheme();

  const [ex, setEx] = React.useState(expanded ?? false);

  return (
    <BoxContainer
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: '20px',
        width: '100%',
      }}
    >
      {data.map((el, i) => (
        <Accordion
          expanded={ex}
          key={v4()}
          onChange={() => {
            setEx(() => !ex);
            if (setExpanded) setExpanded(!ex);
          }}
        >
          <AccordionSummary
            aria-controls={`panel${i}d-content`}
            id={`panel${i}d-header`}
            sx={{
              backgroundColor: theme.palette.background.default,
              padding: 0,
              width: '100%',
            }}
          >
            {el.header}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: theme.palette.background.default,
              padding: paddingPanel || '16px 11px',
            }}
          >
            {el.body}
          </AccordionDetails>
        </Accordion>
      ))}
    </BoxContainer>
  );
};
