import React from "react";
import Link from "next/link";
import Image from 'next/image'


const CarCardItem = ({ data }) => {
  return (
    <Link href={`/autos/${data.name}`}>
      <a>
        <div
          style={{
            border: "1px solid #d8d8d8",
            padding: "1em",
            borderRadius: "10px",
          }}
        >
          <Image
          alt="Picture of the author"
            src={data.image}
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
