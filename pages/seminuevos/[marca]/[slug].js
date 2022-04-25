import React from "react";
import { Container, Grid, Typography, Divider, Box } from "@material-ui/core";
import BannerAutos from "../../../components/autos/BannerAutos";
import Financing from "../../../components/autos/Financing";
import TabsComponent from "../../../components/TabsComponent";
import Meta from "../../../components/Meta";
import BreadcrumbComponent from "../../../components/BreadCrums";
import SemisCarousel from "../../../components/preowned/SemisCarousel"
import SemisForm from "../../../components/preowned/SemisForm";
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
      <Grid container style={{ marginBottom: 50 }}>
        <Grid item xs={12}>
        <Typography
            variant="h5"
            component="h3"
            style={{ fontWeight: "bold", color: "#656d78" }}
          >
            KIA RIO SEDAN LX 2020
          </Typography>

        <Box style={{display: "flex", justifyContent: "stretch", margin: "0px", paddingBlockEnd: "1rem"}}>

          <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78" }}
            >
                39,408 kms |
            </Typography>
            
            <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78", marginLeft: "1rem"}}
            >
            Automatica |
            </Typography>

            <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78", marginLeft: "1rem"}}
            >
            KIA Gonzalitos
            </Typography>

         </Box>
        </Grid>
        
        <Grid style={{minHeight:'10rem'}} item xs={8}>
            <Grid container spacing={3}>
                <SemisCarousel/>
            </Grid>
        </Grid>

        <Grid style={{minHeight:'10rem'}}   item xs={4}>
            <SemisForm />
        </Grid>
        
        
        <Grid item xs={12}>
            <Typography
             variant="h5"
             component="h3"
              style={{ fontWeight: "bold", color: "#656d78", paddingTop: "2rem", paddingBlockEnd: "1rem"}}
             >
                CARACTERISTICAS KIA RIO SEDAN LX 2020
             </Typography>

            <Divider/>

          <Grid container spacing={3} style={{paddingTop: "1rem"}}>
                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Marca
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Kilometraje
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Modelo
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Precio
                    </Typography> 
                </Grid>

                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Año
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Tansmisión
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Agencia
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Tipo
                    </Typography>
                </Grid>
          </Grid>
        </Grid>

      </Grid>
      </Container>
    
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
