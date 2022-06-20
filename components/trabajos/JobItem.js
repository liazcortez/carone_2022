import React from "react";
import { Container, Grid, Typography, Box,Chip,Button } from "@mui/material";
import moment from "moment";
import 'moment/locale/es';
import TextTruncate from "react-text-truncate"; // recommend

import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Link from "next/link";
// import parse from "html-react-parser";
import { CapitalizeFirstLetter } from "../../utils/functions";
import NumberFormat from "react-number-format";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import clsx from "clsx";
import ObjExist from '../../utils/ObjExist';

const JobItem = ({ job, setSelectedJob, selectedJob }) => {
  moment.locale("es");
  const createdAt = moment(job.createdAt).fromNow();
  const createdAtCapitalize =
  createdAt.charAt(0).toUpperCase() + createdAt.slice(1);
  return (
    // <Grid item xs={8} >
      <Paper onClick={()=>setSelectedJob(job)} variant="outlined"   className={clsx({
        ["JobSelected"]: (selectedJob === job)
      })}
       style={{ marginBottom: 15,cursor:'pointer' }}>
        <Box p={3}>
          <Box>
            
            <Box>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize", cursor: "pointer" }}
                >
                  {job.title}
                </Typography>
                <Typography
                variant="subtitle2"
                style={{ textTransform: "capitalize" }}
              >
                {ObjExist(job,['store','make','name'])} {ObjExist(job,['store','name'])}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                
                <Chip size='small' icon={<LocalAtmIcon/>} style={{padding:'0 .4rem',fontSize: '.875rem!important',fontWeight: '700!important',lineHeight: '1.3125rem!important',color: '#595959'}} label={job.salary === 0 ? (
                  "Salario no mostrado por la empresa"

                ) : (
                  <NumberFormat
                    thousandSeparator={true}
                    prefix={"$"}
                    value={job.salary}
                    displayType={"text"}
                  />
                )} />
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
         <Box style={{width:'100%',display:'flex',justifyContent:'space-between', alignItems: 'end'}}>
         <Typography style={{color:'#808080'}} variant="caption">
                      {createdAtCapitalize}
                    </Typography>
              <Link href={`/trabajos/${job.slug}`}>

                    <Button
        variant="contained"
        color="primary"
      >
        Ver Trabajo
      </Button>
              </Link>

         </Box>
          
        </Box>
      </Paper>
    // </Grid>
  );
};

export default JobItem;
