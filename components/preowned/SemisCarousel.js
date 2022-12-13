import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CapitalizeV2 } from "../../utils/capitalize"

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Banner = ({
  preowned,
  medias,
  autoPlay = true,
  infiniteLoop = true,
  interval = 8000,
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
      style={{ display: "flex", justifyContent: "center", padding:"20px"}}
      className="animated fadeIn"
      container
    >
      {xs === 10 && <Grid item xs={1} />}
      <Grid item xs={12}>
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
              <div style={{ width: "100%" }}>
                <Box sx={{ height: {sx:'250px',sm:'350px',md:'450px'} }} >
                  <img src={item.image} key={key} width={"auto"} height={"100%"} alt={`${CapitalizeV2(preowned.vehicle.make.name)} ${CapitalizeV2(preowned.version)} ${preowned.year}`}
                    title={`Auto ${CapitalizeV2(preowned.vehicle.make.name)} ${CapitalizeV2(preowned.version)} ${preowned.year}`}
                  />
                </Box>
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
