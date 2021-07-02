import React from "react";
import { Grid } from "@material-ui/core";
import CarListCard from "./CarListCard";

const CarList = ({ vehicles }) => {
  return (
    <Grid container spacing={5}>
      {vehicles &&
        vehicles.map((vehicle, index) => (
          <Grid item xs={3} sm={3} md={3} lg={3} key={index}>
            <CarListCard vehicle={vehicle} />
          </Grid>
        ))}
    </Grid>
  );
};

export default CarList;
