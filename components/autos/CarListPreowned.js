import React from "react";
import { Grid } from "@material-ui/core";
import CarListCard from "./CarListCardPreowned";

const CarList = ({ vehicles, loading, setDataList }) => {
  return (
    <Grid container spacing={5}>
      {
      vehicles && (loading ? Array.from(new Array(12)) : vehicles).map(
        (vehicle, index) => (
          <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
            <CarListCard vehicle={vehicle} loading={loading} setDataList={setDataList} />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default CarList;
