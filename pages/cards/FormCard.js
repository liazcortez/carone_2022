import React from 'react';
import { Box, Typography, Grid, Avatar, Divider} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Capitalize } from '../../utils/capitalize';
import { capitalCase } from 'change-case';

const FormCard = ({card}) => {
  console.log(card)
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box style={{ borderRadius:"0% 0% 30% 30%", width:"100%", marginBottom:10}}>
            <center>
              <img src={card?.stores?.make?.image} alt={card?.store?.make?.name.toUpperCase()} style={{width:"40%", marginTop:5}}/>
              <Typography variant='h6' fontSize={"21px"} style={{marginBottom:12, fontFamily:"tahoma"}}>{card?.stores?.make?.name.toUpperCase()} {Capitalize(card?.stores?.name)}</Typography>
            </center>
          </Box>
          <Divider sx={{ marginTop: 2, marginBottom: 2, width:"0%"}} />
          <Box style={{width:"100%", marginBottom:15, marginTop:12}}>
            <center>
              <Avatar src={card?.image} alt={card?.slug}  sx={{ width: 100, height: 100 }}/>
            </center>
          </Box>
          <Box style={{width:"100%", marginBottom:16, marginTop:10}}>
            <center>
              <Typography variant="h6" style={{fontFamily:"Segoe UI"}} >{capitalCase(card?.name)}</Typography>
              <Typography variant="body" style={{fontFamily:"Segoe UI"}}>{Capitalize(card?.job)}</Typography>
              <Typography variant='body2' style={{fontFamily:"Segoe UI"}} ><b>{card?.email}</b></Typography>
            </center>
          </Box>
          <center>
          <Divider sx={{ marginTop: 3, marginBottom: 6, width:"80%"}} />
          </center>
          <Box style={{width:"100%"}}>
            <center>
              <Box style={{display:"flex", justifyContent:"space-between", marginBottom:8}}>
                <Box style={{display:"flex", width:"100%", alignItems:"center"}}>
                  <FacebookIcon style={{color:"#000080", marginLeft:2, marginRight:3, fontSize:"30px"}}/>
                  <Typography variant='caption' style={{fontSize:"12px", fontFamily:"Arial"}}><em>{card?.stores?.make?.name.toUpperCase()} {card?.stores?.name}</em></Typography>
                </Box>
                <Box style={{display:"flex", width:"100%", alignItems:"center"}}>
                  <TwitterIcon style={{color:"#87CEEB", marginLeft:2, marginRight:3, fontSize:"30px"}}/>  
                  <Typography variant='caption' style={{fontSize:"12px", fontFamily:"Arial"}}><em>@{card?.stores?.make?.name.toUpperCase()}_{card?.stores?.name}</em></Typography>
                </Box>
              </Box>
              <Box style={{display:"flex", justifyContent:"space-between", marginBottom:8}}>
                <Box style={{display:"flex", width:"100%", alignItems:"center"}}>
                  <YouTubeIcon style={{color:"#ff0000", marginLeft:2, marginRight:3, fontSize:"30px"}}/>
                  <Typography variant='caption' style={{fontSize:"12px", fontFamily:"Arial"}}><em>{card?.stores?.make?.name.toUpperCase()} {card?.stores?.name}</em></Typography>
                </Box>
                <Box style={{display:"flex", width:"100%", alignItems:"center"}}>
                  <InstagramIcon style={{color:"#ff0080", marginLeft:2, marginRight:3, fontSize:"30px"}}/>
                  <Typography variant='caption' style={{fontSize:"12px", fontFamily:"Arial"}}><em>{card?.stores?.make?.name.toUpperCase()} {card?.stores?.name}</em></Typography>
                </Box>
              </Box>
              <Box style={{display:"flex", justifyContent:"space-between", marginBottom:8}}>
                <Box style={{display:"flex", width:"100%", alignItems:"center"}}>
                  <MusicNoteIcon style={{ marginLeft:2, marginRight:3, fontSize:"30px"}}/>
                  <Typography variant='caption' style={{fontSize:"12px", fontFamily:"Arial"}}><em>{card?.stores?.make?.name.toUpperCase()} {card?.stores?.name}</em></Typography>
                </Box>
                <Box style={{display:"flex", width:"100%", alignItems:"center"}}>
                  <WhatsAppIcon style={{color:"#25D366", marginLeft:2, marginRight:3, fontSize:"30px"}}/>
                  <Typography variant='caption' style={{fontSize:"12px", fontFamily:"Arial"}}><em>{card?.stores?.dpxPhone}</em></Typography>
                </Box>
              </Box>
            </center>
          </Box>
          <Divider sx={{ marginTop: 5.4, marginBottom: 2, width:"0%"}} />
          <Box style={{background:"#000080", borderRadius:"60% 10% 0% 0%", width:"100%", marginTop:20, padding:0}}>
            <center>
              <Box style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"16px", paddingBottom:"16px"}}>
                <Box style={{width:"50%"}}>
                  <Typography variant='h5' style={{color:"#ffffff", fontSize:"14px"}}>TARJETA DIGITAL</Typography>
                </Box>
                <Box style={{width:"40%", paddingRight:2}}>
                  <img src="../../../static/images/white.png" style={{width:"80%"}}/>
                </Box>
              </Box>
            </center>
          </Box>
        </Grid>
    </Grid>
  )
}

export default FormCard;
