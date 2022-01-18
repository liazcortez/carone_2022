import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import { Typography, Container, Grid } from "@material-ui/core";
import Image from 'next/image'


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
    right: "32px",
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
    width: "1000px",
    height: "600px",
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

const CarGalleryComponent = ({ slides, title }) => {
  const classes = useStyles();
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: 100 }}>
      <Typography
        align="center"
        variant="h5"
        component="h3"
        style={{
          fontWeight: "bold",
          color: "#656d78",
          textTransform: "uppercase",
          marginBottom: 40,
        }}
      >
        {title}
      </Typography>
      <section className="slider">
        <ArrowBackIosRoundedIcon className="leftArrow" onClick={prevSlide} />
        <ArrowForwardIosRoundedIcon
          className="rightArrow"
          onClick={nextSlide}
        />
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={index === current ? "slide active" : "slide"}
            >
              {index === current && (
                <Image src={slide.image} alt="w/e" className="image" width={50} height={50}/>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CarGalleryComponent;
