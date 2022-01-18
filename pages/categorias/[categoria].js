import React from "react";
import { useRouter } from "next/router";
import CarList from "../../components/autos/CarList";
import Meta from "../../components/Meta";
import { Container, Divider } from "@material-ui/core";

const categoria = ({ vehicles }) => {

  const router = useRouter();
  const { categoria } = router.query;

  return (
    <>
      <Meta
        title={`Autos tipo ${categoria.toUpperCase()}`}
        description={`Busca tu auto tipo ${categoria}`}
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "50px" }} />
        <h1 style={{ marginBottom: "70px" }}>
          {" "}
          Busqueda por categoria: {categoria.toUpperCase()}
        </h1>
        <CarList vehicles={vehicles} />
      </Container>
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    `https://apicarone.com/api/v1/vehicles/vehiclesByCategory/${ctx.params.categoria}`
  );

  const vehicles = await res.json();

  return {
    props: {
      vehicles: vehicles.data,
    },
  };
};

export default categoria;
