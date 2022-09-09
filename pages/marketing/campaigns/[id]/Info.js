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
import moment from "moment";
import HandleTableCellData from "../../../../components/HandleTableCellData";
const classes = {
  card: {
    boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
    borderRadius: "4px",
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
};


const Info = ({ campaign,tableKeys,title }) => {

const handleTableRowData = (row, tableKeys,key) => {
    return (
      <TableRow
	component="th" scope="row"
        key={key.name}
        // sx={{ "&:last-child td, &:last-child th": { border: 0 },height:'100px'}}
      >
	<TableCell>
        {key.label ? key.label : key.name}
	</TableCell>
          <HandleTableCellData
            row={row}
            tableKey={key}
          />
      </TableRow>
    );
  };
  return (
    <Card elevation={0} sx={classes.card}>
      <CardHeader
        title={title}
        sx={{
          color: "rgb(103, 119, 136)",
          textTransform: "uppercase",
          backgroundColor: "rgb(247, 250, 255)",
        }}
      />
      <Table aria-label="simple table">
        <TableBody>
	 {tableKeys &&
                tableKeys.length >= 1 &&
                tableKeys.map((key) =>handleTableRowData(campaign, tableKeys,key))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Info;
