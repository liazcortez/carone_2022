import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    Card,
  } from "@mui/material";
  import TextField from '@mui/material/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Listmensajes from './Listmensajes';
import ChatIcon from '@mui/icons-material/Chat';
export default function Mensajes() {
  return (
    <Box style={{width:'100%', height:'100%', margin:"15px 0px 0px 0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"40px 0px 0px 40px"}}>
    <Card style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"40px 0px 0px 40px", backgroundColor:"#f8f7ff", alignItems:"center"}} elevation={0}>
      <CardContent style={{width:'100%', minHeight:'100%', margin:"10px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <Box style={{display:"flex", width:"100%", height:"100%", padding:"0px", margin:"0px", justifyContent:"space-around", alignItems:"center"}}>
            <Box style={{display:"flex", margin:"0px", padding:"0px", borderRadius:"40px", backgroundColor:"#ecedf3", width:"60%",height:"100%", justifyContent:"space-between"}}>
              <Box style={{display:"flex", backgroundColor:"#213881", width:"100%",height:"100%", borderRadius:"40px", justifyContent:"center", padding:"5px"}}>
                <Typography style={{color:"#ffffff", textAlign:"center"}}>Todos</Typography>
              </Box>
              <Box style={{display:"flex", width:"100%", borderRadius:"40px", justifyContent:"center", alignItems:"center"}}>
              <Typography style={{color:"#213881"}}>
                  No Leidos
              </Typography>
              </Box>
            </Box>
            <Avatar style={{backgroundColor: "#ecedf3"}}>
                <SearchIcon style={{color:"#213881"}} />
            </Avatar>
            </Box><br/>
            <Divider sx={{ marginBottom: 1.8 }} />
            <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
            </Box>
            <Box style={{width:"97%", height:"100%", display:"flex", justifyContent:"flex-end"}}>
            <Box style={{padding:"10px", borderRadius:"13px", backgroundColor:"#213881"}}>
                <ChatIcon style={{color:"#FFFFFF"}} />
            </Box>
        </Box>
      </CardContent>
    </Card>
  </Box>
  )
}
