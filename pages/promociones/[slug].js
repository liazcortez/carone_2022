import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Meta from "../../components/Meta";
import Form from "../../components/autos/PromotionsForm"
import { useRouter } from "next/router";
import { baseURL } from "../../api/api";
import Carousel from "../../components/vehicles/Carousel"

const Slug = ({ vehicle }) => {
  const router = useRouter();

  const url = `https://carone.com.mx${router.asPath}`;
  const title =
    vehicle.make && vehicle.model && vehicle.year
      ? `${vehicle.make.name} ${vehicle.model} ${vehicle.year}`
      : false;

  const Capitalize = (string) => {
    if (string === undefined) return "";

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const {
    promotions,
    mainImage,
    meta,
  } = vehicle;



  return (
    <>
      {
      vehicle && vehicle.isPublished && vehicle.promotions && vehicle.promotions.length > 0 &&
        <>
          <Meta
            title={
              meta && meta.title
                ? meta.title
                : `${Capitalize(vehicle.make.name)} ${Capitalize(
                    vehicle.model
                  )} ${vehicle.year} - Carone Group`
            }
            description={
              meta && meta.description
                ? meta.description
                : Capitalize(vehicle.fullDescription)
            }
            url={url}
            image={meta && meta.image ? meta.image : mainImage}
          />

          
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Carousel vehicle={vehicle} medias={promotions || []}/>
              </Grid>

              <Grid item xs={12} md={6}>
                <Form vehicle={vehicle} />
              </Grid>
            </Grid>
          </Container>
        </>
      }
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/vehicles?slug=${ctx.params.slug}`
  const res = await fetch(`${baseURL}/vehicles?slug=${ctx.params.slug}`);

  const vehicle = await res.json();

  let currentVehicle =
    typeof vehicle.data[0] != "undefined" && vehicle.data.length > 0
      ? vehicle.data[0]
      : { isPublished: false };

  return {
    props: {
      vehicle: currentVehicle,
    },
  };
};

export default Slug;
