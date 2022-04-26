import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import Link from "next/link";
import { Menu as MenuIcon } from 'react-feather';
import { makeStyles } from "@material-ui/core/styles";
import useAuth from "../hooks/useAuth";
import Login from "./auth/DialogAuth";

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
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    }
  }
}));

const NavList = ({ setMenuOpen, logout, menuOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const navigate = useNavigate()
  const actionRef = React.useRef(null);
  const { user } = useAuth()
  const [login, setLogin] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const handleClick = (event) => {
    // setAnchorEl(event.currentTarget);
    setMenuOpen(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  const classes = useStyles();

  return (
    <Box className='navListContainer' style={{marginRight: -15}}>
      <Box m={1} display='flex' justifyContent={'center'}>
        <Link href="/autos" passHref={true}>
          <Button onClick={() => {setMenuOpen(false)}}>
            Autos
          </Button>
        </Link>
      </Box>
      <Box m={1} display='flex' justifyContent={'center'}>
        <Link href="/seminuevos" passHref={true}>
          <Button onClick={() => {setMenuOpen(false)}}>
            Seminuevos
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
      {
        !menuOpen &&
        <Box m={1} display='flex' justifyContent={'center'} className={classes.hideOnMobile}>
          <Button
            ref={actionRef}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </Button>
          <Menu
            anchorEl={actionRef.current}
            onClose={() => setOpen(false)}
            open={open}
            getContentAnchorEl={null}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            {
              user && user._id &&
              <>
              <Link href='/perfil'>
                <MenuItem
                  onClick={e => {
                    setMenuOpen(false)
                  }}
                  >
                  Perfil
                </MenuItem>
              </Link>
              <MenuItem
                onClick={e => {
                  logout()
                }}
                >
                Logout
              </MenuItem>
              </>
            }
          
            {
              user && user._id === undefined &&
              <MenuItem onClick={e => setLogin(true)}>
                Login
              </MenuItem>
            }
          </Menu>
          <Login setOpen={setLogin} open={login}/>
        </Box>
      }
      {
        menuOpen && user && user._id &&
        <>
          <Link href='/perfil'>
            <Box display='flex' justifyContent={'center'} >
              <Button
              onClick={e => {
                setMenuOpen(false);
                setMenuOpen(false)
              }}>
                Perfil
              </Button>
            </Box>
          </Link>
          <Box display='flex' justifyContent={'center'}>
            <Button onClick={e => {logout()}}>
              Logout
            </Button>
          </Box>
          </>
      }
      
      {
        menuOpen &&  user && user._id === undefined &&
        <Box display='flex' justifyContent={'center'} >
        <Button onClick={e => {
          setLogin(true); setMenuOpen(false);
          }}>
          Login
        </Button>
        </Box>
      }
      
      <Box display='flex' justifyContent={'center'} style={{paddingTop:5}}>
        <a
          href="https://instagram.com/caronegroup_oficial?igshid=YmMyMTA2M2Y="
          target='_blank'
          rel='noopener noreferrer'
          >
          <img src='https://cdn-icons-png.flaticon.com/512/174/174855.png' width={25} />
        </a>
      </Box>
    </Box>
  );
};

export default NavList;
