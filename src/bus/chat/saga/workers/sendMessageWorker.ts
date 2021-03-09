// Core
import { SagaIterator } from "@redux-saga/core";
import { take } from "redux-saga/effects";
// Types
import { ChatActionType } from "../../types";

export function* sendMessageWorker(socket: WebSocket): SagaIterator {
  while (true) {
    const { payload } = yield take(ChatActionType.WS_SEND_MESSAGE);
    const message = ["new message", payload];
    socket.send(`42${JSON.stringify(message)}`);
  }
}
