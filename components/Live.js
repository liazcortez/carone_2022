import React from "react";
import {
  Container,
  Box,
  Card,
  CardActionArea,
  CardMedia,

  Link,
} from "@material-ui/core";

const Live = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: 20 }}>
      <h1 style={{ marginBottom:0, textAlign: "center" }}>Ahora en vivo</h1>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        m={1}
        p={1}
        align="center"
      >
	       <Link  href={`https://www.youtube.com/watch?v=Wl8n_g2jkuw`} target={'_blank'}>
        <Card elevation={0} style={{ maxWidth: 100 }} className="">
          <CardActionArea>
            <CardMedia
              style={{ height: 140, backgroundSize: "contain" }}
              className=""
              image="static/logoLive.png"
              title="Live"
            />
          </CardActionArea>
        </Card>
	</Link>
      </Box>
    </Container>
  );
};

export default Live;
