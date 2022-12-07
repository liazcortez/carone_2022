import React, { useState, useEffect } from "react";
import CarList from "../../components/autos/CarListPreowned";
import SearchBar from "../../components/autos/SearchBarPreowned";
import Meta from "../../components/Meta";
import Pagination from "../../components/Pagination";
import usePreowned from "../../hooks/usePreowned";
import { baseURL } from "../../api/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container, Divider, Grid, Box, Typography } from "@mui/material";
import CarListCard from "../../components/autos/CarListCardPreowned";
import CustomLoading from "../../components/CustomLoading";
import Spinner from "../../components/assets/Spinner";
import useStorage from "../../hooks/custom/useStorage";

const Index = ({ preownedsSP, total, stores, categories }) => {
  // hooks
  const { preowneds, getPreownedsV2, loading, results, clearState } =
    usePreowned();
  const { getItem, setItem, removeItem } = useStorage();

  // states
  const [disableTopBar, setDisableTopBar] = useState(false);
  const [infiniteVehicles, setInfiniteVehicles] = useState(false);
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  // search states
  const defaultLimit = 12;
  const [limit, setLimit] = useState(defaultLimit);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [store, setStore] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");
  const [address, setAddress] = useState("");
  const [last, setLast] = useState(false);

  const [datasort, setDatasort] = useState("createdAt,-1");
  const localStorageName = "preownedFilters";
  const lastClickedName = "lastClickedPreownweds";
  const localStorageVersion = "1.1";

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
      if (local?.store) await setStore(local.store);
      if (local?.dataSort) await setDatasort(local.dataSort);
      if (local?.category) await setCategory(local.category);
      if (local?.sort) await setSort(local.sort);
      if (local?.address) await setAddress(local.address);
    }
    setLocalStorageLoaded(true);
  };

  useEffect(() => {
    if (!localStorageLoaded) return;
    handleReload();
    //eslint-disable-next-line
  }, [store, category, sort, query, address, datasort, localStorageLoaded]);

  const handleReload = async () => {
    if (infiniteVehicles) await setInfiniteVehicles([]);
    loadData();
  };

  useEffect(() => {
    if (preowneds && preowneds.length <= 0) return;
    setInfiniteVehicles([...(infiniteVehicles || []), ...preowneds]);
    clearState();
    //eslint-disable-next-line
  }, [preowneds]);

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

  useEffect(() => {
    clearState();
  }, [stores]);

  const loadData = () => {
    if (loading) return;
    let pricequery = "";
    switch (sort) {
      case "menor150000":
        pricequery = "&price[lt]=150000";
        break;
      case "150000/250000":
        pricequery = "&price[gte]=150000&price[lt]=250000";
        break;
      case "250001/350000":
        pricequery = "&price[gte]=250001&price[lt]=350000";
        break;
      case "350001/450000":
        pricequery = "&price[gte]=350001&price[lt]=450000";
        break;
      case "450001/650000":
        pricequery = "&price[gte]=450001&price[lt]=650000";
        break;
      case "650001/900000":
        pricequery = "&price[gte]=650001&price[lt]=900000";
        break;
      case "mayor900001":
        pricequery = "&price[gte]=900001";
        break;
    }
    let location =
      address.length >= 1 && address !== "-" ? `&storeLocation=${address}` : "";
    setItem(localStorageName, {
      page,
      store,
      category,
      sort,
      address,
      datasort,
      query,
      localStorageVersion,
    });
    let search = {
      limit,
      page: limit === defaultLimit ? page : 1,
      query: `${query.trim()}${store !== "-" ? `&store=${store}` : ""}${
        category !== "-" ? `&modelType=${category}` : ""
      }&sort=${datasort}${pricequery}&isPublished=true&isSold=false${location}`,
      sort: `${datasort}`,
    };
    getPreownedsV2(search);
    setLimit(defaultLimit);
    setPage(page + 1);
  };

  const TitleSemis = (
    <Box>
      <Typography
        variant="h1"
        sx={{ fontSize: "35px", fontWeight: 600, display: "none" }}>
        Venta de Autos Seminuevos en México
      </Typography>
    </Box>
  );

  return (
    <>
      <Meta
        title="Autos seminuevos en México - Carone Group"
        description="Venta de autos seminuevos en México - Carone Group"
        url="https://carone.com.mx/autos"
        googlebot={"index,follow"}
        robots="all"
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: '1em' }} />
        {TitleSemis}
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
          address={address}
          setAddress={setAddress}
          datasort={datasort}
          setDatasort={setDatasort}
        />
        <InfiniteScroll
          dataLength={infiniteVehicles?.length || 0}
          next={loadData}
          hasMore={true}
          // loader={<CustomLoading {...{ loading:true }} />}
        >
          {!loading && infiniteVehicles && infiniteVehicles?.length === 0 && (
            <Box
              style={{ width: "1000" }}
              display="flex"
              justifyContent="center">
              <Typography variant="h5">
                No se encontraron unidades seminuevas con esas especificaciones
              </Typography>
            </Box>
          )}
          {/* {
            loading &&
            <Box style={{ width: '1000' }} display='flex' justifyContent='center'>
              <Spinner size={48} />
            </Box>
          } */}
          {loading && <CustomLoading />}
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
  const res = await fetch(
    `${baseURL}/preowneds?page=1&limit=12&sort=-createdAt&isPublished=true&isSold=false&publishedIn=both-web`
  );
  const preowneds = await res.json();

  const storesRes = await fetch(`${baseURL}/stores`);

  const stores = await storesRes.json();

  return {
    props: {
      preownedsSP: preowneds.data,
      stores: stores.data,
      total: preowneds.pagination.total,
    },
  };
};

export default Index;
