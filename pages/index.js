import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Tabs from "../components/Tabs";

import MainCarousel from "../components/MainCarousel";
import CarCardList from "../components/CarCardList";
import Meta from "../components/Meta";
import { baseURL } from "../api/api";
import useMedia from "../hooks/useMedia";
import CallToAction from "../components/main/CallToAction";

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

  return (
    <>
      <Meta title="Car One Group" description="Autos Nuevo, Seminuevos" />
      <Container maxWidth="lg" sx={classes.root}>
        <MainCarousel medias={mediasMainBanner} />
        <Tabs categories={categories} />
        <CallToAction style={{ marginBottom: "2em" }} color="white" />
        <CarCardList title="BUSCAR POR MARCA" data={makes} />
      </Container>
    </>
  );
};

export const getStaticProps = async (context) => {
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
