import React from "react";
import { Container, Grid, Typography, Divider, Box, Table, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import BannerAutos from "../../components/autos/BannerAutos";
import Meta from "../../components/Meta";
import SemisCarousel from "../../components/preowned/SemisCarousel";
import SemisForm from "../../components/preowned/SemisForm";
import NumberFormat from "react-number-format";
import { baseURL } from "../../api/api";
import { GoogleMap, LoadScript } from '@react-google-maps/api';



const Slug = ({ preowned }) => {
  const title =
    preowned.make && preowned.version && preowned.year
      ? `${preowned.make.name} ${preowned.versions} ${preowned.year}  `
      : false;

  const Capitalize = (string) => {
    if (string === undefined) return "";

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const { description, banner, mainImage, promotion, meta } = preowned;

  const NameSemi = (
    <Box mt={2}>
      <Typography variant="h1" sx={{fontSize: "35px", fontWeight: 600, display:"none"}}>
        Venta de Auto Seminuevo {Capitalize(preowned.vehicle.make.name)} {Capitalize(preowned.version)} {preowned.year}
      </Typography>
    </Box>
  )
    console.log(preowned);
    const containerStyle = {
      width: '100%',
      height: '400px'
    };
    
    const center = {
      lat: preowned.store.location.coordinates[1],
      lng: preowned.store.location.coordinates[0]
    };
  return (
    <>
      {preowned && preowned.isPublished ? (
        <>
          <Meta
            title={
              meta && meta.title
                ? meta.title
                : `${Capitalize(preowned.vehicle.make.name)} ${Capitalize(
                    preowned.version
                  )} ${preowned.year} - Carone Group`
            }
            description={
              meta && meta.description
                ? meta.description
                : Capitalize(preowned.fullDescription)
            }
            image={meta && meta.image ? meta.image : mainImage}
          />
          <Container maxWidth="lg">
          {NameSemi}
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
            <Grid
              container
              style={{ marginBottom: 50, paddingTop: "1rem" }}
              spacing={3}
            >
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Box
                    style={{
                      paddingTop: "1rem",
                      paddingLeft: "10px",
                      display: "block",
                      position: "relative",
                      top: "18px",
                    }}
                  >
                    <Typography
                      variant="h2"
                      fontSize={"30px"}
                      style={{ fontWeight: "bold", color: "#212121", display: 'flex', alignItems: 'center', padding: 0 }}
                    >
                      {preowned.version
                        .toLowerCase()
                        .includes(preowned.vehicle.make.name.toLowerCase())
                        ? `${preowned.version.toUpperCase()} ${preowned.year}`
                        : `${preowned.vehicle.make.name.toUpperCase()} ${preowned.vehicle.model.toUpperCase()} ${preowned.version.toUpperCase()} ${
                            preowned.year
                          }`}

                       
                    </Typography>

                    <Typography
                      style={{ color: "#212121", textTransform: "Capitalize", fontSize:"20px"}}
                    >
                      {preowned && preowned.km && preowned.km !== "" ? (
                        <NumberFormat
                          value={preowned.km}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={" Kms |"}
                        />
                      ) : (
                        " "
                      )}

                      {preowned &&
                      preowned.transmission &&
                      preowned.transmission !== ""
                        ? " " + preowned.transmission + " " + "|"
                        : "----"}

                      {preowned &&
                      preowned.make.name &&
                      preowned.make.name !== ""
                        ? " " +
                          preowned.store.make.name +
                          " " +
                          preowned.store.name
                        : ""}
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  xs={5}
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    paddingLeft: "18px",
                  }}
                >
                  <Typography
                    style={{
                      fontSize: "35px",
                      color: "#212121",
                      fontWeight: 600,
                      paddingRight: "5px",
                    }}
                  >
                    Precio:
                  </Typography>

                  <Typography
                    style={{
                      fontSize: "35px",
                      color: "#212121",
                      fontWeight: 600,
                    }}
                  >
                    {preowned && preowned.km && preowned.km !== "" ? (
                      <NumberFormat
                        value={preowned.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                        suffix={" MXN"}
                      />
                    ) : (
                      "Proximamente"
                    )}
                  </Typography>
                </Grid>
              </Grid>

              <Grid style={{ minHeight: "10rem" }} item xs={12} md={7}>
                {" "}
                {/*Aqui es xs={8}*/}
                <Grid
                  container
                  style={{ maxWidth: "90vw", paddingTop: "10px" }}
                >
                  <SemisCarousel
                  preowned={preowned}
                    medias={[
                      {image: preowned.meta.image},{ image: preowned.mainImage, key: 0 },
                      ...preowned.gallery,
                    ]}
                  />
                </Grid>
              </Grid>

              <Grid style={{ minHeight: "10rem" }} item xs={12} md={5}>
                {" "}
                {/*Aqui es xs={4}*/}
                <SemisForm preowned={preowned} />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  style={{
                    fontSize:"40px",
                    fontWeight: "bold",
                    color: "#212121",
                    paddingTop: "2rem",
                    paddingBlockEnd: "1rem",
                    justifyContent:"center",
                    textAlign:"center"
                  }}
                >
                  CARACTERÍSTICAS {preowned.vehicle.make.name.toUpperCase()}{" "}
                  {preowned.version.toUpperCase()} {preowned.year}
                </Typography>

                <Divider />

                <Grid container spacing={3} style={{ paddingTop: "1rem" }}>
                  {/*<Grid item xs={6} sm={3}>
                    <Box>
                      <Typography style={{ fontWeight: 600 }}>Marca</Typography>

                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                        {preowned &&
                        preowned.vehicle.make &&
                        preowned.vehicle.make.name &&
                        preowned.vehicle.make.name !== ""
                          ? Capitalize(preowned.vehicle.make.name)
                          : "----"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography style={{ fontWeight: 600 }}>
                        Kilometraje
                      </Typography>

                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                        {preowned && preowned.km && preowned.km !== "" ? (
                          <NumberFormat
                            value={preowned.km}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={" Kms"}
                          />
                        ) : (
                          "----"
                        )}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography style={{ fontWeight: 600 }}>
                        Modelo
                      </Typography>

                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                        {preowned && preowned.version && preowned.version !== ""
                          ? Capitalize(preowned.version)
                          : "----"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography style={{ fontWeight: 600 }}>
                        Precio
                      </Typography>

                      <Typography>
                        {preowned && preowned.km && preowned.km !== "" ? (
                          <NumberFormat
                            value={preowned.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            suffix={" MXN"}
                          />
                        ) : (
                          "----"
                        )}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography style={{ fontWeight: 600 }}>Año</Typography>

                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                        {preowned && preowned.year && preowned.year !== ""
                          ? Capitalize(preowned.year)
                          : "----"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography style={{ fontWeight: 600 }}>
                        Transmisión
                      </Typography>

                      <Typography>
                        {preowned &&
                        preowned.transmission &&
                        preowned.transmission !== ""
                          ? Capitalize(preowned.transmission)
                          : "----"}
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={6} sm={3}>
                    <Box>
                      <Typography style={{ fontWeight: 600 }}>
                        Agencia
                      </Typography>
                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                        {preowned &&
                        preowned.store.make.name + " " + preowned.store.name &&
                        preowned.store.make.name + " " + preowned.store.name !==
                          ""
                          ? Capitalize(
                              preowned.store.make.name +
                                " " +
                                preowned.store.name
                            )
                          : "----"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography style={{ fontWeight: 600 }}>Tipo</Typography>

                      <Typography>
                        {Capitalize(
                          preowned.modelType && preowned.modelType !== ""
                            ? preowned.modelType
                            : "----"
                        )}
                      </Typography>
                    </Box>
                    
                        </Grid>*/}
                  <Grid item xs={12}>
                      <TableContainer style={{width:"100%", padding:"15px"}}>
                          <Table style={{width:"100%"}}>
                              <TableBody>
                                  <TableRow>
                                    <TableCell style={{textAlign:"center", justifyContent:"center"}}>
                                      <Typography style={{ fontWeight: 600 }}>Marca</Typography>
                                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                                        {preowned &&
                                        preowned.vehicle.make &&
                                        preowned.vehicle.make.name &&
                                        preowned.vehicle.make.name !== ""
                                          ? Capitalize(preowned.vehicle.make.name)
                                          : "----"}
                                      </Typography>
                                    </TableCell>
                                    <TableCell style={{textAlign:"center", justifyContent:"center"}}>
                                      <Typography style={{ fontWeight: 600 }}>
                                        Modelo
                                      </Typography>

                                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                                        {preowned && preowned.version && preowned.version !== ""
                                          ? Capitalize(preowned.version)
                                          : "----"}
                                      </Typography>
                                    </TableCell>
                                    <TableCell>
                                      <Typography style={{ fontWeight: 600 }}>Año</Typography>
                                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                                        {preowned && preowned.year && preowned.year !== ""
                                          ? Capitalize(preowned.year)
                                          : "----"}
                                      </Typography>
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell style={{textAlign:"center", justifyContent:"center"}}>
                                      <Typography style={{ fontWeight: 600 }}>Tipo</Typography>
                                      <Typography>
                                        {Capitalize(
                                          preowned.modelType && preowned.modelType !== ""
                                            ? preowned.modelType
                                            : "----"
                                        )}
                                      </Typography>
                                    </TableCell>
                                    <TableCell style={{textAlign:"center", justifyContent:"center"}}>
                                      <Typography style={{ fontWeight: 600 }}>
                                        Agencia
                                      </Typography>
                                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                                        {preowned &&
                                        preowned.store.make.name + " " + preowned.store.name &&
                                        preowned.store.make.name + " " + preowned.store.name !==
                                          ""
                                          ? Capitalize(
                                              preowned.store.make.name +
                                                " " +
                                                preowned.store.name
                                            )
                                          : "----"}
                                      </Typography>
                                    </TableCell>
                                    <TableCell>
                                      <Typography style={{ fontWeight: 600 }}>
                                        Precio
                                      </Typography>

                                      <Typography>
                                        {preowned && preowned.km && preowned.km !== "" ? (
                                          <NumberFormat
                                            value={preowned.price}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={"$"}
                                            suffix={" MXN"}
                                          />
                                        ) : (
                                          "----"
                                        )}
                                      </Typography>
                                    </TableCell>
                                  </TableRow>
                                  <TableRow>
                                    <TableCell style={{textAlign:"center", justifyContent:"center"}}>
                                      <Typography style={{ fontWeight: 600 }}>
                                        Kilometraje
                                      </Typography>

                                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                                        {preowned && preowned.km && preowned.km !== "" ? (
                                          <NumberFormat
                                            value={preowned.km}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            suffix={" Kms"}
                                          />
                                        ) : (
                                          "----"
                                        )}
                                      </Typography>
                                    </TableCell>
                                    <TableCell style={{textAlign:"center", justifyContent:"center"}}>
                                      <Typography style={{ fontWeight: 600 }}>
                                        Transmisión
                                      </Typography>

                                      <Typography>
                                        {preowned &&
                                        preowned.transmission &&
                                        preowned.transmission !== ""
                                          ? Capitalize(preowned.transmission)
                                          : "----"}
                                      </Typography>
                                    </TableCell>
                                    <TableCell>
                                      <Typography style={{ fontWeight: 600 }}>
                                        Ubicacion de la Agencia
                                      </Typography>
                                      <Typography style={{ paddingBlockEnd: "2rem" }}>
                                        {preowned &&
                                        preowned.store && preowned.store.address
                                          ? Capitalize(preowned.store.address)
                                          : "----"}
                                      </Typography>
                                    </TableCell>
                                  </TableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
                      <Grid item xs={12}>
                        <LoadScript
                          
                        >
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                          >
                          </GoogleMap>
                        </LoadScript>
                      </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/preowneds?slug=${ctx.params.slug}`
  const res = await fetch(`${baseURL}/preowneds?slug=${ctx.params.slug}`);
  const preowned = await res.json();

  let currentVehicle =
    typeof preowned.data[0] != "undefined" && preowned.data.length > 0
      ? preowned.data[0]
      : { isPublished: false };

  return {
    props: {
      preowned: currentVehicle,
    },
  };
};

export default Slug;
