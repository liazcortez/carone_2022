import { Grid, Typography, Divider } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import NumberFormat from "react-number-format";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  isHighlight: {
    backgroundColor: "rgb(85,108,214,.8)",
    color: "white",
    paddingRight: "1em",
    paddingLeft: "1em",
    borderRadius: 10,
  },
  colorSpec: {
    color: "#798089",
  },
}));
const CarTabComponent = ({ version, model }) => {
  const classes = useStyles();
  const { specifications } = version;
  return (
    <Grid container style={{ marginBottom: 50 }}>
      <Grid item xs={7}>
        <Typography
          variant="h5"
          component="h3"
          style={{ fontWeight: "bold", color: "#656d78" }}
        >
          {model.toUpperCase()} {version && version.name.toUpperCase()}
        </Typography>
        {version.price ? (
          <Typography
            variant="h5"
            component="h3"
            style={{ marginBottom: 20, color: "#656d78" }}
          >
            Precio de contado{" "}
            <NumberFormat
              style={{ fontWeight: "bold" }}
              value={version.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              suffix={" MXN"}
            />
          </Typography>
        ) : (
          <Typography
            variant="h5"
            component="h3"
            style={{ marginBottom: 20, color: "#656d78" }}
          >
            Precio proximante
          </Typography>
        )}
        {/* <Divider style={{ marginBottom: 20 }} /> */}
        <img
          src={version.image}
          style={{
            width: "100%",
            height: "150",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <div>
          <Typography
            variant="h5"
            component="h3"
            style={{ fontWeight: "bold", marginBottom: 20, color: "#656d78" }}
          >
            La version cuenta
            con:
          </Typography>
          <Divider style={{ marginBottom: 20 }} />
          <Grid container>
            {specifications.map((spec) => (
              <Grid key={spec._id} item xs={5} style={{ marginRight: 40 }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{
                    verticalAlign: "middle",
                    display: "inline-flex",
                  }}
                >
                  <CheckCircleIcon
                    style={{
                      marginTop: 2,
                      marginRight: 14,
                      fontSize: 18,
                      color: "#576b9f",
                    }}
                  />
                  <span
                    className={
                      spec.isHighlighted
                        ? classes.isHighlight
                        : classes.colorSpec
                    }
                  >
                    {spec.description}
                  </span>
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default CarTabComponent;
