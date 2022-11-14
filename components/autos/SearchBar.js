import React from "react";
import { Container } from "@mui/material";
import SearchBarTop from "./SearchBarTop";
import SearchBarBottom from "./SearchBarBottom";

const SearchBar = ({ setQuery, query, makes, categories, setCategory, setMake, category, make, disableTopBar, setPage, sort, setSort, datasort, setDatasort}) => {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 20 }}
    >
      <SearchBarTop 
        setPage={setPage}
        query={query} 
        setQuery={setQuery} 
        disableTopBar={disableTopBar}
        category={category}
        make={make}
        sort={sort}
      />
      <SearchBarBottom 
        setPage={setPage}
        query={query} 
        setQuery={setQuery} 
        makes={makes} 
        categories={categories}
        setCategory={setCategory} 
        setMake={setMake} 
        category={category}
        make={make}
        setSort={setSort}
        sort={sort}
        datasort={datasort}
        setDatasort={setDatasort}
        />
    </Container>
  );
};

export default SearchBar;
