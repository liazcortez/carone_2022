import React from 'react';
import { Box, Typography, Grid, Avatar} from "@mui/material";

const FormCard = ({card}) => {
  return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box style={{background:"#000080", borderRadius:"0% 0% 30% 30%", width:"100%"}}>
            <center>
              <img src={card?.stores?.make?.image} alt={card?.store?.make?.name} style={{marginBottom:10, width:"30%"}}/>
            </center>
          </Box>
          <Box style={{width:"100%", marginBottom:10}}>
            <center>
              <Avatar src={card?.image} alt={card?.slug}  sx={{ width: 160, height: 160 }}/>
            </center>
          </Box>
          <Box style={{width:"100%", marginBottom:10}}>
            <center>
              <Typography variant="h5" >{card?.name}</Typography>
              <Typography variant="caption" >{card?.job}</Typography>
            </center>
          </Box>
        </Grid>
    </Grid>
  )
}

export default FormCard;
