import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
  Chip
} from "@mui/material";
import moment from "moment";
import parse from "html-react-parser";
import NumberFormat from "react-number-format";
import Meta from "../../components/Meta";
import BreadCrumJobs from "../../components/BreadCrumJobs";
import GeneralModal from "../../components/GeneralModal";
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ObjExist from '../../utils/ObjExist';
const slug = ({ job }) => { 

  moment.locale("es-mx");
  const createdAt = moment(job.createdAt).fromNow();
  const createdAtCapitalize =
    createdAt.charAt(0).toUpperCase() + createdAt.slice(1);

  const jobDescription = job.description;
  const jobDescriptionCapitalize =
    jobDescription.charAt(0).toUpperCase() + jobDescription.slice(1);

  const { meta, image } = job;
    
  return (
    <>

      <Meta
        title={job && job.title ? job.title : "Busqueda de trabajos Car One"}
        description={job && job.shortDescription ? job.shortDescription  : "Los mejores trabajos los encuentras en Car One"}
        image={meta && meta.image ? meta.image : image}
      />
      <Container maxWidth="lg">
        <BreadCrumJobs data={job} section="Trabajos" />
        <Grid container spacing={2}>
        <Grid className='SelectedJobContainerTop' item xs={12}>
            <Paper variant="outlined">
              <Box display="flex" justifyContent="center" p={3}>
              <GeneralModal fullWidth={true} job={job}/>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper variant="outlined">
              <Box p={3}>
                <Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    style={{ marginBottom: 10 }}
                  >
                    <Typography variant="body2">
                      {createdAtCapitalize}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      style={{ textTransform: "capitalize" }}
                    >
                     {ObjExist(job,['store','make','name'])} {ObjExist(job,['store','name'])}

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

                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      style={{ textTransform: "capitalize" }}
                    >
                      {job.salaryTime === "monthly" ? "Mensual" : "Quincenal"}
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

                <Divider style={{ marginBottom: 30 }} />

                <Typography variant="h6" gutterBottom>
                  Descripción
                </Typography>

                <Typography variant="body2">
                  {jobDescriptionCapitalize && parse(jobDescriptionCapitalize)}
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid className='SelectedJobContainer' item xs={4}>
            <Paper variant="outlined">
              <Box display="flex" justifyContent="center" p={3}>
              <GeneralModal fullWidth={true} job={job}/>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export const getServerSideProps = async (ctx) => {

  const res = await fetch(
    `https://apicarone.com/api/v1/jobs?slug=${ctx.params.slug}`
  );

  const job = await res.json();
  
  return {
    props: {
      job: job.data[0],
    },
  };
};

export default slug;
