import React from "react";
import { Container } from "@material-ui/core";

const Footer = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: 40, marginBottom: 20 }}>
      <div className="bg-gray-100 container mx-auto px-6 pt-10 pb-6">
        © Car One Group. All rights reserved.
      </div>
    </Container>
  );
};

export default Footer;
