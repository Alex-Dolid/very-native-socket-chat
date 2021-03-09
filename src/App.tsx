// Core
import React, { FC } from "react";
// Routing
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import {  } from "react-router";
import routes from "routes";
// Lib Styles
import { ThemeProvider } from "@material-ui/core/styles";
// Store
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./init/store";
// Config
import theme from "./init/theme";

const App: FC = () => (
  <ReduxProvider store={ store }>
    <Router>
      <ThemeProvider theme={ theme }>
        <Switch>
          {
            routes.map((route) => (
              <Route exact key={ route.id } path={ route.path } component={ route.pageComponent } />
            ))
          }
          <Redirect from="/*" to="/" />
        </Switch>
      </ThemeProvider>
    </Router>
  </ReduxProvider>
);

export default App;
