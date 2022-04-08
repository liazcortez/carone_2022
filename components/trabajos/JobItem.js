import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import moment from "moment";
import 'moment/locale/es';
import TextTruncate from "react-text-truncate"; // recommend

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
// import parse from "html-react-parser";
import { CapitalizeFirstLetter } from "../../utils/functions";
import NumberFormat from "react-number-format";
import clsx from "clsx";

const JobItem = ({ job, setSelectedJob, selectedJob }) => {
  moment.locale("es");
  const createdAt = moment(job.createdAt).fromNow();

  return (
    // <Grid item xs={8} >
      <Paper onClick={()=>setSelectedJob(job)} variant="outlined"   className={clsx({
        ["JobSelected"]: (selectedJob === job)
      })}
       style={{ marginBottom: 15,cursor:'pointer' }}>
        <Box p={3}>
          <Box>
            <Box
              display="flex"
              justifyContent="space-between"
              style={{ marginBottom: 10 }}
            >
              <Typography>{CapitalizeFirstLetter(createdAt)}</Typography>
              <Typography
                variant="subtitle2"
                style={{ textTransform: "capitalize" }}
              >
                {job.store.make.name} {job.store.name}
              </Typography>
            </Box>
            <Box>
              {/* <Link href={`/trabajos/${job.slug}`}> */}
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize", cursor: "pointer" }}
                >
                  {job.title}
                </Typography>
              {/* </Link> */}
              <Typography variant="subtitle1" gutterBottom>
                {job.salary === 0 ? (
                  "Salario no mostrado por la empresa"
                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    prefix={"$"}
                    value={job.salary}
                    displayType={"text"}
                  />
                )}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ textTransform: "capitalize" }}
          >
            Categoria:
            {job.category.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {CapitalizeFirstLetter(job.shortDescription)}
          </Typography>
        </Box>
      </Paper>
    // </Grid>
  );
};

export default JobItem;
