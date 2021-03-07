// Core
import React, { FC } from "react";
// Routing
import { BrowserRouter, Redirect, Route, Router, Switch } from "react-router-dom";
import routes from "routes";
// Browser History API
import { createBrowserHistory } from "history";
// Store
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./init/store";

export const history = createBrowserHistory();

const App: FC = () => (
  <ReduxProvider store={ store }>
    <BrowserRouter>
      <Router history={ history }>
        <Switch>
          {
            routes.map((route) => (
              <Route key={ route.id } path={ route.path } component={ route.pageComponent } />
            ))
          }
          <Redirect from="*" to="/chat" />
        </Switch>
      </Router>
    </BrowserRouter>
  </ReduxProvider>
);

export default App;
