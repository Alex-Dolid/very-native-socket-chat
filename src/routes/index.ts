// Core
import { FC } from "react";
// PagesComponents
import { SignIn, Chat } from "pages";

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
    pageComponent: SignIn,
  },
  {
    id: "chat",
    path: "/chat",
    title: "Chat",
    pageComponent: Chat,
  },
];

export default routes;
