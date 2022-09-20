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
   <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
     <List subheader={<li />} style={{width:'100%',height:"100%", margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"flex-start", overflow:"auto", position:"relative"}} >
     {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
  
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
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
            ))}
       </ul>
        </li>
      ))}
    </List>
   </Box>
  )
}
