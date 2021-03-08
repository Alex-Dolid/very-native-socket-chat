// Core
import React, { FC } from "react";
// Routing
import { BrowserRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import routes from "routes";
// Lib Styles
import { ThemeProvider } from "@material-ui/core/styles";
// Browser History API
import { createBrowserHistory } from "history";
// Store
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./init/store";
// Config
import theme from "./init/theme";

export const history = createBrowserHistory();

const App: FC = () => (
  <ReduxProvider store={ store }>
    <BrowserRouter>
      <Router history={ history }>
        <ThemeProvider theme={ theme }>
          <Switch>
            {
              routes.map((route) => (
                <Route exact key={ route.id } path={ route.path } component={ route.pageComponent } />
              ))
            }
            <Redirect from="*" to="/chat" />
          </Switch>
        </ThemeProvider>
      </Router>
    </BrowserRouter>
  </ReduxProvider>
);

export default App;
