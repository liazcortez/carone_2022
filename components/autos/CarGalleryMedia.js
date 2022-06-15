import React from "react";
import { Container, Grid } from "@mui/material";

const CarGalleryMedia = ({ gallery }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {gallery && gallery.map((i) => (
          <Grid key={i._id} item xs={12} lg={4}>
            <img
              src={i.image}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarGalleryMedia;
