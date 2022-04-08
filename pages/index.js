import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Divider from "@material-ui/core/Divider";
import Tabs from "../components/Tabs";

import Banner from "../components/Banner";
import MainCarousel from "../components/MainCarousel";
import Carousel from "../components/Carousel";
import CarCardList from "../components/CarCardList";
import Meta from "../components/Meta";
import { baseURL } from "../api/api";
import useMedia from "../hooks/useMedia";
import Live from "../components/Live";

const imageUrl = "/static/images/BannerC1.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const data = ['']

const Home = ({ makes, categories, medias }) => {
  const classes = useStyles();
  const { mediasMainBanner, getMediasMainBanner } = useMedia();
  
  useEffect(() => {
    getMediasMainBanner();
  },[])

  return (
    <>
      <Meta title="Car One Group" description="Autos Nuevo, Seminuevos" />
      <Container maxWidth="lg">
        <MainCarousel  medias={mediasMainBanner}/>
        {/* <Carousel /> */}
        <Tabs categories={categories} />
        <CarCardList title="BUSCAR POR MARCA" data={makes} />
        
      </Container>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${baseURL}/makes/redis`);
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
