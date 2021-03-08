// Core
import React, { FC } from "react";
// Components
import { Box } from "@material-ui/core";
import { AppBar } from "../../components/reusable";

const Chat: FC = () => (
  <Box component="section">
    <AppBar title="Chat" usersQuantity={3} />
  </Box>
);

export default Chat;
