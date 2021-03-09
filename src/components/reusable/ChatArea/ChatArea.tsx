// Core
import React, { FC, ReactElement, useCallback, useState } from "react";
// Components
import { TextField } from "@material-ui/core";
// Styles
import "./ChatArea.scss";

type ChatAreaPropsTypes = {
  sendMessage: (msg: string) => void
}

const ChatArea: FC<ChatAreaPropsTypes> = ({ sendMessage }: ChatAreaPropsTypes): ReactElement => {
  const [message, setMessage] = useState("");

  // callbacks
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (message) {
      sendMessage(message);
    }
  }, [message, sendMessage]);
  return (
    <div className="chat-area">
      <ul className="chat-area__messages">
        <li className="chat-area__log">user1 left</li>
        <li className="chat-area__message">
          <span className="chat-area__username">Alex</span>
          <span className="chat-area__message-text">this is the demo for sure</span>
        </li>
      </ul>
      <form className="chat-area__form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="text-field-message"
          fullWidth
          placeholder="Type here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ChatArea;
