// Core
import React, { FC, ReactElement, memo } from "react";
// Styles
import "./Message.scss";

type MessagePropsTypes = {
  username: string,
  message: string
}

const Message: FC<MessagePropsTypes> = ({ username, message }: MessagePropsTypes): ReactElement => (
  <li className="message">
    <span className="message__username">
      { username }
      :
    </span>
    <span className="message__text">{ message }</span>
  </li>
);

export default memo(Message);
