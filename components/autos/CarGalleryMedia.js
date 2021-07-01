import React from "react";
import { Container, Grid } from "@material-ui/core"
import Image from 'next/image'

const CarGalleryMedia = ({ gallery }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {gallery.map((i) => (
          <Grid key={i._id} item xs={4}>
            <Image
              src={i.image}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: 10,
              }}
              alt="Picture of the author"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CarGalleryMedia;
