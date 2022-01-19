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
  Avatar,
  makeStyles} from "@material-ui/core";
import Meta from "../../components/Meta";
import useAuth from "../../hooks/useAuth";
import ApplicantComponent from "../../components/profile/Curriculum"
import Information from '../../components/profile/Information'
import PersonalInformation from '../../components/profile/PersonalInformation'
import { useRouter } from "next/router";

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
  }

}));

const index = () => {
  const classes = useStyles();
  const {user} = useAuth();
  const router = useRouter();

  React.useEffect(()=>{
    if(!user){
            router.push("/");
    }
  },[user]);

  if(!user || JSON.stringify(user) === '{}'){
    return null
  }  

  return (
    <>
      <Meta
        title="Perfil de usuario"
        description="Pagina de perfil de usuario"
      />
      <Grid container spacing={3} className={classes.root}>
          <Grid item sm={3} xs={3} ms={3} lg={3}>
            <Information edit="true" style={{marginBottom: '1em'}}/>
            <ApplicantComponent width='100%'/>
          </Grid>
          <Grid item sm={9} xs={9} ms={9} lg={9}>
            <PersonalInformation />
          </Grid>
        </Grid>
    </>
  );
};

export default index;
