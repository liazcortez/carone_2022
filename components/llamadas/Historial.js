import React from 'react'
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Container,
  Button
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
import { AddBoxSharp } from '@mui/icons-material';
export default function Historial() {
  return (
    <Box px={5} pt={2} sx={{position: 'relative'}} style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"40px 0px 0px 40px"}}>
              <Box pb={1} style={{display:"flex", width:"100%", height:"30px", padding:"0px", margin:"0px", justifyContent:"space-around", alignItems:"center"}}>
              <Box style={{display:"flex", margin:"0px", padding:"0px", borderRadius:"40px", backgroundColor:"#ecedf3", width:"60%", justifyContent:"space-between", position: 'absolute', top: 7, right: 90,}}>
                <Button style={{display:"flex", backgroundColor:"#213881", width:"100%", borderRadius:"40px", justifyContent:"center", padding:"5px", alignItems:"center"}}>
                  <Typography style={{color:"#ffffff", textAlign:"center"}}>Todos</Typography>
                </Button>
                <Button style={{display:"flex", width:"100%", borderRadius:"40px", justifyContent:"center", alignItems:"center"}}>
                <Typography style={{color:"#213881"}}>
                    Perdidos
                </Typography>
                </Button>
              </Box>
              <IconButton style={{position: 'absolute', top: 5, right: 5, backgroundColor: "#ecedf3"}}>
                <SearchIcon style={{color:"#213881"}} />
              </IconButton>
              </Box><br/>
              <Divider sx={{ marginBottom: 1.8 }} />
              <Box style={{width:'100%', height:'450px', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"flex-start"}}>
                <Histllamadas/>
              </Box>
    </Box>
  )
}
