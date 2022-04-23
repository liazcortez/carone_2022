import React from "react";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import BannerAutos from "../../../components/autos/BannerAutos";
import Financing from "../../../components/autos/Financing";
import TabsComponent from "../../../components/TabsComponent";
import Meta from "../../../components/Meta";
import BreadcrumbComponent from "../../../components/BreadCrums";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
import { baseURL } from "../../../api/api";

const Slug = ({ preowned }) => {
  const router = useRouter();

  const url = `https://carone2021.herokuapp.com${router.asPath}`;
  const title = (preowned.make && preowned.version && preowned.year)?`${preowned.make.name} ${preowned.versions} ${preowned.year}`:false;

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
    isPublished
  } = preowned;
  return (
    <>
      {(preowned && preowned.isPublished)?
      <>
      <Meta
      title={`${Capitalize(preowned.make.name)} ${Capitalize(preowned.version)} ${
        preowned.year
      } - Carone Group`}
      description={Capitalize(preowned.fullDescription)}
      url={url}
      image={mainImage}
    />
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
      <BreadcrumbComponent data={preowned} section="autos" />

      <Grid container style={{ marginBottom: 50 }}>
        <Grid item xs={12} lg={12}>
          <Typography
            variant="h5"
            component="h3"
            style={{ fontWeight: "bold", color: "#656d78" }}
          >
            {preowned.make.name.toUpperCase()} {preowned.version.toUpperCase()}
          </Typography>
          {preowned.price ? (
            <Typography
              variant="h5"
              component="h3"
              style={{ marginBottom: 20, color: "#656d78" }}
            >
              Precio desde{" "}
              <NumberFormat
                style={{ fontWeight: "bold" }}
                value={preowned.price}
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
 
        </Grid>
        <Grid item xs={12} lg={5}>
          {/* <Financing preowned={preowned} /> */}
          {/* sharing */}
          {/* <SharingComponent url={url} /> */}
        </Grid>
      </Grid>

      <Divider style={{ marginBottom: 30 }} />
    </Container>

    <Container maxWidth="lg">
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
      :
      ''}
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/preowneds?slug=${ctx.params.slug}`
  const res = await fetch(`${baseURL}/preowneds?slug=${ctx.params.slug}`);
  const preowned = await res.json();

  let currentVehicle =( (typeof preowned.data[0] != 'undefined') && preowned.data.length > 0) ? preowned.data[0] : { isPublished: false };

  return {
    props: {
      preowned:currentVehicle
    },
  };
};

export default Slug;
