import React from "react";
import { makeStyles, Grid, TextField } from "@material-ui/core";
import { capitalCase } from "change-case";

const sortOptions = [
  {
    name: "Menor a $150,000",
    value: "menor150000",
  },
  {
    name: "Entre $150,000 y $250,000",
    value: "150000/250000",
  },
  {
    name: "Mayor a $250,000",
    value: "mayor250000",
  },
];

const useStyles = makeStyles((theme) => ({
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
}));

const SearchBarBottom = ({
  stores,
  setCategory,
  setStore,
  category,
  store,
  setPage,
  sort,
  setSort,
}) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setPage(1);
    setStore(event.target.value);
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
      <Grid item xs={4} sm={4} md={4} lg={4}>
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
          { 
            [
              { name: 'Suv', value: 'suv' },
              { name: 'Sedán', value: 'Sedan' },
              { name: 'Pickup', value: 'pickup' },
              { name: 'HB', value: 'hb' },
              { name: 'Van', value: 'van' },
              { name: 'Comercial', value: 'comercial' },
            ].map((option) => (
            <option
              key={option.name}
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </TextField>
      </Grid> 
      <Grid item xs={6} sm={6} md={4} lg={4}>
        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          select
          fullWidth
          label="Agencia"
          value={store}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
            Todas
          </option>
          {stores.map((option) => {
            if(option._id !== '6269ae3be8436b4af342ac97')return <option key={option.name} value={option._id}>{capitalCase(option.make.name.replace("-", " ") + ' ' + option.name)}</option>
            return false;
          }
          )}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4}>
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
