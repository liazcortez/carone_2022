import React from "react";
import Carousel from "react-elastic-carousel";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Button } from "@mui/material";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 6 },
];

const useStyles = makeStyles((theme) => ({
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const Item = ({ result }) => (
  <div
    style={{
      borderRadius: "10px",
      marginRight: 20,
      textAlign: "center",
    }}
  >
    <Link href={`/categorias/${result && result.name}`}>
      <a>
        <img
          src={result && result.image}
          style={{
            width: "100%",
            height: "100px",
            objectFit: "cover",
          }}
        />
      </a>
    </Link>

    <Link
      href={`/categorias/${result && result.name}`}
      passHref={true}
      style={{
        textAlign: "center",
        color: "#9fa3a7",
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      <Button>{result && result.name}</Button>
    </Link>
  </div>
);

const CarouselComponent = ({ title, data }) => {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: 30, marginTop: 100 }}>
      <h1 style={{ marginBottom: "50px", textAlign: "center" }}>{title}</h1>

      <div className="animated fadeIn App">
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          showEmptySlots={true}
          pagination={true}
        >
          {data.map((category) => (
            <Item key={category._id} result={category} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
