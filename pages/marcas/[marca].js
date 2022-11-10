import React from "react";
import { useRouter } from "next/router";
import CarList from "../../components/autos/CarList";
import Meta from "../../components/Meta";
import { Container, Divider } from "@mui/material";

const Marca = ({ vehicles }) => {
  const router = useRouter();
  const { marca } = router.query;

  return (
    <>
      <Meta
        title={`Autos tipo ${marca.toUpperCase()}`}
        description={`Busca tu auto por marca ${marca}`}
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "50px" }} />
        <h1 style={{ marginBottom: "70px" }}>
          {" "}
          Busqueda por marca: {marca.toUpperCase()}
        </h1>
        <CarList vehicles={vehicles} />
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://apicarone.com/api/v1/vehicles/vehiclesByMake/${context.params.marca}`
  );

  const vehicles = await res.json();

  return {
    props: {
      vehicles: vehicles.data,
    },
  };
};

export default Marca;
