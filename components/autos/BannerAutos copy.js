import React from "react";
import { Container, Grid, Typography,Box} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  responsiveBanner:{
    height: 450,
    // minHeight:300,
    backgroundSize:'cover',
    [theme.breakpoints.down('sm')]:{
      height:'20vh'
      },
    [theme.breakpoints.down('xs')]:{
    height:'15vh'
    }
  },
  responsiveDescription:{
    [theme.breakpoints.down('sm')]:{
      },
    [theme.breakpoints.down('xs')]:{
    }
  },
  descriptionContainer:{}
}));

const imageUrl =
  "https://carone.com.mx/wp-content/uploads/2021/02/carone-banner3.jpg";

const BannerAut = ({ banner, description, promotion, title }) => {
  const classes = useStyles();
  return (
    <Grid container style={{ marginBottom: 30 }}>
      <Grid item xs={12}>
        <Paper
          style={{
            backgroundImage: `url(${banner ? banner : imageUrl})`,
          }}
          className='responsiveBanner'
        >
          <Box className={classes.descriptionContainer} >
            <Box className={classes.responsiveDescription}>
              <Grid item xs={12} sm={9} md={6}  style={{ padding: "3em" }}>
                <Typography
                  variant="subtitle1"
                  component="div"
                  style={{
                    color: "white",
                    fontSize: "25px",
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
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BannerAut;
