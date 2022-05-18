import React, { useState, useEffect } from "react";
import CarList from "../../components/autos/CarListPreowned";
import SearchBar from "../../components/autos/SearchBarPreowned";
import Meta from "../../components/Meta";
import Pagination from "../../components/Pagination";
import usePreowned from "../../hooks/usePreowned";
import { baseURL } from "../../api/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { Container, Divider, Grid, Box } from "@material-ui/core";
import CarListCard from "../../components/autos/CarListCardPreowned";
import CustomLoading from "../../components/CustomLoading";



const Index = ({ preownedsSP, total, stores, categories }) => {

  const { preowneds, getPreowneds, loading, results,clearState } = usePreowned();
  const [disableTopBar, setDisableTopBar] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [store, setStore] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");
  const [infiniteVehicles, setInfiniteVehicles] = useState([]);


  const changePage = (event, value) => setPage(value);

  useEffect(() => {
    handleReload();
    //eslint-disable-next-line
  }, [store, category, sort,query]);

  const handleReload = async ()=>{
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

  const loadData = () => {
    getPreowneds(page, `${query}${store !== '-' ? `&store=${store}` : ''}${category !== '-' ? `&modelType=${category}` : ''}&prices=${sort}&sort=-createdAt&isPublished=true`);

    setPage(page + 1);
  };

  return (
    <>
         
      <Meta
        title="Busca tu Auto - Car One Group"
        description="Busca tu Auto Nuevo"
      />
     
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
          <InfiniteScroll
        dataLength={infiniteVehicles.length}
        next={loadData}
        hasMore={true}
        // loader={<CustomLoading {...{ loading:true }} />}
      >
          <Box className='vehiclesGrid'>
      
            {infiniteVehicles.map(
                (vehicle, index) => (
                 
                    <CarListCard key={index} vehicle={vehicle} loading={loading} />

                )
              )}

          </Box>
          </InfiniteScroll>
          {loading &&  <CustomLoading />}


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
  const res = await fetch(`${baseURL}/preowneds?page=1&limit=12&sort=-createdAt`);
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
