// Redux-Saga
import { END, eventChannel } from "redux-saga";
import { EventChannel } from "@redux-saga/core";
// Api
import { WSChatURL } from "api";
// Types
import { ChatActionType, WSDataType } from "./types";
import { socketPayloadHandler } from "../../helpers";

const handleInfiniteSocket = (socket: WebSocket, timeout: number): NodeJS.Timeout => setInterval(() => socket.send("2"), timeout);

export const createWebSocketConnection = (): Promise<WebSocket> => new Promise((resolve, reject) => {
  const socket = new WebSocket(WSChatURL);

  socket.onopen = () => resolve(socket);

  socket.onerror = reject;
});

export const createSocketChannel = (socket: WebSocket): EventChannel<unknown> => eventChannel((emit) => {
  let interval: NodeJS.Timeout | null = null;

  socket.onmessage = (event: { data: string; }) => {
    let data: WSDataType | null = null;
    let code = null;

    code = event.data.substr(0, 2);

    if (code === "0{") {
      const config = JSON.parse(event.data.substr(1, event.data.length - 1));
      console.log(config);
      interval = handleInfiniteSocket(socket, config.pingInterval);
    }

    if (code === "42") {
      data = JSON.parse(event.data.substr(2, event.data.length - 1));
    }

    if (data) {
      const [eventType, payload] = data;

      switch (eventType) {
        case "new message":
          return emit({ type: ChatActionType.WS_NEW_MESSAGE, payload: socketPayloadHandler(payload) });
        case "login":
          return emit({ type: ChatActionType.WS_LOGIN, payload: payload.numUsers });
        case "user joined":
          return emit({ type: ChatActionType.WS_USER_JOINED, payload: socketPayloadHandler(payload) });
        case "user left":
          return emit({ type: ChatActionType.WS_USER_LEFT, payload: socketPayloadHandler(payload) });
        case "typing":
          return emit({ type: ChatActionType.WS_RECEIVE_TYPING, payload: socketPayloadHandler(payload) });
        case "stop typing":
          return emit({ type: ChatActionType.WS_RECEIVE_STOP_TYPING, payload: socketPayloadHandler(payload) });
        default:
        // nothing to do
      }
    }
    return null;
  };

  socket.onclose = () => {
    if (interval) {
      clearInterval(interval);
    }
    emit(END);
  };

  return () => {
    socket.onmessage = null;
    if (interval) {
      clearInterval(interval);
    }
    console.log("Socket off");
  };
});
