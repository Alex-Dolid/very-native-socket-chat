// Libs
import produce, { Draft } from "immer";
// Types
import { ChatActionsTypes, NewMessageType, ChatActionType } from "./types";

export type FriendType = {
  isOnline: boolean,
  username: string,
  isTyping: boolean
}
export type ChatState = {
  username: string | null,
  messages: NewMessageType[],
  numUsers: number,
  friends: FriendType[]
};

const initialState: ChatState = {
  username: null,
  messages: [],
  numUsers: 0,
  friends: []
};

export const chatReducer = produce((draft: Draft<ChatState>, action: ChatActionsTypes): ChatState => {
  switch (action.type) {
    case ChatActionType.WS_NEW_MESSAGE:
      draft.messages.push(action.payload);
      return draft;
    case ChatActionType.WS_SEND_MESSAGE:
      draft.messages.push({ username: draft.username || "", message: action.payload });
      return draft;
    case ChatActionType.SET_USERNAME:
      draft.username = action.payload;
      return draft;
    case ChatActionType.WS_LOGIN:
      draft.numUsers = action.payload;
      return draft;
    case ChatActionType.WS_USER_LEFT:
    case ChatActionType.WS_USER_JOINED: {
      draft.numUsers = action.payload.numUsers;
      let friend = draft.friends.find((_friend) => action.payload.username === _friend.username);
      if (friend) {
        friend.isOnline = !friend.isOnline;
      } else {
        friend = { username: action.payload.username, isOnline: action.type === ChatActionType.WS_USER_JOINED, isTyping: false };
        draft.friends.push(friend);
      }
      return draft;
    }
    case ChatActionType.WS_RECEIVE_TYPING:
    case ChatActionType.WS_RECEIVE_STOP_TYPING: {
      const friend = draft.friends.find((_friend) => _friend.username === action.payload.username);
      if (friend) {
        friend.isTyping = !friend.isTyping;
      }
      return draft;
    }
    case ChatActionType.CLEAR_STORE:
      draft = initialState;
      return draft;
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const x: never = action;
      break;
    }
  }

  return draft;
}, initialState);
