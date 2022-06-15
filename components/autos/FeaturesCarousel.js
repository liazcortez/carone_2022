import React from "react";
import Carousel from "react-elastic-carousel";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { Button } from "@mui/material";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginRight: 30,
  },
  media: {
    height: 140,
    minWidth: 270
  },
  categories: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}));

const Item = ({ result }) => {
  const classes = useStyles();

  const description = result.description;
  const descriptionCapitalize =
    description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={result.image}
          title={result.title}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="h3"
            style={{
              fontWeight: "bold",
              color: "#656d78",
              textTransform: "capitalize",
            }}
          >
            {result.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descriptionCapitalize}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
const FeaturesCarousel = ({ title, data }) => {
  const classes = useStyles();

  return (
    <div style={{ marginBottom: 30 }}>
      <Typography
        variant="h5"
        component="h3"
        style={{
          fontWeight: "bold",
          color: "#656d78",
          marginBottom: 30,
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      <div className="App">
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          showEmptySlots={true}
          pagination={true}
        >
          {data && data.map((category) => (
            <Item key={category._id} result={category} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
