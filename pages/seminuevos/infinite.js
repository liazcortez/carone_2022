// import React, { useState, useEffect } from "react";
// import { Container, Divider, Grid, Box } from "@material-ui/core";
// import CarList from "../../components/autos/CarList";
// import SearchBar from "../../components/autos/SearchBar";
// import Meta from "../../components/Meta";
// import Pagination from "../../components/Pagination";
// import useVehicles from "../../hooks/useVehicle";
// import Banner from "../../components/Banner";
// import { baseURL } from "../../api/api";
// import InfiniteScroll from "react-infinite-scroll-component";
// import CarListCard from "../../components/autos/CarListCard";

const Index = () => null
export default Index;

// const Index = ({ vehiclesSP, total, stores, categories }) => {
//   const { vehicles, getVehicles, loading, results, clearState } = useVehicles();
//   const [disableTopBar, setDisableTopBar] = useState(false);
//   const [page, setPage] = useState(1);
//   const [query, setQuery] = useState("");
//   const [store, setStore] = useState("-");
//   const [category, setCategory] = useState("-");
//   const [sort, setSort] = useState("-");
//   const [infiniteVehicles, setInfiniteVehicles] = useState([]);

//   const changePage = (event, value) => setPage(value);

//   useEffect(() => {
//     setInfiniteVehicles([]);
//     loadData(true);
//     //eslint-disable-next-line
//   }, [store, category, sort]);

//   useEffect(() => {
//     if (vehicles && vehicles.length <= 0) return;
//     setInfiniteVehicles([...infiniteVehicles, ...vehicles]);
//     clearState();
//   }, [vehicles]);

//   const loadData = (firstPage = false) => {
//     getPreowneds(page, `${query}${store !== '-' ? `&store=${store}` : ''}${category !== '-' ? `&modelType=${category}` : ''}&prices=${sort}&sort=-createdAt`);

//     setPage(page + 1);
//   };

//   return (
//     <>
         
//       <Meta
//         title="Busca tu Auto - Car One Group"
//         description="Busca tu Auto Nuevo"
//       />
     
//         <Container maxWidth="lg">
//           <SearchBar
//             setQuery={setQuery}
//             query={query}
//             stores={stores}
//             categories={categories}
//             setCategory={setCategory}
//             setStore={setStore}
//             category={category}
//             store={store}
//             disableTopBar={disableTopBar}
//             setPage={setPage}
//             sort={sort}
//             setSort={setSort}
//           />
//           <Divider style={{ marginBottom: "50px" }} />
//           <InfiniteScroll
//         dataLength={infiniteVehicles.length}
//         next={loadData}
//         hasMore={true}
//         // loader={<CustomLoading {...{ loading:true }} />}
//       >
//           <Box className='vehiclesGrid'>
      
//             {infiniteVehicles && infiniteVehicles.map(
//                 (vehicle, index) => (
                 
//                     <CarListCard key={index} vehicle={vehicle} loading={loading} />

//                 )
//               )}

//           </Box>
//           </InfiniteScroll>


//           {/* <Pagination
//           total={results !== null ? results : total}
//           page={page}
//           limit={12}
//           changePage={changePage}
//         /> */}
//         </Container>

//     </>
//   );
// };
// export const getStaticProps = async (context) => {
//   const res = await fetch(`${baseURL}/vehicles?page=1&limit=12&sort=index`);
//   const vehicles = await res.json();

//   const storesRes = await fetch(`${baseURL}/stores`);
//   const categoriesRes = await fetch(`${baseURL}/categories`);

//   const stores = await storesRes.json();
//   const categories = await categoriesRes.json();

//   return {
//     props: {
//       vehiclesSP: vehicles.data,
//       stores: stores.data,
//       categories: categories.data,
//       total: vehicles.pagination.total,
//     },
//   };
// };

// export default Index;
