import React from "react";
import {
  TableBody,
  Table,
  TableCell,
  Card,
  TableHead,
  TableRow,
  CardHeader,
} from "@mui/material";
const classes = {
  card: {
    boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
    borderRadius: "4px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
    marginTop:'1rem'
  },
};

const DesignInfo = ({ campaign }) => {
  return (
    <Card elevation={0} sx={classes.card}>
      <CardHeader
        title={'Informacion del Diseño'}
        sx={{
          color: "rgb(103, 119, 136)",
          textTransform: "uppercase",
          backgroundColor: "rgb(247, 250, 255)",
        }}
      />
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Nombre
            </TableCell>
            <TableCell align="left">{campaign?.design?.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default DesignInfo;
