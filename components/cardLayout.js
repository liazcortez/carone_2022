import React from "react";

const CardsLayout = ({ children }) => {
  return (
    <div className="CardsLayoutContainer" style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100%"}}>
      {children}
    </div>
  );
};

export default CardsLayout;
