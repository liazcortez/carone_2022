import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  Button,
  Chip
} from "@material-ui/core";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import moment from "moment";
import parse from "html-react-parser";
import NumberFormat from "react-number-format";
import Meta from "../../components/Meta";
import BreadCrumJobs from "../../components/BreadCrumJobs";
import GeneralModal from "../../components/GeneralModal";
import useAuth from "../../hooks/useAuth";
import useJob from "../../hooks/useJob";
const SelectedJob = ({ job }) => { 
  

  moment.locale("es-mx");
  const [openLogin, setOpenLogin] = useState(false)
  const { user, isAuthenticated, loadUser } = useAuth();
  const createdAt = moment(job.createdAt).fromNow();
  const createdAtCapitalize =
    createdAt.charAt(0).toUpperCase() + createdAt.slice(1);

  const jobDescription = job.description;
  const jobDescriptionCapitalize =
    jobDescription.charAt(0).toUpperCase() + jobDescription.slice(1);
    
  return (

          <Box style={{position:'sticky', top:'1rem'}}>

            {/* logion or register */}
              <Paper mt={30} variant="outlined">
                    
              <Box p={3}>
                <Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ marginBottom: 10 }}
                  >
                    {/* <Typography variant="body2">
                      {createdAtCapitalize}
                    </Typography> */}
                    <Typography
                      variant="subtitle2"
                      style={{ textTransform: "capitalize" }}
                    >
                      {/* {job.store.make.name} {job.store.name} */}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      style={{ textTransform: "capitalize", cursor: "pointer" }}
                    >
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                
                <Chip size='small' icon={<LocalAtmIcon/>} style={{fontSize: '.875rem!important',fontWeight: '700!important',lineHeight: '1.3125rem!important',color: '#595959'}} label={job.salary === 0 ? (
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

                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ textTransform: "capitalize" }}
                    >
                      {job.salaryTime === "Monthly" ? "Mensual" : "Quincenal"}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  style={{ textTransform: "capitalize" }}
                >
                  Categoria: {job.category.name}
                </Typography>
                <GeneralModal job={job}/>


                <Divider style={{ marginBottom: 30,marginTop:20}} />

                <Typography variant="h6" gutterBottom>
                  Descripción
                </Typography>

                <Typography variant="body2">
                  {jobDescriptionCapitalize && parse(jobDescriptionCapitalize)}
                </Typography>
              </Box>
            </Paper>
          </Box>



          

  );
};


export default SelectedJob;

