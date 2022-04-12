import React from "react";
import { Container, Link, Box, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
  footer:{
    marginTop: 40,
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
      <Box style={{textAlign: 'center'}} pb={2}>
          <Typography variant='body2' style={{width:'100%'}}>
          © Car One Group All rights reserved
          </Typography>
          <Link className={classes.policy} href={'/politicas'}>
          <strong>Términos y Condiciones</strong>
          </Link>
      </Box>
    </Container>
  );
};

export default Footer;
