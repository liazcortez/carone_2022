import React from 'react'
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Container
} from "@mui/material";
import TextField from '@mui/material/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Histllamadas from './Histllamadas';
export default function Historial() {
  return (
    <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"40px 0px 0px 40px"}}>
      <Card style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"40px 0px 0px 40px", backgroundColor:"#f8f7ff", alignItems:"center"}} elevation={0}>
        <CardContent style={{width:'100%', height:'100%', margin:"10px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
              <Box style={{display:"flex", width:"100%", height:"100%", padding:"0px", margin:"0px", justifyContent:"space-around", alignItems:"center"}}>
              <Box style={{display:"flex", margin:"0px", padding:"0px", borderRadius:"40px", backgroundColor:"#ecedf3", width:"60%",height:"100%", justifyContent:"space-between"}}>
                <Box style={{display:"flex", backgroundColor:"#213881", width:"100%",height:"100%", borderRadius:"40px", justifyContent:"center", padding:"5px"}}>
                  <Typography style={{color:"#ffffff", textAlign:"center"}}>Todos</Typography>
                </Box>
                <Box style={{display:"flex", width:"100%", borderRadius:"40px", justifyContent:"center", alignItems:"center"}}>
                <Typography style={{color:"#213881"}}>
                    Perdidos
                </Typography>
                </Box>
              </Box>
              <Avatar style={{backgroundColor: "#ecedf3"}}>
                  <SearchIcon style={{color:"#213881"}} />
              </Avatar>
              </Box>
              <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
                <Histllamadas/>
              </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
