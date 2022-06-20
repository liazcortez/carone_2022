import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import moment from "moment";
import parse from "html-react-parser";
import Meta from "../../../components/Meta";
import JobItem from "../../../components/trabajos/JobItem";
import BreadCrumCats from "../../../components/BreadCrumCats";

const index = ({ jobs }) => {
  return (
    <>
      <Meta
        title="Busqueda de trabajos Car One"
        description="Los mejores trabajos los encuentras en Car One"
      />
      <Container maxWidth="lg">
      <BreadCrumJobs data={job} section="Trabajos" />

        <Grid container>
          {jobs && jobs.map((job, i) => <JobItem job={job} key={i} />)}
        </Grid>
      </Container>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/jobs/jobbycat/${ctx.params.categoria}`

  const res = await fetch(
    `https://apicarone.com/api/v1/jobs/jobbycat/${ctx.params.categoria}`
    // `http://localhost:5000/api/v1/jobs/jobbycat/${ctx.params.categoria}`
  );
  const jobs = await res.json();

  return {
    props: {
      jobs: jobs.data,
      categoryName:ctx.params.categoria
    },
  };
};

export default index;
