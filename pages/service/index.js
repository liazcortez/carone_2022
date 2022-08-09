import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Grid,
  Typography,
  FormHelperText,
  Stack,
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { CapitalizeV2 } from "../../utils/capitalize";

import moment from "moment";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import useStore from "../../hooks/useStore";
import useMake from "../../hooks/useMake";
import axios from "axios";
import NumberFormatPhone from "../../utils/masks/NumberFormatPhone";
import NumberFormatKm from "../../utils/masks/NumberFormatKm";

import { useSnackbar } from "notistack";
import { dpxURL } from "../../api/api";

export default function Service() {
  const formValues = {
    // "Elige la Agencia",
    store: { value: "", step: 0, label: "Elige Tu Agencia", select: [] },
    // "Agrega tu Vehículo",
    make: {
      value: "",
      step: 1,
      label: "Elige Tu Marca",
      select: [],
      props: { sx: { marginBottom: "2em" } },
      child: "vehicle",
    },
    vehicle: {
      value: "",
      step: 1,
      select: [],
      label: "Elige Tu Modelo",
      props: { sx: { marginBottom: "2em" } },
      parent: "make",
    },
    year: {
      value: "",
      step: 1,
      select: [],
      label: "Elige Tu Elige tu Año",
      props: { sx: { marginBottom: "2em" } },
    },
    km: {
      value: "",
      step: 1,
      label: "Kilometraje",
      props: {
        sx: { marginBottom: "2em" },
        InputProps: { ...{ inputComponent: NumberFormatKm } },
      },
    },
    // "Seleccionar Fecha y Hora",
    date: {
      value: "",
      step: 2,
      label: "Fecha de Servicio",
      rowType: "date",
    },
    // "Selecciona Servicio",
    service: {
      value: "",
      step: 3,
      label: "Selecciona tu Servicio (cambiar por cards)",
      rowType: "services",
    },
    // "Agrega tus Datos Personales",
    name: {
      value: "",
      step: 4,
      label: "Nombre Completo",
      props: { sx: { marginBottom: "2em" }, required: true },
    },
    phone: {
      value: "",
      step: 4,
      label: "Telefono",
      props: {
        sx: { marginBottom: "2em" },
        required: true,
        InputProps: { ...{ inputComponent: NumberFormatPhone } },
      },
    },
    email: {
      value: "",
      step: 4,
      label: "Email",
      props: { required: true },
    },
  };

  const steps = [
    "Elige la Agencia",
    "Agrega tu Vehículo",
    "Seleccionar Fecha y Hora",
    "Selecciona Servicio",
    "Agrega tus Datos Personales",
  ];

  const { enqueueSnackbar } = useSnackbar();
  const [formSelects, setFormSelects] = useState({});
  const [services, setServices] = useState(false);
  const [service, setService] = useState(false);
  const { getStores, stores } = useStore();
  const { makes, getMakes } = useMake();
  const [vehicles, setVehicles] = useState([]);
  // const { vehicles, getVehiclesByMake } = useVehicle();

  useEffect(() => {
    getStores();
    getMakes();
    //eslint-disable-next-line
  }, []);

  const sortNames = (a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
  };

  // ?Child Selects logic
  const ChildSelects = {
    vehicle: async (make) => {
      let vehicles = await axios.get(
        `${dpxURL}/vehicles?make=${make.value}`
      );
      let vehiclesArray = vehicles?.data.data ? vehicles.data.data : [];
      setVehicles(vehiclesArray);
      // handle dpx axios get vehicles by store
    },
  };

  // Custom Logic
  const CustomSelects = {
    store: async (selectedStore) => {
      let store = stores.find(store=>store.dpxStore === selectedStore.value);
      let services = await axios.post(
        `${dpxURL}/packages/aggregationV3`,
        {
          make: store.make._id,
        }
      );
      let servicesArray = services?.data?.results?.data
        ? services.data.results.data
        : [];
      setService(false);
      setServices(servicesArray);
      // handle dpx axios get services by store
    },
  };

  // set selects
  useEffect(() => {
    let newSelects = {};
    if (stores && stores.length >= 1) {
      let newStores = stores
        .filter((store) => store.dpxStore)
        .map((store) => {
          return {
            ["_id"]: store.dpxStore,
            name: `${store.make.name} ${store.name}`.replace("-", " "),
          };
        })
        .sort((a, b) => sortNames(a, b));
      newSelects.store = newStores;
    }

    if (makes && makes.length >= 1) {
      let newMakes = makes
        .filter((make) => make.isShown && make.dpxMake)
        .map((make) => {
          return {
            ["_id"]: make.dpxMake,
            name: `${make.name}`.replace("-", " "),
          };
        })
        .sort((a, b) => sortNames(a, b));

      newSelects.make = newMakes;
    }

    if (vehicles && vehicles.length >= 1) {
      let newVehicles = vehicles
        .map((vehicle) => {
          return {
            ["_id"]: vehicle._id,
            name: `${vehicle?.make?.name} ${vehicle.model}`.replace("-", " "),
          };
        })
        .sort((a, b) => sortNames(a, b));

      newSelects.vehicle = newVehicles;
    }

    let end = 1981;
    let start = parseInt(moment().add(1, "year").format("YYYY"));
    let finalYears = [];

    for (let i = start; i >= end; i--) {
      finalYears.push({ _id: i });
    }
    newSelects.year = finalYears;

    setFormSelects(newSelects);
    //eslint-disable-next-line
  }, [stores, makes, vehicles]);

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

  const ServiceCard = ({ serviceCard, key }) => {
    return (
      <>
        <Card
          key={key}
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
              {serviceCard.isRecommended && (
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
                {serviceCard.name}
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
                $ {serviceCard.price.toLocaleString()}
              </Typography>
              <Checkbox
                {...label}
                checked={service && service._id === serviceCard._id}
                onChange={() => setService(serviceCard)}
              />
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
                  {serviceCard.description
                    ? serviceCard.description
                    : "No hay información"}
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
        <Formik
          enableReinitialize
          initialValues={{
            store: "",
            make: "",
            vehicle: "",
            year: "",
            name: "",
            phone: "",
            email: "",
            date: "",
          }}
          validationSchema={Yup.object().shape({
            store: Yup.string().max(255).required("Selecciona una Agencia"),
            make: Yup.string().max(255).required("Selecciona una Marca"),
            vehicle: Yup.string().max(255).required("Selecciona un Modelo"),
            year: Yup.string().max(255).required("Selecciona un Año"),
            name: Yup.string().max(255).required("Ingresa tu Nombre"),
            phone: Yup.string()
              .min(10, "Ingresa un Telefono con 10 Numeros")
              .required("Ingresa tu Telefono"),
            email: Yup.string()
              .email("Ingresa Un Correo Valido")
              .max(255)
              .required("Ingresa tu Correo"),
          })}
          onSubmit={async (
            values,
            { resetForm, setErrors, setStatus, setSubmitting }
          ) => {
            try {

              if (!service)
                return setErrors({ submit: "Selecciona Un Servicio" });

              let store = stores.filter(
                (store) => store.dpxStore === values.store
              ).map(store=>({_id:store.dpxStore,name:store.name, twilioNumber:store.dpxPhone,make:{_id:store.make.dpxMake,name:store.make.name,caroneMake:store.make._id}}))[0];

              let make = makes.filter(
                (make) => make._id===store.make.caroneMake
              ).map(make=>({_id:make.dpxMake,name:make.name}))[0];

              let vehicle = vehicles.filter(
                (vehicle) => vehicle._id === values.vehicle
              )[0];
              vehicle.year = values.year;
              if(values.km !== '')vehicle.km = values.km;

              vehicle.appointments= [
                {
                  service,
                  startDate: values.date,
                  endDate: moment(values.date).add(1, "hours"),
                  store: { _id: store._id, name: store.name,make },
                },
              ];

              let newleadService = {
                ...values,
                firstAppointment: values.date,
                vehicles: [vehicle],
              };

              console.log(newleadService)
              let response = await axios.post(
                `${dpxURL}/leadsService/website`,
                newleadService
              );

                let variant =(response.data.success)?'success':'error';
              enqueueSnackbar(CapitalizeV2(response.data.message), {
                variant,
              });
              // resetForm();

            } catch (err) {
              setStatus({ success: false });
              setErrors({ submit: err.message });

              enqueueSnackbar("Ocurrio un error Inesperado", {
                variant: "error",
              });

              //     setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting,
            touched,
            values,
          }) => (
            <Form>
              {steps.map((step, index) => (
                <Box sx={{ marginBottom: "2em" }} key={index}>
                  <Title heading={`${index + 1}. ${step}`} />
                  {Object.entries(formValues).map((current, indexTextField) => {
                    let [name, Obj] = current;
                    if (Obj.step !== index) return null;
                    switch (Obj.rowType) {
                      case "date":
                        return (
                          <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                              label="Fecha de Servicio"
                              // inputFormat="MM/dd/yyyy"
                              value={values.date}
                              onChange={(value) => {
                                setFieldValue("date", new Date(value));
                              }}
                              renderInput={(params) => (
                                <TextField
                                  sx={{ display: "none" }}
                                  {...params}
                                  error={Boolean(touched.date && errors.date)}
                                  helperText={touched.date && errors.date}
                                  fullWidth
                                />
                              )}
                            />

                            <Stack spacing={3}>
                              <DateTimePicker
                                label="Fecha de Servicio"
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    error={Boolean(touched.date && errors.date)}
                                    helperText={touched.date && errors.date}
                                    fullWidth
                                  />
                                )}
                                value={values.date}
                                onChange={(value) => {
                                  setFieldValue("date", new Date(value));
                                }}
                              />
                            </Stack>
                          </LocalizationProvider>
                        );
                        break;
                      case "services":
                        if (!services)
                          return (
                            <Box>
                              <Typography>Selecciona una Agencia</Typography>
                            </Box>
                          );
                        return services && services.length >= 1 ? (
                          services.map((service, key) => (
                            <ServiceCard key={key} serviceCard={service} />
                          ))
                        ) : (
                          <Box>
                            <Typography>No hay Servicios</Typography>
                          </Box>
                        );

                        break;
                      default:
                        return (
                          <TextField
                            key={indexTextField}
                            item
                            {...Obj.props}
                            disabled={Obj.parent && values[Obj.parent] === ""}
                            fullWidth
                            autoComplete="new-password"
                            placeholder={Obj.placeholder ? Obj.placeholder : ""}
                            error={Boolean(touched[name] && errors[name])}
                            helperText={touched[name] && errors[name]}
                            label={CapitalizeV2(Obj.label ? Obj.label : name)}
                            name={name}
                            onBlur={handleBlur}
                            onChange={(e) => {
                              let value = e.target;
                              // handle child selects
                              if (
                                value &&
                                value.name &&
                                CustomSelects[value.name]
                              )
                                CustomSelects[value.name](value);
                              if (Obj.select && Obj.child && value !== "") {
                                ChildSelects[Obj.child](value);
                              }
                              handleChange(e);
                            }}
                            select={Obj.select ? true : false}
                            value={values[name]}
                            variant="outlined"
                            type={Obj.type ? Obj.type : "text"}
                            InputLabelProps={{
                              shrink: values[name] !== "" || touched[name],
                            }}
                          >
                            <MenuItem
                              key={indexTextField}
                              value={""}
                              text={""}
                            >{`Select a ${CapitalizeV2(name)}`}</MenuItem>
                            {Obj &&
                              Obj.select &&
                              (formSelects[name]
                                ? formSelects[name]
                                : Obj.select
                              ).map((select, indexTextField) => (
                                <MenuItem
                                  key={indexTextField}
                                  value={select._id}
                                  text={select.name ? select.name : select._id}
                                >
                                  {select.name
                                    ? CapitalizeV2(select.name)
                                    : CapitalizeV2(select._id)}
                                </MenuItem>
                              ))}
                          </TextField>
                        );
                    }
                  })}
                </Box>
              ))}
              <Button
                disabled={!service}
                onClick={handleSubmit}
                variant="contained"
                sx={{ padding: 2, marginBottom: 4 }}
                fullWidth
              >
                Enviar Cita
              </Button>
              {errors.submit && (
                <FormHelperText error>{errors.submit}</FormHelperText>
              )}

              <Typography variant="caption">
                Al proveernos sus datos e información usted, reconoce y acepta
                que los mismos serán tratados de conformidad con el Aviso de
                Privacidad de Carone Group, y que usted autoriza a Carone Group
                a compartir su información con sus distribuidores autorizados
                para efectos de contactarlo respecto de llamados a servicio
                técnico de su vehículo.
              </Typography>
            </Form>
          )}
        </Formik>
      </Grid>
    </Container>
  );
}
