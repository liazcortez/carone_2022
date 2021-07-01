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

  const url = req.headers.host;

  const store = url.Substring(url.IndexOf(".") - 1);

  return {
    props: {
      marca: store,
    },
  };
};

export default marca;
