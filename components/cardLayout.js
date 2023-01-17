import React from "react";

const CardsLayout = ({ children }) => {
  return (
    <div className="CardsLayoutContainer" style={{display:"flex", flexDirection:"column"}}>
      {children}
    </div>
  );
};

export default CardsLayout;
