import PropTypes from 'prop-types';

import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="center"
          spacing={3}
          >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="h4"
            >
              Chamados
            </Typography>
            <Typography variant="h3">
              {value}
            </Typography>
            </Stack>
            
            
           </Stack>
           
          </CardContent>
          </Card>
           );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
