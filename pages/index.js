import React from "react";

import { Container, Typography } from "@material-ui/core";

const marca = ({ vehicles }) => {
  return (
    <Container>
      {vehicles &&
        vehicles.map((vehicle, i) => (
          <Typography key={i}>{vehicle.model} </Typography>
        ))}
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { req } = context;

  const url = req.headers.host;

  const storeP = url.split(".")[0];

  const resStore = await fetch(`https://apicarone.com/api/v1/stores/${storeP}`);

  const store = await resStore.json();

  const { data } = store;

  const res = await fetch(
    `https://apicarone.com/api/v1/vehicles?make=${data.make._id}`
  );

  const vehicles = await res.json();

  return {
    props: {
      vehicles: vehicles.data,
      // marca: context.params.marca,
      test: "test",
    },
  };
};

export default marca;
