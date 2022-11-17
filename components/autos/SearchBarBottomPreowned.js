import React, { useRef } from "react";
import { Grid, TextField, Box, Typography } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { capitalCase } from "change-case";
import _ from 'lodash'
import useStore from '../../hooks/useStore'
import { makeStyles } from '@mui/styles';
import { useState } from "react";


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
//Variables del sort 
const options = [
  {
    name: "Menor Precio",
    value: 'price,1',
  },
  {
    name: "Mayor Precio",
    value: 'price,-1',
  },
  {
    name: "Más Reciente",
    value: 'createdAt,-1',
  },
  {
    name: "Más Antiguo",
    value: 'createdAt,1',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: 1,
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
  setCategory,
  setStore,
  category,
  store,
  setPage,
  sort,
  setSort,
  address,
  setAddress,
  datasort,
  setDatasort
}) => {
  const classes = useStyles();
  const anchorEl = useRef(null)
  const [open, setOpen] = useState(false)
  const [namedata, setNamedata] = useState("Más Reciente");

  const handleChange = (event) => {
    event.preventDefault()
    setPage(1);
    setAddress('-');
    setStore(event.target.value);
  };
  const handleChangeest = (event) => {
    event.preventDefault()
    setPage(1);
    setStore('-');
    setAddress(event.target.value);
  };
  const handleData = (value, name) => {
    setDatasort(value);
    setNamedata(name);
  };

  const { getStores, stores } = useStore();

  React.useEffect(() => {
    getStores()
    //eslint-disable-next-line
  }, []);

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
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <Grid item xs={12} sm={6} md={3} lg={3}>
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
              { name: 'Sedán', value: 'sedan' },
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
      <Grid item xs={12} sm={6} md={3} lg={3}>
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
            Todas las agencias
          </option>
          {stores.filter(s => s._id !== '6269ae3be8436b4af342ac97').sort((a, b) => {

            if (a.make.name < b.make.name) return -1
            return 1
          }).map((item) => <option key={item._id} value={item._id}>{capitalCase(item.make.name.replace("-", " ") + ' ' + item.name)}</option>)}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3}>
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
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <TextField
          style={{
            backgroundColor: "#f3f7f9",
            border: "0px solid rgb(217, 221, 233)",
            borderRadius: 10,
          }}
          select
          fullWidth
          label="Búsqueda por estado"
          value={address}
          onChange={handleChangeest}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          <option key={0} value={"-"}>
            Todos los Estados
          </option>
          {
            [
              { name: 'Aguascalientes', value: 'Ags' },
              { name: 'Baja California', value: 'BC' },
              { name: 'Baja California Sur', value: 'BCS' },
              { name: 'Campeche', value: 'Camp' },
              { name: 'Chiapas', value: 'Chis' },
              { name: 'Chihuahua', value: 'Chih' },
              { name: 'Coahuila', value: 'Coah' },
              { name: 'Colima', value: 'Col' },
              { name: 'Ciudad de Mexico', value: 'CMX' },
              { name: 'Durango', value: 'Dgo' },
              { name: 'Guanajuato', value: 'Gto' },
              { name: 'Guerrero', value: 'Gro' },
              { name: 'Hidalgo', value: 'Hgo' },
              { name: 'Jalisco', value: 'Jal' },
              { name: 'México', value: 'Edomex' },
              { name: 'Michoacán', value: 'Mich' },
              { name: 'Morelos', value: 'Mor' },
              { name: 'Nayarit', value: 'Nay' },
              { name: 'Nuevo León', value: 'NL' },
              { name: 'Oaxaca', value: 'Oax' },
              { name: 'Puebla', value: 'Pue' },
              { name: 'Querétaro', value: 'Qro' },
              { name: 'Quintana Roo', value: 'QRoo' },
              { name: 'San Luis Potosí', value: 'SLP' },
              { name: 'Sinaloa', value: 'Sin' },
              { name: 'Sonora', value: 'Son' },
              { name: 'Tabasco', value: 'Tab' },
              { name: 'Tamaulipas', value: 'Tamps' },
              { name: 'Tlaxcala', value: 'Tlax' },
              { name: 'Veracruz', value: 'Ver' },
              { name: 'Yucatán', value: 'Yuc' },
              { name: 'Zacatecas', value: 'Zac' },
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
      {/*Aqui empieza el sort */}
      <Grid item xs={12}>
        <Box display='flex' justifyContent='flex-end' style={{ width: "100%" }}>

          <Box display='flex' ref={anchorEl} onClick={() => setOpen(true)}>
            <Typography variant='body1' style={{ fontWeight: 500 }}>Ordenar Por:</Typography>
            <Typography variant='body1' style={{ color: "#05418b", marginLeft: '0.5em' }}>{' '}{namedata}</Typography>
            {
              datasort.includes(',-1')
                ? <ArrowDropUpIcon style={{ color: "#05418b" }} />
                : <ArrowDropDownIcon style={{ color: "#05418b" }} />
            }
          </Box>

          <Menu
            anchorEl={anchorEl.current}
            open={open}
            onChange={handleData}
            onClose={() => setOpen(false)}
          >
            {
              options.map((option) =>
                <MenuItem key={option.name} value={option.value} onClick={() => handleData(option.value, option.name)}>
                  {option.name}
                </MenuItem>
              )
            }
          </Menu>
        </Box>

      </Grid>

    </Grid>
  );
};

export default SearchBarBottom;

