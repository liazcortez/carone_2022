import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
  root: {}
}));

const Banner = ({ 
  medias, 
  autoPlay = true, 
  infiniteLoop = true, 
  interval = 8000, 
  transitionTime = 1000, 
  showThumbs = true, 
  showArrows = true,
  showStatus = true,
  showIndicators = true,
  xs=12
}) => {
  const classes = useStyles();

  return (
    <Grid style={{display:'flex',justifyContent:'center'}} className="animated fadeIn" container>
      {
        xs === 10 &&
        <Grid item xs={1}/>
      }
      <Grid item xs={xs}>
        <Carousel
          autoPlay={autoPlay}
          infiniteLoop={infiniteLoop}
          interval={interval}
          transitionTime={transitionTime}
          showThumbs={showThumbs}
          showArrows={showArrows}
          showStatus={showStatus}
          showIndicators={showIndicators}
        >
          {
            medias && medias.length > 0 ?
            medias.map((item, key) => (
              <div>
                <img src={item.image} key={key}/>
              </div>
            )) :
            <div>
                
              <img src="https://caroneseminuevos.com/wp-content/uploads/2022/04/IMG_20220409_102637.jpg" />

            </div>
          }
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Banner;
