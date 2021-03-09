// Core
import { SagaIterator } from "@redux-saga/core";
import { cancel, fork, take } from "redux-saga/effects";
// Workers
import { digestChatWSWorker } from "./digestChatWSWorker";
// Types
import { ChatActionType } from "../../types";

export function* connectChatWSWorker(): SagaIterator {
  const socketTask = yield fork(digestChatWSWorker);

  // when DISCONNECT action is dispatched, we cancel the socket task
  yield take(ChatActionType.WS_DISCONNECTED);
  yield cancel(socketTask);
}
