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
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Listeams from './Listeams';

export default function Teams() {
  return (
    <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"40px 0px 0px 40px"}}>
    <Card style={{width:"100%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", borderRadius:"40px 0px 0px 40px", backgroundColor:"#f8f7ff", alignItems:"center"}} elevation={0}>
      <CardContent style={{width:'100%', height:'100%', margin:"10px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
      <Box style={{width:'100%', height:'100%', margin:"10px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
      <Box style={{backgroundColor:"rgba(0, 0, 0, 0.1 )", display: "flex", flexWrap: "wrap", borderRadius:"0px", margin:"0px", padding:"0px", width:"92%", justifyContent:"space-around", borderRadius:"10px", alignItems:"center"}} elevation={0} component="form">
                  
                  <TextField
                    sx={{ ml: 1, flex: 1, padding:"3px"}}
                    variant="standard" 
                    placeholder="Buscar Equipo..."
                    name='name'
                    style={{color:"#565859"}}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: 
                      <InputAdornment position="start">
                        
                        <IconButton
                          aria-label="toggle password visibility"
                          
                          edge="start"
                        >
                          
                        </IconButton>
                      </InputAdornment>
                    }}
                   
                  />
                   <IconButton sx={{ p: "5px"}} >
                    <SearchIcon style={{ color:"#213881" }} />
                  </IconButton>
                </Box>
      </Box>
      <Box style={{display:"flex", width:"100%", height:"100%", padding:"0px", margin:"0px", justifyContent:"space-around", alignItems:"center"}}>
            <Box style={{display:"flex", margin:"0px", padding:"0px", borderRadius:"40px", backgroundColor:"#ecedf3", width:"90%",height:"100%", justifyContent:"space-around"}}>
              <Box style={{display:"flex", backgroundColor:"#213881", width:"100%",height:"100%", borderRadius:"40px", justifyContent:"center", padding:"5px"}}>
                <Typography style={{color:"#ffffff", textAlign:"center"}}>Todos</Typography>
              </Box>
              <Box style={{display:"flex", width:"100%", borderRadius:"40px", justifyContent:"center", alignItems:"center"}}>
              <Typography style={{color:"#213881"}}>
                  Favoritos
              </Typography>
              </Box>
            </Box>
            </Box><br/>
            <Divider sx={{ marginBottom: 1.3 }} />
            <Box style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Listeams/>
            </Box>
            
            <Box style={{width:"97%", height:"100%", display:"flex", justifyContent:"flex-end"}}>
            <Box style={{padding:"10px", borderRadius:"13px", backgroundColor:"#213881"}}>
                <GroupAddIcon style={{color:"#FFFFFF"}} />
            </Box>
        </Box>
      </CardContent>
    </Card>
  </Box>
  )
}
