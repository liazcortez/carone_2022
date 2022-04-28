import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "../components/Tabs";

import MainCarousel from "../components/MainCarousel";
import CarCardList from "../components/CarCardList";
import Meta from "../components/Meta";
import { baseURL } from "../api/api";
import useMedia from "../hooks/useMedia";
import CallToAction from "../components/main/CallToAction";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 25,
  },
}));

const Home = ({ makes, categories, medias }) => {
  const classes = useStyles();
  const { mediasMainBanner, getMediasMainBanner } = useMedia();

  useEffect(() => {
    getMediasMainBanner();
  }, []);

  return (
    <>
      <Meta title="Car One Group" description="Autos Nuevo, Seminuevos" />
      <Container maxWidth="lg" className={classes.root}>
        <MainCarousel medias={mediasMainBanner} />
        <Tabs categories={categories} />
        <CallToAction style={{ marginBottom: "2em" }} color="white" />
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

  console.log(makes)

  return {
    props: {
      makes: makes.data,
      categories: categories.data,
    },
  };
};
export default Home;
