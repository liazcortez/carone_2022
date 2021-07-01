import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FeaturesCarousel from "./autos/FeaturesCarousel";
import CarGalleryMedia from "./autos/CarGalleryMedia";
import VideoComponent from "./autos/VideoComponent";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabsComponent = ({ features, gallery, video }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        style={{
          backgroundColor: "white",
          color: "#02216e",
          marginBottom: 30,
        }}
        indicatorColor="primary"
        centered
      >
        <Tab label="Caracteristicas" />
        <Tab label="Galeria" />
        <Tab label="Car One TV" />
        <Tab label="Ficha Técnica" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <FeaturesCarousel data={features} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CarGalleryMedia gallery={gallery} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VideoComponent video={video} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            marginBottom: 15,
            marginTop: 20,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Descargar Ficha Técnica
        </Typography>
        <CloudDownloadIcon color="primary" style={{ fontSize: 50 }} />
      </TabPanel>
    </>
  );
};

export default TabsComponent;
