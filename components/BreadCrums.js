import React from "react";
import { makeStyles } from "@mui/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: 50,
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
}

const BreadcrumbComponent = ({ data, section }) => {
  const { model, year, make } = data;
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom: 10 }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" passHref={true} href={`/${section}`}>
          <Button>{section}</Button>
        </Link>
        <Link color="inherit" passHref={true} href="/autos">
          <Button>Autos</Button>
        </Link>
        <Link color="inherit" passHref={true} href={`/autos/${make && make.name}`}>
          <Button>{(make && make.name).replace("-", " ")}</Button>
        </Link>
        <Typography color="textPrimary" style={{ textTransform: "capitalize" }}>
          <Button disabled>
            {model} {year}
          </Button>
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbComponent;
