// Core
import { useCallback, useLayoutEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Routing
import { useHistory } from "react-router";
// Types
import { AppState } from "init/rootReducer";
import { ChatState } from "../reducer";
import { SendActionsType } from "../types";
// Actions
import {
  addUserAsync, clearStore,
  connectChatWSAsync, disconnectChatWSAsync,
  sendMessageAsync,
  sendStopTypingAsync,
  sendTypingAsync
} from "../actions";

 type UseStateType = ChatState & SendActionsType & { signOut: () => void }

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
  const signOut = useCallback(() => {
    dispatch(disconnectChatWSAsync());
    dispatch(clearStore());
  }, [dispatch]);

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
    sendStopTyping,
    signOut
  };
};
