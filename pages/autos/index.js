import React, { useState, useEffect } from "react";
import { Container, Divider, Grid, Box, Typography } from "@mui/material";
import SearchBar from "../../components/autos/SearchBar";
import Meta from "../../components/Meta";
import useVehicles from "../../hooks/useVehicle";
// import Banner from "../../components/Banner";
import { baseURL } from "../../api/api";
import InfiniteScroll from "react-infinite-scroll-component";
import CarListCard from "../../components/autos/CarListCard";
import CustomLoading from "../../components/CustomLoading";
import useStorage from "../../hooks/custom/useStorage";

const Index = ({ vehiclesSP, total, makes, categories }) => {
  const { vehicles, getVehicles, loading, results, clearState } = useVehicles();
  const { getItem, setItem, removeItem } = useStorage();

  const [disableTopBar, setDisableTopBar] = useState(false);
  const [infiniteVehicles, setInfiniteVehicles] = useState(false);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  const defaultLimit = 12;
  const [limit, setLimit] = useState(defaultLimit);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [make, setMake] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");
  const [last, setLast] = useState(false);
  const [datasort, setDatasort] = useState("-");

  const localStorageName = "carFilters";
  const lastClickedName = "lastClickedVehicle";
  const localStorageVersion = "1.0";

  useEffect(() => {
    const local = getItem(localStorageName);
    const lastClicked = getItem(lastClickedName);

    if (lastClicked) setLast(lastClicked);
    if (local) handleLocalStorage(local);
    else setLocalStorageLoaded(true);

    // setItem('algo','123')
  }, []);

  const handleLocalStorage = async (local) => {
    if (local?.localStorageVersion === localStorageVersion) {
      if (local?.page) {
        await setPage(local.page);
        await setLimit(local.page * defaultLimit);
      }
      if (local?.query) await setQuery(local.query);
      if (local?.make) await setMake(local.make);
      if (local?.category) await setCategory(local.category);
      if (local?.sort) await setSort(local.sort);
    }
    setLocalStorageLoaded(true);
  };

  useEffect(() => {
    if (!localStorageLoaded) return;
    handleReload();
    //eslint-disable-next-line
  }, [make, category, sort, query, localStorageLoaded]);

  const handleReload = async () => {
    if (infiniteVehicles) await setInfiniteVehicles([]);
    loadData();
  };

  useEffect(() => {
    if (vehicles && vehicles.length <= 0) return;
    setInfiniteVehicles([...(infiniteVehicles || []), ...vehicles]);
    clearState();
  }, [vehicles]);

  useEffect(() => {
    if (infiniteVehicles && infiniteVehicles.length <= 0) return;
    let lastDocument = document.getElementById(last);
    if (lastDocument && last) {
      const offsetTop = lastDocument.offsetTop - 10;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
      // removeItem(lastClickedName)
      setLast(false);
    }
    //eslint-disable-next-line
  }, [infiniteVehicles]);

  const loadData = () => {
    if (loading) return;
    setItem(localStorageName, {
      page,
      make,
      category,
      sort,
      query,
      localStorageVersion,
    });
    //funcion de como se pasaran los datos del sort
    let datos = "";
    switch (datasort) {
      case "mayorPrecio":
        datos = "price,1";
        break;
      case "menorPrecio":
        datos = "price,-1";
        break;
      case "masReciente":
        datos = "createdAt,-1";
        break;
      case "masAntiguo":
        datos = "createdAt,1";
        break;
    }
    getVehicles(
      limit === defaultLimit ? page : 1,
      `${query}&make=${make}&category=${category}&prices=${sort}&limit=${limit}`
    );
    setLimit(defaultLimit);
    setPage(page + 1);
  };

  const TitleNews = (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontSize: "35px", fontWeight: 600, display: "none" }}>
        Venta de Autos Nuevos México
      </Typography>
    </Box>
  );

  return (
    <>
      <Meta
        title="Autos nuevos en México - Carone Group"
        description="Venta de autos nuevos en México - Carone Group"
        url="https://carone.com.mx/autos"
        googlebot={"index,follow"}
        robots="all"
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "1em" }} />
        {TitleNews}
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
          datasort={datasort}
          setDatasort={setDatasort}
        />

        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={infiniteVehicles?.length || 0}
          next={loadData}
          hasMore={true}>
          <Box className="vehiclesGrid">
            {infiniteVehicles &&
              infiniteVehicles.map((vehicle, index) => (
                <CarListCard key={index} vehicle={vehicle} loading={loading} />
              ))}
          </Box>
        </InfiniteScroll>

        {loading && <CustomLoading />}

        {/* <Pagination
          total={results !== null ? results : total}
          page={page}
          limit={12}
          changePage={changePage}
        /> */}
      </Container>
    </>
  );
};
export const getStaticProps = async (context) => {
  const res = await fetch(`${baseURL}/vehicles?page=1&limit=12&sort=index`);
  const vehicles = await res.json();

  const makesRes = await fetch(`${baseURL}/makes?sort=name&isShown=true`);
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
