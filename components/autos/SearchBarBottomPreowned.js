import React from "react";
import { Grid, TextField, Box } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { capitalCase } from "change-case";
import _ from 'lodash'
import useStore from '../../hooks/useStore'
import {makeStyles} from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

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
    name: "Mayor Precio",
    value: 'price,1',
  },
  {
    name: "Menor Precio",
    value: 'price,-1',
  },
  {
    name: "Mas Reciente",
    value:  'createdAt,-1',
  },
  {
    name: "Mas Antiguo",
    value: 'createdAt,1',
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    event.preventDefault()
    setPage(1);
    setStore(event.target.value);
  };
  const handleChangeest = (event) => {
    event.preventDefault()
    setPage(1);
    setAddress(event.target.value);
  };
  const handleData = (event) => {
    setDatasort(event.target.value);
    console.log(event.target.value);
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
      style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 20 }}
    >
      <Grid item xs={12} sm={3} md={3} lg={3}>
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
      <Grid item xs={12} sm={3} md={3} lg={3}>
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
          {stores.filter(s => s._id !== '6269ae3be8436b4af342ac97').sort((a,b)=> {

            if(a.make.name < b.make.name) return -1
            return 1
          }).map((item) => <option key={item.name} value={item._id}>{capitalCase(item.make.name.replace("-", " ") + ' ' + item.name)}</option>)}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={3} md={3} lg={3}>
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
    <Grid item xs={3}>
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
          <Box style={{width:"100%", justifyContent:"flex-end", display:"flex"}}>
              
            <TextField
              style={{
                backgroundColor: "#f3f7f9",
                border: "0px solid rgb(217, 221, 233)",
                borderRadius: 10,
              }}
              select
              label="Ordenar Por:"
              value={datasort}
              onChange={handleData}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <option key={0} value={"-"}>
                No Aplica
              </option>
              {options.map((option) => (
                <option
                  key={option.name}
                  value={option.value}
                  style={{ color: "#a5a5a" }}
                >
                  {option.name}
                </option>
              ))}
            </TextField>
          </Box>
      </Grid>

    </Grid>
  );
};

export default SearchBarBottom;

