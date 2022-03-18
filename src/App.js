import "./App.css";
import React from "react";
import { useContext } from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Login } from "./components/pages/login";
import { Home } from "./components/pages/home";
import { Detail } from "./components/pages/detail";
import { Error } from "./components/pages/error";

import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/themeConfig/themeConfig";

import { UserContext } from "./components/context/userContext";

function App() {
  const {user} = useContext(UserContext);

  return (
    <div className="App">
      <ThemeProvider theme={Theme}>

        <Router>
          {
            !user ? ( <Login/>):(
            <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
                
            <Route path="/detail/:productId">
              <Detail/>
            </Route>
            
            <Route path="*">
              <Error/>
            </Route> 
          </Switch> 
            )
          }
        </Router>           
      </ThemeProvider>
    </div>
  );
}

export default App;
