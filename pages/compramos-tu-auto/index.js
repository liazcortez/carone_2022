import React from "react";
import Meta from "../../components/Meta";
import { Button, Container, Divider, Box, Typography } from "@material-ui/core";
import { CheckSquare, ChevronRight, Clock, DollarSign } from 'react-feather'
import MainCarousel from "../../components/MainCarousel";
import Link from "next/link";

const imageUrl = "https://automotive-api.s3.us-east-2.amazonaws.com/Global/ce5fd6ba-1d4e-4d4b-bb7e-92ae339eca5e/banner-web-1230x450-CAR-ONE.jpeg";

const CompraAuto = () => {
  
  return (
    <>
      <Meta
        title={`Compramos tu auto!`}
        description={`Compramos tu auto`}
      />

      <Container maxWidth="lg">
        <Divider style={{ marginBottom: "20px" }} />
        <Box px={30} pY={0}>
            <MainCarousel xs={10}  medias={[{ image: imageUrl }]} showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}/>
        </Box>
        <Box display='flex' justifyContent='center'>
            <Link color="inherit" href={`/compramos-tu-auto/valua-tu-auto`} passHref={true}>
                <Button 
                    variant='contained'
                    color='primary'
                    endIcon={<ChevronRight />}
                    style={{ height: 65, padding: 20, marginTop: 20 }}
                    >
                    Vender mi auto
                </Button>
            </Link>
        </Box>
        <Box display='flex' justifyContent='space-between' pt={15} pb={5}>
            <Box m={5} style={{ backgroundColor: '#F8F9FA', padding: 5, borderRadius: 5, textAlign: 'center', width: 250, minHeight: '30ch'}}>
                <Box py={3}>
                    <Clock size={60} style={{color: '#636D79'}}/>
                </Box>
                <Box style={{paddingLeft: 20, paddingRight: 20}}>
                    <Typography variant='h6' style={{color: '#636D79', fontSize: 16}}>
                        Validamos tu oferta en 1 hora
                    </Typography>
                </Box>
            </Box>
            <Box m={5} style={{ backgroundColor: '#F8F9FA', padding: 5, borderRadius: 5, textAlign: 'center', width: 250, minHeight: '30ch'}}>
                <Box py={3}>
                    <CheckSquare size={60} style={{color: '#636D79'}}/>
                </Box>
                <Box style={{paddingLeft: 20, paddingRight: 20}}>
                    <Typography variant='h6' style={{color: '#636D79', fontSize: 16}}>
                        Sin trabas, sin fraudes, sin preocupaciones
                    </Typography>
                </Box>
            </Box>
            <Box m={5} style={{ backgroundColor: '#F8F9FA', padding: 5, borderRadius: 5, textAlign: 'center', width: 250, minHeight: '30ch'}}>
                <Box py={3}>
                    <DollarSign size={60} style={{color: '#636D79'}}/>
                </Box>
                <Box style={{paddingLeft: 20, paddingRight: 20}}>
                    <Typography variant='h6' style={{color: '#636D79', fontSize: 16}}>
                        Pagamos en 3 horas 
                    </Typography>
                </Box>
            </Box>
        </Box>
      </Container>
    </>
  );
};

export default CompraAuto;
