// Core
import { SagaIterator } from "@redux-saga/core";
import { all, call, takeEvery } from "redux-saga/effects";
// Types
import { ChatActionType } from "../types";
// Workers
import { connectChatWSWorker } from "./workers";

function* chatWSWatcher(): SagaIterator {
  yield takeEvery(ChatActionType.WS_CONNECT, connectChatWSWorker);
}

export function* watchChat(): SagaIterator {
  yield all([call(chatWSWatcher)]);
}
