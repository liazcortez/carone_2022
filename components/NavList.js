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
    <Box className='navListContainer' alignContent={'center'} display='flex' alignSelf={'center'} alignItems='center'>
      <Box m={1} display='flex' justifyContent={'center'}>
        <Link href="/autos" passHref={true}>
          <Button onClick={() => {setMenuOpen(false)}}>
            Autos
          </Button>
        </Link>
      </Box>
      <Box m={1} display='flex' justifyContent={'center'}>
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
      <Box m={1} display='flex' justifyContent={'center'}>
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
      <Box m={1} display='flex' justifyContent={'center'}>
        <Link href="/carOneTv" passHref={true}>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Car One Tv
          </Button>
        </Link>
      </Box>
      <Box m={1} display='flex' justifyContent={'center'}>
        <Link href="#" passHref={true}>
          <Button
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Contacto
          </Button>
        </Link>
      </Box>
      <Box px={2} display='flex' justifyContent={'center'} pt={1}>
        <a
          href="https://instagram.com/caronegroup_oficial?igshid=YmMyMTA2M2Y="
          target='_blank'
          rel='noopener noreferrer'
          >
          <img src='https://cdn-icons-png.flaticon.com/512/174/174855.png' width={25} />
        </a>
      </Box>

      {user && user.name && 
        <Box display='flex' justifyContent={'center'}>
          <Box className='hideOnMobile'>
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

              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </Box>
          <Box className='showOnMobile'>
            <Box >
              <Link href="/perfil">
                <Button onClick={() => { setMenuOpen(false) }}>
                  Perfil
                </Button>
              </Link>
            </Box>
            <Box>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </Box>
  );
};

export default NavList;
