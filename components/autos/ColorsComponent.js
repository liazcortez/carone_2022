import React from "react";
import { makeStyles } from "@mui/styles";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { Typography, Container, Grid, Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  leftArrow: {
    position: "absolute",
    top: "50%",
    left: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: 10,
    cursor: "pointer",
    userSelect: "none",
  },
  rightArrow: {
    position: "absolute",
    top: "50%",
    right: "2%",
    fontSize: "3rem",
    color: "#000",
    zIndex: 10,
    cursor: "pointer",
    userSelect: "none",
  },
  slider: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "900px",
    height: "500px",
    borderRadius: "10px",
  },
  slide: {
    opacity: 0,
    transitionDuration: "1s ease",
  },
  active: {
    opacity: 1,
    transitionDuration: "1s ease",
    transform: "scale(1.08)",
  },
}));

const ColorsComponent = ({ colors }) => {
  const classes = useStyles();
  const [current, setCurrent] = React.useState(0);
  const length = colors.length;

  const currentSlide = (i) => {
    // setCurrent(current);
    setCurrent(i);
  };

  if (!Array.isArray(colors) || colors.length <= 0) {
    return null;
  }

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            className="colorSlider"
            sx={{ marginTop: { mg: 10, lg: 10 } }}
          >
            {colors.map((color, index) => (
              <Box key={index}>
                <Box className={index === current ? "color active" : "color"}>
                  {index === current && (
                    <img
                      src={color.image}
                      alt="w/e"
                      className="image"
                      style={{ width: "100%" }}
                    />
                  )}
                </Box>
              </Box>
            ))}

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              p={1}
              m={1}
            >
              {colors.map((color, index) => (
                <Box
                  key={index}
                  p={1}
                  bgcolor={color.color}
                  style={{
                    marginRight: "1%",
                    borderRadius: 50,
                    border: "1px solid #888888",
                  }}
                  sx={{ width: { xs: 20, md: 40 }, height: { xs: 20, md: 40 } }}
                  onClick={() => currentSlide(index)}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ColorsComponent;
