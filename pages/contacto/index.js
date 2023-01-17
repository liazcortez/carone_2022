import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, Divider } from "@mui/material";
import Meta from "../../components/Meta";
import { makeStyles } from "@mui/styles";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ObjExist from "../../utils/ObjExist";
import Link from "next/link";

const storeRow = ({ store, index }) => (
  <Grid item md={3} key={index}>
    <Box sx={{ paddingBlockEnd: "2rem" }}>
      <Box>
        <img
          style={{
            width: "100%",
            height: "270px",
            objectFit: ObjExist(store, ["contactPhoto"], false)
              ? "cover"
              : "contain",
          }}
          src={ObjExist(
            store,
            ["contactPhoto"],
            ObjExist(store, ["image"], "/static/logo.png")
          )}
        />
      </Box>

      <Box>
        <Typography
          style={{
            fontWeight: 600,
            fontSize: "20px",
            textTransform: "capitalize",
          }}>
          {`${ObjExist(store, ["make", "name"])} ${ObjExist(store, [
            "name",
          ])}`.replace("-", " ")}
        </Typography>

        <Box style={{ display: "flex", alignItems: "start" }}>
          <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px" }} />
          <a
            href={`https://www.google.com.mx/maps/search/${store.address}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#000000" }}>
            <Typography
              style={{
                fontSize: "20px",
                paddingBlockEnd: "1rem",
                textTransform: "capitalize",
              }}>
              {`${ObjExist(store, ["address"])}`}
            </Typography>
          </a>
        </Box>

        <Box style={{ display: "flex", alignItems: "start" }}>
          <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px" }} />
          <Typography
            style={{
              fontSize: "20px",
              paddingBlockEnd: "1rem",
            }}>
            {`${ObjExist(store, ["schedule"])}`}
          </Typography>
        </Box>

        <Box style={{ display: "flex", alignItems: "start" }}>
          <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px" }} />

          <a
            href={`tel:+52${store.phone}`}
            style={{ textDecoration: "none", color: "#000000" }}>
            <Typography
              style={{
                fontSize: "20px",
                paddingBlockEnd: "2rem",
              }}>
              {`${ObjExist(store, ["phone"])}`}
            </Typography>
          </a>
        </Box>
      </Box>
    </Box>
  </Grid>
);

const index = ({ storesProps }) => {
  const [makes, setMakes] = useState({});

  useEffect(() => {
    let newStores = [];
    let makes = [];
    let makesObj = {};

    let finalMakes = {};
    newStores = storesProps.filter((store) => store.schedule);

    newStores.forEach((store) => {
      if (makes.findIndex((element) => element === store.make.name) === -1)
        makes.push(store.make.name);
      if (makesObj[store.make.name]) makesObj[store.make.name].push(store);
      else {
        makesObj[store.make.name] = [store];
      }
    });
    makes.sort().forEach((make) => {
      let sortedStores = makesObj[make].sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      finalMakes[make] = sortedStores;
    });

    let alfa = false;
    if (finalMakes["alfa-romeo"]) {
      alfa = finalMakes["alfa-romeo"];
      delete finalMakes["alfa-romeo"];
    }
    if (alfa) finalMakes["alfa-romeo"] = alfa;
    setMakes(finalMakes);
  }, [storesProps]);

  return (
    <>
      <Meta title="Car One TV - Car One Group" description="Car One TV" />

      <Container className="VideoContainer" maxWidth="lg">
      <Divider sx={{ marginBottom: "1em" }} />
        <Grid container spacing={2}>
          {Object.keys(makes) &&
            Object.keys(makes).length >= 1 &&
            Object.entries(makes).map((row, index) => {
              let [make, stores] = row;
              return (
                <Grid item xs={12} key={index}>
                  <Typography
                    variant={"h2"}
                    style={{
                      fontWeight: 600,
                      fontSize: "30px",
                      textTransform: "capitalize",
                      padding: "1rem 0",
                    }}>
                    {make.replace("-", " ")}
                  </Typography>
                  <Grid container spacing={2}>
                    {stores.map((store, index) => storeRow({ store, index }))}
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const storesRes = await fetch("https://apicarone.com/api/v1/stores");
  const stores = await storesRes.json();

  return {
    props: {
      storesProps: stores.data,
    },
  };
};

export default index;
