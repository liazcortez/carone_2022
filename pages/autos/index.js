import React, { useState, useEffect } from "react";
import { Container, Divider } from "@material-ui/core";
import CarList from "../../components/autos/CarList";
import SearchBar from "../../components/autos/SearchBar";
import Meta from "../../components/Meta";
import Pagination from "../../components/Pagination";
import useVehicles from "../../hooks/useVehicle";
import Banner from "../../components/Banner";
import { baseURL } from "../../api/api";

const Index = ({ vehiclesSP, total, makes, categories }) => {

  const { vehicles, getVehicles, loading, results } = useVehicles();
  const [disableTopBar, setDisableTopBar] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [make, setMake] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");

  const changePage = (event, value) => setPage(value);

  useEffect(() => {
    getVehicles(
      page,
      `${query}&make=${make}&category=${category}&prices=${sort}`
    );
    //eslint-disable-next-line
  }, [page, make, category, sort]);


  return (
    <>
      <Meta title="Busca tu Auto - Car One Group" description="Busca tu Auto Nuevo"/>

<Container maxWidth="lg">
  <SearchBar
    setQuery={setQuery}
    query={query}
    makes={makes}
    categories={categories}
    setCategory={setCategory}
    setMake={setMake}
    category={category}
    make={make}
    disableTopBar={disableTopBar}
    setPage={setPage}
    sort={sort}
    setSort={setSort}
  />
  <Divider style={{ marginBottom: "50px" }} />
  {vehicles ? (
    <CarList vehicles={vehicles} loading={loading} />
  ) : (
    <CarList vehicles={vehiclesSP} loading={loading} />
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
  const baseURL = "https://apicarone.com/api/v1"
  const res = await fetch(`${baseURL}/vehicles?page=1&limit=12&sort=index`);
  const vehicles = await res.json();

  const makesRes = await fetch(`${baseURL}/makes`);
  const categoriesRes = await fetch(`${baseURL}/categories`);

  const makes = await makesRes.json();
  const categories = await categoriesRes.json();

  return {
    props: {
      vehiclesSP: vehicles.data,
      makes: makes.data,
      categories: categories.data,
      total: vehicles.pagination.total,
    },
  };
};

export default Index;
