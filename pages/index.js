import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
// import Divider from "@material-ui/core/Divider";
import Tabs from "../components/Tabs";

import Banner from "../components/Banner";
import MainCarousel from "../components/MainCarousel";
import Carousel from "../components/Carousel";
import CarCardList from "../components/CarCardList";
import Meta from "../components/Meta";

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

const Home = ({ makes, categories }) => {
  const classes = useStyles();

  return (
    <>
      <Meta title="Car One Group" description="Autos Nuevo, Seminuevos" />
      <Container maxWidth="lg">
        <MainCarousel imageUrl={imageUrl}/>
        {/* <Carousel /> */}
        <Tabs categories={categories} />
        <CarCardList title="BUSCAR POR MARCA" data={makes} />
      </Container>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`https://apicarone.com/api/v1/makes`);
  const makes = await res.json();

  const resCategories = await fetch(`https://apicarone.com/api/v1/categories`);
  const categories = await resCategories.json();

  return {
    props: {
      makes: makes.data,
      categories: categories.data,
    },
  };
};
export default Home;
