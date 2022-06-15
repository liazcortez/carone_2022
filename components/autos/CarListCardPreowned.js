import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Checkbox,
  Box,
  FormControlLabel,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Divider } from "@material-ui/core";
import Link from "next/link";
import Skeleton from "@material-ui/lab/Skeleton";
import { capitalCase } from "change-case";
import NumberFormat from "react-number-format";
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  modelFormatting: {
    textTransform: "capitalize",
    textDecoration: "none",
  },
  modelFormattingUpper: {
    textTransform: "uppercase",
    textDecoration: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  hover: {
    cursor:'pointer',
    "&:hover": {
      border: "2px solid #556cd699",
    },
  },
}));

const emptyImage =
  "https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png";

const CarlistCard = ({ vehicle, setDataList }) => {        

  const classes = useStyles();
  const [isFavorite, setIsFavorite] = useState(false);
  const { enqueueSnackbar } = useSnackbar();     
  const [_document, setDocument] = useState(null)

  useEffect(()=>{
    setDocument(document)
  },[])

  const formatText = (name) =>{

    // name = name.replace('days', `Dias`);
    // name = name.replace('ago', t('atras'));
  
    return name;
  }

  const handleAddFavorite = (vehicle) => {
    let data;
    if (!localStorage.getItem("favorites-seminuevos")) {
      data = [vehicle];
      localStorage.setItem("favorites-seminuevos", JSON.stringify(data));
      setIsFavorite(true);
    } else if (localStorage.getItem("favorites-seminuevos")) {
      data = JSON.parse(localStorage.getItem("favorites-seminuevos"));
      if (data.some((d) => d._id === vehicle._id)) {
        if (isFavorite) {
          const newFavorites = data.filter((d) => d._id !== vehicle._id);
          if (setDataList) {
            setDataList(newFavorites);
          }
          localStorage.setItem("favorites-seminuevos", JSON.stringify(newFavorites));
          setIsFavorite(false);
          return;
        }
        return;
      }
      const newData = [...data, vehicle];
      if (newData.length > 4) {
        return enqueueSnackbar("Solo puedes tener un máximo de 4 favoritos", {
          variant: "error",
        });
      }

      localStorage.setItem("favorites-seminuevos", JSON.stringify(newData));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    if (vehicle && vehicle._id) {
      if (localStorage.getItem("favorites-seminuevos")) {
        let favs = JSON.parse(localStorage.getItem("favorites-seminuevos"));
        if (favs.some((d) => d._id === vehicle._id)) {
          setIsFavorite(true);
        }
      }
    }
  }, [vehicle]);

  return (
    <Link href={`/seminuevos/${vehicle.slug}`}>

    <Card  className={(classes.root, classes.hover)}>
      {vehicle ? (
          <a>
            <CardMedia
              className={classes.media}
              image={vehicle.mainImage ? vehicle.mainImage : emptyImage}
              title={`${vehicle && vehicle.version && vehicle.version} ${vehicle && vehicle.year}`}
            />
          </a>
      ) : (
        <Skeleton variant="rect" width="100%" height={156} />
      )}
      <CardContent>
        {vehicle ? (
          <>
                <Typography
                  variant="subtitle1"
                  className={
                    [classes.modelFormatting, classes.modelFormattingUpper]
                  }
                >
                  {vehicle && vehicle.vehicleMake.name}{" "}
                </Typography>
                
            <Link href={`/seminuevos/${vehicle && vehicle.slug}`}>
              <Box  >
              <a style={{ textDecoration: "none", color: "black"}}>
                <Typography style={{overflow: 'hidden',whiteSpace: 'nowrap',width: 'calc(90%)',display: 'inline-block',textOverflow: 'ellipsis'}} variant="h6" >
                  {`${vehicle && vehicle.vehicle ? capitalCase(vehicle.vehicle.model) :''} ${vehicle.version} ${vehicle.year}`}
                </Typography>
              </a>
              </Box>
            </Link>

         

            <Typography variant="h6" gutterBottom style={{ fontSize: 17 }}>
              Desde &nbsp;
              {vehicle.price ? (
                <NumberFormat
                  value={vehicle.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              ) : (
                "Precio pendiente"
              )}
            </Typography>

          
            <Typography variant="h6" gutterBottom style={{ fontSize: 17 }}>
            {`${(vehicle && vehicle.store && vehicle.storeMake && vehicle.storeMake.name ?capitalCase(vehicle.storeMake.name):'')} ${(vehicle && vehicle.store && vehicle.store.name?capitalCase(vehicle.store.name):'')}`}
            </Typography>
          </>
        ) : (
          <Box pt={0.5}>
            <Typography variant="subtitle1" component="div">
              <Skeleton />
            </Typography>
            <Typography
              variant="h6"
              className={classes.modelFormatting}
              component="div"
            >
              <Skeleton />
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              style={{ fontSize: 17 }}
              component="div"
            >
              <Skeleton />
            </Typography>
          </Box>
        )}
      </CardContent>
      <Divider />
      <CardActions disableSpacing style={{justifyContent:'space-between'}}>

        <FormControlLabel
          control={
            <Checkbox   
              icon={<FavoriteIcon style={{ color: "#888" }} />} 
              checkedIcon={<FavoriteIcon style={{ color: "#c54065" }} />} 
              name="checkedH"
              checked={
                document && localStorage.getItem("favorites-seminuevos") &&
                JSON.parse(localStorage.getItem("favorites-seminuevos")).some(
                  (d) => vehicle && d._id === vehicle._id
                )
              }
            />}
          onClick={(e) => handleAddFavorite(vehicle)}

        />

             <Typography style={{textTransform:'capitalize'}}>
            {`${formatText(moment(vehicle.createdAt, "YYYYMMDD").fromNow())}`}
            </Typography>
        {/* <FavoriteIcon /> */}
      </CardActions>
    </Card>
    </Link>

  );
};

export default CarlistCard;
