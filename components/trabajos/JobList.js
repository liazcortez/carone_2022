import React from "react";
import { Grid } from "@material-ui/core";
import JobItem from "./JobItem";

const JobList = ({ jobs, loading }) => {
  return (
      jobs && jobs.length > 0 ? jobs.map(
        (job, index) => (
            <JobItem job={job} loading={loading} />
        )
      ) : ''
  );
};

export default JobList;
