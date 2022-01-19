import React from "react";
import Link from "next/link";

const CarCardItem = ({ data }) => {
  return (
    <Link href={`/autos/${data && data.name}`}>
      <a>
        <div
          style={{
            border: "1px solid #d8d8d8",
            padding: "1em",
            borderRadius: "10px",
          }}
        >
           <img
            src={data.image}
            alt='none image'
            style={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
            }}
          />
        </div>
      </a>
    </Link>
  );
};

export default CarCardItem;
