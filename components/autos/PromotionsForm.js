import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import StoreIcon from "@material-ui/icons/Store";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import { useSnackbar } from "notistack";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles({
  selectedBorder: {
    border: "1px solid #5e72e4",
  },
  input: {
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
  
  const { name, email, phone, timeFrame, downPayment } = formData;

  const onClickStore = (store) => {
    setStoreIcon(store.dpxStore);
    setFormData({ ...formData, store: store.dpxStore });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onHandleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <div style={{}}>
      <Card>
        <CardContent>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Contactar un Asesor
        </Typography>
          <Box>
            <form onSubmit={onHandleSubmit}>
              <Box
                style={{
                  marginBottom: '1em',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5em'
                }}
              >
                <Typography variant="h6">
                  1. Datos Personales
                </Typography>
                <TextField
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={name}
                  inputProps={{className: classes.input}}
                  onChange={onHandleChange}
                />
                <Box display={'flex'} gap='0.5em'>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={email}
                    onChange={onHandleChange}
                    fullWidth
                    inputProps={{className: classes.input}}
                  />
                  <TextField
                    label="Télefono"
                    variant="outlined"
                    name="phone"
                    value={phone}
                    onChange={onHandleChange}
                    fullWidth
                    inputProps={{className: classes.input}}
                  />
                </Box>
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  component="p"
                  style={{ marginBottom: 10 }}
                >
                  2. Selecciona la Agencia de Preferencia
                </Typography>
                <Box className={classes.makesStyles}>
                  {vehicle.availableStore &&
                    vehicle.availableStore.map((store) => (
                      <Box>
                        <Box
                        display='flex' flexDirection={'column'} justifyContent='space-between'
                          className={
                            storeIcon === store.dpxStore
                              ? classes.selectedBorder
                              : classes.unselectedBorder
                          }
                          key={store.dpxStore}
                          onClick={() => onClickStore(store)}
                          style={{
                            cursor: "pointer",
                            borderRadius: 10,
                            padding: 5,
                            margin: 0,
                            marginRight: 0,
                            height: 150 
                            // height: 180 
                          }}
                        >
                          <Box display="flex" justifyContent="center">
                            <StoreIcon
                              style={{ fontSize: 50 }}
                              color={
                                storeIcon === store.dpxStore ? "primary" : "inherit"
                              }
                            />
                          </Box>
                          <Box display="flex" justifyContent="center">
                            <Typography
                              variant="body2"
                              gutterBottom
                              style={{ textTransform: "capitalize" }}
                            >
                              {store.make.name} {store.name}
                            </Typography>
                          </Box>
                          <Box display="flex" justifyContent="center">
                            {storeIcon === store.dpxStore ? (
                              <CheckBoxOutlinedIcon
                                color={
                                  storeIcon === store._id ? "primary" : "inherit"
                                }
                              />
                            ) : (
                              <CheckBoxOutlineBlankOutlinedIcon
                                color={
                                  storeIcon === store._id ? "primary" : "inherit"
                                }
                              />
                            )}
                          </Box>
                        </Box>
                        
                      </Box>
                    ))}
                </Box>
              </Box>
              <Box
                style={{
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  style={{ marginBottom: 10 }}
                >
                  3. Datos de Compra
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
                    marginBottom: 10,
                    borderRadius: 10,
                  }}
                >
                {timeFrames && timeFrames.map(timeFrame => (
                      <option key={timeFrame.id} value={timeFrame.value}>
                        {timeFrame.value}
                      </option>
                    ))}
                </TextField>
                <TextField
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
                />
              </Box>
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
        </CardContent>
      </Card>
    </div>
  );
};

export default FormComponent;