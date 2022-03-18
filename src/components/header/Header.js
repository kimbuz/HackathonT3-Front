import Logo from "../../img/logoflow.svg";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import "./Header.css";

import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const Header = () => {
  const { clear } = useContext(UserContext);

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <div>UltraNano</div>
        <img
          className="logo"
          src="https://web.flow.com.ar/theme/flow/logo.svg"
          alt="logo"
        />
        <Button onClick={clear} color="primary">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
