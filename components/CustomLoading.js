import { Box,CircularProgress }  from "@mui/material";
import React from "react";

const CustomLoading = () => {
  return (
    <Box
      style={{ marginTop: "4rem" }}
      display='flex'
      justifyContent='center'
    >
      <CircularProgress size={60} />
    </Box>
  );
};

export default CustomLoading;
