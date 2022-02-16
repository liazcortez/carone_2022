import React, { useEffect } from "react";
import {
  Box,
  Container,
  Button,
  Grid,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Link from "next/link";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navListContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
    },
  },
  hideOnMobile: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  showOnMobile: {
    display: "none",
    flexDirection:'column',
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
}));

const NavList = ({ user, setMenuOpen, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  const classes = useStyles();
  return (
    <Box className={classes.navListContainer}>
      <Box p={1}>
        <Link href="/autos" passHref={true}>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Autos
          </Button>
        </Link>
      </Box>
      <Box p={1}>
        <Link href="/favoritos" passHref={true}>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Favoritos
          </Button>
        </Link>
      </Box>

      <Box p={1}>
        <Link href="/trabajos" passHref={true}>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Bolsa de Trabajo
          </Button>
        </Link>
      </Box>

      <Box p={1}>
        <Link href="#" passHref={true}>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
            variant="contained"
            color="primary"
          >
            Contacto
          </Button>
        </Link>
      </Box>

      <Box className={classes.hideOnMobile} p={1}>
        <Link
          onClick={() => {
            setMenuOpen(false);
          }}
          href="/"
          passHref={true}
        >
          <InstagramIcon />
        </Link>
      </Box>

      {user && user.name ? (
        <Box p={1}>
          <Box className={classes.hideOnMobile}>
            <Button
              color="primary"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              menu
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>
                <Link href="/perfil">
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Perfil
                  </Button>
                </Link>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  setMenuOpen(false);
                }}
                onClick={handleLogout}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>
          <Box className={classes.showOnMobile}>
            <Box >
            <Link href="/perfil">
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                  >
                    Perfil
                  </Button>
                </Link>
            </Box>
            <Box >
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default NavList;
