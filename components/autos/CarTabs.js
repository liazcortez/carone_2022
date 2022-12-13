import React from "react";
import { makeStyles } from "@mui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
