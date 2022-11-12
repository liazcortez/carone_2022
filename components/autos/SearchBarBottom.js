import React from "react";
import { Grid, TextField, Menu, MenuItem, Button, Box, Typography, List, ListItem, ListItemText} from "@mui/material";
import { capitalCase } from "change-case";
import useVehicles from "../../hooks/useVehicle";
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
    name: "Entre $250,001 y $350,000",
    value: "250001/350000",
  },
  {
    name: "Entre $350,001 y $450,000",
    value: "350001/450000",
  },
  {
    name: "Entre $450,001 y $650,000",
    value: "450001/650000",
  },
  {
    name: "Entre $650,001 y $900,000",
    value: "650001/900000",
  },
  {
    name: "Mayor a $900,001",
    value: "mayor900001",
  },
];
const options = [
  'No aplica',
  'mayor precio',
  'menor precio',
  'mas antiguo',
  'menos antiguo',
];

const classes ={
  root: {
    "& .MuiTextFieldRoot": {
      margin: 2,
    },
    paddingLeft: 0, 
    paddingRight: 0, 
    marginBottom: 20,
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

  const { vehicles, getVehicles, loading, results, clearState } = useVehicles();

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    //mayor precio
    if(index === 1){
      getVehicles.sort( function(a,b) {
        if (a.price > b.price) {
          return 1;
        }
        console.log(vehicles);
      })
    }
    //menor precio
    else if(index === 2){
      getVehicles.sort( function(a,b) {
        if (a.price < b.price) {
          return -1;
        }
        console.log(vehicles);
      })
    }
    //mas antiguo
    else if(index === 3){
      getVehicles.sort( function(a,b) {
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        console.log(vehicles);
      })
    }
    //menos antiguo
    else if(index === 4){
      getVehicles.sort( function(a,b) {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        console.log(vehicles);
      })
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      style={classes.root}
      spacing={1}
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
      <Grid item xs={12}>
          <Box style={{width:"100%", justifyContent:"flex-end", display:"flex"}}>
              <List
                component="nav"
                aria-label="Device settings"
              >
                <ListItem
                  button
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-label="ordenar-por"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickListItem}
                >
                  <ListItemText
                    primary="Ordenar Por:"
                    secondary={options[selectedIndex]}
                  />
                </ListItem>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'lock-button',
                  role: 'listbox',
                }}
              >
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
          </Box>
      </Grid>
    </Grid>
  );
};

export default SearchBarBottom;
