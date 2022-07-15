import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const stores = [
  {
    value: "Chevrolet",
  },
];

const makes = [
  {
    value: "Chevrolet",
  },
];

const models = [
  {
    value: "Spark",
  },
];

const years = [
  {
    value: "2022",
  },
];

export default function MaterialUIPickers() {
  const [store, setStore] = React.useState("");
  const [make, setMake] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeStore = (event) => {
    setStore(event.target.value);
  };

  const handleChangeMake = (event) => {
    setMake(event.target.value);
  };

  const handleChangeModel = (event) => {
    setModel(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const Title = ({ heading }) => (
    <>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",

          fontFamily: "Helvetica",
        }}
      >
        {heading}
      </Typography>
      <Divider sx={{ marginBottom: "18px", marginTop: "12px" }} />
    </>
  );

  const services = [
    {
      value: " Servicio de 60,000 km",
      price: "1,200.00",
      isRecommended: true,
      info: "La frecuencia de servicios para modelo 2017-2022 (excepto Captiva®, Groove y Tornado Van 2022) es cada 12 mil km o 12 meses, lo que ocurra primero.Los precios incluyen: (i) aceite de motor sintético Dexos®, (ii) refacciones originales (GM Genuine Parts® o ACDelco® según aplique) y (iii) mano de obra de acuerdo con la Póliza de Garantía y Programa de Mantenimiento del vehículo.Descargo de Responsabilidades",
    },
    {
      value: " Servicio de 40,000 km",
      price: "800.00",
      isRecommended: false,
      info: "",
    },
  ];

  const ServiceCard = ({ service }) => {
    return (
      <>
        <Card
          elevation={0}
          sx={{
            maxWidth: "100%",
            paddingTop: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ marginLeft: 2 }}>
              {service.isRecommended && (
                <StarIcon
                  sx={{
                    position: "relative",
                    top: 5,
                    right: 5,
                    color: "#ECA23C",
                  }}
                />
              )}

              <Typography variant="p" sx={{ fontFamily: "Helvetica" }}>
                {service.value}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ marginRight: 2, fontSize: "30px", fontWeight: "bold" }}
              >
                $ {service.price}
              </Typography>
              <Checkbox {...label} />
            </Box>
          </Box>

          <Box>
            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: 500 }}>Observaciones</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {service.info ? service.info : "No hay información"}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Card>

        <Divider />
      </>
    );
  };

  return (
    <Container maxWidth="sm" sx={{ marginBottom: 10 }}>
      <Grid container>
        <Box sx={{ width: "100%" }}>
          {/* Primer paso */}
          <Box sx={{ marginBottom: "2em" }}>
            <Title heading="1. Elige la Agencia" />
            <TextField
              id="outlined-select-currency"
              select
              label="Elige tu Agencia"
              value={store}
              onChange={handleChangeStore}
              fullWidth
            >
              {stores.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          {/* Segundo paso */}
          <Box sx={{ marginBottom: "2em" }}>
            <Title heading="2. Agrega tu Vehículo" />
            <TextField
              id="outlined-select-currency"
              select
              label="Elige tu Marca"
              value={make}
              onChange={handleChangeMake}
              fullWidth
              sx={{ marginBottom: "2em" }}
            >
              {makes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency"
              select
              label="Elige tu Modelo"
              value={model}
              onChange={handleChangeModel}
              fullWidth
              sx={{ marginBottom: "2em" }}
            >
              {models.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="outlined-select-currency"
              select
              label="Elige tu Año"
              value={year}
              onChange={handleChangeYear}
              fullWidth
              sx={{ marginBottom: "2em" }}
            >
              {years.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="outlined-required"
              label="Kilometraje (Opcional)"
              fullWidth
            />
          </Box>
          {/* Tercer paso */}
          <Box>
            <Title heading="3. Seleccionar Fecha y Hora" />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Fecha de Servicio"
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    sx={{ marginBottom: "2em" }}
                  />
                )}
              />
            </LocalizationProvider>
          </Box>
          {/* Cuarto Paso */}
          <Box sx={{ marginBottom: "2em" }}>
            <Title heading="4.Selecciona Servicio" />

            {services &&
              services.map((service) => <ServiceCard service={service} />)}
          </Box>
          {/* Quinto Paso */}
          <Box>
            <Title heading="5. Agrega tus Datos Personales" />
            <TextField
              required
              id="outlined-required"
              label="Nombre Completo"
              fullWidth
              sx={{ marginBottom: "2em" }}
            />

            <TextField
              required
              id="outlined-required"
              label="Teléfono"
              fullWidth
              sx={{ marginBottom: "2em" }}
            />

            <TextField
              required
              id="outlined-required"
              label="Email"
              fullWidth
              sx={{ marginBottom: "2em" }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{ padding: 2, marginBottom: 4 }}
            fullWidth
          >
            Enviar Cita
          </Button>

          <Typography variant="caption">
            Al proveernos sus datos e información usted, reconoce y acepta que
            los mismos serán tratados de conformidad con el Aviso de Privacidad
            de Carone Group, y que usted autoriza a Carone Group a compartir su
            información con sus distribuidores autorizados para efectos de
            contactarlo respecto de llamados a servicio técnico de su vehículo.
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}
