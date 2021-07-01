import Head from "next/head";

import React from "react";

const Meta = ({ title, description, url, image }) => {
  const Capitalize = (string) => {
    if (string === undefined) return "";

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:title" content={Capitalize(title)} />
      <meta property="og:description" content={Capitalize(description)} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Car One Group",
  description:
    "Car One Group - Venta de autos nuevos y seminuevos en Monterrey Nuevo Leon y Mexico",
  url: "https://www.carone.com.mx",
  image: "https://kiamonterrey.mx/wp-content/uploads/2019/08/VIDEO_SEDONA.jpg",
};

export default Meta;
