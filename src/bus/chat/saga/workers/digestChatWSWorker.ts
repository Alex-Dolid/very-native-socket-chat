// Core
import { SagaIterator } from "@redux-saga/core";
import { call, take, put, cancelled, fork } from "redux-saga/effects";
// API
import { createWebSocketConnection, createSocketChannel } from "../../api";
// Workers
import { addUserWorker } from "./addUserWorker";
import { sendMessageWorker } from "./sendMessageWorker";
import { sendTypingWorker } from "./sendTypingWorker";
import { sendStopTypingWorker } from "./sendStopTypingWorker";
import { disconnectChatWSWorker } from "./disconnectChatWSWorker";

export function* digestChatWSWorker(): SagaIterator {
  let socket;
  let socketChannel;

  try {
    socket = yield call(createWebSocketConnection);
    socketChannel = yield call(createSocketChannel, socket);

    yield fork(addUserWorker, socket);
    yield fork(sendMessageWorker, socket);
    yield fork(sendTypingWorker, socket);
    yield fork(sendStopTypingWorker, socket);
    yield fork(disconnectChatWSWorker, socket);

    while (true) {
      const action = yield take(socketChannel);
      yield put(action);
    }
  } catch (error) {
    console.error("Error while connecting to the WebSocket");
  } finally {
    if (yield cancelled()) {
      socketChannel.close();

      // close the WebSocket connection
      socket.close();
    } else {
      console.error("WebSocket disconnected");
    }
  }
}
