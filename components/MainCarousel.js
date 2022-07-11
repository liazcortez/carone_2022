import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Banner = ({
  medias,
  autoPlay = true,
  infiniteLoop = true,
  interval = 5000,
  transitionTime = 1000,
  showThumbs = false,
  showArrows = true,
  showStatus = true,
  showIndicators = true,
  xs = 12,
}) => {
  const classes = useStyles();

  return (
    <Grid
      style={{ display: "flex", justifyContent: "center" }}
      className="animated fadeIn"
      container
    >
      {xs === 10 && <Grid item xs={1} />}
      <Grid style={{ width: "90vw" }} item xs={xs}>
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
          {medias && medias.length > 0 ? (
            medias.map((item, key) => (
              <div>
                <img src={item.image} key={key} alt={"Banner home"} width={"auto"} height={"auto"} title={"Banner home"} />
              </div>
            ))
          ) : (
            <div>
              <img title={"Banner home"} alt={"Banner home"} src={"/static/images/BannerC1.jpeg"} />
            </div>
          )}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Banner;
