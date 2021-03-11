// Core
import React, { FC, Suspense } from "react";
// Routing
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
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
        <Suspense fallback={ <div>Loading...</div> }>
          <Switch>
            {
              routes.map((route) => (
                <Route
                  key={ route.id }
                  exact
                  path={ route.path }
                  component={ route.pageComponent }
                />
              ))
            }
            <Redirect from="/*" to="/" />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  </ReduxProvider>
);

export default App;
