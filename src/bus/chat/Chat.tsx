// Core
import React, { FC, ReactElement } from "react";
// Components UI
import { Box } from "@material-ui/core";
// Components
import { AppBar, ChatArea, FriendsMenu } from "components/reusable";
// Hooks
import { useChatState } from "./hooks";

const Chat: FC = (): ReactElement => {
  const { username, sendMessage, numUsers, friends, messages, sendTyping, sendStopTyping } = useChatState();

  return (
    <Box component="section" className="full-height">
      <AppBar title="Very Native Socket Chat" />
      <FriendsMenu usersQuantity={numUsers} friends={friends} username={username} />
      <ChatArea sendMessage={sendMessage} messages={messages} sendTyping={sendTyping} sendStopTyping={sendStopTyping} />
    </Box>
  );
};

export default Chat;
