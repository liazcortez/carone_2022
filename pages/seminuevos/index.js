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



const Index = ({ preownedsSP, total, stores, categories }) => {

  const { preowneds, getPreownedsV2, loading, results, clearState } = usePreowned();
  const [disableTopBar, setDisableTopBar] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [store, setStore] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");
  const [infiniteVehicles, setInfiniteVehicles] = useState([]);
  const [address, setAddress] = useState("-");

  const changePage = (event, value) => setPage(value);

  useEffect(() => {
    handleReload();
    //eslint-disable-next-line
  }, [store, category, sort, query, address]);

  const handleReload = async () => {
    await setInfiniteVehicles([]);
    loadData();
  }

  // useEffect(() => {
  //   setInfiniteVehicles([]);
  //   loadData(true);
  //   //eslint-disable-next-line
  // }, [make, category, sort]);

  useEffect(() => {
    if (preowneds && preowneds.length <= 0) return;
    setInfiniteVehicles([...infiniteVehicles, ...preowneds]);
    clearState();
  }, [preowneds]);
  //pasar info de la ubicacion de la store
  useEffect(()=>{
    setAddress([...address, stores.location]);
    console.log(address);
    clearState();
  },[stores])

  const loadData = () => {
    let pricequery = '';
    console.log(sort)
    switch (sort) {
      case 'menor150000':
        pricequery = '&price[lt]=150000'
        break;
      case '150000/250000':
        pricequery = '&price[gte]=150000&price[lt]=250000';
        break;
      case '250001/350000':
        pricequery = '&price[gte]=250001&price[lt]=350000';
        break;
      case '350001/450000':
        pricequery = '&price[gte]=350001&price[lt]=450000';
        break;
      case '450001/650000':
        pricequery = '&price[gte]=450001&price[lt]=650000';
        break;
      case '650001/900000':
        pricequery = '&price[gte]=650001&price[lt]=900000';
        break;
      case 'mayor900001':
        pricequery = '&price[gte]=900001'
        break;
    }
    console.log(pricequery)

    getPreownedsV2({ limit: 12, page, query: `${query.trim()}${store !== '-' ? `&store=${store}` : ''}${category !== '-' ? `&modelType=${category}` : ''}&sort=-createdAt${pricequery}&isPublished=true&isSold=false` });

    setPage(page + 1);
  };

  const TitleSemis = (
    <Box>
      <Typography variant="h1" sx={{ fontSize: "35px", fontWeight: 600, display: "none" }}>
        Venta de Autos Seminuevos en México
      </Typography>
    </Box>
  )

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
        />
        <Divider style={{ marginBottom: "50px" }} />
        <InfiniteScroll
          dataLength={infiniteVehicles.length}
          next={loadData}
          hasMore={true}
        // loader={<CustomLoading {...{ loading:true }} />}
        >
          {
            !loading && infiniteVehicles.length === 0 &&
            <Box style={{ width: '1000' }} display='flex' justifyContent='center'>
              <Typography variant='h5'>
                No se encontraron unidades seminuevas con esas especificaciones
              </Typography>
            </Box>
          }
          {
            loading &&
            <Box style={{ width: '1000' }} display='flex' justifyContent='center'>
              <Spinner size={48} />
            </Box>
          }
          <Box className='vehiclesGrid'>

            {
              infiniteVehicles.map(
                (vehicle, index) => (

                  <CarListCard key={index} vehicle={vehicle} loading={loading} />

                )
              )
            }


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
  const res = await fetch(`${baseURL}/preowneds?page=1&limit=12&sort=-createdAt&isPublished=true&isSold=false&publishedIn=both-web`);
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
