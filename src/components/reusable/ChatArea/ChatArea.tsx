// Core
import React, { FC } from "react";
// Components
import { TextField } from "@material-ui/core";
// Styles
import "./ChatArea.scss";

const ChatArea: FC = () => (
  <div className="chat-area">
    <ul className="chat-area__messages">
      <li className="chat-area__log">user1 left</li>
      <li className="chat-area__message">
        <span className="chat-area__username">Alex</span>
        <span className="chat-area__message-text">this is the demo for sure</span>
      </li>
    </ul>
    <div className="chat-area__input-group">
      <TextField
        id="text-field-message"
        fullWidth
        placeholder="Type here..."
      />
    </div>
  </div>
);

export default ChatArea;
