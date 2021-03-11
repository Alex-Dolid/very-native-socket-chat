// Core
import { FC, lazy } from "react";

export type routeObjType = {
  id: string;
  path: string;
  title: string;
  pageComponent: FC;
};
export type routesType<T> = [T, ...T[]];

const routes: routesType<routeObjType> = [
  {
    id: "home",
    path: "/sign-in",
    title: "",
    pageComponent: lazy(() => import(/* webpackChunkName: "signIn.page" */ "pages/SignIn/SignIn")),
  },
  {
    id: "chat",
    path: "/",
    title: "Chat",
    pageComponent: lazy(() => import(/* webpackChunkName: "chat.page" */ "pages/Chat/Chat")),
  },
];

export default routes;
