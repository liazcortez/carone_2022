import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import NumberFormat from "react-number-format";
import ModalComponent from "./ModalComponent";
import FormComponent from "./FormComponent";

const useStyles = makeStyles({
  table: {
    // minWidth: 500,
  },
});

const Financing = ({ vehicle }) => {
  const classes = useStyles();

  const { versions } = vehicle;

  const [finance, setFinance] = React.useState({
    version: {
      modelo: versions.length !== 0 ? versions[0].name : null,
      precio: versions.length !== 0 ? versions[0].price : null,
    },
    plazo: 48,
    enganche: 50000,
    mensualidad: 0,
    tasa: 14.95,
    iva: 0.16
  });


  const getQuote = (precio, enganche, plazo, tasa, iva) => {
        
    //Precio total a pagar
    const VA = precio - enganche
    
    //Rango de tiempo a pagar
    const NPER = parseInt(plazo)
    
    //Calcular la tasa de C1
    const TASA = (tasa / 12) * (1 + iva)
    
    //Calcular el pago
    const PAGO = VA * TASA / ( 1 - ( 1 + TASA ) ^ ( NPER * -1 ) )
    
    return PAGO
  }

  const handleonChange = (e) => {
    setFinance({ ...finance, [e.target.name]: e.target.value });
  };

  const handleonChangeVersion = (e) => {
    const versionFinal = versions.filter((v) => v.name === e.target.value);
    const version = {
      modelo: versions.length !== 0 ? versionFinal[0].name : null,
      precio: versions.length !== 0 ? versionFinal[0].price : null,
    };

    setFinance({ ...finance, version });
  };

  return (
    <>
      <Typography
        align="center"
        variant="h5"
        component="h3"
        style={{
          marginBottom: 20,
          color: "#656d78",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Plan de Financiamiento
      </Typography> 
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span style={{ fontWeight: "bold" }}>Modelo</span>
              </TableCell>
              <TableCell>
                {vehicle.model.toUpperCase()} {vehicle.year}{" "}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                <span style={{ fontWeight: "bold" }}>Version</span>
              </TableCell>
              <TableCell>
                {finance.version.modelo && finance.version.modelo.toUpperCase()}{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <span style={{ fontWeight: "bold" }}>Precio</span>
              </TableCell>

              <TableCell>
                <NumberFormat
                  value={finance.version.precio}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  suffix={" MXN"}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <span style={{ fontWeight: "bold" }}>Enganche</span>
              </TableCell>
              <TableCell>
                <NumberFormat
                  value={finance.enganche}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                  suffix={" MXN"}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <span style={{ fontWeight: "bold" }}>Plazo</span>
              </TableCell>
              <TableCell>{finance.plazo} meses</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                <span style={{ fontWeight: "bold" }}>Pago Mensual </span>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Box>
                    <NumberFormat
                      value={getQuote(
                        finance.version.precio,
                        finance.enganche,
                        finance.plazo,
                        finance.tasa,
                        finance.iva
                      )}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      suffix={" MXN"}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      style={{
                        fontSize: "23px",
                        fontWeight: "bolder",
                      }}
                    />
                  </Box>
                  <Box>
                    <ModalComponent
                      handleonChange={handleonChange}
                      versions={versions}
                      handleonChangeVersion={handleonChangeVersion}
                      plazo={finance.plazo}
                      enganche={finance.enganche}
                    />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        variant="body1"
        gutterBottom
        align="center"
        style={{
          marginBottom: 15,
          marginTop: 20,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Financiamiento a {finance.plazo} meses con enganche de{" "}
        <NumberFormat
          value={finance.enganche}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />{" "}
        MXN{" "}
      </Typography> 

      <FormComponent vehicle={vehicle} />
      <span style={{ color: "#232323" }}>
        * Mensualidad estimada no incluye seguro del auto, para mas información
        consulta terminos y condiciones.
      </span>
    </>
  );
};

export default Financing;
