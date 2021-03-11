// Core
import { useCallback, useLayoutEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Routing
import { useHistory } from "react-router";
// Types
import { AppState } from "init/rootReducer";
import { ChatState } from "../reducer";
// Actions
import { setUsername } from "../actions";

type UseAuthType = {
  auth: (msg: string) => void
}

export const useAuth = (): UseAuthType => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { username } = useSelector<AppState, ChatState>(
    (state) => state.chat,
  );

  // callbacks
  const auth = useCallback((msg) => {
    dispatch(setUsername(msg));
    history.push("/");
  }, [dispatch, history]);

  // effects
  useLayoutEffect(() => {
    if (username) {
      history.push("/");
    }
  }, [username, history]);

  return { auth };
};
