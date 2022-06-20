import React from "react";
import { makeStyles } from "@mui/styles";
import { Button, Dialog } from "@mui/material";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ModalComponent = ({
  handleonChange,
  versions,
  handleonChangeVersion,
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const [enganche, setEnganche] = React.useState();

  const [engancheList, setEngancheList] = React.useState([
    {
      label: "$10,000",
      value: 10000,
    },
    {
      label: "$20,000",
      value: 20000,
    },
    {
      label: "$30,000",
      value: 30000,
    },
    {
      label: "$40,000",
      value: 40000,
    },
    {
      label: "$50,000",
      value: 50000,
    },
    {
      label: "$80,000",
      value: 80000,
    },
    {
      label: "$90,000",
      value: 90000,
    },
    {
      label: "$100,000",
      value: 100000,
    },
  ]);

  const [plazoList, setPlazoList] = React.useState([
    {
      label: "12 meses",
      value: 12,
    },
    {
      label: "24 meses",
      value: 24,
    },

    {
      label: "32 meses",
      value: 32,
    },
    {
      label: "48 meses",
      value: 48,
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Personalizar cotizacion</h2>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            style={{ marginBottom: 15 }}
            fullWidth
            id="outlined-select-currency-native"
            select
            label="Versiones"
            name="versions"
            value={enganche}
            onChange={(e) => handleonChangeVersion(e)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {versions.map((option) => (
              <option key={option._id} value={option.name}>
                {option.name.toUpperCase()}
              </option>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 15 }}
            fullWidth
            id="outlined-select-currency-native"
            select
            label="Enganche"
            name="enganche"
            value={enganche}
            onChange={(e) => handleonChange(e)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {engancheList.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 15 }}
            fullWidth
            id="outlined-select-currency-native"
            select
            label="Plazo"
            name="plazo"
            value={enganche}
            onChange={(e) => handleonChange(e)}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {plazoList.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>

        <Button
          onClick={handleClose}
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Cerrar
        </Button>
      </form>
    </div>
  );

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
        <EditIcon style={{ marginRight: 10, fontSize: 18 }} />
      </Button> */}

      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={handleOpen}
      >
        <EditIcon style={{ marginRight: 5, fontSize: 18 }} />{" "}
      </IconButton>
      <Dialog maxWidth="md" open={open} onClose={handleClose}>
        {body}
      </Dialog>
    </>
  );
};

export default ModalComponent;
