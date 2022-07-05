import React from "react";
import { Container, Box, Typography, Grid, Divider} from "@mui/material";
import Meta from "../../components/Meta";
import { makeStyles } from "@mui/styles";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
          <Typography variant="h4" style={{fontSize: "35px", fontWeight: 500, textAlign: "center"}}>
              Contacto
          </Typography>
          <Divider sx={{marginTop: '1em', marginBottom: '1em'}}/>
        </Box>

          <Grid container spacing={2}>
            
            <Grid item md={4}>
              <Box>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover",}} src="https://automotive-api.s3.us-east-2.amazonaws.com/6269ae3be8436b4af342ac97/c06b3efd-7ce4-4f7c-b885-75415235cf2e/maxresdefault.jpeg"/>
                </Box>

                <Box>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Volkswagen Gonzalitos </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av San Jerónimo 101 Poniente, 64640 Monterrey, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 20:00 | Sábado: 09:00 - 19:30 | Domingo: 10:00 - 18:30 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3300</Typography>
                  </Box>
                  
                </Box>

              </Box>
            </Grid>

            <Grid item md={4}>
              <Box>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.automotores-rev.com/wp-content/uploads/2019/05/niveluno-kia-gonzalitos2-1.jpg"/>
                </Box>


                <Box>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Gonzalitos </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> José Eleuterio González # 609 Jardín del, Obispado, 64050 Monterrey, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 10:00 - 20:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 2133 5000</Typography>
                  </Box>
                  
                </Box>

              </Box>
            </Grid>

            <Grid item md={4}>
              <Box>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.elcarrocolombiano.com/wp-content/uploads/2018/11/20181103-KIA-SPORTAGE-2019-COLOMBIA-PRECIO-CARACTERISTICAS-VERSIONES-01.jpg"/>
                </Box>


                <Box>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Konfidence</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Av Lázaro Cárdenas #555 Jardín de Las Torres, 64754 Monterrey, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 10:00 - 18:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8037 2015</Typography>
                  </Box>
                  
                </Box>

              </Box>
            </Grid>


            <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/-Hh9idkH8MA/maxresdefault.jpg"/>
              </Box>

              <Box>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Frontera</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Blvd. Miguel Hidalgo No. 1000, Col. Palma Real, 88710 Reynosa, Tamps. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 18:00 | Domingo: 10:00 - 17:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px"}}>899 171 7000</Typography>
                  </Box>
                  
              </Box>
            </Box>
            </Grid>

            <Grid item md={4}>
              <Box>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://liderweb.mx/wp-content/uploads/2017/09/5A-KIA.jpg"/>
                </Box>

                <Box>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Laredo </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Av Reforma 4405, Campestre, 88275 Nuevo Laredo, Tamps. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 18:00 | Domingo: 10:00 - 17:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px"}}>867 136 2700</Typography>
                  </Box>
                  
              </Box>

              </Box>
            </Grid>

            <Grid item md={4}>
              <Box sx={{paddingBlockEnd: "2rem"}}>
                <Box>
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://abcnoticias.mx/u/fotografias/m/2021/10/22/f1280x720-150110_281785_8522.png"/>
                </Box>

                <Box>
                <Typography style={{ fontWeight: 600, fontSize: "20px"}}> KIA Linda Vista </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Miguel Alemán 6062, Torres de Linda Vista, 67130 Guadalupe, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 20:00 | Sábado: 08:00 - 20:00 | Domingo: 09:00 - 20:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px"}}>81 2133 5000</Typography>
                  </Box>
                  
              </Box>

              </Box>
            </Grid>

            <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.caronechevroletmonterrey.com.mx/content/dam/chevrolet/na/mx/es/index/about-us/AN-1.jpg?imwidth=960"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Ruíz Cortines </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Ruiz Cortines 902 Poniente, Linda Vista, 64410 Monterrey, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 10:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8150 4777 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOfQdck8CFyy7Q0JbmF2P7ke1euhR-OuUlcG_CZmo87CuyH2Ax1z3t1yDFyGI_uxWJZM&usqp=CAU"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Universidad </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Avenida Universidad, Av Casa Bella 1205, Col. Residencial, 66428 San Nicolás de los Garza, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 10:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3884</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://siempreauto.com/wp-content/uploads/sites/9/2020/10/2020-Chevrolet-Sonic-006.jpg?quality=60&strip=all&w=1200&h=800&crop=1"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Nogalar  </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Av. Nogalar Sur #551-B-Sur, Antiguo Nogalar, 66484 San Nicolás de los Garza, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 19:00 | Domingo: 10:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 1160 8501</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/YaWMTkaR9R4/maxresdefault.jpg"/>
              </Box>
              
              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Allende</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Carretera Nacional 650, Centro de Allende, 67350 Cd de Allende, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 21:00 | Sábado: 09:00 - 21:00 | Domingo: 21:00 - 21:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>826 144 1000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.caronechevroletmonterrey.com.mx/content/dam/chevrolet/na/mx/es/index/about-us/AN-1.jpg?imwidth=960"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Las Torres</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av Lázaro Cárdenas 2100, Laderas del Mirador (Fomerrey 21), 64900 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 19:00 | Sábado: 08:00 - 13:00 | Domingo: Cerrado</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8155 7777</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/t1gu6ThbWPs/maxresdefault.jpg"/>
              </Box>
              
              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}>Chevrolet Las Bombas</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Calz. de las Bombas 310, Coapa, Jardines de Coyoacán, Coyoacán, 04890 Ciudad de México</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 19:00 | Sábado: 08:00 - 17:00 | Domingo: 11:00 - 16:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>55 6382 0000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/2TjXCTI4mIo/maxresdefault.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}>Chevrolet Concordia </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Concordia 5316, 66610 Cd Apodaca, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 20:00 - 17:00 | Domingo: 11:00 - 17:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 2133 4970</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://siempreauto.com/wp-content/uploads/sites/9/2021/02/2021-silverado-ld-trims-highcountry-e1613334769457.jpg?quality=60&strip=all&w=1200"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Fidel Velázquez </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av Fidel Velázquez #1693, Bernardo Reyes, 64280 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 20:00 - 18:00 | Domingo: 10:00 - 18:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8888 1551</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://lh3.googleusercontent.com/p/AF1QipNloPmLPClZH2F3kjVZmOrDKcbBcAYJgA3S-pbE=w600-k"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chevrolet Tlalpan </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Calz. de Tlalpan No.3311, Sta. Úrsula Coapa, Coyoacán, 04850 Ciudad de México, CDMX</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:30 - 20:00 | Sábado: 11:00 - 17:00 | Domingo: 08:30 - 20:00</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "102%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/x14h6vEL0C8/maxresdefault.jpg"/>
              </Box>


              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mitsubishi Linda Vista </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Miguel Alemán 6062-a Col, Torres de Linda Vista, 67120 Guadalupe, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:30 - 20:00 | Sábado: 08:30 - 20:00 | Domingo: 11:00 - 17:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}> 81 8989 3780</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>
          
          <Grid item md={4}>
            <Box>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://mitsubishicarone.mx/wp-content/uploads/2021/06/montero.jpg"/>
              </Box>


              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mitsubishi Saltillo </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Blvrd. Nazario Ortiz Garza 1720, Alpes, 25270 Saltillo, Coah. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:30 - 20:00 | Sábado: 09:30 - 19:00 | Domingo: 09:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}> 844 424 9000 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.ford.mx/content/dam/Ford/website-assets/latam/mx/open-graph/2021/propietarios/distribuidores/ford-propietarios-seminuevos-certificados-directorio-distribuidores-agencia-sede.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Ford Lazaro Cardenas </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Av Lázaro Cárdenas 2611, Burócratas Municipales, 64790 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 19:00 | Domingo: 10:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}> 81 8989 3000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://i.ytimg.com/vi/piuMI2e1f4M/maxresdefault.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Ford Vasconcelos </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>  Av. José Vasconcelos 1501, Los Sabinos, 66230 San Pedro Garza García, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 19:00 | Domingo: 10:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3600</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.nissan-cdn.net/content/dam/Nissan/ar/agentes/Hero_banner_car_one.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Nissan SanJe </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Anillo Perif. 3000, La Otra Banda, Álvaro Obregón, 01090 Ciudad de México, CDMX </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 07:00 - 19:00 | Sábado: 07:00 - 17:00 | Domingo: 11:00 - 16:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>55 5683 7833</Typography>
                  </Box>
                  
              </Box>


            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.liderempresarial.com/wp-content/uploads/2018/06/AAF48B9F-A6AC-4500-8C11-3F33B35E928A.jpeg"/>
              </Box>
              
              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mercedes Benz Calzada del Valle </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Calz. del Valle 107, Del Valle, 66220 San Pedro Garza García, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: Cerrado</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 2133 7000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://cdn.motor1.com/images/mgl/KN3OM/s1/en-el-garage-de-autoblog-mercedes-benz-clase-a-sedan.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Mercedes Benz Gonzalitos</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>José Eleuterio Gonzalez 700, SUR, San Jeronimo, 64640 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 09:00 - 18:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3100 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://motorgiga.com/cargadatos/fotos2/chrysler/300-(sedan)-2008/800px/Delantero.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chrysler Cumbres</Typography>
              
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Los Triunfadores 6765-8° Sector, Col. Cumbres, 64610 Monterrey, N.L. </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 19:00 | Domingo: 11:00 am - 18:00 pm </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8888 1000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.diariomotor.com/imagenes/picscache/1440x655c/chrysler-200-2017_1440x655c.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chrysler Santa Lucia</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Miguel Alemán 6062, Valles de Linda Vista, 67130 Guadalupe, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 10:00 - 20:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3700 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_509acbf3e75342a081f05102c15bc5a9.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Chrysler Contry</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Eugenio Garza Sada Sur 3832, Más Palomas (Valle de Santiago), 64780 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:30 - 19:00 | Sábado: 08:30 - 19:00 | Domingo: 11:00 - 18:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 5000 7500</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>


          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="http://www.audicentercalzadadelvalle.com.mx/content/dam/iph/international/mx/MEX18510/Dealer_image/Dealer_Image_18510-920x518.jpg/jcr:content/renditions/cq5dam.thumbnail.1536.864.iph.png?imwidth=768&imdensity=1"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Calzada del Valle</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Calz. del Valle 103, Col. del Valle, Del Valle, 66220 San Pedro Garza García, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 20:00 | Sábado: 08:00 - 20:00 | Domingo: 10:00 - 20:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 3145 5000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/batch_New-SEAT-Leon-e-HYBRID_16_HQ.jpg?itok=W5XzI9yq"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Seat Contry</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Eugenio Garza Sada Sur 3890, Contry, 64780 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}> Lunes a Viernes 08:00 - 20:00 | Sábado: 08:00 - 20:00 | Domingo: 10:00 - 17:30 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3400</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.seat.mx/content/countries/mx/seat-website/es/autos-seat/precios-autos-nuevos/_jcr_content/article/singleimage_842901650/singleimageimage.resizedViewPort.noscale.assetRootXL.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Seat Linda Vista</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Miguel Alemán 4306, Col, 10 de Mayo, 67130 Monterrey, N.L</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 20:00 | Sábado: 08:00 - 20:00 | Domingo: 10:00 - 18:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3500 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: "270px", objectFit: "cover"}} src="https://www.portalautomotriz.com/sites/portalautomotriz.com/files/styles/pa3_400x260/public/media/photos/car_one_c_ar1.jpg?itok=gyR2cju3&timestamp=1647020220"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Alfa Romeo Calzada del Valle</Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Calz. del Valle 101, Col. del Valle, Del Valle, 66220 San Pedro, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 19:00 | Domingo: 4:00 - 18:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 8989 3500</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://topdriverz.nxtstatic.com/135/conversions/marca-mg-large.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Corregidora </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Dirección: P.º de la República Km 13020, 76230 Juriquilla, Qro.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 19:00 | Sábado: 09:00 - 17:00 | Domingo: 9:00 - 17:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>442 800 7200 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://img.remediosdigitales.com/dd0097/mg-autos-chinos-mexico/1366_2000.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Laredo </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av Reforma 4403, Campestre, 88278 Nuevo Laredo, Tamps.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 18:00 | Domingo: 10:00 - 17:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>867 234 3000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_16ce8a64d8154b17a46c24ecf13e761c.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Las Torres </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av Lázaro Cárdenas 2100, Sin Nombre de Col 39, 64900 Monterrey, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 08:00 - 20:00 | Sábado: 08:00 - 20:00 | Domingo: 09:00 - 20:00 </Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 2525 8000 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://img.gruporeforma.com/imagenes/960x640/6/66/5065584.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Linda Vista </Typography>
                  
                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Miguel Alemán 6062, Torres de Linda Vista, 67130 Guadalupe, N.L.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 20:00 | Domingo: 09:00 - 20:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>81 2530 7000 </Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://cdn-3.expansion.mx/dims4/default/32e89b4/2147483647/strip/true/crop/735x450+0+0/resize/1200x735!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fca%2Fa3%2F130202f441dda5116020686449ea%2Fmg.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> MG Lomas Verdes </Typography>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Av. Jardines de San Mateo 2, El Mirador, 53150 Naucalpan de Juárez, Méx.</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 19:00 | Sábado: 11:00 - 17:00 | Domingo: 09:00 - 19:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>55 8876 8000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>


          <Grid item md={4}>
            <Box sx={{paddingBlockEnd: "2rem"}}>
              <Box>
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://www.vw.com/content/dam/onehub_pkw/us/en/homepage/models/VW_NGW6_Homepage_Vehicle_Small-2_new.jpg"/>
              </Box>

              <Box>
              <Typography style={{ fontWeight: 600, fontSize: "20px"}}> Volkswagen Reynosa </Typography>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <LocationOnIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Blvd. Hidalgo # 1000 Fracc, Palma Real, 88710</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                  <QueryBuilderIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography  style={{fontSize: "20px", paddingBlockEnd: "1rem"}}>Lunes a Viernes 09:00 - 20:00 | Sábado: 09:00 - 17:00 | Domingo: 11:00 - 17:00</Typography>
                  </Box>

                  <Box style={{display: "flex", alignItems: "start"}}>
                    <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px"}}/>
                    <Typography style={{fontSize: "20px", paddingBlockEnd: "2rem"}}>89 9261 6000</Typography>
                  </Box>
                  
              </Box>

            </Box>
          </Grid>

          


        </Grid>
      </Container>
    </>
  );
};

export default index;
