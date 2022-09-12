import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Divider,
  Box,
  Card,
  TextField,
  CardMedia,
  CardHeader,
} from "@mui/material";

import api, { baseURL } from "../../../../api/api";
import Info from "./Info";
import DesignInfo from "./DesignInfo";
import Calendar from "./Calendar";

const Detail = ({ campaignProp }) => {
  const [campaign, setCampaign] = useState(false);
  useEffect(() => {
    console.log(campaignProp?.design);
    setCampaign(campaignProp);
  }, [campaignProp]);

  const tableKeysCampaign = [
    { name: "title", label: "Titulo" },
    { name: "store.make.name", label: "Marca" },
    { name: "store.name", label: "Agencia" },
    { name: "budget", label: "Presupuesto", type: "money" },
    { name: "objetive", label: "Objetivo" },
    { name: "carType", label: "Tipo de Vehiculo" },
    { name: "startDate", label: "Fecha de Inicio", type: "date" },
    { name: "endDate", label: "Fecha Final", type: "date" },
  ];

  const tableKeysDesign = [
    { name: "design.name", label: "Nombre" },
    { name: "design.designType", label: "Tipo de Diseño" },
    { name: "design.mediaType", label: "Tipo de Multimedia" },
    { name: "design.status", label: "Status" },
    { name: "design.description", label: "Descripcion" },
  ];

  const tableKeysSegmentation = [
    { name: "segmentation.name", label: "Nombre" },
    { name: "segmentation.interests", label: "intereses" },
    { name: "segmentation.address", label: "Ubicacion" },
    { name: "segmentation.place", label: "Lugar" },
    { name: "segmentation.sexo", label: "Genero" },
    { name: "segmentation.ageMin", label: "Edad Minima" },
    { name: "segmentation.ageMax", label: "Edad Maxima" },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container mt={5} spacing={2}>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Info
                {...{
                  campaign,
                  tableKeys: tableKeysCampaign,
                  title: campaign?.title,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Info
                {...{
                  campaign,
                  tableKeys: tableKeysSegmentation,
                  title: "Informacion de la Segmentacion",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={2}>
            {campaign?.design?.mediaType === "image" && campaign?.design?.image !=='' && (
              <Grid item xs={12}>
                {/* poner imagen */}
                <Card>
                  <CardHeader
                    title={'Diseño'}
                    sx={{
                      color: "rgb(103, 119, 136)",
                      textTransform: "uppercase",
                      backgroundColor: "rgb(247, 250, 255)",
                    }}
                  />
                  <CardMedia
                    component="img"
                    height="200"
                    image={campaign?.design.image}
                    alt="design"
                  />
                </Card>
              </Grid>
            )}
            <Grid item xs={12}>
              <Info
                {...{
                  campaign,
                  tableKeys: tableKeysDesign,
                  title: "Informacion del Diseño",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Detail;

export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/vehicles?slug=${ctx.params.slug}`
  const res = await fetch(`${baseURL}/campaigns/${ctx.params.id}`);

  const campaign = await res.json();

  let campaignProp =
    typeof campaign.data != "undefined" ? campaign.data : false;

  return {
    props: {
      campaignProp,
    },
  };
};
