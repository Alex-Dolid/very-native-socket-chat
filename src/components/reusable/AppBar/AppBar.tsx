// Core
import React, { FC, ReactElement, memo } from "react";
// Components UI
import {
  AppBar as AppBarMU,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
// Icons UI
import { ExitToApp as ExitToAppIcon } from "@material-ui/icons";
// Styles
import "./AppBar.scss";

type AppBarPropsTypes = {
  title: string,
  signOut: () => void
};

const AppBar: FC<AppBarPropsTypes> = ({ title, signOut }: AppBarPropsTypes): ReactElement => (
  <AppBarMU position="fixed" className="app-bar">
    <Toolbar>
      <Typography component="h1" variant="h6" color="inherit" noWrap>
        { title }
      </Typography>
      <IconButton color="inherit" className="app-bar__exit-to-app-btn" onClick={signOut}>
        <ExitToAppIcon />
      </IconButton>
    </Toolbar>
  </AppBarMU>
);

export default memo(AppBar);
