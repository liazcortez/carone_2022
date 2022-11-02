import React from 'react'
import {
    Box,
    Grid,
    Typography,
  } from "@mui/material";

export default function Mision() {
  return (
    <Grid container spacing={2} style={{padding:"15px", marginTop:"11%"}}>
        <Grid item xs={12} md={6} style={{padding:"15px"}} sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Box style={{width:"100%", padding:"2px"}}>
                <img src="https://media.istockphoto.com/photos/wooden-signpost-values-mission-vision-picture-id520289888?k=20&m=520289888&s=170667a&w=0&h=quZftPKEaplIH0voarTAXsz-qq15IfIPp_50M7dyZcg=" style={{width:"100%", borderRadius:"6%"}}/>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} style={{padding:"15px"}}>
            <Box style={{textAlign:"center"}}><Typography variant="h2"style={{color:"#475066", fontWeight:"600", fontSize:"36px", lineHeight:"52px"}}>Nuestra Mision</Typography></Box>
            <Typography variant="body2" style={{fontFamily:"'LL Circular', sans-serif", color:"#5b627d", fontSize:"17px", lineHeight:"1.5"}}>
            Posicionar a Car One en el mercado automotriz mediante el ofrecimiento de productos de calidad, precio, garantía, oportunidad y servicio a nuestros clientes (público, compañías aseguradoras, talleres y agencias automotrices).
            Mejores condiciones de trabajo a sus colaboradores, así como generar rendimientos equitativos para los socios que depositan su confianza en nuestra empresa.
            </Typography>
        </Grid>
    </Grid>
  )
}
