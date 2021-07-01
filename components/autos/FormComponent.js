import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import StoreIcon from "@material-ui/icons/Store";
import StoreMallDirectoryOutlinedIcon from "@material-ui/icons/StoreMallDirectoryOutlined";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
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
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  selectedBorder: {
    border: "1px solid #5e72e4",
  },

  unselectedBorder: {
    border: "1px solid #252525",
  },
});

const FormComponent = ({ vehicle }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [storeIcon, setStoreIcon] = React.useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    downPayment: "",
    store: "",
    vehicle: vehicle._id,
    make: vehicle.make._id,
    year: vehicle.year,
    source: "5fc523e5ba8f7c09d5dd94aa",
  });

  const { name, email, phone, timeFrame, downPayment } = formData;

  const onClickStore = (store) => {
    setStoreIcon(store._id);
    setFormData({ ...formData, store: store._id });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

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
      const response = await axios.post(
        "https://dealerproxapi.com/api/v1/leads",
        lead,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    sendLead(formData);
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        fullWidth
        size="large"
      >
        Solicitar Cotización
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <Typography
          variant="h6"
          component="p"
          id="form-dialog-title"
          style={{ textAlign: "center", marginTop: 20 }}
        >
          Contactar un Asesor
        </Typography>
        <DialogContent>
          <Box>
            <form onSubmit={onHandleSubmit}>
              <Box
                style={{
                  padding: 20,
                  borderRadius: 10,
                  marginBottom: 10,
                  border: "1px solid #dbf2ff",
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  style={{ marginBottom: 10 }}
                >
                  1. Datos Personales
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={name}
                  onChange={onHandleChange}
                  style={{
                    marginBottom: 10,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={onHandleChange}
                  fullWidth
                  style={{
                    marginBottom: 10,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Télefono"
                  variant="outlined"
                  name="phone"
                  value={phone}
                  onChange={onHandleChange}
                  fullWidth
                  style={{
                    marginBottom: 10,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
              </Box>

              <Box
                style={{
                  border: "1px solid #dbf2ff",
                  padding: 20,
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  style={{ marginBottom: 10 }}
                >
                  2. Selecciona la Agencia de Preferencia
                </Typography>
                <Box display="flex" flexDirection="row">
                  {vehicle.availableStore &&
                    vehicle.availableStore.map((store) => (
                      <Box
                        className={
                          storeIcon === store._id
                            ? classes.selectedBorder
                            : classes.unselectedBorder
                        }
                        key={store._id}
                        
                        onClick={() => onClickStore(store)}
                        style={{
                          cursor: "pointer",
                          borderRadius: 10,
                          padding: 5,
                          margin: 10,
                          marginRight: 15
                        }}
                      >
                        <Box display="flex" justifyContent="center">
                          <StoreIcon
                            style={{ fontSize: 50 }}
                            color={
                              storeIcon === store._id ? "primary" : "inherit"
                            }
                          />
                        </Box>
                        <Box display="flex" justifyContent="center">
                          <Typography
                            variant="body2"
                            gutterBottom
                            style={{ textTransform: "capitalize" }}
                          >
                            {vehicle.make.name} {store.name}
                          </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                          {storeIcon === store._id ? (
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
                    ))}
                </Box>
              </Box>
              <Box
                style={{
                  border: "1px solid #dbf2ff",
                  padding: 20,
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
                  style={{
                    marginBottom: 10,
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
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
                    border: "1px solid #dbf2ff",
                    borderRadius: 10,
                  }}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Cotizar
              </Button>
            </form>
            <Typography variant="body2" gutterBottom>
              * Nunca compartiremos tus datos con nadie más.
            </Typography>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default FormComponent;
