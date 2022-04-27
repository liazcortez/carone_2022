import React , { useEffect } from "react";
import { Container, Grid, Typography, Divider, Box } from "@material-ui/core";
import BannerAutos from "../../components/autos/BannerAutos";
import Financing from "../../components/autos/Financing";
import TabsComponent from "../../components/TabsComponent";
import Meta from "../../components/Meta";
import BreadcrumbComponent from "../../components/BreadCrums";
import SemisCarousel from "../../components/preowned/SemisCarousel"
import SemisForm from "../../components/preowned/SemisForm";
import NumberFormat from "react-number-format";
import { useRouter } from "next/router";
import { baseURL } from "../../api/api";


const Slug = ({ preowned }) => {
  const router = useRouter();

  const title = (preowned.make && preowned.version && preowned.year)?`${preowned.make.name} ${preowned.versions} ${preowned.year}  `:false;

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
      <Grid container style={{ marginBottom: 50, paddingTop: "1rem" }} spacing={3}>
        <Grid container>
        
        <Grid item xs={7}>

        <Box style={{ paddingTop: "1rem", paddingLeft: "10px", display: "block"}}>

          <Typography
            variant="h5"
            component="h3"
            style={{ fontWeight: "bold", color: "#656d78" }}
          >
            {
              preowned.version.toLowerCase().includes(preowned.make.name.toLowerCase()) ? 
              `${preowned.version.toUpperCase()} ${preowned.year}`
              : 
              `${preowned.make.name.toUpperCase()} ${preowned.version.toUpperCase()} ${preowned.year}`
            }
          </Typography>

          <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78" }}
            >
              <NumberFormat
                value={preowned.km}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" Kms"}
              /> 
              {' '}| {Capitalize(preowned.transmision)} | {Capitalize(preowned.store.make.name + ' ' + preowned.store.name)}
            </Typography>
          
        </Box>

        </Grid>
        
        
        <Grid item xs={5} style={{display: "flex", paddingTop: "3rem", paddingLeft: "18px"}}>
        <Typography style={{fontSize: "35px", color:"#555", fontWeight: 600, paddingRight: "5px"}}>
          Precio: 
        </Typography>

        <Typography style={{fontSize: "35px", color:"#555", fontWeight: 600}}>

        { preowned && preowned.km && preowned.km !== "" ? <NumberFormat
               value={preowned.price}
               displayType={"text"}
               thousandSeparator={true}
                prefix={"$"}
                suffix={" MXN"}
              /> : "Proximamente" }
                    
            </Typography>
        </Grid>

        {/*Aqui termina*/}
        </Grid>
        
        <Grid style={{minHeight:'10rem'}} item xs={7}> {/*Aqui es xs={8}*/}

        
            
         

            <Grid container style={{paddingTop: "10px"}}>
               <SemisCarousel medias={[{image:preowned.mainImage,key:0}, ...preowned.gallery]}/>
            </Grid>
        </Grid>

        <Grid style={{minHeight:'10rem'}}   item xs={5}> {/*Aqui es xs={4}*/}
            <SemisForm preowned={preowned}/>
        </Grid>
        
        
        <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h3"
              style={{ fontWeight: "bold", color: "#656d78", paddingTop: "2rem", paddingBlockEnd: "1rem"}}
             >
                CARACTERÍSTICAS {preowned.make.name.toUpperCase()} {preowned.version.toUpperCase()} {preowned.year}
             </Typography>

            <Divider/>

          <Grid container spacing={3} style={{paddingTop: "1rem"}}>
                <Grid item xs={3}>
                  <Box>
                    <Typography style={{ fontWeight: 600}}>
                        Marca
                    </Typography>

                    <Typography style={{paddingBlockEnd: "2rem"}}>
                    
                    { preowned && preowned.make.name && preowned.make.name !== "" ? Capitalize(preowned.make.name) : "----"  }

                    </Typography>
                  </Box>

                  <Box>
                    <Typography style={{fontWeight: 600}}>
                      Kilometraje
                    </Typography>

                    <Typography style={{paddingBlockEnd: "2rem"}}>
                     
                    { preowned && preowned.km && preowned.km !== "" ? <NumberFormat
                        value={preowned.km}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={" Kms"}
                      />: "----" }
                     
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                    
                    <Box>
                      <Typography style={{fontWeight: 600}}>
                          Modelo
                      </Typography>

                      <Typography style={{paddingBlockEnd: "2rem"}}>
                        
                      { preowned && preowned.version && preowned.version !== "" ? Capitalize(preowned.version) : "----"  }
                        
                      </Typography>

                    </Box>
              
                    <Box>
                    <Typography style={{fontWeight: 600}}>
                        Precio
                    </Typography> 

                    <Typography>
                    
                    { preowned && preowned.km && preowned.km !== "" ? <NumberFormat
                      value={preowned.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      suffix={" MXN"}
                    /> : "----" }
                     
                    </Typography>
                    </Box>

                </Grid>

                <Grid item xs={3}>
                  <Box>
                    <Typography style={{fontWeight: 600}}>
                        Año
                    </Typography>

                    <Typography style={{paddingBlockEnd: "2rem"}}>
                    { preowned && preowned.year && preowned.year !== "" ? Capitalize(preowned.year) : "----"  }
                    </Typography>
                  
                  </Box>
                  
                  <Box>
                    <Typography style={{fontWeight: 600}}>
                        Transmisión
                    </Typography>

                    <Typography>  
                    { preowned && preowned.transmision && preowned.transmision !== "" ? Capitalize(preowned.transmision) : "----"  }
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box>
                      <Typography style={{fontWeight: 600}}>
                        Agencia
                      </Typography>
                      <Typography style={{paddingBlockEnd: "2rem"}}>

                      { preowned && preowned.store.make.name + ' ' + preowned.store.name && preowned.store.make.name + ' ' + preowned.store.name !== "" ? Capitalize(preowned.store.make.name + ' ' + preowned.store.name) : "----"  }                      
                      </Typography>
                    </Box>

                  <Box>
                    <Typography style={{fontWeight: 600}}>
                        Tipo
                    </Typography>

                    <Typography>
                       {Capitalize(preowned.vehicle.modelType)}
                    </Typography>

                  </Box>
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
