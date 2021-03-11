// Types
import {
  ChatActionsTypes,
  ChatActionType,
  ChatAddUserActionType,
  ChatConnectWSActionType,
  ChatDisconnectActionType,
  ChatSendStopTypingActionType,
  ChatSendTypingActionType,
} from "./types";

// Sync
export const setUsername = (payload: string): ChatActionsTypes => ({
  type: ChatActionType.SET_USERNAME,
  payload
});
export const clearStore = (): ChatActionsTypes => ({ type: ChatActionType.CLEAR_STORE });

// Async
export const connectChatWSAsync = (): ChatConnectWSActionType => ({ type: ChatActionType.WS_CONNECT });
export const sendMessageAsync = (payload: string): ChatActionsTypes => ({
  type: ChatActionType.WS_SEND_MESSAGE,
  payload
});
export const addUserAsync = (payload: string): ChatAddUserActionType => ({
  type: ChatActionType.WS_ADD_USER,
  payload
});

export const sendTypingAsync = (): ChatSendTypingActionType => ({ type: ChatActionType.WS_SEND_TYPING });
export const sendStopTypingAsync = (): ChatSendStopTypingActionType => ({ type: ChatActionType.WS_SEND_STOP_TYPING });
export const disconnectChatWSAsync = (): ChatDisconnectActionType => ({ type: ChatActionType.WS_DISCONNECT });
