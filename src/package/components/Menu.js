import React from 'react';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import { differenceInCalendarMonths, format } from 'date-fns';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import Month from './Month';
import DefinedRanges from './DefinedRanges';

import { MARKERS } from './Markers';

const Menu = (props) => {
  const {
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
    locale
  } = props;

  const { startDate, endDate } = dateRange;
  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange, minDate, maxDate, helpers, handlers,
  };

  return (
    <Paper elevation={5} square>
      <Grid container direction="row" wrap="nowrap">
        <Grid>
          <DefinedRanges
            selectedRange={dateRange}
            ranges={ranges}
            setRange={setDateRange}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid>
          <Grid container sx={{ padding: '20px 70px' }} alignItems="center">
            <Grid item sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="subtitle1">
                {startDate ? format(startDate, 'dd MMMM yyyy', { locale }) : 'Start Date'}
              </Typography>
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: 'center' }}>
              <ArrowRightAlt color="action" />
            </Grid>
            <Grid item sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="subtitle1">
                {endDate ? format(endDate, 'dd MMMM yyyy', { locale }) : 'End Date'}
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid container direction="row" justifyContent="center" wrap="nowrap">
            <Month
              {...commonProps}
              value={firstMonth}
              setValue={setFirstMonth}
              navState={[true, canNavigateCloser]}
              marker={MARKERS.FIRST_MONTH}
              locale={locale}
            />
            <Divider orientation="vertical" flexItem />
            <Month
              {...commonProps}
              value={secondMonth}
              setValue={setSecondMonth}
              navState={[canNavigateCloser, true]}
              marker={MARKERS.SECOND_MONTH}
              locale={locale}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Menu;
