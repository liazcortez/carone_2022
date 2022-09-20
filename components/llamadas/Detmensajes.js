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
import TextField from '@mui/material/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';

export default function Detmensajes() {
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
    useEffect(() => {
      console.log(info)
    }, [info])
  return (
    <Box px={5} pt={2} sx={{position: 'relative'}} style={{width:'100%', height:'100%', margin:"0px", padding:"0px",  display:"flex", flexDirection:"column", justifyContent:"center"}}>
    
        <Box pb={1} style={{display:"flex", width:"100%", height:"50px", padding:"0px", margin:"0px"}}>
          <Box style={{display:"flex", margin:"0px", padding:"0px", width:"100%", alignItems:"center", margin:"0px 0px 0px 20px"}}>
              <center>
                <Typography variant="h6" style={{color:"#213881"}}>
                  John Doe
                </Typography>
              </center>
             
          </Box>
          <IconButton style={{position: 'absolute', top: 5, right: 5, backgroundColor: "#f8f7ff"}}>
                <MoreVertIcon style={{color:"#213881"}} />
              </IconButton>
        </Box><br/>
                <Box style={{width:'100%', height:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px", backgroundColor:"#f8f7ff"}}>
                  <Box style={{width:'100%', height:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"10px"}}>
                  <Box display="flex">
                  <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
                    <Box display="flex" padding="10px" marginLeft="5px"  justifyContent={"space-around"} width={"200px"} borderRadius="0px 20px 20px 20px" style={{ backgroundColor: "#eaeaea" }}>
                      <Typography style={{color:"#404243" , fontSize:"11px"}}>Hola, Como estas?</Typography>
                    </Box>
                  </Box>
                  <Box display="flex" style={{margin:"20px 0px 20px 0px"}}>
                  <Avatar alt="Mensaje" style={{backgroundColor:"#213881"}}>
            <PersonIcon style={{color:"#ffffff"}} />
          </Avatar>
                    <Box display="flex" padding="10px" marginLeft="5px"  justifyContent={"space-around"} width={"200px"} borderRadius="0px 20px 20px 20px" style={{ backgroundColor: "#eaeaea" }}>
                      <Typography style={{color:"#404243" , fontSize:"11px"}}>Yo eh estado Trabajando</Typography>
                    </Box>
                  </Box>
                  {/*box donde se guardan los mensajes del usuarios que envia */}
                  <Box display="flex" justifyContent={"flex-end"} style={{margin:"20px 0px 20px 0px"}}>
                    <Box display="flex" marginRight="5px" padding="10px" justifyContent={"space-around"} width={"200px"} borderRadius="20px 20px 0px 20px" style={{ backgroundColor: "#213881" }}>
                      <Typography style={{color:"#FFFFFF", fontSize:"11px"}}>Pues muy bien, y que tal el trabajo</Typography>
                    </Box>
                    <Avatar  alt="Yo" src="https://img.wattpad.com/0e4bf16df2cbf9be4fb83971a50d057e6e47e62d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6e3376387062676e47637872773d3d2d32362e313630643938303534613634616536303134353539303736333435302e6a7067?s=fit&w=720&h=720'" />
                  </Box>
                  <Box display="flex" justifyContent={"flex-end"} >
                    <Box display="flex" marginRight="5px" padding="10px" justifyContent={"space-around"} width={"200px"} borderRadius="20px 20px 0px 20px" style={{ backgroundColor: "#213881" }}>
                      <Typography style={{color:"#FFFFFF", fontSize:"11px"}}>{mensaje}</Typography>
                    </Box>
                    <Avatar  alt="Yo" src="https://img.wattpad.com/0e4bf16df2cbf9be4fb83971a50d057e6e47e62d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6e3376387062676e47637872773d3d2d32362e313630643938303534613634616536303134353539303736333435302e6a7067?s=fit&w=720&h=720'" />
                  </Box>
                  </Box>
                  
                </Box>
              
              <Box style={{backgroundColor:"#ebebeb", display: "flex", flexWrap: "wrap", borderRadius:"0px", margin:"0px", padding:"0px", width:"100%"}}>
                  
                  <TextField
                    sx={{ ml: 1, flex: 1, padding:"3px"}}
                    variant="standard" 
                    placeholder="Escriba su Mensaje..."
                    name='name'
                    value={info.name} 
                    onChange = {handleOnChange}
                    style={{color:"#565859" }}
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
                    <EmojiEmotionsIcon style={{ color:"#565859" }} />
                  </IconButton>
                  <IconButton sx={{ p: "5px"}} > 
                  <AttachFileIcon  style={{ color:"#565859"}}/>
                  </IconButton>
                  <IconButton  onClick={handleOnClick} sx={{ p: "5px"}}>
                    <SendIcon style={{ color:"#213881"}} />
                  </IconButton>
                </Box>
</Box>
  )
}
