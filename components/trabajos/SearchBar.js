import React from "react";
import { Container } from "@mui/material";
import SearchBarTop from "./SearchBarTop";
import SearchBarBottom from "./SearchBarBottom";

const SearchBar = ({ setQuery, query, stores, categories, setCategory, setStore, category, store, disableTopBar, setPage, sort, setSort }) => {
  return (
    <Container
      maxWidth="lg"
      style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 20 }}
    >
      <SearchBarTop 
        query={query} 
        setQuery={setQuery} 
        disableTopBar={disableTopBar}
        category={category}
        store={store}
        sort={sort}
        setPage={setPage}
      />
      <SearchBarBottom 
        setPage={setPage}
        query={query} 
        setQuery={setQuery} 
        stores={stores} 
        categories={categories}
        setCategory={setCategory} 
        setStore={setStore} 
        category={category}
        store={store}
        setSort={setSort}
        sort={sort}
        />
    </Container>
  );
};

export default SearchBar;
