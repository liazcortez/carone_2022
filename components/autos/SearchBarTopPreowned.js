import React , {useState,useEffect}from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const SearchBarTop = ({ setQuery, query, disableTopBar, store, category, sort,setPage}) => {

  const [localQuery,setLocalQuery] = useState('');
  const [queryLoaded,setQueryLoaded] = useState(false)

  useEffect(() => {
    if(query === '' || queryLoaded)return
    setLocalQuery(query);
    setQueryLoaded(true);
  }, [query])

  

  const handleChange = (event) => {
    event.preventDefault();
    setLocalQuery(event.target.value);
  }

  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      setPage(1);
      setQueryLoaded(true);
      setQuery(localQuery);
      // getPreowneds(1, `${query}&store=${store}${category !== '-' ? `&modelType=${category}` : ''}&prices=${sort}`)
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
