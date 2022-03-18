import Login from "./components/login/login";
import "./App.css";
import Detail from "./components/detail/detail";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./components/pages/home";
// import { Detail } from "./components/pages/detail";
// import { Error } from "./components/pages/error";
// import { CartProvider } from "./components/context/CartContext";
// import { NavBar } from "./components/pages/navBar";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}

      <Detail />

      {/* <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/detail/:productId">
            <Detail />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch> */}
    </div>
  );
}

export default App;
