import React from "react";
import { Container, Link, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 10,
    marginBottom: 20,
  },
  policy: {
    color: "black!important",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.footer}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2" style={{ width: "100%" }}>
          <strong>© Car One Group</strong> All rights reserved.{" "}
          <Link className={classes.policy} href={"/politicas"}>
            Términos y Condiciones.{" "}
            <Link className={classes.policy} href={"/terminos-y-condiciones"}>
              Aviso de Privacidad
            </Link>
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
