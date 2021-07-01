import React from "react";
import { TextField } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import useJob from "../../hooks/useJob";

const SearchBarTop = ({ setQuery, query, disableTopBar, store, category, sort }) => {

  const { getJobs } = useJob();

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  }

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      getJobs(1, `${query}&store=${store}&category=${category}&salaries=${sort}`)
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
        placeholder="Busca empleos o palabras clave"
        variant="outlined"
        onKeyUp={handleKeyUp}
        fullWidth
        disabled={disableTopBar}
        value={query}
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
