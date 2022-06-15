import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Checkbox,
  Box,
  Grid,
  Container,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Divider } from "@material-ui/core";
import Link from "next/link";
import Skeleton from "@material-ui/lab/Skeleton";
import { capitalCase } from "change-case";
import NumberFormat from "react-number-format";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  isHighlight: {
    backgroundColor: "rgb(85,108,214,.8)",
    color: "white",
    paddingRight: "1em",
    paddingLeft: "1em",
    borderRadius: 10,
  },
  colorSpec: {
    color: "#798089",
  },
  table: {
    minWidth: 650,
  },
  root: {
    maxWidth: 345,
  },
  modelFormatting: {
    textTransform: "capitalize",
    textDecoration: "none",
  },
  modelFormattingUpper: {
    textTransform: "uppercase",
    textDecoration: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  hover: {
    "&:hover": {
      border: "2px solid #556cd699",
    },
  },
}));

const emptyImage =
  "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

const VersionListItem = ({ version, model }) => {
  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Card className={(classes.root, classes.hover)}>
      <Link href={`#`}>
        <a>
          <CardMedia
            className={classes.media}
            image={version.image ? version.image : emptyImage}
            title={`${capitalCase(version.name)} `}
          />
        </a>
      </Link>

      <CardContent>
        <>
          <Link href={`#`}>
            <a style={{ textDecoration: "none", color: "black" }}>
              <Typography
                variant="subtitle1"
                className={
                  (classes.modelFormatting, classes.modelFormattingUpper)
                }
              >
               {version.name}
              </Typography>
            </a>
          </Link>
          {version.price ? (
            <Typography
              variant="h5"
              component="h3"
              style={{ marginBottom: 20, color: "#656d78" }}
            >
              Precio de contado{" "}
              <NumberFormat
                style={{ fontWeight: "bold" }}
                value={version.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                suffix={" MXN"}
              />
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.modelFormatting}>
              Precio Proximamente
            </Typography>
          )}
        </>
      </CardContent>

      <Divider />

      <Container style={{ padding: 20 }}>
        {version.specifications.map((spec, index) => (
          <div style={{ minHeight: 50 }} key={index}>
            <Typography
              variant="body1"
              gutterBottom
              style={{
                verticalAlign: "middle",
                display: "inline-flex",
              }}
            >
              <CheckCircleIcon
                style={{
                  marginTop: 2,
                  marginRight: 14,
                  fontSize: 18,
                  color: "#576b9f",
                }}
              />
              <span
                className={
                  spec.isHighlighted ? classes.isHighlight : classes.colorSpec
                }
              >
                {spec.description}
              </span>
            </Typography>
          </div>
        ))}
      </Container>
    </Card>
  );
};

export default VersionListItem;
