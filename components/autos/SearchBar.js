import React from "react";
import { Container } from "@material-ui/core";
import SearchBarTop from "./SearchBarTop";
import SearchBarBottom from "./SearchBarBottom";

const SearchBar = ({ setQuery, query, makes, categories, setCategory, setMake, category, make, disableTopBar, setPage, sort, setSort }) => {
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
        />
    </Container>
  );
};

export default SearchBar;
