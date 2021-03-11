// eslint-disable-next-line no-shadow
export enum ChatActionType {
  WS_CONNECTED = "WS_CONNECTED",
  WS_DISCONNECTED = "WS_DISCONNECTED",
  WS_NEW_MESSAGE = "WS_NEW_MESSAGE",
  WS_SEND_MESSAGE = "WS_SEND_MESSAGE",
  WS_ADD_USER = "WS_ADD_USER",
  WS_CONNECT = "WS_CONNECT",
  WS_LOGIN = "WS_LOGIN",
  SET_USERNAME = "SET_USERNAME",
  WS_USER_JOINED = "WS_USER_JOINED",
  WS_USER_LEFT = "WS_USER_LEFT",
  WS_SEND_TYPING = "WS_SEND_TYPING",
  WS_SEND_STOP_TYPING = "WS_SEND_STOP_TYPING",
  WS_RECEIVE_TYPING = "WS_RECEIVE_TYPING",
  WS_RECEIVE_STOP_TYPING = "WS_RECEIVE_STOP_TYPING"
}

export type SendActionsType = {
  sendMessage: (msg: string) => void,
  sendTyping: () => void,
  sendStopTyping: () => void
}

export type WSEventType =
  "typing"
  | "stop typing"
  | "new message"
  | "user left"
  | "user joined"
  | "login";
export type WSEventDataType = {
  username: string,
  numUsers?: number,
  message?: string
}
export type WSDataType = [ WSEventType, WSEventDataType ]

export type NewMessageType = {
  username: string,
  message: string
}

export type ChatNewMessageActionType = {
  type: ChatActionType.WS_NEW_MESSAGE,
  payload: NewMessageType
}

export type ChatSetUserNameActionType = {
  type: ChatActionType.SET_USERNAME,
  payload: string
}

export type ChatLoginActionType = {
  type: ChatActionType.WS_LOGIN,
  payload: number
}

export type ChatUserJoinedActionType = {
  type: ChatActionType.WS_USER_JOINED,
  payload: {
    username: string,
    numUsers: number
  }
}

export type ChatUserLeftActionType = {
  type: ChatActionType.WS_USER_LEFT,
  payload: {
    username: string,
    numUsers: number
  }
}

export type ChatReceiveTypingActionType = {
  type: ChatActionType.WS_RECEIVE_TYPING,
  payload: {
    username: string
  }
}

export type ChatReceiveStopTypingActionType = {
  type: ChatActionType.WS_RECEIVE_STOP_TYPING,
  payload: {
    username: string
  }
}

// Async
export type ChatSendMessageActionType = {
  type: ChatActionType.WS_SEND_MESSAGE,
  payload: string
}

export type ChatAddUserActionType = {
  type: ChatActionType.WS_ADD_USER,
  payload: string
}

export type ChatConnectWSActionType = {
  type: ChatActionType.WS_CONNECT
}

export type ChatSendTypingActionType = {
  type: ChatActionType.WS_SEND_TYPING
}

export type ChatSendStopTypingActionType = {
  type: ChatActionType.WS_SEND_STOP_TYPING
}

export type ChatActionsTypes =
  | ChatSendMessageActionType
  | ChatNewMessageActionType
  | ChatSetUserNameActionType
  | ChatLoginActionType
  | ChatUserJoinedActionType
  | ChatUserLeftActionType
  | ChatReceiveTypingActionType
  | ChatReceiveStopTypingActionType
