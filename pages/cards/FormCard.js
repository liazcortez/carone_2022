import React from 'react';
import { Box, Typography, Grid, Avatar, Divider, Stack, Link} from "@mui/material";
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
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box style={{ borderRadius:"0% 0% 30% 30%", width:"100%", marginBottom:10}}>
            <center>
              <img src={card?.stores?.make?.image} alt={card?.store?.make?.name.toUpperCase()} style={{width:"42%", marginTop:5}}/>
              <Typography variant='h6' fontSize={35} style={{marginBottom:12, fontWeight: 700}}>{card?.stores?.make?.name.toUpperCase()} {Capitalize(card?.stores?.name)}</Typography>
            </center>
          </Box>
          <Divider sx={{ marginTop: 2, marginBottom: 2, width:"0%"}} />
          <Box style={{width:"100%", marginBottom:15, marginTop:12}}>
            <center>
              <Avatar src={card?.image} alt={card?.slug}  sx={{ width: 100, height: 100 }}/>
            </center>
          </Box>
          <Divider sx={{ marginTop: 2, marginBottom: 2, width:"0%"}} />
          <Box style={{width:"100%", marginBottom:16, marginTop:10}}>
            <center>
              <Typography variant="h6" style={{fontFamily:"tahoma"}} >{capitalCase(card?.name)}</Typography>
              <Typography variant="caption" color="grayText" style={{fontFamily:"tahoma", fontSize:"14px"}}>{Capitalize(card?.job)}</Typography>
              <Typography variant='body2' style={{fontFamily:"tahoma"}} >
                <b>
                  <a
                    href={`mailto:${card?.email}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    {card?.email}
                  </a>
                </b>
              </Typography>
              <Typography variant='body2' style={{fontFamily:"tahoma"}} >
                  <a
                    href={`tel:+52${card?.phone}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    {prettyPhone(card?.phone)}
                  </a>
              </Typography>
            </center>
          </Box>
          <center>
          <Divider sx={{ marginTop: 3, marginBottom: 8, width:"80%"}} />
          </center>
          <Box style={{width:"100%"}}>
            <center>
              <Stack spacing={2} direction="row" style={{justifyContent:"center"}}>
                {
                  card && card.facebook !== '' &&
                  <Link href={card?.facebook} underline="none" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon style={{color:"#000080", fontSize:"30px"}}/>
                  </Link>
                }
                {
                  card && card.twitter !== '' &&
                  <Link href={card?.twitter} underline="none" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon style={{color:"#87CEEB",  fontSize:"30px"}}/> 
                  </Link>
                } 
                {
                  card && card.youtube !== '' &&
                  <Link href={card?.youtube} underline="none" target="_blank" rel="noopener noreferrer">
                    <YouTubeIcon style={{color:"#ff0000",  fontSize:"30px"}}/>
                  </Link>
                }
                {
                  card && card.instagram !== '' &&
                  <Link href={card?.instagram} underline="none" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon style={{color:"#ff0080",  fontSize:"30px"}}/>
                  </Link>
                }
                {
                  card && card.tiktok !== '' &&
                  <Link href={card?.tiktok} underline="none" target="_blank" rel="noopener noreferrer">
                    <MusicNoteIcon style={{  fontSize:"30px", color:"#000000"}}/>
                  </Link>
                }
                {
                  card && card.wsp !== '' &&
                  <Link href={card?.wsp} underline="none" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon style={{color:"#25D366", fontSize:"30px"}}/>
                  </Link>
                }
              </Stack>
            </center>
          </Box>
          <Divider sx={{ marginTop: 5.4, width:"0%"}} />
          <Box style={{background:"#1278E0", borderRadius:"60% 10% 0% 0%", width:"100%", marginTop:20, padding:0}}>
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
