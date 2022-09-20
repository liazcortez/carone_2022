import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import {IconButton, Button } from '@mui/material';
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
    const style ={
        large: {
            width: "180px",
            height: "180px",
          },
          button: {
            width: 64,
            height: 64,
            backgroundColor:"#eceaf7",
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
          }
    }
  return (
    <Box >
        <Card style={{ width: '100%', height:'100%', borderRadius:"0px", display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}} display="flex" justifyContent="center" elevation={0}>
            <CardHeader 
            title={
                <Typography style={{color:"#213881"}} variant="h5" >Llamando ...</Typography>
            }

            action={
                <Box style={{width:"100%", height:"100%", margin:"0px", padding:"0px", borderRadius:"0px", flexDirection:"row", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Typography style={{fontSize:"12px", margin:"0px 5px 0px 0px"}}>Bienvenido Miguel!  </Typography>
            <Avatar src='https://img.wattpad.com/0e4bf16df2cbf9be4fb83971a50d057e6e47e62d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6e3376387062676e47637872773d3d2d32362e313630643938303534613634616536303134353539303736333435302e6a7067?s=fit&w=720&h=720' />
            </Box>
            }
            />
             
            
            <CardContent style={{width:"100%", height:"100%", display:"flex", flexDirection:"column",margin:"0px",padding:"0px",justifyContent:"center", alignItems:"center"}}>
                    <Avatar sx={style.large}  src='https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg' style={{width:"200px",height:"200px"}}>
                        M
                    </Avatar><br/>
                    <Typography variant="h6">John Doe</Typography>
                    <Typography>1:00</Typography>
                    <Box style={{width:"50%", height:"100%", margin:"10px 0px 10px 0px", padding:"0px", display:"flex", justifyContent:"space-around"}}>
                        <Button sx={style.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
                            <MicOffIcon style={{color:"#333"}}/>
                        </Button>
                        <Button sx={style.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
                            <CampaignIcon style={{color:"#333"}}/>
                        </Button>
                        <Button sx={style.button} style={{backgroundColor: '#eceaf7', borderRadius:"50%"}}>
                            <AccessTimeIcon style={{color:"#333"}}/>
                        </Button>
                    </Box><br/>
                    <Button sx={style.button} style={{backgroundColor: "#D42113", borderRadius:"50%"}}>
                  <PhoneIcon style={{color:"#FFFFFF"}}/>
              </Button>
            </CardContent>
        </Card>
    </Box>
  )
}
