import React, { useState, useEffect } from "react";
import { baseURL } from "../../api/api";
import { Container, Grid } from "@mui/material";
import Meta from "../../components/Meta";
import FormCard from "./FormCard";

const Slug = ({ card }) => {
  const [currCard, setCurrCard] = useState("");

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
            <Grid item xs={12} md={7} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", height:"100%"}} >
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
