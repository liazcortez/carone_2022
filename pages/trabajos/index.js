import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Meta from "../../components/Meta";
import SearchBar from "../../components/trabajos/SearchBar";
import CustomLoading from "../../components/CustomLoading";
import useJob from "../../hooks/useJob";
import JobItem from "../../components/trabajos/JobItem";
import SelectedJob from "../../components/trabajos/SelectedJob";
import InfiniteScroll from "react-infinite-scroll-component";


const index = ({ jobsSP, categories, stores, total }) => {
  const { jobs, getJobs, loading, results,clearState:clearJobs } = useJob();

  const [disableTopBar, setDisableTopBar] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("-");
  const [store, setStore] = useState("-");
  const [sort, setSort] = useState("-");
  const [selectedJob,setSelectedJob]= useState(false);
  const [infiniteJobs,setInfiniteJobs] = useState([]);
  const changePage = (event, value) => setPage(value);


  useEffect(() => {
    setInfiniteJobs([]);
    loadData(true);
  }, [store, category, sort,query]);


  useEffect(() => {
    if(jobs && jobs.length <=0)return;
    if(page === 2)setSelectedJob(jobs[0]);
      setInfiniteJobs([...infiniteJobs, ...jobs]);
      clearJobs();
  }, [jobs]);

  useEffect(() => {
    // load first page then handle with infinite scroll
    // loadData();
  }, []);

  const loadData = (firstPage=false)=>{
    getJobs(
      page,
      `${query}&store=${store}&category=${category}&salaries=${sort}`
    );
    setPage(page + 1);
  }

  return (
    <>
      <Meta
        title="Busqueda de trabajos Car One"
        description="Los mejores trabajos los encuentras en Car One"
      />
      <Container maxWidth="lg">
        <SearchBar
          setQuery={setQuery}
          query={query}
          stores={stores}
          setStore={setStore}
          store={store}
          categories={categories}
          setCategory={setCategory}
          category={category}
          disableTopBar={disableTopBar}
          setPage={setPage}
          sort={sort}
          setSort={setSort}
        />
        <Grid spacing={1} container>
            <Grid item xs={12} md={5}>
            

              <InfiniteScroll
                dataLength={infiniteJobs.length}
                next={loadData}
                hasMore={true}
                // loader={<CustomLoading {...{ loading:true }} />}
                >
                              {
                                infiniteJobs.map(
                                  (job, index) => (
                                      <JobItem setSelectedJob={setSelectedJob} selectedJob={selectedJob} job={job} loading={loading} key={job._id} />
                                  )
                                )
                              }
              </InfiniteScroll>
             {loading &&  <CustomLoading />}
            </Grid>
            <Grid className='SelectedJobContainer' item  md={7}>
             {selectedJob? <SelectedJob job={selectedJob}/>:''}
            </Grid>
        </Grid>
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

export const getServerSideProps = async (context) => {
  const res = await fetch("https://apicarone.com/api/v1/jobs?page=1&limit=12&isPublished=true");
  const jobs = await res.json();

  const categoriesRes = await fetch(
    "https://apicarone.com/api/v1/jobCategories"
  );
  const categories = await categoriesRes.json();

  const storesRes = await fetch("https://apicarone.com/api/v1/stores");
  const stores = await storesRes.json();

  return {
    props: {
      jobsSp: jobs.data,
      categories: categories.data,
      stores: stores.data,
      total: jobs.pagination.total,
    },
  };
};

export default index;
