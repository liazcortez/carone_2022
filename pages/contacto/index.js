import React from "react";
import { Container, Box, Typography, Grid, Divider} from "@material-ui/core";
import Meta from "../../components/Meta";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	container:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
 }
}));

const index = () => {
  const classes = useStyles();
  var player;
  const onYouTubeIframeAPIReady = () => {
    player = new YT.Player("live-video", {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
 


  return (
    <>
      <Meta title="Car One TV - Car One Group" description="Car One TV" />

      <Container className='VideoContainer' maxWidth="lg">
        
        <Box style={{paddingBlockEnd: "1rem"}}>
        <Typography variant="h4" style={{fontSize: "35px", fontWeight: 500}}>
            Contacto
        </Typography>

        <Divider style={{ border: "1px" ,marginTop: '1em', marginBottom: '1em'}}/>

        </Box>

        <Grid Container style={{display:"flex"}}>

            <Grid item md={8} spacing={4} pl={4}>

            <Typography style={{ fontWeight: 600, fontSize: "20px", paddingBlockEnd: "1rem"}}> Carone Corporativo</Typography>
            
            <Typography style={{ fontSize: "20px", paddingBlockEnd: "1rem"}}>
            Car One es tu mejor opción hemos sabido mantenernos como los 
            líder en ventas del sector premium en los últimos años gracias a 
            la preferencia y confianza que nuestros clientes 
            han depositado en nuestras agencias de servicio.
            </Typography>
            
            <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Dirección: Av San Jerónimo 101 Poniente, 64640 Monterrey, N.L. </Typography>
            {/*<Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Email:  </Typography>*/}
            <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>Telefono: 81 8989 3300</Typography>

            </Grid>

            <Grid item md={6}>
            
            <Box style={{width: "75%", height: "95px", paddingTop: 2, 
            backgroundColor: "#ededed", alignItems: "center", paddingBlockEnd: "20px", borderRadius: "1" }}>
            <Typography style={{fontSize: "20px", fontWeight: 600, textAlign: "center", margin: "1rem", paddingTop: "12px"}}> 
                Contactanos: 81 2222 5500
            </Typography>
            </Box>

            <img style={{width: "75%", paddingTop: "1rem"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/6269ae3be8436b4af342ac97/c06b3efd-7ce4-4f7c-b885-75415235cf2e/maxresdefault.jpeg"/> 
            
            </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default index;
