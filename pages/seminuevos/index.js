import React, { useState, useEffect } from "react";
import { Container, Divider } from "@material-ui/core";
import CarList from "../../components/autos/CarListPreowned";
import SearchBar from "../../components/autos/SearchBarPreowned";
import Meta from "../../components/Meta";
import Pagination from "../../components/Pagination";
import usePreowned from "../../hooks/usePreowned";
import Banner from "../../components/Banner";
import { baseURL } from "../../api/api";

const Index = ({ preownedsSP, total, stores, categories }) => {

  const { preowneds, getPreowneds, loading, results } = usePreowned();
  const [disableTopBar, setDisableTopBar] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [store, setStore] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");

  const changePage = (event, value) => setPage(value);

  useEffect(() => {
    getPreowneds(
      page,
      `${query}${store !== '-' ? `&store=${store}` : ''}${category !== '-' ? `&modelType=${category}` : ''}&prices=${sort}&sort=-createdAt`
    );
    //eslint-disable-next-line
  }, [page, store, category, sort]);


  return (
    <>
      <Meta title="Busca tu Auto - Car One Group" description="Busca tu Auto Seminuevo"/>

      <Container maxWidth="lg">
        <SearchBar
          setQuery={setQuery}
          query={query}
          stores={stores}
          categories={categories}
          setCategory={setCategory}
          setStore={setStore}
          category={category}
          store={store}
          disableTopBar={disableTopBar}
          setPage={setPage}
          sort={sort}
          setSort={setSort}
        />
        <Divider style={{ marginBottom: "50px" }} />
        {preowneds ? (
          <CarList vehicles={preowneds} loading={loading} />
        ) : (
          <CarList vehicles={preownedsSP} loading={loading} />
        )}
        <Pagination
          total={results !== null ? results : total}
          page={page}
          limit={12}
          changePage={changePage}
        />
      </Container>
    </>
  );
};
export const getStaticProps = async (context) => {
  const res = await fetch(`${baseURL}/preowneds?page=1&limit=12&sort=-createdAt`);
  const preowneds = await res.json();

  const storesRes = await fetch(`${baseURL}/stores`);
  const categoriesRes = await fetch(`${baseURL}/categories`);

  const stores = await storesRes.json();
  const categories = await categoriesRes.json();

  return {
    props: {
      preownedsSP: preowneds.data,
      stores: stores.data,
      categories: categories.data,
      total: preowneds.pagination.total,
    },
  };
};

export default Index;
