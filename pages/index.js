import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Tabs from "../components/Tabs";
import MainCarousel from "../components/MainCarousel";
import CarCardList from "../components/CarCardList";
import Meta from "../components/Meta";
import { baseURL } from "../api/api";
import useMedia from "../hooks/useMedia";
import CallToAction from "../components/main/CallToAction";
import { Grid, Box, Typography } from "@mui/material";

const classes = {
  root: {
    paddingBottom: 5,
  },
};

const Home = ({ makes, categories, medias }) => {
  const { mediasMainBanner, getMediasMainBanner } = useMedia();

  useEffect(() => {
    getMediasMainBanner();
  }, []);

  const TitleHome = (
    <Box mt={2}>
      <Typography variant="h1" sx={{fontSize: "35px", fontWeight: 600}}>
        Venta de autos en México
      </Typography>
      <Typography>
        Venta de autos nuevos y seminuevos en todo México.
      </Typography>
    </Box>
  )

  return (
    <>
      <Meta 
        title="Venta de autos en México - Carone Group" 
        description="Venta de autos nuevos y seminuevos en México - Carone Group" 
        url="https://carone.com.mx/"
        googlebot={"index,follow"}
        robots="all"
      />
      
      <Container maxWidth="lg" sx={classes.root}>
        <MainCarousel medias={mediasMainBanner} />
        {TitleHome}
        <Tabs categories={categories} />
        <CallToAction style={{ marginBottom: "2em" }} color="white" />
        <CarCardList title="BUSCAR POR MARCA" data={makes} />
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`${baseURL}/makes?isShown=true`);
  const makes = await res.json();

  const resCategories = await fetch(`${baseURL}/categories`);
  const categories = await resCategories.json();

  return {
    props: {
      makes: makes.data,
      categories: categories.data,
    },
  };
};
export default Home;
