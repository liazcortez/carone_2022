import React from "react";

import { Container, Typography } from "@material-ui/core";

const marca = ({ vehicles, marca }) => {
  return (
    <Container>
      <Typography>{marca}</Typography>
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://apicarone.com/api/v1/vehicles/vehiclesByMake/${context.params.marca}?sort=index`
  );
  const { req, query, asPath, pathname } = context;

  console.log(req.headers.host);

  const vehicles = await res.json();

  return {
    props: {
      vehicles: vehicles.data,
      marca: context.params.marca,
    },
  };
};

export default marca;
