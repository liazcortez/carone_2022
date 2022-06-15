import React, { useState, useEffect } from "react";
import { Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Container,
  CardContent,
  Grid,
  Avatar} from "@mui/material";
import Meta from "../../components/Meta";
import useAuth from "../../hooks/useAuth";
import ApplicantComponent from "../../components/profile/Curriculum"
import Information from '../../components/profile/Information'
import PersonalInformation from '../../components/profile/PersonalInformation'
import { useRouter } from "next/router";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'inherit',
    minHeight: '100%',
    padding: theme.spacing(5),
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium
  },
  gridStyle:{
    display:'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap:'1rem'
  },
  flexStyle:{

    width:'100%',
  },
  avatar:{
    width:'35%',
    height:'auto',
    margin:'0rem auto 1rem auto'
  },
  cardContent:{
    padding:'1.5rem 0rem 1.5rem 0rem'
  },
  container:{
    height: '80vh',
    display: 'flex',
    alignItems: 'center'
  },
  leftCards:{
    height:'100%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  noPadding:{
    padding:'0!important'
  }

}));

const index = () => {
  const classes = useStyles();
  const {user} = useAuth();
  const router = useRouter();

  React.useEffect(()=>{
    if(user && user._id === undefined){
      router.push("/");
    }
  },[user]);

  if(!user || JSON.stringify(user) === '{}'){
    return null
  }  

  return (
    <>
    <Container maxWidth="lg">
      <Meta
        title="Perfil de usuario"
        description="Pagina de perfil de usuario"
      />
      <Grid container spacing={3}>
          <Grid  item sm={4} xs={4} ms={4} lg={4}>
           <Box className={classes.leftCards}>
            <Information edit="true" style={{marginBottom: '1em'}}/>
            <ApplicantComponent width='100%'/>
             </Box> 
          </Grid>
          <Grid item sm={8} xs={8} ms={8} lg={8}>
            <PersonalInformation />
          </Grid>
        </Grid>
    </Container>
    </>
  );
};

export default index;
