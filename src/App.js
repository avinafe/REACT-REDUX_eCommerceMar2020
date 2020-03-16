import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TopMenu from "./components/TopMenu";

// Pages
import Contacto from "./pages/contacto";
import FAQS from "./pages/faqs";
import Error404 from "./pages/error404";
import Inicio from "./pages/inicio";

function App() {
  return (
    <>
      <TopMenu />
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <Inicio />
          </Route>
          <Route path="/contacto" exact={true}>
            <Contacto />
          </Route>
          <Route path="/faqs" exact={true}>
            <FAQS />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
