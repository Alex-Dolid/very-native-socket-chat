// Core
import { SagaIterator } from "@redux-saga/core";
import { take } from "redux-saga/effects";
// Types
import { ChatActionType } from "../../types";

export function* disconnectChatWSWorker(socket: WebSocket): SagaIterator {
  yield take(ChatActionType.WS_DISCONNECT);
  socket.close();
}
