import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  CardContent,
  Card,
  Divider,
  CardMedia,
  Typography,
  Grid,
  CardActions,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

import useMake from "../../hooks/useMake";
import usePreowned from "../../hooks/usePreowned";
import useVehicle from "../../hooks/useVehicle";
import { capitalCase } from "change-case";
import { useSnackbar } from "notistack";
import { Skeleton } from "@material-ui/lab";
import NumberFormat from "react-number-format";
import moment from "moment";
import numeral from "numeral";
import "moment/locale/es";
moment.locale("es");

const useStyles = makeStyles((theme) => ({
  root: {},
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
  hover: {
    cursor: "pointer",
    "&:hover": {
      border: "2px solid #556cd699",
    },
  },
}));

const emptyImage =
  "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

const CalcPrice = () => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const actualYear = parseInt(moment().format("YYYY"));
  const startYear = 1995;

  const { makes, getMakes } = useMake();
  const { vehicles, getVehiclesByMake } = useVehicle();
  const { calculatePrices, prices, clearState, loading } = usePreowned();
  const [state, setState] = useState({
    makeName: "",
    make: "",
    modelName: "",
    model: "",
    year: "",
  });

  const handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (state.make === "" || state.model === "" || state.year === "")
      return enqueueSnackbar("Llena todos los comapos", { variant: "error" });
    calculatePrices(state);
  };

  const form = (
    <Box style={{ width: "100%", display: "flex", marginBottom: "1em" }}>
      <Box p={1} minWidth="25.15%">
        <TextField
          select
          fullWidth
          label="Marca"
          name="make"
          value={state.make}
          onChange={(e) => {
            setState({
              ...state,
              make: e.target.value,
              makeName:
                e.target.options[e.target.options.selectedIndex].getAttribute(
                  "name"
                ),
            });
            if (e.target.value === "") useVehicle().clearState();
            else getVehiclesByMake(e.target.value);
          }}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
            Selecciona alguna marca
          </option>
          {makes.map((option) => {
            if (option._id === "6269ad81e8436b4af342ac57") return false;
            return (
              <option
                name={capitalCase(option.name)}
                key={option._id}
                value={option._id}
              >
                {capitalCase(option.name.replace("-", " "))}
              </option>
            );
          })}
        </TextField>
      </Box>
      <Box p={1} minWidth="25.15%">
        <TextField
          select
          fullWidth
          label="Modelo"
          name="model"
          value={state.model}
          onChange={(e) => {
            setState({
              ...state,
              model: e.target.value,
              modelName:
                e.target.options[e.target.options.selectedIndex].getAttribute(
                  "name"
                ),
            });
          }}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
            Selecciona algún modelo
          </option>
          {vehicles.map((option) => (
            <option
              name={capitalCase(option.model)}
              key={option._id}
              value={option._id}
            >
              {capitalCase(option.model)}
            </option>
          ))}
        </TextField>
      </Box>
      <Box p={1} minWidth="25.15%">
        <TextField
          select
          fullWidth
          label="Año"
          name="year"
          value={state.year}
          onChange={handleChange}
          variant="outlined"
          SelectProps={{
            native: true,
          }}
        >
          {[
            ...new Array(parseInt(moment().format("YYYY")) - (startYear - 1)),
          ].map((item, index) => (
            <option value={actualYear - index} key={index}>
              {actualYear - index}
            </option>
          ))}
        </TextField>
      </Box>
      <Box p={1} minWidth="25.15%">
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{ height: 55 }}
          onClick={handleSubmit}
        >
          Consultar
        </Button>
      </Box>
    </Box>
  );

  const card = (vehicle) => (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className={(classes.root, classes.hover)}>
        {vehicle && (
          <CardMedia
            className={classes.media}
            image={vehicle.image ? vehicle.image : emptyImage}
            title={`${vehicle && vehicle.make} ${vehicle && vehicle.model} ${
              vehicle && vehicle.year
            }`}
          />
        )}
        <CardContent>
          {vehicle && (
            <>
              <Typography variant="h6" gutterBottom style={{ fontSize: 17 }}>
                {vehicle && vehicle.make}{" "}
              </Typography>

              <Box>
                <Typography
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "calc(90%)",
                    display: "inline-block",
                    textOverflow: "ellipsis",
                  }}
                  variant="h6"
                >
                  {`${
                    vehicle && vehicle.model ? capitalCase(vehicle.model) : ""
                  } ${vehicle.version} ${vehicle.year}`}
                </Typography>
              </Box>

              <Typography variant="subtitle1" style={{ fontSize: 17 }}>
                <Box component={"span"} sx={{ fontWeight: "500" }}>
                  Venta: &nbsp;
                </Box>
                {vehicle.price ? (
                  <NumberFormat
                    value={vehicle.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                ) : (
                  "Precio no agregado"
                )}
              </Typography>

              {vehicle.price && (
                <Typography variant="subtitle1" style={{ fontSize: 17 }}>
                  <Box component={"span"} sx={{ fontWeight: "500" }}>
                    Toma: &nbsp;
                  </Box>
                  <NumberFormat
                    value={(prices.promedio * 0.85).toFixed(0)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </Typography>
              )}

              {vehicle.price && (
                <Typography variant="subtitle1" style={{ fontSize: 17 }}>
                  <Box component={"span"} sx={{ fontWeight: "500" }}>
                    Ganancia: &nbsp;
                  </Box>
                  <NumberFormat
                    value={vehicle.price - (prices.promedio * 0.85).toFixed(0)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </Typography>
              )}

              <Typography variant="subtitle1" style={{ fontSize: 17 }}>
                <Box component={"span"} sx={{ fontWeight: "500" }}>
                  Km: &nbsp;
                </Box>
                {vehicle.km && (
                  <NumberFormat
                    value={vehicle.km}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={""}
                  />
                )}
              </Typography>
            </>
          )}
        </CardContent>
        <Divider />
      </Card>
    </Grid>
  );

  const SkeletonCars = () => (
    <Grid item xs={12} sm={6} lg={3}>
      <Card className={(classes.root, classes.hover)}>
        <Skeleton variant="rect" width="100%" height={168} />
        <CardContent>
          <Box pt={0.5}>
            <Typography variant="subtitle1" component="div">
              <Skeleton />
            </Typography>
            <Typography
              variant="h6"
              className={classes.modelFormatting}
              component="div"
            >
              <Skeleton />
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: 17 }}
              component="div"
            >
              <Skeleton />
            </Typography>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </Grid>
  );

  const noResults = () => (
    <Box
      p={10}
      display="flex"
      justifyContent="center"
      style={{ width: "100%" }}
    >
      <Box>
        <center>
          <Typography variant="h5">
            No se encontraron resultados de {prices && prices.title}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            style={{ fontSize: 18 }}
          >
            Intenta de nuevo con una consulta diferente
          </Typography>
        </center>
      </Box>
    </Box>
  );
  const promedio = () => (
    <Grid item xs={12}>
      <Box display="flex">
        <Typography>
          <Box
            component={"span"}
            style={{ marginBottom: "0.5em", fontSize: 35, fontWeight: "bold" }}
          >
            Precio promedio:{" "}
            {prices && numeral(prices.promedio).format("$0,00")}
          </Box>
        </Typography>
      </Box>
    </Grid>
  );

  useEffect(() => {
    getMakes();
    //    return () => clearState()
    //eslint-disable-next-line
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      {form}
      <Grid container spacing={2} style={{ padding: 10 }}>
        {loading && new Array(8).fill(0).map((item) => SkeletonCars())}
        {prices &&
          prices.cars &&
          !loading &&
          prices.cars.length !== 0 &&
          promedio()}
        {prices &&
          prices.cars &&
          !loading &&
          prices.cars.map((item) => card(item))}
        {prices &&
          prices.cars &&
          prices.cars.length === 0 &&
          !loading &&
          noResults()}
      </Grid>
    </Container>
  );
};

export default CalcPrice;
