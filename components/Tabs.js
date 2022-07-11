import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
    <Container maxWidth="lg" sx={{ marginTop: "25px", marginBottom: 15 }}>
      <CarouselComponent data={categories} title="TIPO DE VEHICULOS" />
    </Container>
  );
};

export default Tabs;
