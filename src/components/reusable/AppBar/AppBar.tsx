// Core
import React, { FC, ReactElement } from "react";
// Components
import {
  AppBar as AppBarMU,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from "@material-ui/core";
// Icons
import { People as PeopleIcon, ExitToApp as ExitToAppIcon } from "@material-ui/icons";
// Styles
import "./AppBar.scss";

type AppBarPropsTypes = {
  title: string,
  usersQuantity: number
};

const AppBar: FC<AppBarPropsTypes> = ({ title, usersQuantity }: AppBarPropsTypes): ReactElement => (
  <AppBarMU position="fixed" className="app-bar">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        { title }
      </Typography>
      <Badge badgeContent={ usersQuantity } color="error" className="app-bar__badge">
        <PeopleIcon />
      </Badge>
      <IconButton color="inherit" className="app-bar__exit-to-app-btn">
        <ExitToAppIcon />
      </IconButton>
    </Toolbar>
  </AppBarMU>
);

export default AppBar;
