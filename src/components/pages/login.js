import "./login.css";

import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const Login = () => {
  const {updateUser} = useContext(UserContext);

  async function checkin() {
    const formulario = document.forms["formUser"];
    const validacion = formulario.checkValidity();
    if (validacion === false) {
      formulario.reportValidity();
    } else {
      console.log("pasé por acá");
      const rawResponse = await fetch(
        "https://whimsical-adjoining-twig.glitch.me/api/v1/users/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await rawResponse.json();
      const {user_email, user_name}= data
      updateUser([{user_email, user_name}]);
    }
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = {
      ...user,
      [name]: value,
    };
    setUser(newValues);
  };

  return (
    <div className="Container-login">
      <form
        className="{classes.root} Form-login"
        noValidate
        autoComplete="off"
        onChange={handleChange}
        name="formUser"
      >
        <h1>Flow Mini</h1>

        <FormControl variant="outlined" className="FormControl-login">
          <InputLabel htmlFor="component-outlined" name="email">
            Email
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            name="email"
            label="email"
            type="email"
            required
          />
        </FormControl>

        <FormControl variant="outlined" className="FormControl-login">
          <InputLabel htmlFor="component-outlined" name="password">
            Contraseña
          </InputLabel>
          <OutlinedInput
            id="component-outlined"
            name="password"
            label="password"
            minLength="10"
            type="password"
            required
          />
        </FormControl>

        <Button variant="contained" color="primary" onClick={checkin}>
          Ingresar
        </Button>

        <Button variant="contained">Registrarse</Button>
      </form>
    </div>
  );
}
