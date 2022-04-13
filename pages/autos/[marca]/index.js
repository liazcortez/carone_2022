import React from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container, Divider, Button, Typography } from "@material-ui/core";
import Meta from "../../../components/Meta";
import CarList from "../../../components/autos/CarList";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { baseURL } from "../../../api/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: 50,
    },
  },
}));

const Marca = ({ vehicles, make }) => {

  const router = useRouter();
  const { marca } = router.query;
  const classes = useStyles();

  return (
    <>
      <Meta
        title={`Autos tipo ${marca.toUpperCase()}`}
        description={`Busca tu auto por marca ${marca}`}
        image={make && make.image ? make.image : 'https://automotive-api.s3.us-east-2.amazonaws.com/60353a7149ef4d0d9d02489b/4174612d-09b0-4089-9d58-60ef1450c31a/logo.png'}
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "50px" }} />
        <div className={classes.root} style={{ marginBottom: 10 }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/" passHref={true}>
              <Button>CARONE </Button>
            </Link>
            <Link color="inherit" href="/autos" passHref={true}>
              <Button>Autos</Button>
            </Link>
            <Typography
              color="textPrimary"
              style={{ textTransform: "capitalize" }}
            >
              <Button disabled>{marca}</Button>
            </Typography>
          </Breadcrumbs>
        </div>

        <CarList vehicles={vehicles} />
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {

  // `https://apicarone.com/api/v1/vehicles/vehiclesByMake/${context.params.marca}?sort=index`
  const res = await fetch(
    `${baseURL}/vehicles/vehiclesByMake/${context.params.marca}?sort=index`
  );

  const vehicles = await res.json();

  const resMake = await fetch(`${baseURL}/makes/slug/${context.params.marca}`);
  const make = await resMake.json();

  let resV = [];
  let resM = {}
  if(vehicles.data) resV = vehicles.data
  if(make) resM = make


  return {
    props: {
      vehicles: resV,
      make: resM
    },
  };
};

export default Marca;
