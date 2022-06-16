import React from "react";

import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CarCardItem from "./CarCardItem";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  categories: {
 
    marginBottom: 30,
  },
}));

const CarCardList = ({ title, data, columns }) => {
  const classes = useStyles();
  
  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <h1 style={{ marginBottom: "70px", textAlign: "center" }}>{title}</h1>
      <Grid container spacing={5}>
        {data.map((make, index) => {
          if(make._id.toString() === '6269ad81e8436b4af342ac57') return null;
          return  (
            <Grid key={make._id} item xs={6} sm={6} md={3} lg={3} className={classes.categories}>
              <CarCardItem data={make} />
            </Grid>
          )
          }
        )}
      </Grid>
    </Container>
  );
};

export default CarCardList;
