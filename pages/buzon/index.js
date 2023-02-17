import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
import Meta from "../../components/Meta";
import { makeStyles } from "@mui/styles";
import { capitalCase } from "change-case";
import useStore from "../../hooks/useStore";
import useComplaint from "../../hooks/useComplaint";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  textarea: {
    border: `solid #bcbdbf 1px`,
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    outline: "none",
    resize: "none",
    padding: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const [currents, setCurrents] = useState({
    store: "",
    area: "",
    description: "",
  });
  const { enqueueSnackbar } = useSnackbar();

  const onHandleSubmit = (event) => {
    event.preventDefault;
    if (!currents.area)
      return enqueueSnackbar("Selecciona un departamento", {
        variant: "error",
      });

    if (!currents.store)
      return enqueueSnackbar("Selecciona una agencia", {
        variant: "error",
      });

    if (!currents.description)
      return enqueueSnackbar("Envianos un comentario", {
        variant: "error",
      });
    createComplaint(currents);
  };
  const onHandleChange = (e) =>
    setCurrents({ ...currents, [e.target.name]: e.target.value });

  const { store, area, description } = currents;

  const { stores, getStores } = useStore();
  const { createComplaint, error, success, clearState } = useComplaint();

  useEffect(() => {
    getStores();

    return () => clearState();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error)
      enqueueSnackbar(error, {
        variant: "error",
      });

    if (success) {
      enqueueSnackbar(success, {
        variant: "success",
      });
      setCurrents({
        store: "",
        area: "",
        description: "",
      });
    }
  }, [error, success]);

  return (
    <>
      <Meta
        title="Quejas y sugerencias - Carone Group"
        description="Quejas y sugerencias - Carone Group"
        url="https://carone.com.mx/quejas-y-sugerencias"
        googlebot={"index,follow"}
        robots="all"
      />
      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "10px" }} />
        <Box display="flex" justifyContent="center">
          <Box
            mt={4}
            sx={{
              width: { xs: "90vw", sm: "30vw", md: "30vw" },
            }}
          >
            <center>
              <Typography
                variant="h1"
                sx={{ fontSize: 32, fontWeight: 700, marginBottom: "1em" }}
              >
                Quejas y Sugerencias
              </Typography>
            </center>
            <Box>
              <Box
                style={{
                  marginBottom: "1em",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <TextField
                  label="Agencia"
                  variant="outlined"
                  fullWidth
                  name="store"
                  value={store}
                  onChange={onHandleChange}
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{ shrink: true }}
                >
                  <option value="">Selecciona una agencia</option>
                  {stores.map((store) => (
                    <option
                      key={store._id}
                      value={store._id}
                      storeName={store.name}
                    >
                      {capitalCase(`${store.make.name} ${store.name}`)}
                    </option>
                  ))}
                </TextField>
                <TextField
                  label="Departamento"
                  variant="outlined"
                  fullWidth
                  name="area"
                  value={area}
                  onChange={onHandleChange}
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{ shrink: true }}
                >
                  <option value="">Selecciona un departamento</option>
                  <option value="nuevos">Nuevos</option>
                  <option value="seminuevos">Seminuevos</option>
                  <option value="servicio">Servicio</option>
                  <option value="refacciones">Refacciones</option>
                  <option value="administracion">Administracion</option>
                  <option value="ventas">Ventas</option>
                  <option value="rh">RH</option>
                  <option value="fyi">F&I</option>
                </TextField>
                <TextareaAutosize
                  name="description"
                  className={classes.textarea}
                  placeholder={"Déjanos un comentario"}
                  minRows={5}
                  onChange={onHandleChange}
                  value={description}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginBottom: 20 }}
                onClick={onHandleSubmit}
              >
                Enviar
              </Button>
              {error}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
