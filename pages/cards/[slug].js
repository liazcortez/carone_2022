import React, { useState, useEffect } from "react";
import { baseURL } from "../../api/api";
import { Box, Container, Divider, Grid } from "@mui/material";
import Meta from "../../components/Meta";
import FormCard from "./FormCard";

const Slug = ({ card }) => {
  const [currCard, setCurrCard] = useState("");

  const Capitalize = (string) => {
    if (string === undefined) return "";

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (card) setCurrCard(card);
  }, [card]);


  if (!currCard._id) return null;

  return (
    <>
      <Meta
        title="Card - Carone Group" 
        description="Promociones de autos en México - Carone Group"
        url={`https://carone.com.mx/cards${card?.slug}`}
        googlebot={"index,follow"}
        robots="all"
      />
      <Container maxWidth="lg">
      <Box style={{ marginBottom: 30, marginTop: 25, textAlign: "center" }}>
        <img className="mainLogo" alt="Logo carone" />
        <Divider sx={{ marginTop: 2 }} />
      </Box>
        <>
          <Grid
            container
            spacing={4}
            display="flex"
            alignItems="top"
            justifyContent="center"
          >
            <Grid item xs={8}>
              <FormCard card={card}/>
            </Grid>
          </Grid>
        </>
      </Container>
    </>
  );
};
Slug.layout = "PromotionsLayout";


export const getServerSideProps = async (ctx) => {
  // `https://apicarone.com/api/v1/vehicles?slug=${ctx.params.slug}`
  const res = await fetch(`${baseURL}/cards/slug/${ctx.params.slug}`);

  const responseCard = await res.json();

  return {
    props: {
      card: responseCard.data,
    },
  };
};

export default Slug;
