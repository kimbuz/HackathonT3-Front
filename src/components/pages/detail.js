import "./detail.css";

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Rating from "@material-ui/lab/Rating";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "80%",
    maxHeight: "80%",
  },
  image: {
    width: 200,
    height: 300,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export const Detail = () => {
  const classes = useStyles();
  const [rating, setRating] = useState(3);
  const [coleccion, setColeccion] = useState();
  console.log(coleccion);
  // const { coleccionId } = useParams();

  useEffect(() => {
    const getColeccion = async () => {
      try {
        const response = await fetch(
          "https://bkultrananoflow.herokuapp.com/api/v1/content/6233c668433606bc69ff138c"
        );
        const data = await response.json();
        setColeccion(data);
      } catch (error) {
        console.log(error);
      }
    };
    getColeccion();
  }, []);

  return (
    <div className="{classes.root} Container-login">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="Reproducir imagen"
                src={coleccion.info.image_url}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {coleccion.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Actores: {coleccion.info.actors[0]}
                  {" , "}
                  {coleccion.info.actors[1]}
                  {"  "}
                  Director: {coleccion.info.directors}
                </Typography>
                <Typography variant="body2">{coleccion.info.plot}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  VOLVER
                </Typography>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  REPRODUCIR
                </Typography>
                <BottomNavigationAction
                  label="Favorites"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="legend">Puntuación</Typography>
              <Rating name="read-only" value={coleccion.info.rating} readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
