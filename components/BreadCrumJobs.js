import React from "react";
import { makeStyles } from "@mui/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: 50,
    },
  },
}));

const BreadCrumJobs = ({ data, section }) => {
  const { title, category } = data;
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginBottom: 10 }}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Link color="inherit" href="/" passHref={true}>
          <Button>Carone</Button>
        </Link>
        <Link color="inherit" href="/trabajos" passHref={true}>
          <Button>{section}</Button>
        </Link>
        {/* <Link color="inherit" href={`/trabajos/categoria/${category.name}`} passHref={true}> */}
          <Button>{category.name}</Button>
        {/* </Link> */}
        <Typography color="textPrimary" style={{ textTransform: "capitalize" }}>
          <Button disabled>{title}</Button>
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumJobs;
