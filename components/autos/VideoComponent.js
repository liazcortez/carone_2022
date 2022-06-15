import { Container, Grid } from "@mui/material";
import React from "react";

const VideoComponent = ({ video }) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          <div className="videoWrapper">
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${video}`}
              title="vehicle-video"
            >
              {" "}
            </iframe>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VideoComponent;
