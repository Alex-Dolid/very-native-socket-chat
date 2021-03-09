// Core
import { SagaIterator } from "@redux-saga/core";
import { take } from "redux-saga/effects";
// Types
import { ChatActionType } from "../../types";

export function* sendTypingWorker(socket: WebSocket): SagaIterator {
  while (true) {
    yield take(ChatActionType.WS_SEND_TYPING);
    const message = ["typing"];
    socket.send(`42${JSON.stringify(message)}`);
  }
}
