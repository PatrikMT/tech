import PropTypes from 'prop-types';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewTotalProfit = (props) => {
  const { value, sx } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="end"
          direction="row"
          justifyContent="center"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              
              variant="h4"
            >
              Ticket
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

OverviewTotalProfit.propTypes = {
  value: PropTypes.string,
  sx: PropTypes.object
};
