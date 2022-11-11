import React from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    // borderRadius: 30,
    padding: 10,
    minWidth: 180,
    height: 55,
  },
  card: {
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
    [theme.breakpoints.down('sm')]: {
      display:'block'
    },
    // boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.1);',
  },
  blue: {
    color: "white",
  },
  white: {},
  gray: {
    backgroundColor: "#f3f2f5",
  },
}));

const Calltoaction = ({ color = "#05418b", ...rest }) => {
  const classes = useStyles();

  return (
    <Card 
      className={clsx(classes.card)}
      elevation={0}
      style={{padding:"10px 0px 10px 0px"}}
      {...rest}
    >
      <CardContent className='dontShowOnMobile' >
        <Box display="flex" justifyContent="space-between" style={{padding:"40px"}}>
          <Box pr={10}>
            <Typography sx={{ margin: 0, fontSize: "28px", fontWeight: 600, color:"#FFFFFF"}}>¡Car One Compra tu auto!</Typography>
            <Typography variant="caption" style={{ fontSize: 16, color:"#FFFFFF"}}>
              SIN TRABAS - SIN FRAUDES - SIN PREOCUPACIONES
            </Typography>
          </Box>
          <Box display="flex" alignContent="center" alignItems="center">
            {/*<Link href={"/compramos-tu-auto"}>*/}
              <Button
                variant="contained"
                className={classes.button}
                disableElevation
                //color="primary"
                style={{ padding:"0px", fontSize:"19px", backgroundColor:"#05418b", color:"#FFFFFF"}}
              >
                Vender tu auto
              </Button>
            {/*</Link>*/}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Calltoaction;
