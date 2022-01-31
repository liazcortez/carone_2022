import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Banner = ({ medias }) => {
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
            medias && medias.length > 0 ?
            medias.map((item, key) => (
              <div>
                <img src={item.image} key={key}/>
              </div>
            )) :
            <div>
              <img src={'/static/images/BannerC1.jpeg'} />
            </div>
          }
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Banner;
