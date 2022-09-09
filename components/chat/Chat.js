import React, { Fragment, useState, useEffect } from "react";
import { useTheme } from "@mui/system";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Container
} from "@mui/material";
import SendIcon from '@material-ui/icons/Send';
import TextField from '@mui/material/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red, grey, orange, purple, blueGrey } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import PhoneIcon from '@mui/icons-material/Phone';
import InfoIcon from '@material-ui/icons/Info';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import ContactsIcon from '@mui/icons-material/Contacts';
import RestoreIcon from '@material-ui/icons/Restore';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ArchiveIcon from '@material-ui/icons/Archive';
import EmailIcon from '@material-ui/icons/Email';
import AvatarGroup from '@mui/material/AvatarGroup';
import RoomIcon from '@material-ui/icons/Room';
import Chip from '@material-ui/core/Chip';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import * as moment from 'moment';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Chatcarone() {

  const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: purple[800],
    },
    
    subColor: {
      color: '#FFFFFF',
      fontSize: '11px'
    },
    azulprinc: {
      backgroundColor: '#3274db',
      cursor: 'pointer'
    },
    searchContainer: {
      backgroundColor: "background.search",
      fontSize: "15px",
      lineHeight: "18px",
      color: "#828282",
      width: "100%",
      height: "46px",
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      marginRight: '1em',
    },
    avatar2: {
      backgroundColor: purple[800],
      width: "80",
      height: "80",
    },
    large: {
      width: theme.spacing(26),
      height: theme.spacing(26),
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  }));
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  const theme = useTheme();
  const classes = useStyles();
  const [info, setDatos] = useState({
    texto: '',
  })
  const [mensaje, setMensaje] = useState('')

  const handleOnChange = (event) => {
    setDatos({ ...info, [event.target.name]: event.target.value })
  }
  const handleOnClick = (event) => {
    setMensaje(`${info.name}`)

  }
  return (
      <Grid container  style={{width:'100%', height:'100%', margin:"0px", padding:"0px", display:"flex", justifyContent:"center"}} >
         {/**Apartado del Contactos */}
        <Grid item xs={3} sx={{ backgroundColor: theme.palette.mode === "light" ? "#0478fb" : "#33373e" }} style={{width:'100%', height:'100%', margin:"0px", padding:"0px"}} borderRadius={"18px 0px 0px 18px"}>
          <Box sx={{ width: '100%', maxWidth: 360, backgroundColor: theme.palette.mode === "light" ? "#0478fb" : "#33373e", margin:"0px", padding:"0px"}} borderRadius={"20px 0px 0px 20px"}>
            <Card style={{ backgroundColor: theme.palette.mode === "light" ? "#0478fb" : "#33373e", borderRadius:"18px 0px 0px 0px" }} elevation={0}>
              <CardHeader style={{ color: "#FFFFFF" }} borderRadius={"20px 0px 0px 20px"}
                action={
                  <Box>
                    <AddCircleIcon style={{ color: "background.icon", cursor: 'pointer', fontSize:"30px" }} fontSize="50px" />
                    <MoreVertIcon style={{ color: "background.icon", cursor: 'pointer' }} />
                  </Box>
                }
                title="Contactos" />
              <CardContent style={{width:'100%', height:'100%'}}>
             {/**Apartado de Busqueda de contactos */}
                <Paper sx={{backgroundColor: "rgba(255,255,255,0.2)", color: "#FFFFFF"}} elevation={0} component="form" style={{width:'100%', height:'100%', display:"flex"}}>
                  <IconButton type="submit" sx={{ p: "10px" }} aria-label="search ">
                    <SearchIcon sx={{ color: "#FFFFFF" }} />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Busque Aqui..."
                    style={{color: "#FFFFFF"}}
                    
                  />
                </Paper>
              
              </CardContent>
              {/**Apartado de iconos de acciones de contactos */}
              < CardActions style={{ color: "rgba(255,255,255,0.6)", justifyContent: "space-around" }}>
                <RestoreIcon />
                <PeopleOutlineIcon />
                <ContactsIcon />
                <ArchiveIcon />
              </CardActions>
            </Card>
          </Box>
          {/**Apartado de lista de contactos y mensajes */}
          <List sx={{ width: '100%' }}style={{ height:'100%', margin:"0px", padding:"0px"}}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.avatar}>
                    J
                  </Avatar>
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText sx={{ color: "#FFFFFF" }}
                primary="Dragon ball > tu anime favorito"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="#FFFFFF"
                    >
                      Juanito
                    </Typography>
                    <Typography className={classes.subColor}>{" — Ya solo aceptalo…"}</Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.avatar}>
                    J
                  </Avatar>
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText sx={{ color: "#FFFFFF" }}
                primary="Hola"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="#FFFFFF"
                    >
                      Juanito
                    </Typography>
                    <Typography className={classes.subColor}>{" — Que Haces?"}</Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.avatar}>
                    XD
                  </Avatar>
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText sx={{ color: "#FFFFFF" }}
                primary="Equipo Ingles :v"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="#FFFFFF"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    <Typography className={classes.subColor}>{" — lo siento se que te atropellaron pero te vamos a sacar del equipo…"} </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar className={classes.avatar}>
                    :V
                  </Avatar>
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText sx={{ color: "#FFFFFF" }}
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="#FFFFFF"
                    >
                      Sandra Adams
                    </Typography>
                    <Typography className={classes.subColor}>{' — Inserte texto :u'} </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Grid>
        {/**Apartado del Chat  #0478fb */}
        <Grid item xs={6}  style={{width:'100%', height:'100%', borderRadius:"0px", display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
          <Box style={{width:'100%', height:'100%', borderRadius:"0px", display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
            <Card id="chat" elevation={0} style={{width:'100%', height:'100%', borderRadius:"0px", display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
              
                <CardHeader style={{ color: theme.palette.mode === "light" ? "#404243" : "#FFFFFF" , backgroundColor: theme.palette.mode === "light" ? "#f8f9fb" : "#33373e"  }} borderRadius="0px 0px 0px 0px" elevation={2}
                  avatar={
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      variant="dot"
                    >
                      <Avatar className={classes.avatar} alt="Miguel" src="https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg" />

                    </StyledBadge>

                  }
                  action={
                    <Box sx={{ ml: 1, flex: 1}} display="flex">
                      <Avatar className={classes.small} style={{backgroundColor: theme.palette.mode === "light" ? "#007aff" : "#33373e", cursor: "pointer", marginRight:"6px"}}><PhoneIcon style={{ color: "#FFFFFF"}} fontSize="20px" /></Avatar>
                      <Avatar className={classes.small} style={{backgroundColor: theme.palette.mode === "light" ? "#007aff" : "#33373e", cursor: "pointer", marginRight:"20px"}}><VideocamIcon style={{ color: "#FFFFFF" }} fontSize="20px" /></Avatar>
                    </Box>
                  }
                  title="Miguel"
                  subheader={<Typography style={{color: theme.palette.mode === "light" ? "#404243" : "#FFFFFF", fontSize:"11px"}}>En linea</Typography>}

                />


              <CardContent style={{backgroundColor: theme.palette.mode === "light" ? "#f8f9fb" : "#1c2025", display:"flex", flexDirection:"column", margin:"0px", padding:"0px",width:'100%', height:'100%'}}>
                <Box style={{width:'100%', height:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
                  
                  <Box style={{width:'100%', height:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
                  <Box display="flex">
                    <Avatar className={classes.avatar} alt="Miguel" src="https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg" />
                    <Box display="flex" padding="10px" marginLeft="5px"  justifyContent={"space-around"} width={"200px"} borderRadius="0px 20px 20px 20px" style={{ backgroundColor: theme.palette.mode === "light" ? "#eaeaea" : "#33373e" }}>
                      <Typography style={{color:theme.palette.mode === "light" ? "#404243" : "#FFFFFF", fontSize:"11px"}}>Hola, Como estas?</Typography>
                    </Box>
                  </Box>
                  {/*box donde se guardan los mensajes del usuarios que envia */}
                  <Box display="flex" justifyContent={"flex-end"} >
                    <Box display="flex" marginRight="5px" padding="10px" justifyContent={"space-around"} width={"200px"} borderRadius="20px 20px 0px 20px" marginLeft={"1px"} style={{ backgroundColor: theme.palette.mode === "light" ? "#007aff" : "#33373e" }}>
                      <Typography style={{color:"#FFFFFF", fontSize:"11px"}}>{mensaje}</Typography>
                    </Box>
                    <Avatar className={classes.avatar}  alt="Yo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3es4uVGRLwp1WKNePe8iJ4bj7urmi5dDNA&usqp=CAU" />
                  </Box>
                  </Box>
                  
                </Box>
              </CardContent>
              <CardContent style={{backgroundColor:theme.palette.mode === "light" ? "#ebebeb" : "rgba(255,255,255,0.2)", margin:"0px", padding:"0px", borderRadius:"0px", margin:"0px", padding:"0px"}}>
              <Box style={{backgroundColor:theme.palette.mode === "light" ? "#ebebeb" : "rgba(255,255,255,0)" , display: "flex", flexWrap: "wrap", borderRadius:"0px", margin:"0px", padding:"0px" }} elevation={0} component="form">
                  
                  <TextField
                    sx={{ ml: 1, flex: 1, padding:"3px"}}
                    variant="standard" 
                    placeholder="Escriba su Mensaje..."
                    name='name'
                    value={info.name} 
                    onChange = {handleOnChange}
                    style={{color: theme.palette.mode === "light" ? "#565859" : "#FFFFFF"}}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: 
                      <InputAdornment position="end">
                        
                        <IconButton
                          aria-label="toggle password visibility"
                          
                          edge="end"
                        >
                          
                        </IconButton>
                      </InputAdornment>
                    }}
                  />
                  <IconButton sx={{ p: "5px"}} >
                    <EmojiEmotionsIcon style={{ color: theme.palette.mode === "light" ? "#565859" : "#FFFFFF"  }} />
                  </IconButton>
                  <IconButton sx={{ p: "5px"}} > 
                  <AttachFileIcon  style={{ color: theme.palette.mode === "light" ? "#565859" : "#FFFFFF" }}/>
                  </IconButton>
                  <IconButton  onClick={handleOnClick} sx={{ p: "5px"}}>
                    <SendIcon style={{ color: theme.palette.mode === "light" ? "#0478fb" : "#FFFFFF" }} />
                  </IconButton>
                </Box>
              </CardContent>

            </Card>

          </Box>
        </Grid>
         {/**Fin Apartado del Chat */}
        {/**Apartado de perfil del chat */}
        <Grid item xs={3} style={{width:'100%', height:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}} borderRadius="0px 18px 18px 0px">
          <Box style={{width:'100%', height:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
            <Card style={{ width: '100%', height:'100%', backgroundColor: theme.palette.mode === "light" ? "#FFFFFF" : "#33373e", borderRadius:"0px 18px 18px 0px", display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}} display="flex" justifyContent="center" elevation={0}>
              <CardHeader action={
                <CloseIcon sx={{ color: "background.icon", cursor: 'pointer' }} fontSize="50px" />
              }>
              </CardHeader>

              {/*<CardMedia 
                component="img" 
                src={'https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg'} 
                title="imagen de perfil"  
                style={{width:200, height:200, borderRadius:"80px", display:"block", margin:"auto"}}/>*/}

              <CardContent style={{width:'100%', height:'100%'}} display="flex" >
                <Box sx={{ display: "flex", justifyContent: "center" }} alignContent="center" alignItems="center">
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    variant="dot"
                  >
                    <Avatar className={classes.large} alt="UserPerfil" src="https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg" />

                  </StyledBadge>
                </Box>
                <Typography textAlign="center">Jose Miguel Hernandez Rayon</Typography>
                <Typography textAlign="center"  style={{ color: theme.palette.mode === "light" ? "#5f5f5f" : "#FFFFFF", fontSize:"14px"}}>Leyinork</Typography>
                <Typography textAlign="center" style={{ color: theme.palette.mode === "light" ? "#5f5f5f" : "#FFFFFF", fontSize:"12px" }}>"Inserte texto"</Typography>
                <Divider sx={{ marginBottom: 2.5 }} />
                <Box id="dato1" style={{ color: theme.palette.mode === "light" ? "#5f5f5f" : "#FFFFFF", fontSize:"12px" }}>
                  <Box display="flex" ><PhoneIcon /><Typography style={{ color: theme.palette.mode === "light" ? "#5f5f5f" : "#FFFFFF", fontSize:"13px" }}>+52 81 00 00 00 00</Typography></Box><br />
                  <Box display="flex" ><RoomIcon /><Typography style={{ color: theme.palette.mode === "light" ? "#5f5f5f" : "#FFFFFF", fontSize:"13px" }}>En mi casa xd</Typography></Box><br />
                  <Box display="flex" ><EmailIcon /><Typography style={{ color: theme.palette.mode === "light" ? "#5f5f5f" : "#FFFFFF", fontSize:"13px" }}>ejemplo@ejemplo.com</Typography></Box><br />
                </Box>
                <Typography textAlign="center">Imagenes</Typography>
                <Box display="flex" justifyContent={"center"} marginBottom="5px">
                  <AvatarGroup total={24}>
                    <Avatar alt="R" src="https://s2.dmcdn.net/v/SE1571VYFX-Cm0kFt/x1080" />
                    <Avatar alt="Travis Howard" src="https://i.pinimg.com/550x/a1/df/ba/a1dfba11a131e32a1d7192bf24aaf84f.jpg" />
                    <Avatar alt="XD" src="http://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                </Box>
                <Divider sx={{ marginBottom: 1.5 }} />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
  )
}

export default Chatcarone;