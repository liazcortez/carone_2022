import Head from "next/head";
import React from "react";
import ObjExist  from "../utils/ObjExist";

const Meta = ({ 
  title, 
  description, 
  url, 
  image,
  brand,
  availability,
  condition,
  price,
  itemId,
  itemGroupId,
  currency,
  phone = "",
  location = {},
  store = "",
  robots,
  googlebot,
}) => {
  const Capitalize = (string) => {
    if (string === undefined) return "";

    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={Capitalize(description)} />
      <link rel="icon" href="/logo.ico" />
      

      {/* Canonical URL  */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={Capitalize(title)} />
      <meta property="og:description" content={Capitalize(description)} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=0, user-scalable=yes" />
      <meta property="og:type" content="website" />
      <title>{title}</title>

      {/* Bots */}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={googlebot} />
      <meta name="description" content={Capitalize(description)} />
      <meta name="author" content="Carokou" />

       {/* Structure Data in JSON + LD */}
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "${store}",
            "@id": "${url}",
            "description": "${Capitalize(description)}",
            "url": "${url}",
            "telephone": "${phone}",
    
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "${ObjExist(location, ["street"])}",
                "addressLocality": "${ObjExist(location, ["city"])}",
                "addressRegion": "${ObjExist(location, ["state"])}",
                "postalCode": "${ObjExist(location, ["zipcode"])}",
                "addressCountry": "${ObjExist(location, ["country"])}"
            },
    
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "${
                  ObjExist(location, ["coordinates"], false)
                    ? location.coordinates[0]
                    : ""
                }",
                "longitude": "${
                  ObjExist(location, ["coordinates"], false)
                    ? location.coordinates[1]
                    : ""
                }"
            },
    
            "image": ["${image}"],
    
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                }
            ],
            "name": "Carokou"
        }
          `,
        }}
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Car One Group",
  description:
    "Car One Group - Venta de autos nuevos y seminuevos en Monterrey Nuevo Leon y Mexico",
  url: "https://www.carone.com.mx",
  image: "https://automotive-api.s3.us-east-2.amazonaws.com/60353a7149ef4d0d9d02489b/4174612d-09b0-4089-9d58-60ef1450c31a/logo.png",
  robots: "all",
  googlebot: "index,follow",
};

export default Meta;
