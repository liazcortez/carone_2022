import React from "react";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@mui/styles";
import { Button, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 6 },
];

const useStyles = makeStyles((theme) => ({
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));


const CarouselComponent = () => {
    const classes = useStyles();
  
    return (
      <Grid container spacing={2} style={{padding:"15px"}}>
        <Grid item xs={12}>
        <div style={{ marginBottom: 30, marginTop: 100, width:"100%"}}>
  
            <Typography variant="h2" sx={{ marginBottom: "50px", textAlign: "center", fontSize: "28px", fontWeight: 600}}>Nuestra Historia</Typography>

            <div className="animated fadeIn App">
                <Carousel
                breakPoints={breakPoints}
                showArrows={true}
                showEmptySlots={false}
                pagination={false}
                >
                    <Card style={{width:"100%", padding:"15px"}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://automotive-api.s3.us-east-2.amazonaws.com/60353a7149ef4d0d9d02489b/4174612d-09b0-4089-9d58-60ef1450c31a/logo.png"
                            alt="si"
                        />
                        <CardContent>
                            <Typography variant="h2" style={{fontWeight:"600", fontSize:"23px", lineHeight:"52px"}}>1997</Typography>
                            <Typography variant="body2" style={{fontSize:"17px", lineHeight:"1.5"}}>Fue fundada Car One por el Sr. Manuel Antelo, quien fue capaz de detectar un factor clave en el proceso de compra-venta de usados</Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"100%", padding:"15px"}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://pimod.com/wp-content/uploads/2021/03/TRABAJO_WEB.jpg"
                            alt="si"
                        />
                        <CardContent>
                            <Typography variant="h2" style={{fontWeight:"600", fontSize:"23px", lineHeight:"52px"}}>Noviembre de 2020</Typography>
                            <Typography variant="body2" style={{fontSize:"17px", lineHeight:"1.5"}}>Car One hizo el Test Drive más grande de la historia</Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"100%", padding:"15px"}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://media.ambito.com/p/ec09560f29f78381e8a03db042c22c11/adjuntos/239/imagenes/038/440/0038440465/car-autosjpg.jpg"
                            alt="si"
                        />
                        <CardContent>
                            <Typography variant="h2" style={{fontWeight:"600", fontSize:"23px", lineHeight:"52px"}}>Enero 2021</Typography>
                            <Typography variant="body2" style={{fontSize:"17px", lineHeight:"1.5"}}>El empresario Manuel Antelo, fundador de la firma en 1997, vendió el 51% al grupo Pochat-Ksairi, con fuerte presencia en la Costa Atlántica.</Typography>
                        </CardContent>
                    </Card>
                    <Card style={{width:"100%", padding:"15px"}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://automotive-api.s3.us-east-2.amazonaws.com/60353a7149ef4d0d9d02489b/4174612d-09b0-4089-9d58-60ef1450c31a/logo.png"
                            alt="si"
                        />
                        <CardContent>
                            <Typography variant="h2" style={{fontWeight:"600", fontSize:"23px", lineHeight:"52px"}}>Junio de 2022</Typography>
                            <Typography variant="body2" style={{fontSize:"17px", lineHeight:"1.5"}}>Car One marcó historia al realizar la primer venta de un auto con criptomonedas.</Typography>
                        </CardContent>
                    </Card>
                </Carousel>
            </div>
            </div>
        </Grid>
      </Grid>
    );
  };
  
  export default CarouselComponent;