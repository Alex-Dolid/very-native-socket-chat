// Types
import { WSEventDataType } from "bus/chat/types";

export const socketPayloadHandler = (payload: WSEventDataType): WSEventDataType => {
  const newPayload = { ...payload };
  if (typeof newPayload.username !== "string") {
    newPayload.username = JSON.stringify(newPayload.username);
  }
  return newPayload;
};
