import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    marginBottom: 30,
  },
}));

const imageUrl =
  "https://carone.com.mx/wp-content/uploads/2021/02/carone-banner3.jpg";

const BannerAut = ({ banner, description, promotion, title }) => {
  return (
    <Grid container style={{ marginBottom: 30 }}>
      <Grid item xs={12}>
        <Paper
          style={{
            width: "100%",
            height: 450,
            backgroundImage: `url(${banner ? banner : imageUrl})`,
          }}
        >
          <Container maxWidth="lg" style={{ marginTop: 20 }}>
            <Grid container spacing={3}>
              <Grid item xs={6} style={{ padding: "3em" }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingTop: "7rem",
                    textTransform: "capitalize",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  style={{
                    color: "white",
                    fontSize: "35px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  {description}
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  style={{
                    color: "white",
                    fontSize: "25px",
                    textTransform: "capitalize",
                  }}
                >
                  {promotion}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BannerAut;