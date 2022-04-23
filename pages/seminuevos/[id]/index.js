import React from "react";
import { Container, Grid, Typography, Divider, Box} from "@material-ui/core";
import { object } from "yup";
import SemisForm from "../../../components/preowned/SemisForm";
import { Form } from "formik";

const index = () => {
    
    return(
    <Container maxWidth="lg">
      <Grid container style={{ marginBottom: 50 }}>
        <Grid item xs={12}>
        <Typography
            variant="h5"
            component="h3"
            style={{ fontWeight: "bold", color: "#656d78" }}
          >
            KIA RIO SEDAN LX 2020
          </Typography>

          
        <Box style={{display: "flex", justifyContent: "stretch", margin: "0px", paddingBlockEnd: "1rem"}}>

          <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78" }}
            >
                39,408 kms |
            </Typography>
            
            <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78", marginLeft: "1rem"}}
            >
            Automatica |
            </Typography>

            <Typography
              variant="h5"
              component="h3"
              style={{color: "#656d78", marginLeft: "1rem"}}
            >
            KIA Gonzalitos
            </Typography>

         </Box>
        </Grid>
        
        <Grid style={{minHeight:'10rem'}} item xs={8}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                <img style={{width: "100%", height:"35rem"}} src="https://caroneseminuevos.com/wp-content/uploads/2022/04/IMG_20220409_102637.jpg" />
                </Grid>

                <Grid item xs={4}>
                <img style={{width: "100%", height:"8rem", objectFit: "cover"}} src="https://caroneseminuevos.com/wp-content/uploads/2022/04/IMG_20220409_102739.jpg" />
                </Grid>

                <Grid item xs={4}>
                <img style={{width: "100%", height:"8rem", objectFit: "cover"}} src="https://caroneseminuevos.com/wp-content/uploads/2022/04/IMG_20220409_102758.jpg" />
                </Grid>

                <Grid item xs={4}>
                <img style={{width: "100%", height:"8rem", objectFit: "cover"}} src="https://caroneseminuevos.com/wp-content/uploads/2022/04/IMG_20220409_102805.jpg" />
                </Grid>

            </Grid>
        </Grid>

        <Grid style={{minHeight:'10rem'}}   item xs={4}>
            <SemisForm />
        </Grid>
        
        
        <Grid item xs={12}>
            <Typography
             variant="h5"
             component="h3"
              style={{ fontWeight: "bold", color: "#656d78", paddingTop: "2rem", paddingBlockEnd: "1rem"}}
             >
                CARACTERISTICAS KIA RIO SEDAN LX 2020
             </Typography>

            <Divider/>

          <Grid container spacing={3} style={{paddingTop: "1rem"}}>
                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Marca
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Kilometraje
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Modelo
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Precio
                    </Typography> 
                </Grid>

                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Año
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Tansmisión
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography style={{paddingBlockEnd: "2rem", fontWeight: 600}}>
                        Agencia
                    </Typography>

                    <Typography style={{fontWeight: 600}}>
                        Tipo
                    </Typography>
                </Grid>
          </Grid>
        </Grid>

      </Grid>
      </Container>
    )

}


export default index;