import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import CarTabComponent from "./CarTabComponent";

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
      {value === index && <>{children}</>}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CarTabs = ({ versions, model }) => {
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
        style={{ backgroundColor: "white", color: "#02216e", marginBottom: 30 }}
        indicatorColor="primary"
        centered
      >
        {versions &&
          versions.map((version) => (
            <Tab key={version._id} label={version.name} />
          ))}
      </Tabs>

      {versions &&
        versions.map((version, i) => (
          <TabPanel key={i} value={value} index={i}>
            <CarTabComponent version={version} model={model} />
          </TabPanel>
        ))}
    </>
  );
};

export default CarTabs;
