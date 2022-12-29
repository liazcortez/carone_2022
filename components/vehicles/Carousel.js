import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CapitalizeV2 } from "../../utils/capitalize";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Banner = ({
  vehicle,
  medias,
  autoPlay = true,
  infiniteLoop = true,
  interval = 8000,
  transitionTime = 1000,
  showThumbs = false,
  showArrows = true,
  showStatus = false,
  showIndicators = false,
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
          {medias && medias.length > 0 ? (
            medias.map((item, key) => (
              <div
                style={{ width: "100%", padding: "0px", margin: "0px" }}
                key={key}
              >
                <img
                  src={item.image}
                  key={key}
                  width={"100%"}
                  alt={`${CapitalizeV2(vehicle.make.name)} ${vehicle.year}`}
                />
              </div>
            ))
          ) : (
            <div>
              <img width={"auto"} height={"auto"} src="no img" />
            </div>
          )}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Banner;
