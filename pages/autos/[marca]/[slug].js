import React from "react";
import { Container, Grid, Typography, Divider, Box } from "@mui/material";
import BannerAutos from "../../../components/autos/BannerAutos";
import Financing from "../../../components/autos/Financing";
import TabsComponent from "../../../components/TabsComponent";
import Meta from "../../../components/Meta";
import BreadcrumbComponent from "../../../components/BreadCrums";
import CarTabs from "../../../components/autos/CarTabs";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
// import SharingComponent from "../../../components/autos/SharingComponent";

import ColorsComponent from "../../../components/autos/ColorsComponent";
import VersionList from "../../../components/autos/versions/VersionList";
import { baseURL } from "../../../api/api";
import VideoComponent from "../../../components/autos/VideoComponent";
import Form from '../../../components/autos/FormComponent'
import SharingComponent from "../../../components/autos/SharingComponent";

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
    versions,
    gallery,
    description,
    banner,
    mainImage,
    features,
    video,
    colors,
    promotion,
    technicalSheet,
    meta,
  } = vehicle;


  const NameCar = (
    <Box mt={2}>
      <Typography variant="h1" sx={{fontSize: "35px", fontWeight: 600, display:"none"}}>
        Venta de Auto {vehicle.make.name.toUpperCase()}{" "}{vehicle.model.toUpperCase()} {vehicle.year}
      </Typography>
    </Box>
  )



  return (
    <>
      {vehicle && vehicle.isPublished ? (
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

          {NameCar}

          <Container maxWidth="lg">
            {banner && (
              <BannerAutos
                banner={banner}
                description={description}
                promotion={promotion}
                title={title}
              />
            )}
          </Container>
          <Container maxWidth="lg">
            <BreadcrumbComponent data={vehicle} section="autos" />

            <Grid container style={{ marginBottom: 50 }}>
              <Grid item xs={12} lg={6}>
                <Typography
                  variant="h5"
                  component="h3"
                  style={{ fontWeight: "bold", color: "#656d78" }}
                >
                  {vehicle.make.name.toUpperCase()}{" "}
                  {vehicle.model.toUpperCase()} {vehicle.year}
                </Typography>
                {vehicle.price ? (
                  <Typography
                    variant="h5"
                    component="h3"
                    style={{ marginBottom: 20, color: "#656d78" }}
                  >
                    Precio desde{" "}
                    <NumberFormat
                      style={{ fontWeight: "bold" }}
                      value={vehicle.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      suffix={" MXN"}
                    />
                  </Typography>
                ) : (
                  <Typography
                    variant="h5"
                    component="h3"
                    style={{ marginBottom: 20, color: "#656d78" }}
                  >
                    Precio proximante
                  </Typography>
                )}
                {/* Colors Component */}
                <ColorsComponent colors={colors} />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box display='flex' flexDirection='column' justifyContent='space-between' style={{height: '100%'}}>
                <SharingComponent url={url} />
                <Financing vehicle={vehicle} /> 
                {/* sharing */}
                <Form vehicle={vehicle}/>
                </Box>
              </Grid>
            </Grid>

            <Divider style={{ marginBottom: 30 }} />
          </Container>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={12}>
                <CarTabs versions={versions} model={vehicle.model} />
                {/* <VersionList versions={versions} model={vehicle.model} /> */}
              </Grid>
            </Grid>

            <Divider style={{ marginBottom: 40, marginTop: 20 }} />
          </Container>
          <Container style={{ overflow: "scroll" }} maxWidth="lg">
            <Grid container>
              <Grid item xs={12}>
                <TabsComponent
                  features={features}
                  gallery={gallery}
                  video={video}
                  technicalSheet={technicalSheet}
                />
              </Grid>
            </Grid>
          </Container>{" "}
        </>
      ) : (
        ""
      )}
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
