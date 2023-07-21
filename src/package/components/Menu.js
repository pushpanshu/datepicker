import React from 'react';
import { Divider, Grid, Paper } from '@mui/material';
import { differenceInCalendarMonths } from 'date-fns';
import Month from './Month';


import { MARKERS } from './Markers';

const Menu = (props) => {
  const {
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    helpers,
    handlers,
    locale
  } = props;


  const canNavigateCloser = differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = {
    dateRange, minDate, maxDate, helpers, handlers,
  };

  return (
    <Paper elevation={5} square>
      <Grid container direction="row" wrap="nowrap">
 
        <Divider orientation="vertical" flexItem />
        <Grid>
          
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
