import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import MicOffIcon from '@mui/icons-material/MicOff';
import CampaignIcon from '@mui/icons-material/Campaign';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
export default function Detalles() {
  return (
    <Box >
        <Card style={{ width: '100%', height:'100%', borderRadius:"0px 18px 18px 0px", display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}} display="flex" justifyContent="center" elevation={0}>
            <CardHeader 
            title={
                <Typography style={{color:"#213881"}} variant="h5" >Llamando ...</Typography>
            }

            action={
                <Box style={{width:"100%", height:"100%", margin:"0px", padding:"0px", borderRadius:"0px 40px 40px 0px", flexDirection:"row", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                    <Typography style={{fontSize:"12px", margin:"0px 5px 0px 0px"}}>Bienvenido Miguel!  </Typography>
                    <Avatar src='https://img.wattpad.com/0e4bf16df2cbf9be4fb83971a50d057e6e47e62d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6e3376387062676e47637872773d3d2d32362e313630643938303534613634616536303134353539303736333435302e6a7067?s=fit&w=720&h=720' />
                </Box>
            }
            />
             
            
            <CardContent style={{width:"100%", height:"100%", display:"flex", flexDirection:"column",margin:"0px",padding:"20px",justifyContent:"center", alignItems:"center"}}>
                    <Avatar sx={{width:185,height:185}}  src='https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg'>
                        M
                    </Avatar><br/>
                    <Typography variant="h6">John Doe</Typography>
                    <Typography>1:00</Typography>
                    <Box style={{width:"50%", height:"100%", margin:"10px 0px 10px 0px", padding:"0px", display:"flex", justifyContent:"space-around"}}>
                        <Avatar sx={{ width: 60, height: 60 }}>
                            <MicOffIcon/>
                        </Avatar>
                        <Avatar sx={{ width: 60, height: 60 }}>
                            <CampaignIcon/>
                        </Avatar>
                        <Avatar sx={{ width: 60, height: 60 }}>
                            <AccessTimeIcon/>
                        </Avatar>
                    </Box><br/>
                    <Avatar style={{backgroundColor: "#D42113"}} sx={{ width: 53, height: 53 }}>
                  <PhoneIcon style={{color:"#FFFFFF"}}/>
              </Avatar>
            </CardContent>
        </Card>
    </Box>
  )
}
