import React from "react";
import { makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CarComparative = ({ versions }) => {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Features</TableCell>
              {versions.map((version) => (
                <TableCell align="right">
                  <img
                    src={version.image}
                    style={{
                      width: "100px",
                    }}
                  />{" "}
                  <br />
                  {version.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Feature 1
              </TableCell>
              <TableCell align="right">yes</TableCell>
              <TableCell align="right"> yes</TableCell>
              <TableCell align="right">yes</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CarComparative;
