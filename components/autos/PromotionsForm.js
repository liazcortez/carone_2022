import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";
import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import parse from "html-react-parser";
import axios from "axios";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const useStyles = makeStyles({
  selectedBorder: {
    border: "1px solid #5e72e4",
  },
  input: {},
  unselectedBorder: {
    border: "1px solid #252525",
  },
  makesStyles: {
    color: "#363784",
    textAlign: "center",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    display: "grid",
  },
});
const timeFrames = [
  {
    id: 0,
    value: "Solo Quiero Informacion",
  },
  {
    id: 1,
    value: "1 mes o menos",
  },
  {
    id: 2,
    value: "2 meses",
  },
  {
    id: 3,
    value: "3 meses o más",
  },
];

const FormComponent = ({ vehicle, promotion }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [dissableButton, setDissableButton] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const message = `Hola estoy interesado en esta promocion: ${promotion.title}`;
  const parseMessage = encodeURIComponent(message);

  let defaultData = {
    name: "",
    email: "",
    phone: "",
    timeFrame: "Solo Quiero Informacion",
    downPayment: 0,
    source: "605b5446020c150355aac5e9",
    vehicle: "",
    modelType: "",
    vehicleModel: "",
    make: "",
    store: "",
    year: "",
  };

  const [formData, setFormData] = React.useState(defaultData);

  let { name, email, phone, timeFrame, downPayment } = formData;

  React.useEffect(() => {
    if (promotion) {
      setFormData({
        ...formData,
        vehicle: promotion.vehicle._id,
        modelType: promotion.vehicle.modelType,
        vehicleModel: promotion.vehicle.model,
        make: promotion.store.make,
        year: promotion.vehicle.year,
        store: promotion.store.dpxStore,
      });
    }
  }, [promotion]);

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendLead = async (lead) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      enqueueSnackbar("Formulario Completado Correctamente", {
        variant: "info",
      });
      handleClose();
      const response = await axios.post(
        "https://dealerproxapi.com/api/v1/leads/website",
        //"http://localhost:5000/api/v1/leads/website",
        lead,
        config
      );
      setFormData({
        ...formData,
        name: "",
        email: "",
        phone: "",
        downPayment: "",
        timeFrame: "Solo Quiero Informacion",
      });
    } catch (err) {}
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    setDissableButton(true);

    let emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let phoneValidation = new RegExp(/^[0-9]{10}$/);
    let downPaymentValidation = new RegExp(/^[0-9]+$/);

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === ""
    ) {
      return enqueueSnackbar("Por favor llena todos los campos", {
        variant: "error",
      });
    } else if (!emailValidation.test(formData.email)) {
      return enqueueSnackbar("Por favor utiliza un email válido", {
        variant: "error",
      });
    } else if (!phoneValidation.test(formData.phone)) {
      return enqueueSnackbar(
        "Por favor utiliza un télefono válido (10 Digitos)",
        {
          variant: "error",
        }
      );
    } else if (!downPaymentValidation.test(formData.downPayment)) {
      return enqueueSnackbar("Ingresa un enganche válido (Solo números)", {
        variant: "error",
      });
    } else {
      await sendLead(formData);
      return enqueueSnackbar(
        "Se ha enviado tu información, en breve un asesor se pondrá en contacto contigo.",
        {
          variant: "success",
        }
      );
    }
  };

  return (
    <>
      <Box mt={4}>
        <Typography variant="h1" sx={{ fontSize: 32, fontWeight: 700 }}>
          {promotion && promotion.title}
        </Typography>
        {promotion && promotion.content && parse(promotion.content)}
        <Box>
          <form onSubmit={onHandleSubmit}>
            <Box
              style={{
                marginBottom: "1em",
                display: "flex",
                flexDirection: "column",
                gap: "0.5em",
              }}
            >
              <Typography variant="h6">Contacta con un asesor</Typography>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                name="name"
                value={name}
                inputProps={{ className: classes.input }}
                onChange={onHandleChange}
                margin="dense"
                helperText="Por favor ingresa tu nombre completo"
              />
              <TextField
                margin="dense"
                label="Email"
                variant="outlined"
                name="email"
                value={email}
                onChange={onHandleChange}
                fullWidth
                inputProps={{ className: classes.input }}
                helperText="Por favor ingresa tu email"
              />
              <TextField
                margin="dense"
                label="Télefono"
                variant="outlined"
                name="phone"
                value={phone}
                onChange={onHandleChange}
                fullWidth
                inputProps={{ className: classes.input }}
                helperText="Por favor ingresa tu numero a 10 digitos"
              />
            </Box>

            <Box
              style={{
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <TextField
                margin="dense"
                id="outlined-basic"
                label="Tiempo de compra"
                variant="outlined"
                name="timeFrame"
                value={timeFrame}
                onChange={onHandleChange}
                fullWidth
                select
                helperText="Por favor ingresa tu tiempo de compra"
                SelectProps={{ native: true }}
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              >
                {timeFrames &&
                  timeFrames.map((timeFrame) => (
                    <option key={timeFrame.id} value={timeFrame.value}>
                      {timeFrame.value}
                    </option>
                  ))}
              </TextField>
              <TextField
                margin="dense"
                id="outlined-basic"
                label="Enganche"
                variant="outlined"
                name="downPayment"
                value={downPayment}
                onChange={onHandleChange}
                fullWidth
                style={{
                  marginBottom: 10,
                  borderRadius: 10,
                }}
                helperText="Por favor selecciona el enganche que quieres dar"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              style={{ marginBottom: 20 }}
            >
              Solicita información
            </Button>

            {/* <Typography variant="body2" mt={2} mb={1}>
            Tambien nos puedes enviar un whatsapp
          </Typography> */}

            <Divider style={{ marginBottom: 20 }}>ó</Divider>

            <Button
              startIcon={<WhatsAppIcon />}
              variant="contained"
              style={{ backgroundColor: "#4BC558" }}
              fullWidth
              href={`https://wa.me/${promotion.store.dpxPhone}?text=${parseMessage}`}
            >
              Chat on WhatsApp
            </Button>
          </form>
          <Typography variant="body2" gutterBottom mt={2} mb={5}>
            * Nunca compartiremos tus datos con nadie más.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FormComponent;
