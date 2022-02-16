import React from "react";
import Link from "next/link";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
  mobileImage:{
    width: "100%",
    height: "100px",
    objectFit: "cover",
    [theme.breakpoints.down('xs')]:{
      height: "70px",
    }
  }
}));

const CarCardItem = ({ data }) => {
  const classes = useStyles();
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
            className={classes.mobileImage}
          />
        </div>
      </a>
    </Link>
  );
};

export default CarCardItem;
