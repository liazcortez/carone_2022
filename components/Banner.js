import React from "react";
import { Container, Grid, Button, Typography, Box } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@mui/styles";

import Link from "next/link";
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

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const makes = [
  {
    name: "Chevrolet",
  },
  {
    name: "Ford",
  },
  {
    name: "Kia",
  },
  {
    name: "MG",
  },
];

const vehicleTypes = [
  {
    name: "Eco",
  },
  {
    name: "Trabajo",
  },
  {
    name: "Sport",
  },
  {
    name: "Urbano",
  },
];

const vehicleModels = [
  {
    name: "Aveo",
  },
  {
    name: "Spark",
  },
  {
    name: "Soul",
  },
  {
    name: "Sorento",
  },
];

const Banner = ({ imageUrl }) => {
  const classes = useStyles();

  const [make, setMake] = React.useState("Marca");
  const [vehicleType, setVehicleType] = React.useState("Tipo");
  const [model, setModel] = React.useState("Modelo");

  const handleChange = (event) => {
    setMake(event.target.value);
  };

  const handleVehicleType = (event) => {
    setVehicleType(event.target.value);
  };

  const handleVehicleModel = (event) => {
    setModel(event.target.value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          style={{
            padding: 100,
            backgroundPosition: 'center',
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            m={1}
            p={1}
            align="center"
          >
            <Box p={1}>
              <Typography
                variant="h3"
                component="h1"
                style={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                CARONE GROUP
              </Typography>
              <Typography
                variant="h5"
                component="h1"
                gutterBottom
                style={{ color: "white", marginBottom: 30 }}
                align="center"
              >
                Donde encuentras toda una gama de marcas y vehiculos para ti
              </Typography>

              <Link href="/autos" passHref={true}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SearchIcon />}
                  style={{ fontSize: 18 }}
                >
                  Encuentra el auto de tus sueños
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Banner;
