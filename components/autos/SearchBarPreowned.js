import React from "react";
import { Container } from "@mui/material";
import SearchBarTop from "./SearchBarTopPreowned";
import SearchBarBottom from "./SearchBarBottomPreowned";

const SearchBar = ({ setQuery, query, stores, categories, setCategory, setStore, category, store, disableTopBar, setPage, sort, setSort, address, setAddress}) => {
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
        store={store}
        sort={sort}
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
        address={address}
        setAddress={setAddress}
        />
    </Container>
  );
};

export default SearchBar;
