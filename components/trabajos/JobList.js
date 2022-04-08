import React from "react";
import { Grid } from "@material-ui/core";
import JobItem from "./JobItem";

const JobList = ({ jobs, loading, setSelectedJob }) => {
  return (
      jobs && jobs.length > 0 ? jobs.map(
        (job, index) => (
            <JobItem setSelectedJob={setSelectedJob} job={job} loading={loading} key={job._id} />
        )
      ) : ''
  );
};

export default JobList;
