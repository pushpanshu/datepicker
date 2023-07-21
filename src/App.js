import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Box from "@mui/material/Box";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DatePicker, DatePickerToolbar } from "@mui/x-date-pickers/DatePicker";
import LightModeIcon from "@mui/icons-material/LightMode";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { DateTimePickerTabs, StaticDateTimePicker } from "@mui/x-date-pickers";
import {
  DateRangePickerToolbar,
} from "@mui/x-date-pickers-pro";
import { Grid, Input, MenuItem, Select, TextField } from "@mui/material";
import Months from "./Months";
import { DateRangePicker, DateRangePickerComponent } from "./package";

function CustomTabs(props) {
  const dateobj = [new Date("2002-07-02T18:30:00.000Z"), null];
  return (
    <React.Fragment>
      <DateRangePickerToolbar {...props} />
      <Grid container spacing={2}>
        <Grid item>
          <Months title={"Months"} />
        </Grid>
        <Grid item>
          <Months title={"Year"} />
        </Grid>
        <Grid item>
          <button onClick={() => props.onChange(dateobj)}>Heelelel</button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default function Tabs() {
  return (
    <>
  <DateRangePicker
      open={true}
      
      onChange={(range) => console.log(range)}
    />
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        calendars={1}
        closeOnSelect={true}
        slots={{
          toolbar: CustomTabs,
          previousIconButton: RocketLaunchIcon,
          switchViewButton: RocketLaunchIcon,
        }}
        slotProps={{
          actionBar: {
            slot: {},
          },
          toolbar: {},
        }}
      />
    </LocalizationProvider> */}
    </>
 
  );
}
