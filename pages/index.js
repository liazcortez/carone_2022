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
    <Box mt={"1rem"} sx={{padding: "16px"}}>
      <Typography variant="h1" sx={{fontSize: "32px", fontWeight: 600}}>
        Venta de Autos Nuevos y Seminuevos en Monterrey
      </Typography>
      <Typography>
        En Car One contamos con un gran inventario de Autos Nuevos y Seminuevos en Monterrey. Compruebalo hoy mismo!
      </Typography>
    </Box>
  )

  return (
    <>
      <Meta 
        title="Car One Group" 
        description="¿Buscas Auto en Monterrey? 
        Encuentra entre más de 50000 clasificados la mejor oferta para tu próximo auto en Monterrey, solo en Car one." 
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
