import React from 'react';
import { makeStyles } from "@mui/styles";
import {
    Box,
    Button,
    Grid,
    Divider,
    Typography,
  } from "@mui/material";
import Mision from "./mision";
import Historia from "./historia";
import Timeline from "./timeline";

export default function Nos() {
  return (
    <Grid container spacing={2} width="83%" style={{margin:"auto"}}>
        <Grid item xs={12} md={6}>
            <Box style={{width:"100%", alignItems:"center"}}>
                <Typography variant="h1" style={{ lineHeight:"22px", letterSpacing:"5px", textTransform:"uppercase", fontWeight:"400", fontSize:"14px"}}>Car One</Typography>
                <Typography variant="h2" style={{fontSize:"46px", fontWeight: "bold"}}>Ayudando a que tengas una mejor experiencia automotriz desde 1997</Typography>
                <Typography variant='body2' style={{ fontSize:"17px"}}>
                  CAR ONE tiene todos los coches, pick-ups y SUVs para la región. Estamos aquí para responder a todas sus preguntas, y queremos compartir nuestros conocimientos y nuestra experiencia para ayudarle a escoger el coche que corresponda a sus necesidades. Si usted busca un auto nuevo o usado, puede mandarnos un correo a contaccenter@carone.com.mx
                </Typography>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Box style={{width:"100%", justifyContent:"center"}}>
                <img src="https://media.ambito.com/p/ec09560f29f78381e8a03db042c22c11/adjuntos/239/imagenes/038/440/0038440465/car-autosjpg.jpg" alt="Logo carone" width={"100%"}/>
            </Box>
        </Grid>
        <Mision/>
        <Historia/>
        <Timeline/>
        
    </Grid>
  )
}
