import React from "react";


import { StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { Box,TextField } from "@mui/material";

const classes = {
  card: {
    boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
    borderRadius: "4px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
};

const Calendar = ({campaign}) => {
  const [value, setValue] = React.useState([null, null]);
  return (
          <Box sx={classes.card}>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                value={campaign.startDate}
                disabled
                disableMaskedInput
              />
            </LocalizationProvider> */}
          </Box>
  );
};

export default Calendar;



