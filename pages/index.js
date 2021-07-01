import React from "react";

import { Container, Typography } from "@material-ui/core";

const marca = ({ marca }) => {
  return (
    <Container>
      <Typography>{marca}</Typography>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { req, query, asPath, pathname } = context;

  return {
    props: {
      marca: req.headers.host,
    },
  };
};

export default marca;
