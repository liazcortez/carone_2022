import React from "react";
import { Grid, TextField } from "@mui/material";
import { capitalCase } from "change-case";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const sortOptions = [
  // {
  //   name: "Menor a $150,000",
  //   value: "menor150000",
  // },
  {
    name: "Entre $150,000 y $250,000",
    value: "150000/250000",
  },
  {
    name: "Entre $251,000 y $350,000",
    value: "251000/350000",
  },
  {
    name: "Entre $351,000 y $450,000",
    value: "351000/450000",
  },
  {
    name: "Entre $451,000 y $650,000",
    value: "451000/650000",
  },
  {
    name: "Entre $650,001 y $900,000",
    value: "651000/900000",
  },
  {
    name: "Mayor a $900,001",
    value: "mayor900001",
  },
];

const classes ={
  root: {
    "& .MuiTextField-root": {
      margin: 2,
    },
  },

  selectFields: {
    color: "red",
  },

  selectOption: {
    fontSize: 30,
  },
};

const SearchBarBottom = ({
  makes,
  categories,
  setCategory,
  setMake,
  category,
  make,
  setPage,
  sort,
  setSort,
}) => {

  const handleChange = (event) => {
    setPage(1);
    setMake(event.target.value);
  };

  const handleCategory = (event) => {
    setPage(1);
    setCategory(event.target.value);
  };

  const handleSort = (event) => {
    setPage(1);
    setSort(event.target.value);
  };
  return (
    <Grid
      container
      className={classes.root}
      spacing={1}
      style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 20 }}
    >
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          className={classes.selectFields}
          select
          label="Categoría"
          placeholder="Todas"
          fullWidth
          value={category}
          onChange={handleCategory}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
            Todas
          </option>
          {categories.map((option) => (
            <option
              key={option.name}
              value={option._id}
            >
              {capitalCase(option.name)}
            </option>
          ))}
        </TextField>
      </Grid> 
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          select
          fullWidth
          label="Marca"
          value={make}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
            Todas
          </option>
          {makes.map((option) => {
            if(option._id === "6269ad81e8436b4af342ac57")return false
            return(
              <option key={option.name} value={option._id}>
                {capitalCase(option.name.replace("-", " "))}
              </option>
            )
            })}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
      <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          select
          fullWidth
          label="Precio"
          value={sort}
          onChange={handleSort}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
          Todos
          </option>
          {sortOptions.map((option) => (
            <option
              key={option.name}
              value={option.value}
              style={{ color: "#a5a5a" }}
            >
              {option.name}
            </option>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};

export default SearchBarBottom;
