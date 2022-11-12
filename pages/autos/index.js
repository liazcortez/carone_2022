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
  const {getItem,setItem} = useStorage();

  const [disableTopBar, setDisableTopBar] = useState(false);
  const [infiniteVehicles, setInfiniteVehicles] = useState([]);
  const [localStorageLoaded,setLocalStoregeLoaded] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [make, setMake] = useState("-");
  const [category, setCategory] = useState("-");
  const [sort, setSort] = useState("-");

  const localStorageName = 'carFilters';
  const localStorageVersion = '1.0';

  useEffect(() => {
    const local = getItem(localStorageName);
    if(local)handleLocalStorage(local)
    else setLocalStoregeLoaded(true)
    
    // setItem('algo','123')
  }, [])

  const handleLocalStorage= async (local)=>{
    if(local?.localStorageVersion === localStorageVersion){
    // manejar la ultima pagina cargando todas las anteriores para despues
    // if(local?.page)await setPage(local.page) this is the last page viewed
    if(local?.query)await setQuery(local.query)
    if(local?.make)await setMake(local.make)
    if(local?.category)await setCategory(local.category)
    if(local?.sort)await setSort(local.sort)
    }
    setLocalStoregeLoaded(true)
  }

  useEffect(() => {
    if(!localStorageLoaded)return;
    handleReload();
    //eslint-disable-next-line
  }, [make, category, sort,query,localStorageLoaded]);

  const handleReload = async ()=>{
    await setInfiniteVehicles([]);
    loadData();
  }


  useEffect(() => {
    if (vehicles && vehicles.length <= 0) return;
    setInfiniteVehicles([...infiniteVehicles, ...vehicles]);
    clearState();
  }, [vehicles]);

  const loadData = () => {
    setItem(localStorageName,{page,make,category,sort,query,localStorageVersion })
    getVehicles(
      page,
      `${query}&make=${make}&category=${category}&prices=${sort}&limit=60`
    );
    setPage(page + 1);
  };

  const TitleNews = (
    <Box>
      <Typography variant="h1" sx={{fontSize: "35px", fontWeight: 600, display:"none"}}>
        Venta de Autos Nuevos México
      </Typography>
    </Box>
  )

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
        />

         
          <Divider style={{ marginBottom: "50px" }} />
         
          <InfiniteScroll
            style={{overflow:'hidden'}}
            dataLength={infiniteVehicles.length}
            next={loadData}
            hasMore={true}
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