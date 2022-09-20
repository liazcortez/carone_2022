import React, {Fragment} from 'react'
import {
  Container
} from "@mui/material";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import PhoneIcon from '@mui/icons-material/Phone';
import Avatar from '@mui/material/Avatar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ClearIcon from '@mui/icons-material/Clear';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Teclado from './Teclado';
export default function Marcador() {
  return (
          <Box  style={{width:'100%', minHeight:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"40px 0px 0px 40px"}}>
          <Card style={{width:"100%", minHeight:'100%', display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"40px 0px 0px 40px", backgroundColor:"#f8f7ff", alignItems:"center"}} elevation={0}>
            <CardContent style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", backgroundColor:"#f8f7ff", alignItems:"center"}}>
            <CardHeader style={{width:"100%", height:"100%", display:"flex", justifyContent:"space-arround", borderRadius:"40px 0px 0px 40px", backgroundColor:"#f8f7ff"}}
            title={<Typography style={{color:"#5a5d67", textAlign:"center"}}>Contactos</Typography>}
            action={
              <Avatar style={{backgroundColor: "#51a16d"}}>
                  <PersonAddAltIcon style={{color:"#FFFFFF"}} />
              </Avatar>
            }
            />
              <Teclado/>
            </CardContent>
            <CardActions style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", backgroundColor:"#f8f7ff", marginBottom:"0px"}}>
              <Avatar style={{backgroundColor: "#51a16d"}} sx={{ width: 53, height: 53 }}>
                  <PhoneIcon style={{color:"#FFFFFF"}}/>
              </Avatar>
            </CardActions>
        </Card>
        
        </Box>
        
  )
}

