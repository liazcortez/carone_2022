import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import StoreIcon from "@material-ui/icons/Store";
import StoreMallDirectoryOutlinedIcon from "@material-ui/icons/StoreMallDirectoryOutlined";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import { useSnackbar } from "notistack";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Checkbox,
  Box,
  Divider,
  Avatar,
  Paper,
  capitalize,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect } from "react";
import { transform } from "lodash-es";
import NumberFormatPrice from "../../utils/masks/NumberFormatPrice";

const CapitalizeNames = (string) => {
  if (string === undefined || string === null) return "";
  string = string.replace(/-/, " ");

  const words = string.split(" ");

  let finalString = "";

  words.map((word, i) => {
    if (i !== 0 && i !== words.length) {
      finalString += " ";
    }
    if (word.includes(".") || word.includes("/")) {
      finalString += word.toUpperCase();
    } else {
      finalString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return false;
  });

  return finalString;
};

const useStyles = makeStyles({
  selectedBorder: {
    border: "1px solid #5e72e4",
  },

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
    value: "Solo quiero información",
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

const FormComponent = ({ vehicle }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [dissableButton, setDissableButton] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [storeIcon, setStoreIcon] = React.useState("");
  const defaultData = {
    name: "",
    email: "",
    phone: "",
    timeFrame: "Solo quiero información",
    downPayment: 0,
    store: "",
    vehicle: vehicle,
    modelType: vehicle.modelType,
    vehicleModel: vehicle.model,
    make: vehicle.make._id,
    year: vehicle.year,
    source: "605b541a020c150355aac5e6",
  };

  const [formData, setFormData] = React.useState(defaultData);

  const { name, email, phone, timeFrame, downPayment, store } = formData;

  /*const onClickStore = (store) => {
    setStoreIcon(store.dpxStore);
    setFormData({ ...formData, store: store.dpxStore });
  };*/

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => console.log(formData), [formData]);
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
        // "http://localhost:5000/api/v1/leads/website",
        lead,
        config
      );
      setFormData(defaultData);
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
      formData.phone === "" ||
      storeIcon === ""
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
        "Por favor utiliza un télefono válido (10 Dpigitos)",
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
      setDissableButton(false);
      return enqueueSnackbar(
        "Se ha enviado tu información, en breve un asesor se pondrá en contacto contigo.",
        {
          variant: "success",
        }
      );
    }
  };

  return (
    <div>
      <Box
        sx={{
          padding: { xs: 0, sm: 4, md: "0 70px 0 70px" },
          borderRadius: 10,
          textAlign: "left",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: 32, fontWeight: 700 }}>
          Cotiza online
        </Typography>

        <Typography variant="caption">
          Llena el siguiente formulario para cotizar online
        </Typography>
        <Box>
          <form onSubmit={onHandleSubmit}>
            <TextField
              margin="dense"
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="name"
              value={name}
              helperText="Ingresa tu nombre completo"
              onChange={onHandleChange}
              size="small"
            />

            <TextField
              margin="dense"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={email}
              helperText="Ingresa tu email"
              onChange={onHandleChange}
              fullWidth
              size="small"
            />

            <TextField
              margin="dense"
              id="outlined-basic"
              label="Télefono"
              variant="outlined"
              name="phone"
              helperText="Ingresa tu telefono a 10 digitos"
              value={phone}
              onChange={onHandleChange}
              fullWidth
              size="small"
            />

            <TextField
              margin="dense"
              id="outlined-basic"
              label="Agencias"
              variant="outlined"
              name="store"
              value={store}
              helperText="Selecciona tu agencia de preferencia"
              onChange={onHandleChange}
              fullWidth
              select
              size="small"
              SelectProps={{ native: true }}
            >
              {vehicle.availableStore.map((store) => (
                <option key={store.dpxStore} value={store.dpxStore}>
                  {capitalize(store.make.name)} {capitalize(store.name)}
                </option>
              ))}
            </TextField>

            <TextField
              size="small"
              margin="dense"
              id="outlined-basic"
              label="Tiempo de compra"
              variant="outlined"
              helperText="Ingresa tu tiempo de compra"
              name="timeFrame"
              value={timeFrame}
              onChange={onHandleChange}
              fullWidth
              select
              SelectProps={{ native: true }}
            >
              {timeFrames &&
                timeFrames.map((timeFrame) => (
                  <option key={timeFrame.id} value={timeFrame.value}>
                    {timeFrame.value}
                  </option>
                ))}
            </TextField>

            <TextField
              size="small"
              helperText="Ingresa el enganche deseado"
              margin="dense"
              id="outlined-basic"
              label="Enganche"
              variant="outlined"
              name="downPayment"
              value={downPayment}
              onChange={onHandleChange}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                inputComponent: NumberFormatPrice,
              }}
              fullWidth
            />

            <Button
              // padding: { xs: 0, sm: 4, md: "0 50px 0 50px" }
              sx={{
                marginTop: { sx: "50px", md: "25px" },
                marginBottom: { sx: "50px", md: "20px" },
              }}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              disabled={
                dissableButton || vehicle.availableStore.length <= 0
                  ? true
                  : false
              }
            >
              Cotizar online
            </Button>
          </form>
          <Typography variant="body2" gutterBottom>
            * Nunca compartiremos tus datos con nadie más.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default FormComponent;
