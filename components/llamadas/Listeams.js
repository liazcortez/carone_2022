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
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';

export default function Listeams() {
  return (
    <Box style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <List style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#f8f7ff", alignItems:"center"}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <AvatarGroup max={3}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        </ListItemAvatar>
        <ListItemText
          primary="Equipo de Historia"
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
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AvatarGroup max={3}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
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
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <AvatarGroup max={3}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" style={{backgroundColor:"#213881"}} />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </ListItemAvatar>
        <ListItemText
          primary="TEAM"
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
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        
    </Box>
  )
}
