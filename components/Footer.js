import React from "react";
import { Container, Link, Box, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme=>({
  footer:{
    marginTop: 10,
    marginBottom: 20,
  },
  policy:{
    color:'black!important',
    textDecoration:'none',
    '&:hover': {
      textDecoration:'none'
    }
  }
  }));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <Box style={{textAlign: 'center'}}>
          <Typography variant='body2' style={{width:'100%'}}>
          © Car One Group All rights reserved
          </Typography>
          <Link className={classes.policy} href={'/politicas'}>
          <strong>Términos y Condiciones</strong>
          </Link>
      </Box>

      <Box style={{textAlign: 'center'}} pb={2}>
          <Link className={classes.policy} href={'/terminos-y-condiciones'}>
          <strong>Aviso de Privacidad</strong>
          </Link>
      </Box>
    </Container>
  );
};

export default Footer;
