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
          <Grid
            container
            spacing={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} md={7} style={{alignItems:"center", display:"flex", flexDirection:"row"}}>
              <FormCard card={card}/>
            </Grid>
          </Grid>
      </Container>
    </>
  );
};
Slug.layout = "CardsLayout";


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
