// Core
import React, {
  ChangeEvent,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  memo
} from "react";
// Components UI
import { TextField, Divider } from "@material-ui/core";
// Helpers
import { getHash } from "helpers";
// Types
import { NewMessageType, SendActionsType } from "bus/chat";
// Styles
import "./ChatArea.scss";
import Message from "../Message/Message";

type ChatAreaPropsTypes = {
  messages: NewMessageType[]
} & SendActionsType

const TYPING_TIMER_LENGTH = 400; // ms
let isTyping = false;
let lastTypingTime: number;
let timer: NodeJS.Timeout | null = null;

const ChatArea: FC<ChatAreaPropsTypes> = ({ sendMessage, messages, sendTyping, sendStopTyping }: ChatAreaPropsTypes): ReactElement => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // callbacks
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (message) {
      setMessage("");
      sendMessage(message);
    }
  }, [message, sendMessage]);

  const scrollToBottom = useCallback(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), []);

  const updateTyping = useCallback(() => {
    if (!isTyping) {
      isTyping = true;
      sendTyping();
    }

    lastTypingTime = new Date().getTime();

    if (isTyping && timer) {
      clearTimeout(timer);
      timer = null;
    }

    if (isTyping) {
      timer = setTimeout(() => {
        const typingTimer = (new Date()).getTime();
        const timeDiff = typingTimer - lastTypingTime;
        if (timeDiff >= TYPING_TIMER_LENGTH && isTyping) {
          sendStopTyping();
          isTyping = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  }, [sendTyping, sendStopTyping]);

  const updateMessage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    updateTyping();
  }, [updateTyping]);

  // effects
  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  return (
    <div className="chat-area">
      <ul className="chat-area__messages">
        <li className="chat-area__log">
          <Divider />
          <span className="chat-area__log-text">Welcome</span>
          <Divider />
        </li>
        { messages.map((_message, i) => (
          <Message
            username={_message.username}
            message={_message.message}
            key={getHash(i + _message.message)}
          />
        )) }
        <div ref={messagesEndRef} />
      </ul>
      <form className="chat-area__form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="text-field-message"
          autoFocus
          fullWidth
          placeholder="Type here..."
          value={message}
          onChange={updateMessage}
        />
      </form>
    </div>
  );
};

export default memo(ChatArea);
