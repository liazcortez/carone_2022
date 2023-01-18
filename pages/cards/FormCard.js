import React from 'react';
import { Box, Typography, Grid, Avatar, Divider, Stack} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Capitalize } from '../../utils/capitalize';
import { capitalCase } from 'change-case';

const FormCard = ({card}) => {
  const prettyPhone = (p) => `+52 ${p[0]}${p[1]} ${p[2]}${p[3]}${p[4]}${p[5]} ${p[6]}${p[7]}${p[8]}${p[9]}`

  if(!card) return null;

  return (
    <Grid container spacing={2} style={{display:"flex", flex: 1}}>
      <Grid item xs={12}>
          <Box style={{ borderRadius:"0% 0% 30% 30%", width:"100%", marginBottom:10, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
            <center>
              <img src={card?.stores?.make?.image} alt={card?.store?.make?.name} style={{width:"42%", marginTop:5}}/>
              <Typography variant='h6' fontSize={35} style={{marginBottom:12, fontWeight: 700}}>{Capitalize(card?.stores?.make?.name)} {Capitalize(card?.stores?.name)}</Typography>
            </center>
          </Box>
          <Box style={{width:"100%", marginBottom:15, marginTop:12, alignItems:"center", justifyContent:"center", display:"flex"}}>
            <Avatar src={card?.image} alt={card?.slug}  sx={{ width: 100, height: 100 }}/>
          </Box>
          <Box style={{width:"100%", marginBottom:16, marginTop:10, display:"flex", alignItems:"center", justifyContent:"flex", textAlign:"center", flexDirection:"column"}}>
              <Typography variant="h6" fontSize={25} style={{fontFamily:"tahoma"}} >{capitalCase(card?.name || '')}</Typography>
              <Typography variant="caption" color="grayText" style={{fontFamily:"tahoma", fontSize:"18px"}}>{Capitalize(card?.job || '')}</Typography>
              <Typography variant='body2' style={{fontFamily:"tahoma", fontSize:"18px"}} >
                <b>
                  <a
                    href={`mailto:${card?.email}`}
                    style={{ textDecoration: "none", color: "#000000"}}
                  >
                    {card?.email}
                  </a>
                </b>
              </Typography>
              <Typography variant='body2' style={{fontFamily:"tahoma", fontSize:"18px"}} >
                  <a
                    href={`tel:+52${card?.phone}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    {prettyPhone(card?.phone)}
                  </a>
              </Typography>
          </Box>
          <center>
          <Divider sx={{ marginTop: 3, marginBottom: 5, width:"80%"}} />
          </center>
          <Box style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Stack spacing={2} direction="row" style={{justifyContent:"center", display:"flex", alignItems:"flex"}}>
                  {
                    card?.facebook !== "" &&
                    <a href={card?.facebook} underline="none" target="_blank" rel="noopener noreferrer">
                      <FacebookIcon style={{color:"#000080", fontSize:"30px"}}/>
                    </a>
                  }
                  {
                    card?.twitter !== "" &&
                    <a href={card?.twitter} underline="none" target="_blank" rel="noopener noreferrer">
                      <TwitterIcon style={{color:"#87CEEB",  fontSize:"30px"}}/> 
                    </a>
                  }
                  {
                    card?.youtube !== "" &&
                    <a href={card?.youtube} underline="none" target="_blank" rel="noopener noreferrer">
                      <YouTubeIcon style={{color:"#ff0000",  fontSize:"30px"}}/>
                    </a>
                  }
                  {
                    card?.instagram !== "" &&
                     <a href={card?.instagram} underline="none" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon style={{color:"#ff0080",  fontSize:"30px"}}/>
                     </a>
                  }
                  {
                    card?.tiktok !== "" &&
                    <a href={card?.tiktok} underline="none" target="_blank" rel="noopener noreferrer">
                      <MusicNoteIcon style={{  fontSize:"30px", color:"#000000"}}/>
                    </a>
                  }
                  {
                    card?.wsp !== "" &&
                    <a href={`https://wa.me/${card?.wsp}`} underline="none" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon style={{color:"#25D366", fontSize:"30px"}}/>
                    </a>
                  }
              </Stack>
          </Box>
          <Divider sx={{ marginTop: 5.4, width:"0%"}} />
          <Box style={{background:"#1278E0", borderRadius:"60% 10% 0% 0%", width:"100%"}}>
              <Box style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"15px"}}>
                <Box style={{width:"50%"}}>
                  <Typography variant='h5' style={{color:"#ffffff", fontSize:"16px"}}>TARJETA DIGITAL</Typography>
                </Box>
                <Box style={{width:"40%", paddingRight:2}}>
                  <img src="../../../static/images/white.png" style={{width:"80%"}}/>
                </Box>
              </Box>
          </Box>
        </Grid>
    </Grid>
  )
}

export default FormCard;
