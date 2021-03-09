// Core
import React, { FC, ReactElement } from "react";
// Components
import { Box } from "@material-ui/core";
import { AppBar, ChatArea } from "components/reusable";
import { useChatState } from "./hooks";

const Chat: FC = (): ReactElement => {
  const { username, sendMessage, numUsers } = useChatState();

  console.log(username);
  return (
    <Box component="section" className="full-height">
      <AppBar title="Very Native Socket Chat" usersQuantity={numUsers} />
      <ChatArea sendMessage={sendMessage} />
    </Box>
  );
};

export default Chat;
