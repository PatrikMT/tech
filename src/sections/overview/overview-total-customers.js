import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewTotalCustomers = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              
              variant="h4"
            >
              Inventario
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

OverviewTotalCustomers.propTypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  value: PropTypes.string.isRequired,
  sx: PropTypes.object
};

