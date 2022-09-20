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
import MicNoneIcon from '@mui/icons-material/MicNone';
import RestoreIcon from '@mui/icons-material/Restore';
import PhoneIcon from '@mui/icons-material/Phone';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StopCircleIcon from '@mui/icons-material/StopCircle';
export default function Dethistorial() {
  return (
    <Box style={{ width: '100%', minHeight:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}}>
    <Card style={{ width: '100%', minHeight:'100%', display:"flex", flexDirection:"column", margin:"0px", padding:"0px"}} display="flex" justifyContent="center" elevation={0}>
        <CardHeader 
        title={
            <Typography style={{color:"#213881"}} variant="h5" >Recientes</Typography>
        }

        action={
            <Box style={{width:"100%", height:"100%", margin:"0px", padding:"0px", borderRadius:"0px 40px 40px 0px", flexDirection:"row", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Typography style={{fontSize:"12px", margin:"0px 5px 0px 0px"}}>Bienvenido Miguel!  </Typography>
            <Avatar src='https://img.wattpad.com/0e4bf16df2cbf9be4fb83971a50d057e6e47e62d/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b6e3376387062676e47637872773d3d2d32362e313630643938303534613634616536303134353539303736333435302e6a7067?s=fit&w=720&h=720' />
            </Box>
        }
        />        
        <CardContent style={{ borderRadius:"0px", margin:"0px", padding:"0px", width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Box style={{ borderRadius:"20px", margin:"10px 0px 0px 0px", padding:"25px", width:"80%", height:"100%", display:"flex", flexDirection:"column", backgroundColor:"#f8f7ff", justifyContent:"space-around"}}>
                <Box style={{ margin:"0px", padding:"0px", borderRadius:"10px",  width:"100%", height:"100%", display:"flex"}}>
                    
                    <Avatar sx={{width:80,height:80}}  src='https://i.pinimg.com/736x/59/61/27/596127c2ca417ea825fa7de07b7750ff.jpg'/>
                    
                    
                    <Box style={{margin:"0px", padding:"0px", borderRadius:"0px", margin:"0px", padding:"0px", width:"100%", height:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Typography style={{color:"#213881"}} variant="h6" >(+52) 81 0000 0000</Typography>
                        <Typography style={{color:"#969bac", fontSize:"11px"}}>Te marco hace unas horas</Typography>
                    </Box>
                    <Box style={{margin:"0px", padding:"0px", borderRadius:"0px", margin:"0px", padding:"0px", width:"50%", height:"100%", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                    <MicNoneIcon style={{color:"#969bac", fontSize:"26px"}}/>
                    <RestoreIcon style={{color:"#969bac", fontSize:"26px"}}/>
                    <Avatar style={{backgroundColor:"#51a16d"}}>
                    <PhoneIcon style={{color:"#FFFFFF"}}/>
                    </Avatar>
                    </Box>
                </Box>
            </Box>
            <Box style={{  borderRadius:"0px", margin:"0px", padding:"5px", width:"80%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                <Box style={{ borderRadius:"0px", margin:"0px", padding:"0px", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                    <Box style={{width:"100%", alignItems:"center", display:"flex"}}><PhoneIcon style={{color:"#969bac", fontSize:"16px"}}/> <Typography style={{color:"#969bac", fontSize:"12px"}}>(+52) 81 0000 0000</Typography></Box>
                    <Box style={{width:"20%", alignItems:"center"}}><ArrowRightAltIcon style={{color:"#969bac", fontSize:"16px"}}/></Box>
                    <Box style={{width:"100%", alignItems:"center", display:"flex"}}><PhoneEnabledIcon style={{color:"#969bac", fontSize:"16px"}}/><Typography style={{color:"#969bac", fontSize:"12px"}}>(+52) 81 0000 0000</Typography></Box>
                    <Box style={{width:"100%", alignItems:"center", display:"flex"}}><CalendarTodayIcon style={{color:"#969bac", fontSize:"16px"}}/> <Typography style={{color:"#969bac", fontSize:"12px"}}>Viernes 15 de Septiembre de 2022</Typography></Box>
                </Box>
                <Box style={{margin:"0px", padding:"0px", borderRadius:"0px", margin:"0px", padding:"0px", width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"flex-start"}}>
                <Box style={{width:"100%",height:"100%", alignItems:"center", display:"flex"}}><SubdirectoryArrowRightIcon style={{color:"#969bac", fontSize:"16px"}}/> <Typography style={{color:"#969bac", fontSize:"12px"}}>Duracion de llamada 1 min</Typography></Box>
                </Box>
            </Box>
            <Box style={{width:"95%",height:"100%", margin:"23px 0px 10px 0px",padding:"0px", minHeight:"100%"}}>
            <Typography style={{color:"#213881", textAlign:"left"}}variant="h5">Detalles de Cliente</Typography>
            </Box>
            <Box style={{ margin:"0px 0px 15px 0px", borderRadius:"0px",  padding:"5px", width:"80%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                <Box style={{margin:"0px", padding:"0px", borderRadius:"0px", width:"100%", height:"100%", display:"flex",flexDirection:"column", justifyContent:"space-around"}}>
                    <Box style={{width:"100%", alignItems:"center", display:"flex", justifyContent:"flex-start"}}>
                        <Box style={{width:"50%", display:"flex", height:"100%" }}>
                            <Box style={{width:"100%",height:"100%" ,display:"flex", flexDirection:"column"}}>
                                <Typography>Subir Documentos</Typography>
                                <Box style={{width:"70%",height:"100%" ,display:"flex", justifyContent:"space-between"}}>
                                    <Box style={{backgroundColor:"#cb999d", width:"45%", borderRadius:"0px 20px 20px 20px", alignItems:"center", height:"100%"}}>
                                        <Typography style={{textAlign:"center", padding:"20px 3px 20px 3px", color:"#213881", fontSize:"13px"}}>PDF</Typography>
                                    </Box>
                                    <Box style={{backgroundColor:"#213881", width:"45%", borderRadius:"20px 20px 0px 20px", alignItems:"center", height:"100%"}}>
                                        <Typography style={{textAlign:"center", padding:"20px 3px 20px 3px", color:"#FFFFFF", fontSize:"13px"}}>DOC</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box style={{ margin:"0px 0px 15px 0px", borderRadius:"0px",  padding:"5px", width:"80%", height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                <Box style={{width:"100%", height:"100%",alignItems:"center", display:"flex", justifyContent:"flex-start", flexDirection:"column"}}>
                    <Typography>Mensaje de llamada:</Typography>
                    <Typography style={{fontSize:"11px"}}>Hola Miguel! no pude contactarte necesito hablar contigo por favor, si puedes mandame mensaje</Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
</Box>
  )
}
