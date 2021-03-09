// Core
import { SagaIterator } from "@redux-saga/core";
import { take } from "redux-saga/effects";
// Types
import { ChatActionType } from "../../types";

export function* sendStopTypingWorker(socket: WebSocket): SagaIterator {
  while (true) {
    yield take(ChatActionType.WS_SEND_STOP_TYPING);
    const message = ["stop typing"];
    socket.send(`42${JSON.stringify(message)}`);
  }
}
