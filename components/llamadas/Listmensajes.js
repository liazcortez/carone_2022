import React from 'react'
import {
    Box,
    Card,
  } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
export default function Listmensajes() { 
  return (
    <Box style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <List style={{width:"100%", height:"80%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#f8f7ff", alignItems:"center"}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
        </List>
    </Box>
  )
}
