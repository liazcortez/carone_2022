import React from "react";
import Container from "@mui/material/Container";
import { Grid, Box, Typography, Divider } from "@mui/material";
import Meta from "../../components/Meta";

export default function AboutUs() {
  return (
    <>
      <Meta
        title="Venta de autos en México - Carone Group"
        description="Venta de autos nuevos y seminuevos en México - Carone Group"
        url="https://carone.com.mx/"
        googlebot={"index,follow"}
        robots="all"
      />
      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "10px" }} />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" sx={{ fontSize: "35px", fontWeight: 600 }}>
              El origen
            </Typography>
            <Typography>
              Car One tiene su origen en el año 2002, siendo su fundador el Lic.
              Abelardo Osuna Cobos, un hombre que con una visión de negocio dio
              inicio a una empresa que hoy en día se convirtiera en la Concesión
              más importante de la localidad y el País.
            </Typography>
            <br />
            <Typography>
              En sus inicios, el Lic. Abelardo consolidó sus ideales al
              construir desde hace más de 45 años su experiencia a través de la
              industria del Autotransporte. Siendo actualmente; Presidente de
              Consejo de Car One Group y también, Presidente de Consejo del
              Grupo Transpaís desde 1975. De igual forma, el Ing. Adrián Osuna
              Morales es Presidente del Consejo de Administración, del Grupo Car
              One.
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <Box style={{ width: "100%" }}>
              <img
                src="./static/images/PortadaCarOne.jpeg"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 10 }}>
            <center>
              <Typography
                variant="h1"
                sx={{ fontSize: "35px", fontWeight: 600 }}
              >
                Nuestra Historia
              </Typography>
            </center>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ width: "100%", display: "flex" }}>
              <img
                src="./static/images/CarOneLineaTiempo.png"
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
