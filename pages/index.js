import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container, Divider, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import CarList from "../components/autos/CarList";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      marginBottom: 50,
    },
  },
}));

const Marca = ({ vehicles, make, store }) => {
  const classes = useStyles();

  return (
    <>
      {/* <Meta
        title={`Autos tipo ${marca.toUpperCase()}`}
        description={`Busca tu auto por marca ${marca}`}
      /> */}

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
              <Button disabled>
                {make} {store}
              </Button>
            </Typography>
          </Breadcrumbs>
        </div>

        <CarList vehicles={vehicles} />
      </Container>
    </>
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
      make: data.make.name,
      store: store.name,
    },
  };
};

export default Marca;
