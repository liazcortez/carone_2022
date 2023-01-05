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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect } from "react";
import { transform } from "lodash-es";


const CapitalizeNames = (string) => {
  if(string === undefined || string === null) return '';
  string = string.replace(/-/, ' ')

  const words = string.split(" ");
  
  let finalString = '';

  words.map( (word, i) => {
      if(i !== 0 && i!==(words.length)){ finalString += ' ' }
      if(word.includes(".") || word.includes("/")){
          finalString += word.toUpperCase();
      }
      else{
          finalString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
      return false;
  })

  return finalString;

};


const useStyles = makeStyles({
  selectedBorder: {
    border: "1px solid #5e72e4",
  },

  unselectedBorder: {
    border: "1px solid #252525",
  },
  makesStyles:{
    color: '#363784',
    textAlign:'center',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    display:'grid'
  }
});
const timeFrames = [
  {
    id: 0,
    value: "Solo quiero información"
  },
  {
    id: 1,
    value: "1 mes o menos"
  },
  {
    id: 2,
    value: "2 meses"
  },
  {
    id: 3,
    value: "3 meses o más"
  },
]

const FormComponent = ({ vehicle }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [dissableButton,setDissableButton] = React.useState(false);
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

  const onHandleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(()=>console.log(formData),[formData])
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
      handleClose()
      const response = await axios.post(
        "https://dealerproxapi.com/api/v1/leads/website",
        // "http://localhost:5000/api/v1/leads/website",
        lead,
        config
      );
      setFormData(defaultData)
    } catch (err) {
    }
  };

  const onHandleSubmit = async(e) => {
    e.preventDefault();
    setDissableButton(true);

    let emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let phoneValidation = new RegExp(/^[0-9]{10}$/);
    let downPaymentValidation = new RegExp(/^[0-9]+$/);

    if(formData.name === '' || formData.email === '' || formData.phone === '' || storeIcon === ''){
      return enqueueSnackbar("Por favor llena todos los campos", {
        variant: "error",
      });
    }else if(!emailValidation.test(formData.email)){
      return enqueueSnackbar("Por favor utiliza un email válido", {
      variant: "error",
    });
    }else if(!phoneValidation.test(formData.phone)){
      return enqueueSnackbar("Por favor utiliza un télefono válido (10 Dpigitos)", {
        variant: "error",
      });
    }else if(!downPaymentValidation.test(formData.downPayment)){
      return enqueueSnackbar("Ingresa un enganche válido (Solo números)", {
        variant: "error",
      });
    }else{
      
      await sendLead(formData);
        setDissableButton(false);
        return enqueueSnackbar("Se ha enviado tu información, en breve un asesor se pondrá en contacto contigo.", {
          variant: "success",
        });
      
    }
  };

  

  return (
    <div style={{  }}>   
    <Box style={{
                  border: "1px solid #dbf2ff",
                  padding: 4,
                  borderRadius: 10,
                  textAlign: "left"
                }}>
        <Typography
          variant="h6"
          component="p"
          id="form-dialog-title"
          style={{ textAlign: "center"}}
        >
          Contactar un Asesor
        </Typography>
        <Box>
            <form onSubmit={onHandleSubmit}>
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={name}
                  onChange={onHandleChange}
                  style={{
                    marginBottom: 1,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
                <Typography
                  variant="caption"
                >
                  Por favor ingresa tu nombre completo
                </Typography>
                
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={onHandleChange}
                  fullWidth
                  style={{
                    marginTop: 4,
                    marginBottom: 1,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
                <Typography
                  variant="caption"
                >
                  Por favor ingresa tu email
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Télefono"
                  variant="outlined"
                  name="phone"
                  value={phone}
                  onChange={onHandleChange}
                  fullWidth
                  style={{
                    marginTop: 4,
                    marginBottom: 1,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
                <Typography
                  variant="caption"
                >
                  Por favor ingresa tu numero de 10 digitos
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Agencias"
                  variant="outlined"
                  name="store"
                  value={store}
                  onChange={onHandleChange}
                  fullWidth
                  select 
                  SelectProps={{ native: true }}
                  style={{
                    marginTop: 4,
                    marginBottom: 1,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                >
                {vehicle.availableStore.map((store) => (
                      <option key={store.dpxStore} value={store.dpxStore}
                      style={{
                        textTransform: "capitalize",
                      }}>
                        {store.make.name} {store.name}
                      </option>
                    ))}
                </TextField>
                <Typography
                  variant="caption"
                >
                  Por favor seleccione la agencia
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Tiempo de compra"
                  variant="outlined"
                  name="timeFrame"
                  value={timeFrame}
                  onChange={onHandleChange}
                  fullWidth
                  select 
                  SelectProps={{ native: true }}
                  style={{
                    marginTop: 4,
                    marginBottom: 1,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                >
                {timeFrames && timeFrames.map(timeFrame => (
                      <option key={timeFrame.id} value={timeFrame.value}>
                        {timeFrame.value}
                      </option>
                    ))}
                </TextField>
                <Typography
                  variant="caption"
                >
                  Por favor seleccione su tiempo de compra
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Enganche"
                  variant="outlined"
                  name="downPayment"
                  value={downPayment}
                  onChange={onHandleChange}
                  fullWidth
                  style={{
                    marginTop: 4,
                    marginBottom: 1,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
                <Typography
                  variant="caption"
                >
                  Por favor ingresa el enganche que quieres dar
                </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={(dissableButton || vehicle.availableStore.length <= 0)?true:false}
              >
                Cotizar
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