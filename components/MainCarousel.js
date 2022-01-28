import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const data = [
  '/static/images/BannerC1.jpeg',
  '/static/images/BannerC12.jpeg',
  '/static/images/BannerKia.jpeg',
  '/static/images/BannerMG.jpeg',
  '/static/images/BannerMitsu.png',
  '/static/images/BannerNissan.jpeg',
  '/static/images/BannerOferta.png',
  '/static/images/BannerPromocion.jpeg',
  '/static/images/BannerSeat.jpeg',
  '/static/images/BannerSeminuevo.jpg',
  '/static/images/BannerServicio.png',
]

const Banner = ({ imageUrl }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Carousel
          autoPlay
          infiniteLoop
          interval={8000}
          transitionTime={1000}
        >
          {
            data.map(item => (
              <div>
                <img src={item} />
              </div>
            ))
          }
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Banner;
