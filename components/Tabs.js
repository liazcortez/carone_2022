import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from "./Carousel";

const useStyles = makeStyles((theme) => ({
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const Tabs = ({ categories }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" style={{ marginTop: 20, marginBottom: 50 }}>
      <CarouselComponent data={categories} title="TIPO DE VEHICULOS" />
    </Container>
  );
};

export default Tabs;
