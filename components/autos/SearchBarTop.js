import React , {useState}from "react";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBarTop = ({ setQuery, query, disableTopBar, make, category, sort, setPage}) => {

  const [localQuery,setLocalQuery] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    setLocalQuery(event.target.value);
  }

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      setPage(1);
      setQuery(localQuery);
      // getVehicles(1, `${query}&make=${make}&category=${category}&prices=${sort}`)
    }
  }

  return (
    <div style={{ marginBottom: 10 }}>
      <TextField
        style={{
          backgroundColor: "#f3f7f9",
          border: "0px solid rgb(217, 221, 233)",
          borderRadius: 10,
        }}
        id="outlined-basic"
        placeholder="Busca marcas, modelos o palabras clave"
        variant="outlined"
        onKeyUp={handleKeyUp}
        fullWidth
        disabled={disableTopBar}
        value={localQuery}
        onChange={handleChange}
        name="query"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: " #a5a5a5" }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBarTop;
