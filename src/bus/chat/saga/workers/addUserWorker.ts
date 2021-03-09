// Core
import { SagaIterator } from "@redux-saga/core";
import { take } from "redux-saga/effects";
// Types
import { ChatActionType } from "../../types";

export function* addUserWorker(socket: WebSocket): SagaIterator {
  const { payload } = yield take(ChatActionType.WS_ADD_USER);
  const message = ["add user", payload];
  socket.send(`42${JSON.stringify(message)}`);
}
