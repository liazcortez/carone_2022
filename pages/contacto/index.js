import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, Divider } from "@mui/material";
import Meta from "../../components/Meta";
import { makeStyles } from "@mui/styles";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ObjExist from '../../utils/ObjExist'
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const index = ({ storesProps }) => {
  const classes = useStyles();
  var player;
  const onYouTubeIframeAPIReady = () => {
    player = new YT.Player("live-video", {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  const [stores, setStores] = useState([]);

  useEffect(() => {
    let newStores = [];
    let makes = [];
    let makesObj = {};

    let finalStores = [];
    newStores = storesProps.filter((store) => store.schedule);

    newStores.forEach((store) => {
      if (makes.findIndex((element) => element === store.make.name) === -1)
        makes.push(store.make.name);
      if (makesObj[store.make.name]) makesObj[store.make.name].push(store);
      else {
        makesObj[store.make.name] = [store];
      }
    });
    makes.sort().forEach((make) => {
      let sortedStores = makesObj[make].sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      finalStores.push(...sortedStores);
    });

    setStores(finalStores);
  }, [storesProps]);

  return (
    <>
      <Meta title="Car One TV - Car One Group" description="Car One TV" />

      <Container className="VideoContainer" maxWidth="lg">
        <Box style={{ paddingBlockEnd: "1rem" }}>
          <Typography
            variant="h4"
            style={{ fontSize: "35px", fontWeight: 500, textAlign: "center" }}
          >
            Contacto
          </Typography>
          <Divider sx={{ marginTop: "1em", marginBottom: "1em" }} />
        </Box>

        <Grid container spacing={2}>
         {stores && stores.length >=1 && stores.map((store,index)=>
           <Grid item md={4} key={index}>
           <Box sx={{ paddingBlockEnd: "2rem" }}>
             <Box>
               <img
                 style={{ width: "100%", height: "270px", objectFit: (ObjExist(store,['contactPhoto'],false))?'cover':'contain' }}
                 src={ObjExist(store,['contactPhoto'],ObjExist(store,['image'],'/static/logo.png'))}
               />
             </Box>

             <Box>
               <Typography style={{ fontWeight: 600, fontSize: "20px" }}>

                 {(`${ObjExist(store,['make','name'])} ${ObjExist(store,['name'])}`).replace('-')}
               </Typography>

               <Box style={{ display: "flex", alignItems: "start" }}>
                 <LocationOnIcon
                   style={{ fontSize: "25px", paddingTop: "5px" }}
                 />
                 <Typography
                   style={{ fontSize: "20px", paddingBlockEnd: "1rem" }}
                 >
                 {`${ObjExist(store,['address'])}`}
                 </Typography>
               </Box>

               <Box style={{ display: "flex", alignItems: "start" }}>
                 <QueryBuilderIcon
                   style={{ fontSize: "25px", paddingTop: "5px" }}
                 />
                 <Typography
                   style={{ fontSize: "20px", paddingBlockEnd: "1rem" }}
                 >
                 {`${ObjExist(store,['schedule'])}`}
                 </Typography>
               </Box>

               <Box style={{ display: "flex", alignItems: "start" }}>
                 <PhoneIcon style={{ fontSize: "25px", paddingTop: "5px" }} />
                 <Typography
                   style={{ fontSize: "20px", paddingBlockEnd: "2rem" }}
                 >
                 {`${ObjExist(store,['phone'])}`}
                 </Typography>
               </Box>
             </Box>
           </Box>
         </Grid>
         )}
        </Grid>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const storesRes = await fetch("https://apicarone.com/api/v1/stores");
  const stores = await storesRes.json();

  return {
    props: {
      storesProps: stores.data,
    },
  };
};

export default index;
