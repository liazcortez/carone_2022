import React, { useState, useEffect } from "react";
import { Container, Grid } from "@material-ui/core";
import Meta from "../../components/Meta";
import SearchBar from "../../components/trabajos/SearchBar";
import Pagination from "../../components/Pagination";
import useJob from "../../hooks/useJob";
import JobList from "../../components/trabajos/JobList";
import SelectedJob from "../../components/trabajos/SelectedJob";


const index = ({ jobsSP, categories, stores, total }) => {
  const { jobs, getJobs, loading, results } = useJob();

  const [disableTopBar, setDisableTopBar] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("-");
  const [store, setStore] = useState("-");
  const [sort, setSort] = useState("-");
  const [selectedJob,setSelectedJob]= useState(false);

  const changePage = (event, value) => setPage(value);

  useEffect(()=>{
    if((jobs && jobs.length <=0) && selectedJob )return;
    setSelectedJob(jobs[0])
  },[jobs])

  useEffect(() => {
    getJobs(
      page,
      `${query}&store=${store}&category=${category}&salaries=${sort}`
    );
  }, [page]);

  useEffect(() => {
    getJobs(
      page,
      `${query}&store=${store}&category=${category}&salaries=${sort}`
    );
  }, [store, category, sort]);
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
            {jobs && jobs.length > 0 ? (
                <JobList setSelectedJob={setSelectedJob} jobs={jobs} loading={loading} />
              ) : (
                <JobList setSelectedJob={setSelectedJob} jobs={jobsSP} loading={loading} />
              )}
            </Grid>
            <Grid item xs={0} md={7}>
             {selectedJob? <SelectedJob job={selectedJob}/>:''}
            </Grid>
        </Grid>
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

export const getServerSideProps = async (context) => {
  const res = await fetch("https://apicarone.com/api/v1/jobs?page=1&limit=12");
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
