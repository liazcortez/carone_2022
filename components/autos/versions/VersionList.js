import React from "react";
import { Grid } from "@material-ui/core";
import VersionListItem from "./VersionListItem";

const VersionList = ({ versions, model }) => {
  return (
    <Grid container spacing={5}>
      {versions.map((version) => (
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <VersionListItem version={version} model={model} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VersionList;
