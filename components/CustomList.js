import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  TextField,
  InputAdornment,
  TableBody,
  TablePagination,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  IconButton,
  Chip,
} from "@mui/material";
import HandleTableCellData from "./HandleTableCellData";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import AdvancedModal from "./AdvancedSearch/AdvancedModal";

export default function List({ tableKeys = [], getData, data = [], count, userParams }) {
  const defaultState = {
    page: 1,
    limit: 15,
    searching: true,
    sort: "createdAt,-1",
    ...userParams
  };
  // const [sort,setSort] = useState({name:'createdAt',value:-1});
  const [params, setParams] = useState(defaultState);


  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (params && !params.searching) return;
    if (getData) {
      let newParams = {};
      // formatparams
      Object.entries(params).forEach((row) => {
        let [name, input] = row;
        newParams[(input && input.searchName)?input.searchName:name] = (typeof input.value !== 'undefined') ? input.value : input;
      });
      getData(newParams);
      setParams({ ...params, searching: false });
      setOpen(false);
    }
  }, [params]);

  const handlePageChange = (event, newPage) => {
    setParams({ ...params, page: newPage + 1, searching: true });
  };

  const handleLimitChange = (event) => {
    let limit = parseInt(event.target.value);
    setParams({ ...params, page: 1, limit: limit, searching: true });
  };

  const handleSearch = (e) => {
    if (e.keyCode == 13 && !open) {
      setParams({ ...params, search: e.target.value, searching: true });
    }
  };

  const handleSort = (sort) => {
    if (params && !params.sort) return;
    let [sortName, sortValue] = params.sort.split(",");
    if (sortName === sort)
      return setParams({
        ...params,
        sort: `${sort},${sortValue * -1}`,
        searching: true,
      });
    setParams({ ...params, sort: `${sort},-1`, searching: true });
  };

  const handleTableCellHeader = (key) => (
    <TableCell style={{ textTransform: "capitalize" }} key={key.name}>
      <Box display="flex" justifyContent="start" alignItems="center" sx={{color:'rgb(103, 119, 136)',textTransform:'uppercase'}}>
        {key.label ? key.label : key.name}
        {key.sort && (
          <IconButton
            color="primary"
            aria-label="sort"
            onClick={() => handleSort(key.sort)}
          >
            {params &&
            params.sort.includes(key.sort) &&
            params.sort.includes("-1") ? (
              <ArrowDropUpIcon />
            ) : (
              <ArrowDropDownIcon />
            )}
          </IconButton>
        )}
      </Box>
    </TableCell>
  );

  const handleDelete = (key) => {
    let newFilters = params;
    delete newFilters[key];
    setParams({ ...newFilters, searching: true });
  };
  const handleDeleteAll = () => {
    setParams({ ...defaultState });
  };

  const handleFilters = (row, index) => {
    const [key, value] = row;
    if (defaultState[key]) return null;
    return (
      <Grid key={index}>
        <Chip
          sx={{ textTransform: "capitalize" }}
          variant="outlined"
          label={`${key} : ${value.text ? value.text : value}`}
          onDelete={() => handleDelete(key)}
        />
      </Grid>
    );
  };

  const handleDeleteAllFilters = () => {
    var defaultStateSize = Object.keys(defaultState).length;
    var paramsSize = Object.keys(params).length;
    if (paramsSize <= defaultStateSize) return null;

    return (
      <Grid>
        <Chip
          sx={{ textTransform: "capitalize" }}
          variant="outlined"
          label={"Delete All"}
          onDelete={() => handleDeleteAll()}
        />
      </Grid>
    );
  };

  const handleTableRowData = (row, tableKeys) => {
    return (
      <TableRow
        key={row._id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 },height:'100px'}}
      >
        {tableKeys.map((tableKey, index) => (
          <HandleTableCellData
            key={row._id + index}
            row={row}
            tableKey={tableKey}
            index={index}
          />
        ))}
      </TableRow>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "1rem",
        boxShadow: 'rgb(140 152 164 / 25%) 0px 3px 6px 0px',
        borderRadius: "4px",
        borderTopLeftRadius: "4px",
        borderTopRightRadius: "4px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
      }}
    >
      {/* advanced search */}
      {false && (
        <Grid container m={3}>
          <Grid item xs={3}>
            <TextField
              sx={{ marginTop: "1rem" }}
              id="input-with-icon-textfield"
              fullWidth
              label="Search"
              onKeyDown={handleSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                // endAdornment: (
                //   <InputAdornment position="end">
                //     <AdvancedModal
                //       {...{
                //         params,
                //         setParams,
                //         open,
                //         setOpen,
                //         textValues,
                //         setTextValues,
                //       }}
                //     />
                //   </InputAdornment>
                // ),
              }}
              variant="outlined"
            />
          </Grid>
        </Grid>
      )}
      {false && (
        <Grid container gap={3} m={3}>
          {Object.entries(params).map((row, index) =>
            handleFilters(row, index)
          )}
          {handleDeleteAllFilters()}
        </Grid>
      )}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "rgb(247, 250, 255)" }}>
            <TableRow>
              {tableKeys &&
                tableKeys.length >= 1 &&
                tableKeys.map((key) => handleTableCellHeader(key))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row) => handleTableRowData(row, tableKeys))}
          </TableBody>
        </Table>
        <Divider />
        <TablePagination
          rowsPerPageOptions={[5, 15, 25, 50]}
          component="div"
          count={count ? count : 0}
          rowsPerPage={params.limit}
          page={params.page - 1}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
        />
      </TableContainer>
    </Box>
  );
}
