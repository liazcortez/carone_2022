import React from "react";
import Footer from "./Footer";

const PromotionsLayout = ({ children }) => {
  return (
    <div className="PromotionsLayoutContainer">
      {children}
      <Footer />
    </div>
  );
};

export default PromotionsLayout;
