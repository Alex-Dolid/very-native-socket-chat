// Core
import { useCallback, useLayoutEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Routing
import { useHistory } from "react-router";
// Types
import { AppState } from "init/rootReducer";
import { ChatState } from "../reducer";
// Actions
import {
  addUserAsync,
  connectChatWSAsync,
  sendMessageAsync,
  sendStopTypingAsync,
  sendTypingAsync
} from "../actions";

 type UseStateType = ChatState & {
   sendMessage: (msg: string) => void,
   sendTyping: () => void,
   sendStopTyping: () => void
}

export const useChatState = (): UseStateType => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { username, messages, numUsers, friends } = useSelector<AppState, ChatState>(
    (state) => state.chat,
  );

  // callbacks
  const sendMessage = useCallback((msg) => dispatch(sendMessageAsync(msg)), [dispatch]);
  const sendTyping = useCallback(() => dispatch(sendTypingAsync()), [dispatch]);
  const sendStopTyping = useCallback(() => dispatch(sendStopTypingAsync()), [dispatch]);

  // effects
  useLayoutEffect(() => {
    if (username) {
      dispatch(connectChatWSAsync());
      setTimeout(() => dispatch(addUserAsync(username)), 1000);
    } else {
      history.push("/sign-in");
    }
  }, [dispatch, history, username]);

  return {
    username,
    messages,
    sendMessage,
    numUsers,
    friends,
    sendTyping,
    sendStopTyping
  };
};
