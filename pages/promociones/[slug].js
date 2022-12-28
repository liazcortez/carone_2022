import React, { useState, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import Meta from "../../components/Meta";
import Form from "../../components/autos/PromotionsForm";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { baseURL } from "../../api/api";
import Carousel from "../../components/vehicles/Carousel";

const useStyles = makeStyles({
  container: {
    position: "absolute",
    top: "26%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    width: 410,
    maxHeight: "50%",
    maxWidth: "50%",
  },
  formAndCarrouselContent: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
  },
});

const Slug = ({ promotion }) => {
  const router = useRouter();
  const classes = useStyles();
  const [currPromotion, setCurrPromotion] = useState("");

  const url = `https://carone.com.mx${router.asPath}`;

  const Capitalize = (string) => {
    if (string === undefined) return "";

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (promotion) setCurrPromotion(promotion);
  }, [promotion]);

  if (!currPromotion._id) return null;
  if (
    currPromotion &&
    currPromotion.vehicle &&
    !currPromotion.vehicle.isPublished
  )
    return null;

  return (
    <>
      <Container className={classes.container} maxWidth="xs">
        <Box ty={2}>
          <Carousel
            className={classes.formAndCarrouselContent}
            vehicle={promotion.vehicle}
            medias={[{ image: promotion.image }]}
          />
          <Form vehicle={promotion.vehicle} promotion={promotion} />
        </Box>
      </Container>
    </>
  );
};

Slug.layout = "PromotionsLayout";

export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/promotions?slug${ctx.params.slug}`
  const res = await fetch(`${baseURL}/promotions/slug/${ctx.params.slug}`);
  const responsePromotion = await res.json();

  return {
    props: {
      promotion: responsePromotion.data,
    },
  };
};

export default Slug;
