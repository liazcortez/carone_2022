import React from 'react'
import {
    Box
  } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
export default function Histllamadas() {
  return (
   <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
     <List style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}} sx={{ position: 'relative',overflow: 'auto'}}>
      <ListItem alignItems="flex-start" >
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#D42113"}}>
          <PhoneCallbackIcon style={{color:"#FFFFFF"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography style={{color:"#213881"}}>(+52) 81 0000 0000</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#969bac"
              >
                10:00 AM
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#51a16d"}}>
          <PhoneCallbackIcon style={{color:"#FFFFFF"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography style={{color:"#213881"}}>Mamá</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#969bac"
              >
                10:00 AM
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#D42113"}}>
          <PhoneCallbackIcon style={{color:"#FFFFFF"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography style={{color:"#213881"}}>(+52) 81 0000 0000</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#969bac"
              >
                10:00 AM
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#51a16d"}}>
          <PhoneCallbackIcon style={{color:"#FFFFFF"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography style={{color:"#213881"}}>(+52) 81 0000 0000</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#969bac"
              >
                10:00 AM
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#51a16d"}}>
          <PhoneCallbackIcon style={{color:"#FFFFFF"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography style={{color:"#213881"}}>(+52) 81 0000 0000</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#969bac"
              >
                10:00 AM
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar style={{backgroundColor:"#51a16d"}}>
          <PhoneCallbackIcon style={{color:"#FFFFFF"}}/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={<Typography style={{color:"#213881"}}>(+52) 81 0000 0000</Typography>}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#969bac"
              >
                10:00 AM
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      
    </List>
   </Box>
  )
}
