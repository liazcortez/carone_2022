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
                <img style={{ width: "100%", height: " 270px", objectFit: "cover",}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/982dd1d6-27ce-4fc9-a63e-52c84a8888ac/VOLKSWAGEN_GONZALITOS_2.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/f66f7ce3-64f0-445c-9010-881e4c43a892/KIA_FRONTERA.JPG"/>
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
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/3f1eb4af-93fd-4d8c-bb43-e76739a135e6/KIA_LAREDO_1.JPG"/>
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
                <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/0bb0b1c7-f030-40bc-aed3-ea371d90af13/KIA_LINDA_VISTA.jpg"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/41684437-6de9-45a6-8ff8-9d8e9d0662e8/CHEVROLET_UNIVERSIDAD.jpg"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/73ed5c62-6935-4a4f-9e5b-2397d30c5857/CHEVROLET_NOGALAR_2.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/70e2c7de-825e-4f61-b067-8fc8821536f3/CHEVROLET_CONCORDIA.png"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d5ff96cf80015c78337/6a315816-a275-4a25-ba0c-56be335e4d46/CHEVROLET_FIDEL_VELÁZQUEZ.JPG"/>
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
              <img style={{ width: "102%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/b4934d7e-78e7-4bff-a4c6-6d181eff2e83/MITSUBISHI_LINDA_VISTA.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/2f1111e3-76c7-4906-a26f-cfecb09aaf18/MITSUBISHI_SALTILLO.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://noticias.coches.com/wp-content/uploads/2011/09/ford.jpg"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/a36b6c4d-5c0c-4651-9cd4-5f338baf2a6f/NISSAN_SAN_JERÓNIMO.jpg"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/0dabbd15-719a-48e3-8f05-b80150b8bcad/MERCEDES-BENZ_VALLE.png"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/e60e6b19-e75c-46d3-a118-f0e626417608/MERCEDES-BENZ_GONZALITOS.png"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/0bbbc285-3d55-46c7-8ccf-0d8ccee1e409/CHRYSLER_CUMBRES.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/646c2476-d246-4e59-96c9-f0e31d22c7eb/CHRYSLER_CONTRY.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/76946e45-a8d1-4edc-b7d1-712553a89f12/MG_CALZADA_DEL_VALLE.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/50786d7e-4825-4700-a6ba-b84d964a9619/SEAT_CONTRY_.jpg"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/17dfad29-a50a-462a-9c81-6284e75e8ed3/SEAT_LINDA_VISTA.JPG"/>
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
              <img style={{ width: "100%", height: "270px", objectFit: "cover"}} src="https://www.elcarrocolombiano.com/wp-content/uploads/2019/11/Portada.jpg"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/6269ae3be8436b4af342ac97/d8cdbc80-52e4-469a-ab9c-f7fb2ba85b87/MG_CORREGIDORA.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/e4b1ffc8-18e9-43f8-a58e-f168e82c7cf9/MG_LAREDO.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/cb42c0e8-d2b2-47ee-975f-4765a7acbc55/MG_LAS_TORRES.png"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/8ba6518b-1542-4e51-9e6c-af26017f903a/MG_LINDA_VISTA.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/e43636e7-558e-4fc7-ada4-cc21a10ba0d0/MG_LOMAS_VERDES.JPG"/>
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
              <img style={{ width: "100%", height: " 270px", objectFit: "cover"}} src="https://automotive-api.s3.us-east-2.amazonaws.com/604a9d1df96cf80015c78336/0fc42480-343b-4362-a04e-9de4b8a539cf/VOLKSWAGEN_FRONTERA.JPG"/>
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
