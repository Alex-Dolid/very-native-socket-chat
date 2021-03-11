// Core
import React, { FC, ReactElement } from "react";
// Components
import {
  AppBar as AppBarMU,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
// Icons
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
// Styles
import "./AppBar.scss";

type AppBarPropsTypes = {
  title: string
};

const AppBar: FC<AppBarPropsTypes> = ({ title }: AppBarPropsTypes): ReactElement => (
  <AppBarMU position="fixed" className="app-bar">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        { title }
      </Typography>
      <IconButton color="inherit" className="app-bar__exit-to-app-btn">
        <ExitToAppIcon />
      </IconButton>
    </Toolbar>
  </AppBarMU>
);

export default AppBar;
