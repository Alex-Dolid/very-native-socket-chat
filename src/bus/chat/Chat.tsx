// Core
import React, { FC } from "react";
// Components
import { Box } from "@material-ui/core";
import { AppBar, ChatArea } from "components/reusable";

const Chat: FC = () => (
  <Box component="section" className="full-height">
    <AppBar title="Very Native Socket Chat" usersQuantity={3} />
    <ChatArea />
  </Box>
);

export default Chat;
