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

const Calltoaction = ({ color = "white", ...rest }) => {
  const classes = useStyles();

  return (
    <Card 
      className={clsx(classes[color], classes.card)}
      elevation={0}
      {...rest}
    >
      <CardContent className='dontShowOnMobile' >
        <Box display="flex" justifyContent="space-between" px={10}>
          <Box pr={10}>
            <h1 style={{ margin: 0 }}>Car One Compra tu auto!</h1>
            <Typography variant="caption" style={{ fontSize: 16 }}>
              SIN TRABAS - SIN FRAUDES - SIN PREOCUPACIONES
            </Typography>
          </Box>
          <Box display="flex" alignContent="center" alignItems="center">
            <Link href={"/compramos-tu-auto"}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Vender tu auto
              </Button>
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Calltoaction;
