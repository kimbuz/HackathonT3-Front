import "./App.css";
import React from "react";
import { useContext } from "react";
import { UserContext } from "./components/context/userContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "./components/pages/login";
import { Home } from "./components/pages/home";
import { Detail } from "./components/pages/detail";
import { Error } from "./components/pages/error";
import { Play } from "./components/pages/play";

import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/themeConfig/themeConfig";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          {!user ? (
            <Login />
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/detail/:productId">
                <Detail />
              </Route>

              <Route path="/reproductor/:URLvideo">
                <Play />
              </Route>

              <Route path="*">
                <Error />
              </Route>
            </Switch>
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
