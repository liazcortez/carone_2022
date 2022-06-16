import React from "react";

import {
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import Login from './Login';
import Register from './Register';
import useAuth from '../../hooks/useAuth';
import {makeStyles} from '@mui/styles';
const methodIcons = {
  Auth0: '/static/images/auth0.svg',
  FirebaseAuth: '/static/images/firebase.svg',
  JWT: '/static/images/jwt.svg'
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400,
    
    [theme.breakpoints.down('md')]: {
    width:'30vw',
    

    },
    [theme.breakpoints.down('xs')]: {
      width:'100vw',
  
      },
    // maxWidth: '40rem'

  },
  currentMethodIcon: {
    height: 60,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  },
  rightText: {
    float: 'right'
  },
  flexEnd:{
    justifyContent:'flex-end',
    display:'flex',
    alignItems:'center'
  }
}));

const AuthComponent = ({setOpen, login, setLogin}) => {
  const classes = useStyles();
  const t = (translate)=>{
    let res = translate.split('.');
    return res[1];
  };

const { clearState } = useAuth();
  return (
    <Card>
          <CardContent className={classes.cardContent}>
            <Box
              justifyContent="center"
              display="flex"
            >
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Typography color="textPrimary" gutterBottom variant="h5">
                {login?'Ingresar':'Registrate'}
                </Typography>
              </div>
            </Box>
            <Box flexGrow={1}>
              {login ? <Login setOpen={setOpen}/>:<Register setOpen={setOpen}/>}
              {/* <JWTLogin /> */}
            </Box>
      <CardActions className={classes.flexEnd} display='flex' direction="row" alingItems="center">
        {/* {
          !login &&
          <Typography 
            style={{ cursor: 'pointer', marginTop: 10}}
            onClick={()=>{
              setLogin(!login);
              clearState();
            }} 
            variant='p1'
            color='textSecondary'
          >
            ¿Ya tienes cuenta? 
            {' '}
            <Link>Ingresa aquí</Link>

          </Typography>
        }
        {
          login &&
          <Typography 
            style={{ cursor: 'pointer', marginTop: 10}}
            onClick={()=>{
              setLogin(!login);
              clearState();
            }} 
            variant='p1'
            color='textSecondary'
          >
            ¿No tienes cuenta?
            {' '}
            <Link>Registrate!</Link>
          </Typography>
        } */}
        
      </CardActions>
          </CardContent>
  </Card>
  );
};

export default AuthComponent;