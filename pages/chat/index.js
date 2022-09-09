import React from "react";
import { Container } from "@mui/material";
import Meta from "../../components/Meta";
import Chat from '../../components/chat/Chat'

const Index = ({ storesProps }) => {

  return (
    <>
      <Container>
        <Meta title="Chat- Car One Group" description="Car One Chat" />
        <Chat />
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

export default Index;
