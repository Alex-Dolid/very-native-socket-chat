// Core
import React, { FC, ReactElement } from "react";
// Components
import { Box } from "@material-ui/core";
// Buses
import { ChatBus } from "bus/chat";

const Chat: FC = (): ReactElement => (
  <Box component="section" className="page page_chat">
    <ChatBus />
  </Box>
);

export default Chat;
